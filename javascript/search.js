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
        // 각각의 결과에서 필요한 데이터만 추출합니다. (response[0]에 실제 데이터가 있음)
        let searchData = [
            ...data[0], 
            ...gamesData[0], 
            ...animeData[0], 
            ...movieData[0], 
            ...televisionData[0], 
            ...booksData[0]
        ];
        langData = langData[0]; // langData 역시 같은 방식으로 추출합니다.

        // URL에서 q 매개변수의 값을 검색어로 사용합니다.
        const urlParams = new URLSearchParams(window.location.search);
        const searchValue = urlParams.get('q').toLowerCase().trim();
        const currentPage = parseInt(urlParams.get('page') || '1', 10); // 현재 페이지
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
            }).map(item => {
                // 일치율 계산을 위한 로직 추가
                let maxMatchRate = 0; // 최대 일치율
                (Object.values(item.title).concat(Object.values(item.subtitle))).forEach(text => {
                    let lowerText = text.toLowerCase();
                    let cleanedText = lowerText.replace(/\s+/g, '');
                    let cleanedSearchValue = searchValue.replace(/\s+/g, '');
                    let matchRate = (cleanedText.includes(cleanedSearchValue)) ? (cleanedSearchValue.length / cleanedText.length) : 0;
                    if(matchRate > maxMatchRate) {
                        maxMatchRate = matchRate; // 최대 일치율 업데이트
                    }
                });
                return {...item, matchRate: maxMatchRate}; // 일치율을 포함한 객체 반환
            }).sort((a, b) => b.matchRate - a.matchRate) // 일치율이 높은 순으로 정렬
        
            $("#searchResults").empty();
            if(results.length === 0) {
                $("#searchResults").hide();
                return;
            }
            results.forEach(item => {
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

            let paginatedResults = results.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
            
            $("#searchResults").empty();
            if(paginatedResults.length === 0) {
                $("#searchResults").append(`<p>검색 결과가 존재하지 않습니다.</p>`).show();
                return;
            }
            paginatedResults.forEach(item => {
                // 결과 표시 로직은 기존과 동일
            });
            $("#searchResults").show();

            // 페이지네이션 로직
            generatePagination(currentPage, Math.ceil(results.length / itemsPerPage));
        }
    });
});

function generatePagination(currentPage, totalPages) {
    let paginationHTML = '';
    if (currentPage > 1) {
        paginationHTML += `<a href="?page=${currentPage - 1}">이전페이지</a>`;
    } else {
        paginationHTML += `<span>이전페이지</span>`;
    }

    // 처음 페이지
    if (currentPage > 3) {
        paginationHTML += `<a href="?page=1">1페이지</a>`;
        if (currentPage > 4) {
            paginationHTML += `<span>...</span>`;
        }
    }

    // 중간 페이지
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(currentPage + 2, totalPages); i++) {
        if (i === currentPage) {
            paginationHTML += `<span>${i}페이지</span>`;
        } else {
            paginationHTML += `<a href="?page=${i}">${i}페이지</a>`;
        }
    }

    // 마지막 페이지
    if (currentPage < totalPages - 2) {
        if (currentPage < totalPages - 3) {
            paginationHTML += `<span>...</span>`;
        }
        paginationHTML += `<a href="?page=${totalPages}">${totalPages}페이지</a>`;
    }

    if (currentPage < totalPages) {
        paginationHTML += `<a href="?page=${currentPage + 1}">다음페이지</a>`;
    } else {
        paginationHTML += `<span>다음페이지</span>`;
    }

    $("#pagination").html(paginationHTML);
}
