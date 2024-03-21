let data = [];
let filteredData = [];
let start = 0;
let limit = 16;

// 여러 JSON 파일에서 데이터를 불러오고, 하나의 배열로 병합
Promise.all([
    fetch('//data.hungbok.net/data/games/sales.json').then(response => response.json())
]).then(results => {
    // 배열을 펼쳐 모든 항목을 하나의 배열로 병합
    data = results.flat();

    // 데이터를 시간순으로 정렬하는 함수 호출
    sortData();

    // 정렬된 데이터를 필터링된 데이터로 초기화
    filteredData = [...data];

    // 데이터를 로드
    loadMoreData();
});

let platform = 'all'; // 플랫폼을 저장하는 전역 변수를 추가합니다. 초기값은 'all'입니다.
let type = 'all'; // 타입을 저장하는 전역 변수를 추가합니다. 초기값은 'all'입니다.

// 데이터를 시간순으로 정렬하는 함수
function sortData() {
    const now = new Date();
    data.sort((a, b) => {
        let aStart = new Date(a.start);
        let aEnd = new Date(a.end);
        let bStart = new Date(b.start);
        let bEnd = new Date(b.end);

        // a와 b 모두 현재 시간보다 end가 미래인 경우
        if (aEnd > now && bEnd > now) {
            // start가 과거인지 확인하여 정렬
            if (aStart < now && bStart < now) {
                return aEnd - bEnd; // end가 더 근접한 순으로 정렬
            } else {
                // 현재 시간과의 거리에 따라 정렬
                let aDistance = Math.min(Math.abs(aStart - now), Math.abs(aEnd - now));
                let bDistance = Math.min(Math.abs(bStart - now), Math.abs(bEnd - now));
                return aDistance - bDistance;
            }
        } else {
            // 현재 시간과의 거리에 따라 정렬
            let aDistance = Math.min(Math.abs(aStart - now), Math.abs(aEnd - now));
            let bDistance = Math.min(Math.abs(bStart - now), Math.abs(bEnd - now));
            return aDistance - bDistance;
        }
    });
}

// 필터링 기능
function filterData(typeValue) {
    start = 0;
    type = typeValue;
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
    document.getElementById('overDataContainer').innerHTML = ''; // 필터링 결과를 담는 컨테이너 초기화
    document.getElementById('outnowDataContainer').innerHTML = ''; // 필터링 결과를 담는 컨테이너 초기화
    document.getElementById('upcomingDataContainer').innerHTML = ''; // 필터링 결과를 담는 컨테이너 초기화
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
    document.getElementById('overDataContainer').innerHTML = ''; // 필터링 결과를 담는 컨테이너 초기화
    document.getElementById('outnowDataContainer').innerHTML = ''; // 필터링 결과를 담는 컨테이너 초기화
    document.getElementById('upcomingDataContainer').innerHTML = ''; // 필터링 결과를 담는 컨테이너 초기화
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
            <h2>
                <div class="sale-name title-${item.from}"> ${item.title}</div>
                <div class="sale-date">
                    <div class="date-container" datehas="${item.start}"></div>
                    <p>-</p>
                    <div class="date-container" datehas="${item.end}"></div>
                </div>
            </h2>
            <h1 class="from-${item.from}">${item.title}</h1>
            <div class="sale-timer-container">
                <div class="sale-timer timer-container start" settime="${item.start}"></div>
                <div class="sale-timer timer-container end" settime="${item.end}"></div>
            </div>
            <img class="item-background" src="${item.image}">
        </a>
    `;

    document.getElementById(containerId).appendChild(div);

    // 아이템을 추가한 후에 타이머를 시작합니다.
    startTimer();
    displayFormattedDate();
}

// 스크롤이 화면 가장 아래에 닿았을 때 데이터를 추가로 생성하는 함수
window.onscroll = function() {
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const totalPageHeight = document.body.scrollHeight;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    if (scrollPosition + windowHeight >= totalPageHeight - 500) {
        // 여기에 데이터를 생성하는 코드를 추가합니다.
        const loadingElement = document.getElementById('loading');
        loadingElement.style.display = 'block';
        setTimeout(() => {
            loadMoreData();
            loadingElement.style.display = 'none';
        }, 1000);
    }
};

// 무한 스크롤 기능
function loadMoreData() {
    let end = start + limit;
    let slicedData = filteredData.slice(start, end);
    start += limit;

    slicedData.forEach(item => {
        createAndAppendItem(item);
    });
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

        // yyyy년 mm월 dd일 형식으로 변환하여 요소의 텍스트로 설정합니다.
        element.textContent = `${year}년 ${month}월 ${day}일`;
    });
}