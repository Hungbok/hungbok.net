async function loadAsyncScripts() {
    // 이미지 팝업 슬라이드쇼
    await loadScript('//www.hungbok.net/javascript/lightbox.js');
    await loadScript('//www.hungbok.net/javascript/html_loader.js');
    await loadScript('//www.hungbok.net/javascript/ko/error404.js');
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
        });
    } else {
        $('body').addClass('ko');
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
        
        loadResource('js', '//www.hungbok.net/javascript/ko/news.js');

        $('main').append(`<section class="section">
            <div id="searchResults"></div>
            <div id="pagination"></div>
        </section>`);
    }
});

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

async function displayTopFiveRecentData(data) {
    // 데이터에서 상위 5개 아이템만 선택
    const topFiveData = data.slice(0, 5);

    const sideContent = document.querySelector('.side-content');
    sideContent.innerHTML = ''; // 기존 내용을 초기화

    // 현재 문서의 언어 설정 확인
    const currentLang = document.documentElement.lang || 'en';

    for (const item of topFiveData) {
        // 언어에 맞는 제목을 불러오기 위한 URL 구성
        const url = `//data.hungbok.net/data/news/${item.url}.json`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            // 현재 언어로 된 제목이 있으면 사용, 없으면 기본 언어(en)로 대체
            const title = data[currentLang]?.title || data.en.title;

            sideContent.innerHTML += `
            <div class="side-item">
                <a href="${item.link}">
                    <img src="${item.image}" alt="${title}">
                    <div class="side-info">
                        <div class="side-title">${title}</div>
                        <div class="side-date">${item.published}</div>
                    </div>
                </a>
            </div>
            `;
        } catch (error) {
            console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
        }
    }
}

window.addEventListener('load', function() {
    loadAsyncScripts();

    loadData().then(data => {
        displayTopFiveRecentData(data);
    });
});