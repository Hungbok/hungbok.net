let data = [];
let filteredData = [];
let start = 0;
let limit = 24;
let platform = 'all';
let type = 'pc';

let upcomingData = [];
let filteredUpcomingData = [];
let upcomingStart = 0;
let upcomingLimit = 8;

let hasMoreData = true;
let isLoading = false;
let hasMoreUpcomingData = true;
let isLoadingUpcoming = false;

Promise.all([
    fetch('//data.hungbok.net/data/games/sales.json').then(response => response.json())
]).then(results => {
    data = results.flat();
    filteredData = [...data];
    loadMoreData();
    filterData(type); 
});

Promise.all([
    fetch('//data.hungbok.net/data/games/sales-upcoming.json').then(response => response.json())
]).then(results => {
    upcomingData = results.flat();
    filteredUpcomingData = [...upcomingData];
    loadMoreUpcomingData();
    filterData(type); 
});

// 필터링 기능
function filterData(typeValue) {
    start = 0;
    upcomingStart = 0;
    type = typeValue;
    if (type === 'all' && platform === 'all') {
        filteredData = [...data];
        filteredUpcomingData = [...upcomingData];
    } else if (type === 'all') {
        filteredData = data.filter(item => item.from === platform);
        filteredUpcomingData = upcomingData.filter(item => item.from === platform);
    } else if (platform === 'all') {
        filteredData = data.filter(item => item.type === type);
        filteredUpcomingData = upcomingData.filter(item => item.type === type);
    } else {
        filteredData = data.filter(item => item.type === type && item.from === platform);
        filteredUpcomingData = upcomingData.filter(item => item.type === type && item.from === platform);
    }
    console.log(`현재 필터링된 카테고리: ${type}`);
    updateActiveClass();
    document.getElementById('filter-platform').classList = [`filter-content ${type}`];
    document.getElementById('overDataContainer').innerHTML = '';
    document.getElementById('outnowDataContainer').innerHTML = '';
    document.getElementById('upcomingDataContainer').innerHTML = '';
    document.getElementById('upcomingContainer').innerHTML = '';
    isLoading = false;
    hasMoreData = true;
    isLoadingUpcoming = false;
    hasMoreUpcomingData = true;
    filterPlatform('all'); 
    loadMoreData();
    loadMoreUpcomingData();
}

