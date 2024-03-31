// JSON 파일 경로
const dataUrl = '//data.hungbok.net/data/news.json';
const resultsPerPage = 20; // 페이지당 결과 수

let currentPage = parseInt(new URLSearchParams(window.location.search).get('page')) || 1;
let allData = []; // 모든 데이터를 저장하는 배열
let filteredData = []; // 검색된 데이터를 저장하는 배열

async function loadData() {
    try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
    }
}

async function paginateData(data, page) {
    const startIndex = (page - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const dataToDisplay = data.slice(startIndex, endIndex);

    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    // 현재 문서의 언어 설정 확인
    const currentLang = document.documentElement.lang || 'en';

    if (dataToDisplay.length === 0) {
        searchResults.innerHTML = `<div class="no-data">검색 결과가 없습니다.</div>`;
    } else {
        for (const item of dataToDisplay) {
            // 언어에 맞는 제목을 불러오기 위한 URL 구성
            const url = `//data.hungbok.net/data/news/${item.url}.json`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                // 현재 언어로 된 제목이 있으면 사용, 없으면 기본 언어(en)로 대체
                const title = data[currentLang]?.title || data.en.title;

                searchResults.innerHTML += `
                <a class="item" href="${item.link}">
                    <div class="image">
                        <img src="${item.image}">
                    </div>
                    <div class="info">
                        <div class="type ${item.type}"></div>
                        <div class="title" title="${title}">${title}</div>
                        <div class="date" settime="${item.published}"></div>
                    </div>
                </a>
                `;
            } catch (error) {
                console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
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
    paginateData(filteredData.length > 0 ? filteredData : allData, currentPage);
    updatePaginationButtons(filteredData.length > 0 ? filteredData : allData);
    history.pushState(null, '', `?page=${currentPage}`);
}

loadData().then(data => {
    allData = data;
    paginateData(allData, currentPage);
    updatePaginationButtons(allData);
});