const resultsPerPage = 5; // 페이지당 결과 수

let currentPage = parseInt(new URLSearchParams(window.location.search).get('page')) || 1;
let allData = []; // 모든 데이터를 저장하는 배열
let filteredData = []; // 검색된 데이터를 저장하는 배열

function loadData() {
    return $.when(
        $.getJSON("//data.hungbok.net/data/search/data.json"),
        $.getJSON("//data.hungbok.net/data/search/gamesData.json"),
        $.getJSON("//data.hungbok.net/data/search/animeData.json"),
        $.getJSON("//data.hungbok.net/data/search/movieData.json"),
        $.getJSON("//data.hungbok.net/data/search/televisionData.json"),
        $.getJSON("//data.hungbok.net/data/search/booksData.json"),
        $.getJSON("//data.hungbok.net/data/langData.json")
    ).done(function(...responses) {
        // responses는 각 $.getJSON 호출의 결과를 담은 배열입니다.
        // 각 결과는 [data, textStatus, jqXHR] 형식의 배열입니다.
        // 여기서는 데이터만 필요하므로, 각 결과의 첫 번째 요소(실제 데이터)만 추출합니다.
        allData = responses.map(response => response[0]);
        // 여러 개의 데이터 배열을 하나의 배열로 합칩니다.
        allData = allData.flat(); // ES2019의 flat() 메서드를 사용
        console.log("데이터 로드 완료", allData);
    }).fail(function(error) {
        console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
    });
}

function setSearchInputValue(p) {
    document.getElementById('searchInput').value = p;
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
            const monthNames = ["1", "2", "3", "4", "5", "6",
                                "7", "8", "9", "10", "11", "12"];

            // item.release_month가 문자열이고 "01", "02" 등의 형태로 되어 있다고 가정합니다.
            // parseInt를 사용하여 문자열을 정수로 변환하고, 배열의 인덱스는 0부터 시작하기 때문에 1을 빼줍니다.
            const monthName = monthNames[parseInt(item.release_month, 10) - 1];

            // 검색 결과에 추가
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
    // 현재 URL에서 쿼리 매개변수를 파싱
    const queryParams = new URLSearchParams(window.location.search);
    
    // 'page' 매개변수를 업데이트 (또는 추가)
    queryParams.set('page', page);
    
    currentPage = page;
    paginateData(filteredData.length > 0 ? filteredData : allData, currentPage);
    updatePaginationButtons(filteredData.length > 0 ? filteredData : allData);
    
    // 수정된 쿼리 매개변수와 함께 URL을 업데이트
    history.pushState(null, '', `?${queryParams.toString()}`);
}

function searchInstantly() {
    const inputText = document.getElementById('searchInput').value;
    // URLSearchParams 객체를 사용하여 URL의 쿼리 매개변수 조작
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('p', inputText); // 'p' 매개변수 업데이트
    history.pushState(null, '', `?${queryParams.toString()}`); // URL 상태 업데이트

    if (!textToSearch) {
        filteredData = [];
        currentPage = 1;
    } else {
        filteredData = allData.filter(item =>
            item.title.toLowerCase().includes(textToSearch)
        );
        currentPage = 1;
    }
    
    paginateData(filteredData, currentPage);
    updatePaginationButtons(filteredData);
}

// 페이지 로드 시 쿼리 매개변수 'p'를 확인하여 검색어를 입력 필드에 설정하고 검색을 실행
function loadSearchFromQuery() {
    const queryParams = new URLSearchParams(window.location.search);
    const searchText = queryParams.get('p'); // 'p' 매개변수의 값을 가져옴
    
    if (searchText) {
        document.getElementById('searchInput').value = searchText; // 검색어를 입력 필드에 설정
        searchInstantly(); // 검색 실행
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadSearchFromQuery(); // 페이지 로드 시 실행
});

document.getElementById('searchInput').addEventListener('input', searchInstantly);

loadData().then(() => {
    loadSearchFromQuery(); // 페이지 로드 시 쿼리 매개변수를 기반으로 검색 실행
    paginateData(allData, currentPage);
    updatePaginationButtons(allData);
});

function searchOnEnter(event) {
    if (event.key === 'Enter') {
        searchInstantly();
    }
}