// 2차 필터링 기능
function filterPlatform(platformType) {
    start = 0;
    upcomingStart = 0;
    platform = platformType;
    if (type === 'all' && platform === 'all') {
        filteredData = [...data];
        filteredUpcomingData = [...upcomingData];
    } else if (type === 'all') {
        filteredData = data.filter(item => item.from === platform);
        filteredUpcomingData = upcomingData.filter(item => item.from === platform);
    } else if (platform === 'all') {
        filteredData = data.filter(item => item.type === type);
        filteredUpcomingData = upcomingData.filter(item => item.type === type);
    } else {
        filteredData = data.filter(item => item.type === type && item.from === platform);
        filteredUpcomingData = upcomingData.filter(item => item.type === type && item.from === platform);
    }
    console.log(`현재 필터링된 플랫폼: ${platform}`); // 필터링된 플랫폼 출력
    updateActiveClass();
    document.getElementById('overDataContainer').innerHTML = '';
    document.getElementById('outnowDataContainer').innerHTML = '';
    document.getElementById('upcomingDataContainer').innerHTML = '';
    document.getElementById('upcomingContainer').innerHTML = '';
    isLoading = false;
    hasMoreData = true;
    isLoadingUpcoming = false;
    hasMoreUpcomingData = true;
    loadMoreData();
    loadMoreUpcomingData();
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

// 아이템을 생성하고 추가하는 함수
function createAndAppendItem(item) {
    let now = new Date();

    // 'yyyy-mm-dd-hh-mm-ss' 형식의 문자열을 Date 객체로 변환
    let startParts = item.start.split('-');
    let endParts = item.end.split('-');
    let itemStart = new Date(startParts[0], startParts[1] - 1, startParts[2], startParts[3], startParts[4], startParts[5]);
    let itemEnd = new Date(endParts[0], endParts[1] - 1, endParts[2], endParts[3], endParts[4], endParts[5]);

    // 아이템의 시작 및 종료 시간과 현재 시간을 비교하여 분류합니다.
    let containerId;
    if (now < itemStart) {
        // 현재 시간이 아이템 시작 시간보다 이전인 경우
        containerId = 'upcomingDataContainer';
    } else if (now >= itemStart && now <= itemEnd) {
        // 현재 시간이 아이템 시작 시간 이후이고 종료 시간 이전 또는 같은 경우
        containerId = 'outnowDataContainer';
    } else if (now > itemEnd) {
        // 현재 시간이 아이템 종료 시간보다 이후인 경우
        containerId = 'overDataContainer';
    }

    let div = document.createElement('div');
    div.className = `item ${item.type} ${item.content}`;
    if (containerId === 'overDataContainer') {
        div.className += ' expired'; // 만료된 항목에 대해 'expired' 클래스 추가
    }
    div.innerHTML = `
        <a class="item-link" href="${item.link}" target="_blank">
            <div class="item-image">
                <img src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                <img src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
            </div>
            <h1 class="from-${item.from}">${item.title}</h1>
            <div class="sale-info">
                <h2>
                    <div class="sale-name title-${item.from}"> ${item.title}</div>
                    <div class="sale-date">
                        <div class="date-container" datehas="${item.start}"></div>
                        <p>-</p>
                        <div class="date-container" datehas="${item.end}"></div>
                    </div>
                </h2>
                <div class="sale-timer-container">
                    <div class="sale-timer timer-container start" settime="${item.start}"></div>
                    <div class="sale-timer timer-container end" settime="${item.end}"></div>
                </div>
            </div>
            <img class="item-background" src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
        </a>
    `;

    document.getElementById(containerId).appendChild(div);

    // 아이템을 추가한 후에 타이머를 시작합니다.
    startTimer();
    displayFormattedDate();
}

// 아이템을 생성하고 추가하는 함수
function createAndAppendUpcomingItem(item) {
    let now = new Date();

    // 아이템의 시작 및 종료 시간을 Date 객체로 변환
    let startParts = item.start.split('-');
    let endParts = item.end.split('-');
    let itemStart = new Date(startParts[0], startParts[1] - 1, startParts[2], startParts[3], startParts[4], startParts[5]);
    let itemEnd = new Date(endParts[0], endParts[1] - 1, endParts[2], endParts[3], endParts[4], endParts[5]);

    // 현재 시간이 아이템 시작 시간 이후이고 종료 시간 이전 또는 같은 경우
    // 혹은 현재 시간이 아이템 종료 시간보다 이후인 경우 건너뛰기
    if (now >= itemStart || now > itemEnd) {
        return; // 해당 조건에 부합하는 경우 함수 실행 중단
    }

    let div = document.createElement('div');
    div.className = `item ${item.type} ${item.content} from-${item.from} esd-${item.esd}`;
    div.innerHTML = `
        <a class="item-link" href="${item.link}" target="_blank">
            <div class="item-image">
                <img src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                <img src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
            </div>
            <h1 class="from-${item.from}">${item.title}</h1>
            <div class="sale-info">
                <h2>
                    <div class="sale-name title-${item.from}"> ${item.title}</div>
                    <div class="sale-date">
                        <div class="date-container" datehas="${item.start}"></div>
                        <p>-</p>
                        <div class="date-container" datehas="${item.end}"></div>
                    </div>
                </h2>
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
    displayFormattedDate();
}

window.onscroll = function() {
    if ((hasMoreData && !isLoading) || (hasMoreUpcomingData && !isLoadingUpcoming)) {
        const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        const totalPageHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        if (scrollPosition + windowHeight >= totalPageHeight - 500) {
            if (hasMoreData && !isLoading) {
                const loadingElement = document.getElementById('loading');
                loadingElement.style.display = 'block';
                setTimeout(() => {
                    loadMoreData();
                    loadingElement.style.display = 'none';
                }, 1000);
            }
            if (hasMoreUpcomingData && !isLoadingUpcoming) {
                const loadingElement = document.getElementById('loading-upcoming');
                loadingElement.style.display = 'block';
                setTimeout(() => {
                    loadMoreUpcomingData();
                    loadingElement.style.display = 'none';
                }, 1000);
            }
        }
    }
};

function loadMoreData() {
    if (!hasMoreData || isLoading) return;

    isLoading = true; // 데이터 로딩 시작을 표시
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block';

    // 데이터 로딩 로직...
    let slicedData = filteredData.slice(start, start + limit);
    if (slicedData.length === 0) {
        hasMoreData = false;
        isLoading = false;
        loadingElement.style.display = 'none';
        console.log('더 이상 로드할 데이터가 없습니다.');
        return;
    }

    slicedData.forEach(item => {
        createAndAppendItem(item);
    });

    start += slicedData.length;
    isLoading = false; // 로딩 상태 종료
    loadingElement.style.display = 'none';
}

function loadMoreUpcomingData() {
    if (!hasMoreUpcomingData || isLoadingUpcoming) return;

    isLoadingUpcoming = true; // 추가 데이터 로딩 시작을 표시
    const loadingElementUpcoming = document.getElementById('loading-upcoming'); // 'loading-upcoming'에 해당하는 요소가 있어야 함
    loadingElementUpcoming.style.display = 'block';

    // 데이터 로딩 로직...
    let slicedUpcomingData = filteredUpcomingData.slice(upcomingStart, upcomingStart + upcomingLimit);
    if (slicedUpcomingData.length === 0) {
        hasMoreUpcomingData = false;
        isLoadingUpcoming = false;
        loadingElementUpcoming.style.display = 'none';
        console.log('더 이상 로드할 추가 데이터가 없습니다.');
        return;
    }

    slicedUpcomingData.forEach(item => {
        createAndAppendUpcomingItem(item);
    });

    upcomingStart += slicedUpcomingData.length;
    isLoadingUpcoming = false; // 로딩 상태 종료
    loadingElementUpcoming.style.display = 'none';
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

function displayFormattedDate() {
    let dateElements = document.querySelectorAll('.date-container'); // 날짜를 출력할 요소를 선택합니다.

    dateElements.forEach(element => { // 각 요소에 대해 반복합니다.
        let dateHas = element.getAttribute('datehas'); // datehas 속성 값을 가져옵니다.
        let dateHasArray = dateHas.split('-'); // '-'로 구분된 dateHas 값을 배열로 변환합니다.

        // dateHas 값이 yyyy-mm-dd-hh-mm-ss 형식이므로, 필요한 연, 월, 일 정보만 추출합니다.
        let year = dateHasArray[0];
        let month = dateHasArray[1];
        let day = dateHasArray[2];

        // 월을 숫자에서 영어로 변환합니다.
        let monthInEnglish = convertMonthToEnglish(month);

        // yyyy년 mm월 dd일 형식에서 yyyy년 Month dd일 형식으로 변환하여 요소의 텍스트로 설정합니다.
        element.textContent = `<p>${monthInEnglish}</p><p>${day}</p><p>${year}</p>`;
    });
}

// 월을 숫자에서 영어로 변환하는 함수
function convertMonthToEnglish(month) {
    const months = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    };

    // 월 값이 13 이상이면 숫자로 그대로 반환합니다.
    if (parseInt(month) > 12) {
        return month;
    }

    // 월 값을 영어로 변환하여 반환합니다.
    return months[month];
}