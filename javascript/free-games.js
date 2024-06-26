let data = [];
let filteredData = [];
let start = 0;
let limit = 16;
let platform = 'all';
let type = 'games';
let isLoading = false; // 데이터 로딩 상태를 추적하는 변수를 추가합니다.
let hasMoreData = true; // 더 로드할 데이터가 있는지 여부를 추적하는 변수를 추가합니다.

let upcomingData = [];
let filteredUpcomingData = [];
let upcomingStart = 0;
let upcomingLimit = 6;

Promise.all([
    fetch('//data.hungbok.net/data/free-games.json').then(response => response.json()),
    fetch('//data.hungbok.net/data/free-games/games.json').then(response => response.json()),
    fetch('//data.hungbok.net/data/free-games/bundle.json').then(response => response.json()),
    fetch('//data.hungbok.net/data/free-games/subscription.json').then(response => response.json()),
    fetch('//data.hungbok.net/data/free-games/trials.json').then(response => response.json())
]).then(results => {
    data = results.flat();
    filteredData = [...data];
    loadMoreData();
    filterData(type); 
});

// 데이터를 가져오는 부분은 변경하지 않았습니다.
Promise.all([
    fetch('//data.hungbok.net/data/games/sales.json').then(response => response.json())
]).then(results => {
    upcomingData = results.flat();
    // 필터링 로직을 추가하여 조건에 맞는 데이터만 남깁니다.
    filteredUpcomingData = upcomingData.filter(item => {
        let now = new Date();
        let startParts = item.start.split('-');
        let itemStart = new Date(startParts[0], startParts[1] - 1, startParts[2], startParts[3], startParts[4], startParts[5]);
        let endParts = item.end.split('-');
        let itemEnd = new Date(endParts[0], endParts[1] - 1, endParts[2], endParts[3], endParts[4], endParts[5]);
        return now > itemStart && now < itemEnd;
    });
    loadMoreUpcomingData();
});

// 필터링 기능
function filterData(typeValue) {
    start = 0;
    type = typeValue;
    
    // URL에서 category 매개변수 값 추출
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category'); // 'category' 매개변수 값 추출
    
    // category 값이 있고, 해당 값과 일치하는 필터 버튼이 있다면, type을 해당 값으로 설정
    if (category) {
        const filterButton = document.querySelector(`.filterDataBtn[data-type="${category}"]`);
        if (filterButton) {
            type = category;
            // URL에서 category 매개변수 제거
            urlParams.delete('category');
            // 변경된 URL 상태를 history에 반영하여 URL을 업데이트하지만 페이지는 새로고침하지 않음
            history.pushState(null, '', '?' + urlParams.toString() + window.location.hash);
        }
    }

    if (type === 'all' && platform === 'all') {
        filteredData = [...data];
    } else if (type === 'all') {
        filteredData = data.filter(item => item.from === platform);
    } else if (platform === 'all') {
        filteredData = data.filter(item => item.type === type);
    } else {
        filteredData = data.filter(item => item.type === type && item.from === platform);
    }
    console.log(`현재 필터링된 카테고리: ${type}`); // 필터링된 카테고리 출력
    updateActiveClass();
    document.getElementById('filter-platform').classList = [`filter-content ${type}`];
    document.getElementById('dataContainer').innerHTML = ''; // 필터링 결과를 담는 컨테이너 초기화
    isLoading = false;
    hasMoreData = true;
    filterPlatform('all'); 
    loadMoreData();
}

// 2차 필터링 기능
function filterPlatform(platformType) {
    start = 0;
    platform = platformType;
    if (type === 'all' && platform === 'all') {
        filteredData = [...data];
    } else if (type === 'all') {
        filteredData = data.filter(item => item.from === platform);
    } else if (platform === 'all') {
        filteredData = data.filter(item => item.type === type);
    } else {
        filteredData = data.filter(item => item.type === type && item.from === platform);
    }
    console.log(`현재 필터링된 플랫폼: ${platform}`); // 필터링된 플랫폼 출력
    updateActiveClass();
    document.getElementById('dataContainer').innerHTML = ''; // 필터링 결과를 담는 컨테이너 초기화
    isLoading = false;
    hasMoreData = true;
    loadMoreData();
}

// active class 업데이트
function updateActiveClass() {
    ['filterDataBtn', 'filterPlatformBtn'].forEach(className => {
        document.querySelectorAll(`.${className}`).forEach(btn => {
            btn.classList.remove('active'); // 모든 필터링 버튼에서 'active' 클래스를 제거
        });
    });
    let typeBtn = document.querySelector(`.filterDataBtn[data-type="${type}"]`);
    let platformBtn = document.querySelector(`.filterPlatformBtn[data-platform="${platform}"]`);

    // 해당 요소가 있을 때만 'active' 클래스를 추가
    if (typeBtn) typeBtn.classList.add('active');
    if (platformBtn) platformBtn.classList.add('active');
}

