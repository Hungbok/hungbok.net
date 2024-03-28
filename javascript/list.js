// JSON 파일 경로
const dataUrl = '//data.hungbok.net/data/games/list.json';
const resultsPerPage = 5; // 페이지당 결과 수

let currentPage = 1;
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
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // 이전 검색 결과 지우기

    if (!data.length) {
        // 데이터가 없을 경우
        const noResultItem = document.createElement('div');
        noResultItem.textContent = '검색 결과가 없습니다.';
        searchResults.appendChild(noResultItem);
        return; // 함수를 여기서 종료
    }

    const startIndex = (page - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    const dataToDisplay = data.slice(startIndex, endIndex);

    dataToDisplay.forEach(item => {
        // 검색 결과에 추가
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `
            <strong>${item.title}</strong><br>
            ${item.content}
        `;
        searchResults.appendChild(resultItem);
    });
}

function updatePaginationButtons(data) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(data.length / resultsPerPage);

    // 이전 페이지 버튼 추가
    const prevButton = document.createElement('button');
    prevButton.textContent = '이전';
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            paginateData(data, currentPage);
            updatePaginationButtons(data);
        }
    };
    pagination.appendChild(prevButton);

    // 첫 페이지
    if (currentPage > 3) {
        const firstPage = document.createElement('button');
        firstPage.textContent = '1';
        firstPage.onclick = () => {
            currentPage = 1;
            paginateData(data, currentPage);
            updatePaginationButtons(data);
        };
        pagination.appendChild(firstPage);
    }

    // 페이지 번호 "..." 앞부분
    if (currentPage > 4) {
        const dots = document.createElement('span');
        dots.textContent = '...';
        pagination.appendChild(dots);
    }

    // 중간 페이지 번호
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.disabled = i === currentPage;
        pageButton.onclick = () => {
            currentPage = i;
            paginateData(data, currentPage);
            updatePaginationButtons(data);
        };
        pagination.appendChild(pageButton);
    }

    // 페이지 번호 "..." 뒷부분
    if (currentPage < totalPages - 3) {
        const dots = document.createElement('span');
        dots.textContent = '...';
        pagination.appendChild(dots);
    }

    // 마지막 페이지
    if (currentPage < totalPages - 2) {
        const lastPage = document.createElement('button');
        lastPage.textContent = totalPages;
        lastPage.onclick = () => {
            currentPage = totalPages;
            paginateData(data, currentPage);
            updatePaginationButtons(data);
        };
        pagination.appendChild(lastPage);
    }

    // 다음 페이지 버튼 추가
    const nextButton = document.createElement('button');
    nextButton.textContent = '다음';
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            paginateData(data, currentPage);
            updatePaginationButtons(data);
        }
    };
    pagination.appendChild(nextButton);
}

function searchInstantly() {
    const inputText = document.getElementById('searchInput').value;
    const textToSearch = inputText.trim().toLowerCase();

    filteredData = allData.filter(item =>
        item.title.toLowerCase().includes(textToSearch) || item.content.toLowerCase().includes(textToSearch)
    );

    currentPage = 1;

    // 검색 결과 페이지를 업데이트
    paginateData(filteredData, currentPage);
    
    // 검색 결과가 없으면 페이지네이션 버튼을 업데이트하지 않음
    if (filteredData.length > 0) {
        updatePaginationButtons(filteredData);
    } else {
        document.getElementById('pagination').innerHTML = ''; // 검색 결과가 없으면 페이지네이션 버튼을 비움
    }
}

// 입력 필드 값이 변경될 때마다 실시간 검색 실행
document.getElementById('searchInput').addEventListener('input', searchInstantly);

// 초기 데이터를 로드하고 페이지를 표시하기 위해 페이지 로드 시 호출
loadData().then(data => {
    allData = data;
    paginateData(allData, currentPage);
    updatePaginationButtons(allData);
});

function searchOnEnter(event) {
    if (event.key === 'Enter') {
        searchData();
    }
}