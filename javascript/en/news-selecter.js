async function loadAsyncScripts() {
    // 이미지 팝업 슬라이드쇼
    await loadScript('//www.hungbok.net/javascript/lightbox.js');
    await loadScript('//www.hungbok.net/javascript/html_loader.js');
    await loadScript('//www.hungbok.net/javascript/en/error404.js');
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

$(document).ready(function(){
    // 파라미터에서 'q' 값을 가져옴
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("q");
    
    if (queryParam) {
        // JSON 파일 가져오기
        $.getJSON(`//data.hungbok.net/data/news/${queryParam}.json`, function (data) {
            // JSON 데이터를 HTML에 대체삽입
        
            // en 또는 ko 데이터에 접근하는 함수
            function getLocalizedData(data, key) {
                return data['ko'] && data['ko'][key] ? data['ko'][key] : data['en'][key];
            }

            $("#page-title").text(getLocalizedData(data[0], 'title') + ' | HungBok');
            $('body').addClass('body-' + data[0].type + ' ' + getLocalizedData(data[0], 'lang'));
            $('#report-title').attr('value', 'https://www.hungbok.com/news?q=' + data[0].url);
    

            // 대체할 값들을 저장한 객체
            var replacement = {
                '{type}': data[0].type,
                '{title}': getLocalizedData(data[0], 'title'),
                '{content}': getLocalizedData(data[0], 'content'),
                '{url}': data[0].url,
                '{image}': data[0].image,
                '{share}': data[0].link,
                '{date}': data[0].date,
                '{writer}': data[0].writer,
            };
            
            // body의 HTML 가져오기
            var htmlContent = document.body.innerHTML;
            
            // 각 키에 대응하는 값을 대체
            for (var key in replacement) {
              var re = new RegExp(key, 'g');
              htmlContent = htmlContent.replace(re, replacement[key]);
            }
            
            // 변경된 HTML 설정
            document.body.innerHTML = htmlContent;
            
            // JSON 파일 경로
            const dataUrl = '//data.hungbok.net/data/news.json';
            
            async function loadData() {
                try {
                    const response = await fetch(dataUrl);
                    const data = await response.json();
                    return data;
                } catch (error) {
                    console.error('데이터를 불러오는 중 오류가 발생했습니다:', error);
                }
            }
            
            async function displayData(data) {
                const dataToDisplay = data.slice(0, 5); // 상위 5개 데이터만 표시
                const searchResults = document.querySelector('.side-content');
                searchResults.innerHTML = '';
            
                if (dataToDisplay.length === 0) {
                    searchResults.innerHTML = `<div class="no-data">No search results.</div>`;
                } else {
                    // 현재 페이지의 언어 코드를 가져옵니다.
                    const lang = document.documentElement.lang || "en";
            
                    for (const item of dataToDisplay) {
                        const detailDataUrl = `//data.hungbok.net/data/news/${item.url}.json`;
                        try {
                            const response = await fetch(detailDataUrl);
                            const detailData = await response.json();
                            const itemLangData = detailData.find(d => d.hasOwnProperty(lang)) || detailData.find(d => d.hasOwnProperty("en"));
                            const title = itemLangData[lang] ? itemLangData[lang].title : itemLangData["en"].title;
                            const date = itemLangData.date;

                            function formatDate(dateString) {
                                // 'yyyy-mm-dd' 형식의 문자열을 '-'로 분리
                                const parts = dateString.split('-');
                                if (parts.length !== 3) {
                                    return "Incorrect Format";
                                }

                                const year = parts[0];
                                const month = parseInt(parts[1], 10); // 숫자로 변환
                                const day = parts[2];
                            
                                // 월을 숫자에서 영어로 매핑
                                const months = [
                                    "January", "February", "March", "April",
                                    "May", "June", "July", "August",
                                    "September", "October", "November", "December"
                                ];

                                // 숫자 월을 영어 월로 변환
                                const monthName = months[month - 1]; // 배열은 0부터 시작하므로 -1
                            
                            
                                // 'yyyy년 mm월 dd일' 형식으로 재구성
                                return `${monthName} ${day}, ${year}`;
                            }
            
                            searchResults.innerHTML += `
                            <a class="side-item" href="${item.link}" title="${title}">
                                <div class="side-image">
                                    <img src="${item.image}">
                                </div>
                                <div class="side-info">
                                    <div class="side-type ${item.type}">${item.type}</div>
                                    <div class="side-title">${title}</div>
                                    <div class="side-date">${formatDate(date)}</div>
                                </div>
                            </a>
                            `;
                        } catch (error) {
                            console.error('상세 데이터를 불러오는 중 오류가 발생했습니다:', error);
                        }
                    }
                }
            }
            
            loadData().then(data => {
                displayData(data);
            });
        });
    } else {
        $('body').addClass('en');
        $('.section').remove();
        $('.top-backgrounds').remove();

        // 스크립트와 CSS를 동적으로 불러오는 함수
        function loadResource(type, url) {
            if (type === 'js') {
                var script = document.createElement('script');
                script.src = url;
                document.body.appendChild(script);
            } else if (type === 'css') {
                var link = document.createElement('link');
                link.href = url;
                link.type = 'text/css';
                link.rel = 'stylesheet';
                document.getElementsByTagName('head')[0].appendChild(link);
            }
        }
        
        loadResource('js', '//www.hungbok.net/javascript/en/news.js');

        $('main').append(`<section class="section">
            <div id="searchResults"></div>
            <div id="pagination"></div>
        </section>`);
    }
});

window.addEventListener('load', function() {
    loadAsyncScripts();
});