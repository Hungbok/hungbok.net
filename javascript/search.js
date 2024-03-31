// 여러 JSON 파일 경로
const dataUrls = [
    '//data.hungbok.net/data/search/data.json',
    '//data.hungbok.net/data/search/gamesData.json',
    '//data.hungbok.net/data/search/animeData.json',
    '//data.hungbok.net/data/search/movieData.json',
    '//data.hungbok.net/data/search/televisionData.json',
    '//data.hungbok.net/data/search/booksData.json',
    '//data.hungbok.net/data/langData.json'
];
const resultsPerPage = 5; // 페이지당 결과 수

// URL에서 페이지와 검색어를 읽어옵니다.
let currentPage = parseInt(new URLSearchParams(window.location.search).get('page')) || 1;
let searchQuery = new URLSearchParams(window.location.search).get('q') || '';

let allData = []; // 모든 데이터를 저장하는 배열
let filteredData = []; // 검색된 데이터를 저장하는 배열

async function loadData() {
    try {
        let allDataLoaded = [];
        for (let dataUrl of dataUrls) {
            const response = await fetch(dataUrl);
            const data = await response.json();
            allDataLoaded = allDataLoaded.concat(data); // 데이터를 합칩니다.
        }
        return allDataLoaded;
    } catch (error) {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
    }
}

function searchByQuery() {
    if (!searchQuery) {
        filteredData = [];
        currentPage = 1;
        paginateData(allData, currentPage);
        updatePaginationButtons(allData);
        return;
    }

    filteredData = allData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    currentPage = 1;
    paginateData(filteredData, currentPage);
    updatePaginationButtons(filteredData);
}

function updateURL() {
    let newURL = `?page=${currentPage}`;
    if (searchQuery) {
        newURL += `&q=${encodeURIComponent(searchQuery)}`;
    }
    history.pushState(null, '', newURL);
}

async function paginateData(data, page) {
    const startIndex = (page - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const dataToDisplay = data.slice(startIndex, endIndex);

    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (dataToDisplay.length === 0) {
        // 데이터가 비어 있을 경우 사용자에게 알림
        searchResults.innerHTML = `<div class="no-date">검색 결과가 없습니다.</div>`;
    } else {
        dataToDisplay.forEach(item => {
            let title = Object.values(item.title).find(title => title.toLowerCase().includes(searchValue));
            if (!title) {
                title = (item.title[languageCode]) ? item.title[languageCode] : item.title['en'];
            }
            let type = item.type && langData[languageCode][item.type] ? langData[languageCode][item.type] : "";
            searchResults.innerHTML += `
            <a href="${item.link}">
                <img class="search-results-image" src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                ${type ? `<p class="search-results-type">${type}</p>` : ""}<p class="search-results-title" title="${title}">${title}</p>
            </a>
            `;
        });
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
    updateURL();
}

function searchInstantly() {
    const inputText = document.getElementById('searchInput').value;
    const textToSearch = inputText.trim().toLowerCase();

    if (!textToSearch) {
        filteredData = [];
        currentPage = 1;
        paginateData(allData, currentPage);
        updatePaginationButtons(allData);
        return;
    }

    filteredData = allData.filter(item =>
        item.title.toLowerCase().includes(textToSearch)
    );

    currentPage = 1;
    paginateData(filteredData, currentPage);
    updatePaginationButtons(filteredData);
}

document.getElementById('searchInput').value = searchQuery; // URL에서 읽은 검색어를 입력 필드에 설정합니다.

document.getElementById('searchInput').addEventListener('change', function () {
    searchQuery = this.value.trim();
    searchByQuery();
    updateURL();
});

loadData().then(data => {
    allData = data;
    if (searchQuery) {
        searchByQuery();
    } else {
        paginateData(allData, currentPage);
        updatePaginationButtons(allData);
    }
});

function searchOnEnter(event) {
    if (event.key === 'Enter') {
        searchInstantly();
    }
}