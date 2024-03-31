window.addEventListener('load', function() {
    $.when(
        $.getJSON("//data.hungbok.net/data/search/data.json"),
        $.getJSON("//data.hungbok.net/data/search/gamesData.json"),
        $.getJSON("//data.hungbok.net/data/search/animeData.json"),
        $.getJSON("//data.hungbok.net/data/search/movieData.json"),
        $.getJSON("//data.hungbok.net/data/search/televisionData.json"),
        $.getJSON("//data.hungbok.net/data/search/booksData.json"),
        $.getJSON("//data.hungbok.net/data/langData.json"),
    ).then(function(data, gamesData, animeData, movieData, televisionData, booksData, langData) {
        let searchData = [
            ...data[0], 
            ...gamesData[0], 
            ...animeData[0], 
            ...movieData[0], 
            ...televisionData[0], 
            ...booksData[0]
        ];
        langData = langData[0];
        const urlParams = new URLSearchParams(window.location.search);
        const searchValue = urlParams.get('q').toLowerCase().trim();
        const currentPage = parseInt(urlParams.get('page')) || 1;
        const itemsPerPage = 10; // 페이지 당 항목 수

        if(searchValue !== '') {
            let languageCode = $("html").attr("lang").split(' ').find(cls => cls.length === 2) || "en";
            let results = searchData.filter(item => {
                return (Object.values(item.title).concat(Object.values(item.subtitle))).some(text => {
                    let lowerText = text.toLowerCase();
                    if(lowerText.includes(searchValue)) {
                        return true;
                    }
                    let cleanedText = lowerText.replace(/\s+/g, '');
                    let cleanedSearchValue = searchValue.replace(/\s+/g, '');
                    return cleanedText.includes(cleanedSearchValue);
                });
            });

            // 페이징을 위해 전체 결과에서 현재 페이지에 해당하는 결과만 추출
            const pageResults = results.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

            $(".searchResults").empty();
            if(pageResults.length === 0) {
                $(".searchResults").hide();
                return;
            }
            pageResults.forEach(item => {
                let title = Object.values(item.title).find(title => title.toLowerCase().includes(searchValue));
                if (!title) {
                    title = (item.title[languageCode]) ? item.title[languageCode] : item.title['en'];
                }
                let type = item.type && langData[languageCode][item.type] ? langData[languageCode][item.type] : "";
                $(".searchResults").append(`
                    <a href="${item.link}">
                        <img class="search-results-image" src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                        ${type ? `<p class="search-results-type">${type}</p>` : ""}<p class="search-results-title" title="${title}">${title}</p>
                    </a>
                `);
            });

            // 페이징 네비게이션 추가
            const totalPage = Math.ceil(results.length / itemsPerPage);
            let paginationHtml = '<div class="pagination">';
            for(let i = 1; i <= totalPage; i++) {
                paginationHtml += `<a href="?q=${searchValue}&page=${i}" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
            }
            paginationHtml += '</div>';
            $(".searchResults").append(paginationHtml);

            $(".searchResults").show();
        }
    });
});

function updatePaginationButtons(data) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    
    const totalPages = Math.ceil(data.length / resultsPerPage);
    const maxPagesDisplay = 5; // 한 번에 보여줄 최대 페이지 번호 수
    let pageStart = currentPage - Math.floor(maxPagesDisplay / 2);
    let pageEnd = currentPage + Math.floor(maxPagesDisplay / 2);
    
    // 페이지 시작 번호가 1보다 작을 경우 조정
    if (pageStart < 1) {
        pageStart = 1;
        pageEnd = maxPagesDisplay > totalPages ? totalPages : maxPagesDisplay;
    }
    
    // 페이지 끝 번호가 총 페이지 수보다 클 경우 조정
    if (pageEnd > totalPages) {
        pageEnd = totalPages;
        pageStart = totalPages - maxPagesDisplay + 1 > 0 ? totalPages - maxPagesDisplay + 1 : 1;
    }
    
    // 이전 페이지 버튼
    if (currentPage > 1) {
        pagination.innerHTML += `<button onclick="changePage(${currentPage - 1})"><img src="//media.hungbok.net/image/icon/prev.svg"></button>`;
    } else {
        pagination.innerHTML += `<button disabled><img src="//media.hungbok.net/image/icon/prev.svg"></button>`;
    }
    
    // 페이지 번호 버튼
    for (let i = pageStart; i <= pageEnd; i++) {
        pagination.innerHTML += `<button onclick="changePage(${i})" ${i === currentPage ? 'class="active"' : ''}>${i}</button>`;
    }
    
    // 다음 페이지 버튼
    if (currentPage < totalPages) {
        pagination.innerHTML += `<button onclick="changePage(${currentPage + 1})"><img src="//media.hungbok.net/image/icon/next.svg"></button>`;
    } else {
        pagination.innerHTML += `<button disabled><img src="//media.hungbok.net/image/icon/next.svg"></button>`;
    }
}
