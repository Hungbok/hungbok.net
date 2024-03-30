// URL에서 'q' 매개변수의 값을 가져오는 함수
function getQueryParam(param) {
    var searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(param);
}

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

// 'q' 매개변수의 값에 따라 조건 분기
var qValue = getQueryParam('q');
var validSeasons = ['winter', 'spring', 'summer', 'autumn'];
if (validSeasons.includes(qValue)) {
    // q값에 해당하는 class 추가
    document.getElementById('calendar').classList.add(qValue);
    // 해당 계절의 스크립트와 CSS 불러오기
    loadResource('js', '//www.hungbok.net/javascript/games-quarter-seasonal.js');
    loadResource('css', '//www.hungbok.net/css/games-quarter-seasonal.css');
} else {
    // .all 클래스 추가
    document.getElementById('calendar').classList.add('all');
    // 일반 스크립트와 CSS 불러오기
    loadResource('js', 'https://www.hungbok.net/javascript/games-quarter.js');
    loadResource('css', '//www.hungbok.net/css/games-quarter.css');
}