// 필터 버튼에 클릭 이벤트 핸들러를 추가합니다.
document.getElementById('dateFilterBtn').addEventListener('click', function() {
    let dataContainer = document.getElementById('dataContainer');
    this.classList.toggle('active'); // 'active' 클래스를 토글합니다.
    dataContainer.classList.toggle('hide-expired'); // 'hide-expired' 클래스를 토글합니다.
});

// 아이템을 생성하고 추가하는 함수
function createAndAppendItem(item) {
    let now = new Date();

    // 'yyyy-mm-dd-hh-mm-ss' 형식의 문자열을 Date 객체로 변환
    let parts = item.end.split('-');
    let itemEnd = new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);

    let isExpired = now > itemEnd; // 만료 여부 판단
    let expiredClass = isExpired ? 'expired' : ''; // 만료되었다면 'expired' 클래스를, 아니라면 빈 문자열을 할당

    let div = document.createElement('div');
    div.className = `item ${item.type} ${item.content} from-${item.from} esd-${item.esd} ${expiredClass}`;
    div.innerHTML = `
        <a class="item-image" href="${item.link}">
            <img src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
            <img src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
        </a>
        <div class="info">
            <h1>${item.title}</h1>
            <div class="timer-container start" settime="${item.start}"></div>
            <div class="timer-container end" settime="${item.end}"></div>
            <a class="item-link" href="${item.link}" target="_blank"></a>
        </div>
        <img class="item-background" src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
    `;
    document.getElementById('dataContainer').appendChild(div);

    // 아이템을 추가한 후에 타이머를 시작합니다.
    startTimer();
}

// 아이템을 생성하고 추가하는 함수
function createAndAppendUpcomingItem(item) {
    let now = new Date();

    // 시작 시간 파싱
    let startParts = item.start.split('-');
    let itemStart = new Date(startParts[0], startParts[1] - 1, startParts[2], startParts[3], startParts[4], startParts[5]);

    // 종료 시간 파싱
    let endParts = item.end.split('-');
    let itemEnd = new Date(endParts[0], endParts[1] - 1, endParts[2], endParts[3], endParts[4], endParts[5]);

    // 현재 시간이 시작 시간 이후이고 종료 시간 이전인지 확인
    if (now > itemStart && now < itemEnd) {
        let div = document.createElement('div');
        div.className = `item ${item.type} ${item.content} from-${item.from} esd-${item.esd}`;
        div.innerHTML = `
            <a class="item-link" href="${item.link}" target="_blank">
                <div class="item-image">
                    <img src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                </div>
                <h1 class="from-${item.from}">${item.title}</h1>
                <div class="sale-info">
                    <div class="sale-timer-container">
                        <div class="sale-timer timer-container start" settime="${item.start}"></div>
                        <div class="sale-timer timer-container end" settime="${item.end}"></div>
                    </div>
                </div>
                <img class="item-background" src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
            </a>
        `;

        document.getElementById('upcomingContainer').appendChild(div);

        startTimer();
    }
}

let isWaiting = false; // 데이터 로딩 대기 상태를 관리하는 변수입니다.

window.onscroll = function() {
    if (!hasMoreData || isLoading || isWaiting) return; // 더 이상 로드할 데이터가 없거나, 이미 로딩 중이거나, 대기 중이라면 함수를 종료합니다.

    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const totalPageHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (scrollPosition + windowHeight >= totalPageHeight - 500) {
        isWaiting = true; // 데이터 로딩 대기 상태를 시작합니다.
        const loadingElement = document.getElementById('loading');
        loadingElement.style.display = 'block';
        setTimeout(() => {
            loadMoreData();
            loadingElement.style.display = 'none';
            isWaiting = false; // 데이터 로딩 대기 상태를 종료합니다.
        }, 1000); // 1초 후에 데이터 로딩을 시작합니다.
    }
};

function loadMoreData() {
    if (!hasMoreData || isLoading) return; // 더 이상 데이터가 없거나, 이미 로딩 중이라면 함수를 종료합니다.

    isLoading = true; // 데이터 로딩 시작을 표시합니다.
    let slicedData = filteredData.slice(start, start + limit);

    if (slicedData.length === 0) {
        console.log('더 이상 로드할 데이터가 없습니다.');
        hasMoreData = false; // 더 이상 로드할 데이터가 없음을 표시합니다.
        isLoading = false; // 로딩 상태를 종료합니다.
        return;
    }

    slicedData.forEach(item => {
        createAndAppendItem(item);
    });

    start += slicedData.length;
    isLoading = false; // 로딩 상태를 종료합니다.
}

