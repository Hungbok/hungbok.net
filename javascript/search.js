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
            .slice(0, 5); // 상위 5개 결과만 추출
        
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
        }
    });
});
