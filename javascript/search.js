window.addEventListener('load', function() {
    // $.when()을 이용하여 여러 JSON 파일을 동시에 불러옵니다.
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
        const currentPage = parseInt(urlParams.get('page') || '1', 10); // 페이지 매개변수 추가
        const itemsPerPage = 10; // 한 페이지에 표시할 아이템 수 설정
        const totalItems = searchData.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage); // 총 페이지 수 계산

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
            }).map(item => {
                let maxMatchRate = 0;
                (Object.values(item.title).concat(Object.values(item.subtitle))).forEach(text => {
                    let lowerText = text.toLowerCase();
                    let cleanedText = lowerText.replace(/\s+/g, '');
                    let cleanedSearchValue = searchValue.replace(/\s+/g, '');
                    let matchRate = (cleanedText.includes(cleanedSearchValue)) ? (cleanedSearchValue.length / cleanedText.length) : 0;
                    if(matchRate > maxMatchRate) {
                        maxMatchRate = matchRate;
                    }
                });
                return {...item, matchRate: maxMatchRate};
            }).sort((a, b) => b.matchRate - a.matchRate)

            // 페이지에 맞게 결과를 분할합니다.
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const paginatedResults = results.slice(startIndex, endIndex);

            $("#searchResults").empty();
            if(paginatedResults.length === 0) {
                $("#searchResults").append(`<p>검색 결과가 존재하지 않습니다.</p>`).show();
                return;
            }
            paginatedResults.forEach(item => {
                let title = Object.values(item.title).find(title => title.toLowerCase().includes(searchValue));
                if (!title) {
                    title = (item.title[languageCode]) ? item.title[languageCode] : item.title['en'];
                }
                let type = item.type && langData[languageCode][item.type] ? langData[languageCode][item.type] : "";
                $("#searchResults").append(`
                    <a href="${item.link}">
                        <img class="search-results-image" src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                        ${type ? `<p class="search-results-type">${type}</p>` : ""}<p class="search-results-title" title="${title}">${title}</p>
                    </a>
                `);
            });
            $("#searchResults").show();

            // 페이지네이션 로직
            function createPageButton(page, isActive, isCurrent=false) {
                return `<a href="?q=${searchValue}&page=${page}" class="${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}">${page}</a>`;
            }

            function renderPagination() {
                let paginationHTML = '';
                if(currentPage > 1) {
                    paginationHTML += createPageButton(currentPage - 1, true) + '이전 ';
                } else {
                    paginationHTML += '이전 ';
                }

                // 첫 페이지와 현재 페이지 사이에 '...'을 추가하는 조건
                if(currentPage > 3) {
                    paginationHTML += createPageButton(1, true) + '... ';
                } else if(currentPage === 3) {
                    paginationHTML += createPageButton(1, true);
                }

                // 현재 페이지의 앞뒤로 2페이지씩 표시
                const startPage = Math.max(1, currentPage - 2);
                const endPage = Math.min(totalPages, currentPage + 2);
                for(let page = startPage; page <= endPage; page++) {
                    paginationHTML += createPageButton(page, true, page === currentPage);
                }

                // 마지막 페이지와 현재 페이지 사이에 '...'을 추가
                if(currentPage < totalPages - 2) {
                    paginationHTML += '... ' + createPageButton(totalPages, true);
                } else if(currentPage === totalPages - 2) {
                    paginationHTML += createPageButton(totalPages, true);
                }

                if(currentPage < totalPages) {
                    paginationHTML += ' 다음' + createPageButton(currentPage + 1, true);
                } else {
                    paginationHTML += ' 다음';
                }

                $("#pagination").html(paginationHTML);
            }

            if(totalPages > 1) {
                renderPagination();
            }
        }
    });
});