// 'loadMoreUpcomingData' 함수 수정
function loadMoreUpcomingData() {
    let loadedItems = 0;
    while (loadedItems < upcomingLimit && upcomingStart < filteredUpcomingData.length) {
        let item = filteredUpcomingData[upcomingStart];
        createAndAppendUpcomingItem(item);
        upcomingStart++;
        loadedItems++;
    }
}

// 서버 시간과 로컬 시간 표시 함수
function displayTime() {
    let now = new Date(); // 현재 시간을 받아옵니다.

    // 컴퓨터의 로컬 시간을 UTC 형식으로 변환합니다.
    let localTime = now.toISOString().slice(0,19).replace('T', ' ');

    // 사용자의 시간대를 얻습니다.
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // UTC+09:00 기준의 서버 시간을 계산하고 UTC 형식으로 변환합니다.
    let serverTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60 * 1000) + (9 * 60 * 60 * 1000));
    serverTime = serverTime.toISOString().slice(0,19).replace('T', ' ');

    // HTML 요소에 시간을 표시합니다.
    document.getElementById('serverTime').textContent = serverTime + ' UTC+09:00'; // 서버 시간을 표시합니다.
    document.getElementById('localTime').textContent = localTime + ' ' + timeZone; // 로컬 시간을 표시합니다.
}

setInterval(displayTime, 1000); // 1초마다 함수를 반복 실행하여 시간을 업데이트합니다.

// 타이머 기능
function startTimer() {
    let timerElements = document.querySelectorAll('.timer-container'); // 타이머를 적용할 요소를 선택합니다.

    timerElements.forEach(element => { // 각 요소에 대해 반복합니다.
        let setTime = element.getAttribute('settime'); // settime 속성 값을 가져옵니다.
        let setTimeArray = setTime.split('-'); // '-'로 구분된 setTime 값을 배열로 변환합니다.

        // setTime 값이 yyyy-mm-dd-hh-mm-ss 형식이므로, Date 객체를 이 형식에 맞게 생성합니다.
        let endDate = new Date(setTimeArray[0], setTimeArray[1] - 1, setTimeArray[2], setTimeArray[3], setTimeArray[4], setTimeArray[5]);

        let interval = setInterval(function() { // setInterval 함수로 1초마다 반복합니다.
            let now = new Date(); // 현재 시간을 가져옵니다.
            let distance = endDate - now; // 남은 시간을 계산합니다.

            // 시간, 분, 초를 계산합니다.
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // 시간, 분, 초를 항상 두 자리 숫자로 표시합니다.
            hours = hours.toString().padStart(2, '0');
            minutes = minutes.toString().padStart(2, '0');
            seconds = seconds.toString().padStart(2, '0');

            // 남은 시간에 따른 클래스를 추가합니다.
            if (distance <= 0) {
                element.classList.add('expired');
            } else if (distance <= 60000 && !element.classList.contains('one-minute-left')) {
                element.classList.add('one-minute-left');
            } else if (distance <= 3600000 && !element.classList.contains('one-hour-left')) {
                element.classList.add('one-hour-left');
            } else if (distance <= 10800000 && !element.classList.contains('three-hours-left')) {
                element.classList.add('three-hours-left');
            } else if (distance <= 21600000 && !element.classList.contains('six-hours-left')) {
                element.classList.add('six-hours-left');
            } else if (distance <= 43200000 && !element.classList.contains('twelve-hours-left')) {
                element.classList.add('twelve-hours-left');
            } else if (distance <= 86400000 && !element.classList.contains('one-day-left')) {
                element.classList.add('one-day-left');
            }

            // 남은 시간이 24시간 미만인 경우에는 'hh:mm:ss' 형식으로, 그 이상인 경우에는 'dd:hh:mm:ss' 형식으로 표시합니다.
            if (days > 0) {
                days = days.toString().padStart(2, '0');
                element.textContent = `${days}:${hours}:${minutes}:${seconds}`;
            } else {
                element.textContent = `${hours}:${minutes}:${seconds}`;
            }

            // 남은 시간이 없으면 타이머를 멈춥니다.
            if (distance < 0) {
                clearInterval(interval);
                element.textContent = "00:00:00";
            }
        }, 100);
    });
}