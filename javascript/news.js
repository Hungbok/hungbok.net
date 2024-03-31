// JSON 파일 경로
const dataUrl = '//data.hungbok.net/data/news.json';
const resultsPerPage = 20; // 페이지당 결과 수

let currentPage = parseInt(new URLSearchParams(window.location.search).get('page')) || 1;
let allData = []; // 모든 데이터를 저장하는 배열

async function loadData() {
    try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
    }
}

function getTimeDifference(publishedTime) {
    // 'yyyy-mm-dd-hh-mm-ss' 형식의 문자열을 년, 월, 일, 시, 분, 초로 분해
    const parts = publishedTime.split('-');
    if (parts.length !== 6) {
        return "알 수 없음"; // 형식이 잘못된 경우
    }

    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // JavaScript의 월은 0부터 시작
    const day = parseInt(parts[2], 10);
    const hour = parseInt(parts[3], 10);
    const minute = parseInt(parts[4], 10);
    const second = parseInt(parts[5], 10);

    // Date 객체 생성
    const publishedDate = new Date(year, month, day, hour, minute, second);
    const currentDate = new Date();

    // 현재 시간과 게시 시간의 차이 계산 (초 단위)
    const diffInSeconds = Math.floor((currentDate.getTime() - publishedDate.getTime()) / 1000);
    
    // diffInSeconds가 NaN이거나 음수인 경우 "알 수 없음"을 반환
    if (isNaN(diffInSeconds) || diffInSeconds < 0) {
        return "알 수 없음";
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInSeconds < 60) {
        return "방금 전";
    } else if (diffInMinutes < 60) {
        return `${diffInMinutes}분 전`;
    } else if (diffInHours < 24) {
        return `${diffInHours}시간 전`;
    } else if (diffInDays < 30) {
        return `${diffInDays}일 전`;
    } else if (diffInMonths < 12) {
        return `${diffInMonths}개월 전`;
    } else {
        return `${diffInYears}년 전`;
    }
}

async function paginateData(data, page) {
    const startIndex = (page - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const dataToDisplay = data.slice(startIndex, endIndex);

    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (dataToDisplay.length === 0) {
        searchResults.innerHTML = `<div class="no-data">검색 결과가 없습니다.</div>`;
    } else {
        // 현재 페이지의 언어 코드를 가져옵니다.
        const lang = document.documentElement.lang || "en";

        for (const item of dataToDisplay) {
            const detailDataUrl = `//data.hungbok.net/data/news/${item.url}.json`;
            try {
                const response = await fetch(detailDataUrl);
                const detailData = await response.json();
                const itemLangData = detailData.find(d => d.hasOwnProperty(lang)) || detailData.find(d => d.hasOwnProperty("en"));
                const title = itemLangData[lang] ? itemLangData[lang].title : itemLangData["en"].title;
                const summary = itemLangData[lang] ? itemLangData[lang].summary : itemLangData["en"].summary;
                const timeDifference = getTimeDifference(item.published);

                searchResults.innerHTML += `
                <a class="item" href="${item.link}" title="${title}">
                    <div class="image">
                        <img src="${item.image}">
                    </div>
                    <div class="info">
                        <div class="type ${item.type}">${item.type}</div>
                        <div class="title">${title}</div>
                        <div class="subtitle">${summary}</div>
                        <div class="date" settime="${item.published}">${timeDifference}</div>
                    </div>
                </a>
                `;
            } catch (error) {
                console.error('상세 데이터를 불러오는 중 오류가 발생했습니다:', error);
            }
        }
    }
}

function updatePaginationButtons(data) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    
    const totalPages = Math.ceil(data.length / resultsPerPage);
    const maxLeft = (currentPage - 2) > 0 ? (currentPage - 2) : 1;
    const maxRight = (currentPage + 2) < totalPages ? (currentPage + 2) : totalPages;

    if (currentPage > 1) {
        pagination.innerHTML += `<button onclick="changePage(${currentPage - 1})"><img src="//media.hungbok.net/image/icon/prev.svg"></button>`;
    } else {
        pagination.innerHTML += `<button disabled><img src="//media.hungbok.net/image/icon/prev.svg"></button>`;
    }

    if (maxLeft > 1) {
        pagination.innerHTML += `<button onclick="changePage(1)">1</button>`;
        pagination.innerHTML += `<span>...</span>`;
    }

    for (let i = maxLeft; i <= maxRight; i++) {
        pagination.innerHTML += `<button onclick="changePage(${i})" ${i === currentPage ? 'class="active"' : ''}>${i}</button>`;
    }

    if (maxRight < totalPages) {
        pagination.innerHTML += `<span>...</span>`;
        pagination.innerHTML += `<button onclick="changePage(${totalPages})">${totalPages}</button>`;
    }

    if (currentPage < totalPages) {
        pagination.innerHTML += `<button onclick="changePage(${currentPage + 1})"><img src="//media.hungbok.net/image/icon/next.svg"></button>`;
    } else {
        pagination.innerHTML += `<button disabled><img src="//media.hungbok.net/image/icon/next.svg"></button>`;
    }
}

function changePage(page) {
    currentPage = page;
    paginateData(allData, currentPage);
    updatePaginationButtons(allData);
    history.pushState(null, '', `?page=${currentPage}`);
}

loadData().then(data => {
    allData = data;
    paginateData(allData, currentPage);
    updatePaginationButtons(allData);
});