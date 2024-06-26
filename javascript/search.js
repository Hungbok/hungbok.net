$(document).ready(function() {
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
        const itemsPerPage = 10; // 한 페이지에 표시할 아이템 수

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
                let foundLanguageCode = null; // 검색된 subtitle의 언어 코드
                (Object.entries(item.subtitle).concat(Object.entries(item.title))).forEach(([key, text]) => {
                    let lowerText = text.toLowerCase();
                    let cleanedText = lowerText.replace(/\s+/g, '');
                    let cleanedSearchValue = searchValue.replace(/\s+/g, '');
                    let matchRate = (cleanedText.includes(cleanedSearchValue)) ? (cleanedSearchValue.length / cleanedText.length) : 0;
                    if(matchRate > maxMatchRate) {
                        maxMatchRate = matchRate; // 최대 일치율 업데이트
                        foundLanguageCode = key.split('-')[0]; // 검색된 subtitle의 언어 코드 추출
                    }
                });
                return {...item, matchRate: maxMatchRate, foundLanguageCode}; // 일치율과 검색된 언어 코드를 포함한 객체 반환
            }).sort((a, b) => b.matchRate - a.matchRate) // 일치율이 높은 순으로 정렬
            
            let paginatedResults = results.slice((page - 1) * itemsPerPage, page * itemsPerPage);

            $("#searchResults").empty();
            if(results.length === 0) {
                $("#searchResults").append(`<div class="no-data">검색 결과가 없습니다.</div>`);
                $("#searchingValueNumber").text('0'); // 검색 결과 개수를 0으로 설정
                return;
            }

            // 검색 결과 개수 출력
            $("#searchingValueNumber").text(results.length.toString());

            function getBaseLangCode(langCode) {
                return langCode.split('-')[0];
            }

            // 검색 결과를 페이지에 맞게 표시
            paginatedResults.forEach(item => {
                let titleMatchLangs = []; // title에서 검색어와 일치하는 언어 코드를 저장할 배열
                let subtitleMatchLangs = []; // subtitle에서 검색어와 일치하는 언어 코드를 저장할 배열
            
                // title과 subtitle에서 검색어와 일치하는 언어 코드 찾기
                Object.entries(item.title).forEach(([lang, text]) => {
                    if (text.toLowerCase().includes(searchValue)) titleMatchLangs.push(getBaseLangCode(lang));
                });
                Object.entries(item.subtitle || {}).forEach(([lang, text]) => {
                    if (text.toLowerCase().includes(searchValue)) subtitleMatchLangs.push(getBaseLangCode(lang));
                });
            
                // 일치하는 언어 코드가 여러 개인 경우, 우선 순위에 따라 언어 코드 결정
                let finalLangCode = subtitleMatchLangs.includes(languageCode) || titleMatchLangs.includes(languageCode) ? languageCode :
                                     subtitleMatchLangs.includes('en') || titleMatchLangs.includes('en') ? 'en' :
                                     subtitleMatchLangs[0] || titleMatchLangs[0] || 'en'; // subtitle 우선
            
                // 최종적으로 결정된 언어 코드를 사용하여 title 출력
                // 여기서 title과 subtitle의 실제 언어 코드를 찾을 때도 getBaseLangCode 함수를 사용해야 합니다.
                let titleLangCode = Object.keys(item.title).find(lang => getBaseLangCode(lang) === finalLangCode) || 'en';
                let subtitleLangCode = item.subtitle ? Object.keys(item.subtitle).find(lang => getBaseLangCode(lang) === finalLangCode) || 'en' : 'en';
            
                let title = item.title[titleLangCode] || item.title['en'] || Object.values(item.title)[0];
                let subtitle = item.subtitle ? (item.subtitle[subtitleLangCode] || item.subtitle['en'] || Object.values(item.subtitle)[0]) : "";
                let type = item.type && langData[languageCode][item.type] ? langData[languageCode][item.type] : "";
            
                $("#searchResults").append(`
                    <a href="${item.link}">
                        <div class="searchresultsimage"><img src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';"></div>
                        <div class="searchresultstype">${type ? `<p>${type}</p>` : ""}</div>
                        <div class="searchresultstitle"><p title="${title}">${title}</p></div>
                    </a>
                `);
            });

            // 페이지네이션 버튼 추가
            const totalPages = Math.ceil(results.length / itemsPerPage);
            const paginationContainer = $("#pagination");
            paginationContainer.empty();

            // 이전 페이지 버튼
            if(page > 1) {
                paginationContainer.append(`<button onclick="location.href='?q=${searchValue}&page=${page - 1}'"><img src="//media.hungbok.net/image/icon/prev.svg"></button>`);
            } else {
                paginationContainer.append(`<button disabled><img src="//media.hungbok.net/image/icon/prev.svg"></button>`);
            }

            // 페이지 번호 버튼
            let startPage = Math.max(page - 2, 1);
            let endPage = Math.min(page + 2, totalPages);

            if(startPage > 1) {
                paginationContainer.append(`<button onclick="location.href='?q=${searchValue}&page=1'">1</button>`);
                if(startPage > 2) paginationContainer.append(`<span>...</span>`);
            }

            for(let i = startPage; i <= endPage; i++) {
                if(i === page) {
                    paginationContainer.append(`<button ${i === page ? 'class="active"' : ''}>${i}</button>`);
                } else {
                    paginationContainer.append(`<button onclick="location.href='?q=${searchValue}&page=${i}'" ${i === page ? 'class="active"' : ''}>${i}</button>`);
                }
            }

            if(endPage < totalPages) {
                if(endPage < totalPages - 1) paginationContainer.append(`<span>...</span>`);
                paginationContainer.append(`<button onclick="location.href='?q=${searchValue}&page=${totalPages}'">${totalPages}</button>`);
            }

            // 다음 페이지 버튼
            if(page < totalPages) {
                paginationContainer.append(`<button onclick="location.href='?q=${searchValue}&page=${page + 1}'"><img src="//media.hungbok.net/image/icon/next.svg"></button>`);
            } else {
                paginationContainer.append(`<button disabled><img src="//media.hungbok.net/image/icon/next.svg"></button>`);
            }
        }
    });
});

window.addEventListener('load', function() {
    const searchParams = window.location.search;
    const urlParam = new URLSearchParams(searchParams);
    const q = urlParam.get('q'); // 'q' 매개변수의 값을 가져옵니다.

    // URL에 쿼리 매개변수 자체가 없거나 'q' 매개변수가 없거나 값이 비어 있는 경우
    if (searchParams === '' || q === null || q.trim() === '') {
        // 동적으로 error404.js 스크립트를 로드하고 실행합니다.
        const script = document.createElement('script');
        script.src = "//www.hungbok.net/javascript/error404.js";
        document.head.appendChild(script);
    }
});
