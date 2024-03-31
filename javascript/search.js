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

        // URL에서 q와 page 매개변수의 값을 가져옵니다.
        const urlParams = new URLSearchParams(window.location.search);
        const searchValue = urlParams.get('q').toLowerCase().trim();
        let page = parseInt(urlParams.get('page') || '1', 10); // page가 없으면 1로 설정
        const itemsPerPage = 5; // 한 페이지에 표시할 아이템 수

        // 검색어 출력
        $("#searchingValue").text(searchValue);

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

            let paginatedResults = results.slice((page - 1) * itemsPerPage, page * itemsPerPage);

            $("#searchResults").empty();
            if(results.length === 0) {
                $("#searchResults").append(`<p>검색결과가 존재하지 않습니다.</p>`);
                $("#searchingValueNumber").text('0'); // 검색 결과 개수를 0으로 설정
                return;
            }

            // 검색 결과 개수 출력
            $("#searchingValueNumber").text(results.length.toString());

            // 검색 결과를 페이지에 맞게 표시
            paginatedResults.forEach(item => {
                let title = Object.values(item.title).find(title => title.toLowerCase().includes(searchValue));
                if (!title) {
                    title = (item.title[languageCode]) ? item.title[languageCode] : item.title['en'];
                }
                let type = item.type && langData[languageCode][item.type] ? langData[languageCode][item.type] : "";
                $("#searchResults").append(`
                    <a href="${item.link}">
                        <img class="searchresultsimage" src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                        ${type ? `<p class="searchresultstype">${type}</p>` : ""}<p class="searchresultstitle" title="${title}">${title}</p>
                    </a>
                `);
            });
        }
        // 여기에 페이지 네비게이션 로직 추가
        const pagination = document.getElementById('pagination'); // pagination 요소의 ID를 확인하세요.
        pagination.innerHTML = '';
        
        const resultsPerPage = 5; // 한 페이지당 결과 수
        const currentPage = parseInt(new URLSearchParams(window.location.search).get('page') || '1', 10); // 현재 페이지
        const totalPages = Math.ceil(results.length / resultsPerPage); // 총 페이지 수 계산
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

        // changePage 함수 구현
        window.changePage = function(page) {
            window.location.href = '?q=' + encodeURIComponent(searchValue) + '&page=' + page; // searchValue는 검색어 변수입니다. 적절히 조정하세요.
        }
    });
});
