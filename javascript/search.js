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

        const resultsPerPage = 10; // 페이지 당 결과 수
        let currentPage = 1; // 현재 페이지
        
        if(urlParams.has('page')) {
            currentPage = parseInt(urlParams.get('page')) || 1;
        }

        function displayResults(page) {
            $(".search-results").empty();
            const startIndex = (page - 1) * resultsPerPage;
            const endIndex = startIndex + resultsPerPage;
            const filteredResults = searchData.filter(item => {
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

            const resultsToShow = filteredResults.slice(startIndex, endIndex);
            
            if(resultsToShow.length === 0) {
                $(".search-results").hide();
                return;
            }
            
            resultsToShow.forEach(item => {
                let title = Object.values(item.title).find(title => title.toLowerCase().includes(searchValue)) || item.title['en'];
                let languageCode = $("html").attr("lang").split(' ').find(cls => cls.length === 2) || "en";
                let type = item.type && langData[languageCode][item.type] ? langData[languageCode][item.type] : "";
                $(".search-results").append(`
                    <a href="${item.link}">
                        <img class="search-results-image" src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                        ${type ? `<p class="search-results-type">${type}</p>` : ""}<p class="search-results-title" title="${title}">${title}</p>
                    </a>
                `);
            });
            $(".search-results").show();
            displayPagination(filteredResults.length, page);
        }

        function displayPagination(totalResults, currentPage) {
            const totalPages = Math.ceil(totalResults / resultsPerPage);
            $('.pagination').empty();
            for(let i = 1; i <= totalPages; i++) {
                $('.pagination').append(`<a href="?q=${searchValue}&page=${i}" class="${i === currentPage ? 'active' : ''}">${i}</a>`);
            }
        }

        displayResults(currentPage);
    });
});
