// JSON 파일 경로
const dataUrl = '//data.hungbok.net/data/url-shortener.json';
const resultsPerPage = 5; // 페이지당 결과 수

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

    if (dataToDisplay.length === 0) {
        // 데이터가 비어 있을 경우 사용자에게 알림
        const noResultsMessage = document.createElement('div');
        noResultsMessage.innerHTML = `<strong>검색 결과가 없습니다.</strong>`;
        searchResults.appendChild(noResultsMessage);
    } else {
        dataToDisplay.forEach(item => {
            resultItem.innerHTML = `
            <div class="item" ttt="${item.url}">
                <div class="link">${item.link}</div>
                <div class="url">${item.url}</div>
            </div>
            `;
            searchResults.appendChild(resultItem);
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
        pagination.innerHTML += `<button onclick="changePage(${currentPage - 1})">이전페이지</button>`;
    } else {
        pagination.innerHTML += `<button disabled>이전페이지</button>`;
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
        pagination.innerHTML += `<button onclick="changePage(${currentPage + 1})">다음페이지</button>`;
    } else {
        pagination.innerHTML += `<button disabled>다음페이지</button>`;
    }
}

function changePage(page) {
    currentPage = page;
    paginateData(filteredData.length > 0 ? filteredData : allData, currentPage);
    updatePaginationButtons(filteredData.length > 0 ? filteredData : allData);
    history.pushState(null, '', `?page=${currentPage}`);
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
        item.title.toLowerCase().includes(textToSearch) || item.content.toLowerCase().includes(textToSearch)
    );

    currentPage = 1;
    paginateData(filteredData, currentPage);
    updatePaginationButtons(filteredData);
}

document.getElementById('searchInput').addEventListener('input', searchInstantly);

loadData().then(data => {
    allData = data;
    paginateData(allData, currentPage);
    updatePaginationButtons(allData);
});

function searchOnEnter(event) {
    if (event.key === 'Enter') {
        searchInstantly();
    }
}
