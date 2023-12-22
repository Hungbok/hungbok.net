const setTheme = theme => document.documentElement.className = theme;

function clickme() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}

$(document).ready(function() {

	//Pour afficher le bouton 
	var offset = 120;
	var duration = 500;
	$(window).scroll(function() {
		if (jQuery(this).scrollTop() > offset) {
			$('#topBtn').fadeIn(duration);
		} else {
			$('#topBtn').fadeOut(duration);
		}
	});

    $("body").prepend('<header class="nav-down">' +
        '<nav class="nav-header">' +
            '<div class="header-refresh">' +
                '<a href="/">' +
                    '<img src="https://www.hungbok.net/img/hungbok/hb_square.svg">' +
                '</a>' +
            '</div>' +
            '<div class="header-menu nav-tv">' +
                '<a href="/tv-series">' +
                    '티비'+
                '</a>' +
            '</div>' +
            '<div class="header-menu nav-movie">' +
                '<a href="/movie">' +
                    '영화'+
                '</a>' +
            '</div>' +
            '<div class="header-menu nav-anime">' +
                '<a href="/anime">' +
                    '애니'+
                '</a>' +
            '</div>' +
            '<div class="header-menu nav-games">' +
                '<a href="/games">' +
                    '게임'+
                '</a>' +
            '</div>' +
            '<div class="header-menu nav-books">' +
                '<a href="/books">' +
                    '도서'+
                '</a>' +
            '</div>' +
            '<div class="header-menu nav-music">' +
                '<a href="/music">' +
                    '음악'+
                '</a>' +
            '</div>' +
        '</nav>' +
        '<div class="search-container">' +
            '<a class="search-icon" href="/search">' +
                '<img src="https://www.hungbok.net/img/icon/search.svg">' +
            '</a>' +
        '</div>' +
        '<div class="help-container">' +
            '<a class="help-icon" href="/support">' +
                '<img src="https://www.hungbok.net/img/icon/help.svg">' +
            '</a>' +
        '</div>' +
        '<div class="language-container">' +
            '<div class="language-icon">' +
                '<img src="https://www.hungbok.net/img/icon/language.svg">' +
            '</div>' +
            '<div class="language-hover"></div>' +
            '<div class="language-lists">' +
                '<div class="language-list">' +
                    '<div class="language-select" data-lang="en">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/us.svg">' +
                        '</div>' +
                        '<div class="language-text">English</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="en-us">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/us.svg">' +
                        '</div>' +
                        '<div class="language-text">영어(미국)</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="en-gb">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/gb.svg">' +
                        '</div>' +
                        '<div class="language-text">영어(영국)</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="en-ca">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/ca.svg">' +
                        '</div>' +
                        '<div class="language-text">영어(캐나다)</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="en-au">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/au.svg">' +
                        '</div>' +
                        '<div class="language-text">영어(호주)</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="cs">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/cz.svg">' +
                        '</div>' +
                        '<div class="language-text">체코어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="de">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/de.svg">' +
                        '</div>' +
                        '<div class="language-text">독일어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="es">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/es.svg">' +
                        '</div>' +
                        '<div class="language-text">스페인어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="es-es">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/es.svg">' +
                        '</div>' +
                        '<div class="language-text">스페인어(스페인)</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="es-mx">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/mx.svg">' +
                        '</div>' +
                        '<div class="language-text">스페인어(멕시코)</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="fi">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/fi.svg">' +
                        '</div>' +
                        '<div class="language-text">핀란드</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="fr">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/fr.svg">' +
                        '</div>' +
                        '<div class="language-text">프랑스어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="fr-fr">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/fr.svg">' +
                        '</div>' +
                        '<div class="language-text">프랑스어(프랑스)</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="fr-ca">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/ca.svg">' +
                        '</div>' +
                        '<div class="language-text">프랑스어(캐나다)</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="hu">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/hu.svg">' +
                        '</div>' +
                        '<div class="language-text">헝가리어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="hi">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/in.svg">' +
                        '</div>' +
                        '<div class="language-text">힌디어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="it">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/it.svg">' +
                        '</div>' +
                        '<div class="language-text">이탈리아어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="nl">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/nl.svg">' +
                        '</div>' +
                        '<div class="language-text">네덜란드어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="pl">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/pl.svg">' +
                        '</div>' +
                        '<div class="language-text">폴란드어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="pt">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/pt.svg">' +
                        '</div>' +
                        '<div class="language-text">포르투갈어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="pt-pt">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/pt.svg">' +
                        '</div>' +
                        '<div class="language-text">포르투갈어(포르투갈)</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="pt-br">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/br.svg">' +
                        '</div>' +
                        '<div class="language-text">포르투갈어(브라질)</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="ru">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/ru.svg">' +
                        '</div>' +
                        '<div class="language-text">러시아어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="ar">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/sa.svg">' +
                        '</div>' +
                        '<div class="language-text">아랍어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="th">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/th.svg">' +
                        '</div>' +
                        '<div class="language-text">태국어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="tr">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/tr.svg">' +
                        '</div>' +
                        '<div class="language-text">튀르키예어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="uk">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/ua.svg">' +
                        '</div>' +
                        '<div class="language-text">우크라이나어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="ja">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/jp.svg">' +
                        '</div>' +
                        '<div class="language-text">日本語</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="ko">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/kr.svg">' +
                        '</div>' +
                        '<div class="language-text">한국어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="zh">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/cn.svg">' +
                        '</div>' +
                        '<div class="language-text">중국어</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="zh-cn">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/cn.svg">' +
                        '</div>' +
                        '<div class="language-text">중국어(간체)</div>' +
                    '</div>' +
                    '<div class="language-line"></div>' +
                    '<div class="language-select" data-lang="zh-tw">' +
                        '<div class="language-flag">' +
                            '<img src="https://www.hungbok.net/img/flag/tw.svg">' +
                        '</div>' +
                        '<div class="language-text">중국어(번체)</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="toggle-container">' +
            '<button class="theme-btn light" onclick="setTheme(`light`)">'+
                '<img src="https://www.hungbok.net/img/icon/light_mode.svg">'+
            '</button>' +
            '<button class="theme-btn dark" onclick="setTheme(`dark`)">'+
                '<img src="https://www.hungbok.net/img/icon/dark_mode.svg">'+
            '</button>' +
        '</div>' +
    '</header>');
    
    // Find all elements with the class 'language-select'
    var clickableElements = document.querySelectorAll('.language-select');
    
    // Attach a click event listener to each clickable element
    clickableElements.forEach(function (element) {
      element.addEventListener('click', function () {
        // Get the value of the 'data-lang' attribute of the clicked element
        var selectedLang = this.getAttribute('data-lang');
    
        // Get the current URL
        var currentUrl = window.location.href;
    
        // Extract the domain and path from the current URL
        var domainAndPathRegex = /^(https?:\/\/[^\/]+)(\/[^\/]+)/;
        var domainAndPathMatches = currentUrl.match(domainAndPathRegex);
        var domainAndPath = domainAndPathMatches ? domainAndPathMatches[1] : '';
    
        // Replace the language code in the path and navigate to the new URL
        var newUrl = currentUrl.replace(domainAndPathRegex, '$1/' + selectedLang);
    
        window.location.href = newUrl;
      });
    });
    
	$("body").append('<input id="topBtn" class="goupbtn" type="button" value="▲" onclick="clickme()">');

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5; // 동작의 구현이 시작되는 위치
    var navbarHeight = $('header').outerHeight(); // 영향을 받을 요소를 선택
    
    // 스크롤시에 사용자가 스크롤했다는 것을 알림
    $(window).scroll(function(event) {
        didScroll = true;
    });
    
    // hasScrolled()를 실행하고 didScroll 상태를 재설정
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    // 동작을 구현
    function hasScrolled() {
        // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
        var st = $(this).scrollTop();
    
        // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        }
    
        // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
            $('.header').removeClass('header-down').addClass('header-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
                $('.header').removeClass('header-up').addClass('header-down');
            }
        }
    
        // lastScrollTop 에 현재 스크롤위치를 지정한다.
        lastScrollTop = st;
    }
});

window.onload = function () {
    $('.tab-link').click(function(){
        var tab_id = $(this).attr('data-tab');
    
        $('.tab-link').removeClass('current');
        $('.tab-content').removeClass('current');
    
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
    $('#player1_1.story-card.player').addClass('active');
    var storyCards = document.querySelectorAll('.story-card.player');

    storyCards.forEach(function (card) {
      card.addEventListener('click', function () {
        // 기존에 active 클래스가 적용된 요소에서 클래스 제거
        var activeCard = document.querySelector('.story-card.player.active');
        if (activeCard) {
          activeCard.classList.remove('active');
        }

        // 현재 클릭한 요소에 active 클래스 추가
        card.classList.add('active');

        // playid, playepi, playtitle 값을 가져와서 처리
        const playid = card.getAttribute('playid');
        const playepi = card.getAttribute('playepi');
        const playtitle = card.getAttribute('playtitle');

        const iframe = document.getElementById('player');
        iframe.src = `https://player.vimeo.com/video/${playid}`;
    
        // .player-episode 요소의 텍스트 변경
        const playerEpisode = document.querySelector('.player-episode');
        playerEpisode.textContent = `${playepi}`;
    
        // .player-title 요소의 텍스트 변경
        const playerTitle = document.querySelector('.player-title');
        playerTitle.textContent = `${playtitle}`;
      });
    });

    $("body:not([class]), body.data-undefined").prepend('<section id="unavailable" class="errorpage">'+
        '<svg id="hungbok-logo" data-name="레이어 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">'+
            '<path class="cls-1" d="M959.5,1039.906q-247.454,0-494.908.094c-3.748,0-4.593-.845-4.592-4.593Q460.152,540,460,44.592c0-3.748.844-4.593,4.592-4.592q495.408.151,990.816,0c3.748,0,4.593.844,4.592,4.592q-.152,495.408,0,990.815c0,3.748-.844,4.6-4.592,4.593Q1207.454,1039.837,959.5,1039.906ZM824.719,501.283l1.193-.33c17.27,29.856,34.541,59.712,52.176,90.2-15.2,0-29.5.051-43.8-.036-3.594-.022-6.311.485-6.234,4.984.072,4.175,2.6,4.73,6,4.717,17.5-.069,35-.149,52.489.043,4.819.053,6.373-1.733,6.356-6.457q-.2-54.238-.038-108.479c0-3.551-.34-6.292-4.913-6.264-4.665.028-4.764,2.961-4.758,6.406q.07,43.992-.005,87.983c0,1.625.617,3.482-.987,5.282-1.126-1.914-2.059-3.472-2.967-5.044-17.5-30.278-35.094-60.5-52.367-90.907-2.309-4.064-5.278-4.1-8.688-3.53-3.6.6-3.1,3.713-3.1,6.38q.018,42.242.008,84.484c0,8.332-.054,16.664.019,25,.037,4.156,2.752,6.188,6.542,5,3-.943,3.107-3.377,3.1-6.033q-.075-43.992-.032-87.984Zm266.195,35.337c6.17-6.014,8.61-9.873,9.959-15.594,4.422-18.753-5.224-33.932-24.72-39.051-12.119-3.182-24.481-2.02-36.766-2.224-6.313-.1-6.554.211-6.555,6.366q0,52.194,0,104.388c0,2-.053,4,.01,5.993.077,2.458,1.12,4.313,3.823,4.256,14.615-.307,29.361,1.415,43.788-2.02,13.347-3.179,23.34-10.382,26.778-24.523C1110.947,558.925,1105.938,547.314,1090.914,536.62ZM783.65,525.576c0-14.76-.109-27.422.06-40.08.058-4.316-1.525-5.868-5.864-5.832-18.823.158-37.648.094-56.472.043-3.245-.008-6.066.082-6.163,4.46-.1,4.567,2.67,4.945,6.231,4.927,15.992-.083,31.986.087,47.975-.128,3.758-.051,4.865.945,4.683,4.713-1.169,24.2,1.552,48.436-1.771,72.671-2.037,14.858-9.138,24.35-23.887,26.089-19.481,2.3-32.507-4.326-36.016-25.2a103.6,103.6,0,0,1-1.482-17.4c.04-21.489-.006-42.979.034-64.468,0-2.885-.147-5.367-3.891-5.674-4.031-.33-5.7,1.257-5.676,5.428.127,21.822.024,43.645.12,65.467a93.762,93.762,0,0,0,1.478,17.4c2.376,12.3,6.583,23.53,18.547,29.813,26.93,14.143,55.552-.106,60.484-29.953C784.475,553.119,783.294,538.277,783.65,525.576ZM931.6,540.371c.061-10.653-.327-21.338,2.4-31.793,2.064-7.921,6.022-14.416,13.645-18.135,17.269-8.426,37.247-1.835,45.712,15.2,1.057,2.126,1.819,2.527,4.076,1.6,5.351-2.195,5.977-3.349,3.262-8.534-8.137-15.536-19.732-22.512-44.321-20.261-16.781,1.537-27.483,11.064-31.124,27.2a159.344,159.344,0,0,0-.075,'+
            '68.888c2.113,9.9,7.149,18.725,16.8,23.052,16.487,7.4,33.163,6.8,48.9-2.205,8.778-5.02,13.433-13.064,13.135-23.655-.252-8.99-.138-17.994-.006-26.99.053-3.621-1.349-5.136-5-5.065-7,.135-14,.107-20.993.009-3.238-.045-5.007,1.073-5.061,4.558-.059,3.778,1.9,4.925,5.324,4.818,3.829-.12,7.678.173,11.492-.091,3.2-.222,3.97,1.036,3.879,4.013-.193,6.325-.293,12.672.01,18.99.294,6.144-2.355,10.519-7,14.084-7.734,5.935-16.729,7.046-26.039,6.756-14.439-.449-23.2-7.657-26.737-21.639C931.3,561.031,931.69,550.689,931.6,540.371Zm280.439-3.763c-.059-5.109.113-13.92-1.142-22.712-3.115-21.816-13.859-33.644-34.066-35.525-26.35-2.453-40.779,9.032-45.021,33.042-2.8,15.868-2.1,31.856-1.287,47.825a66.685,66.685,0,0,0,4.233,20.45c4.439,11.659,12.625,18.878,24.894,21.471a57.312,57.312,0,0,0,15.4.941c18.374-1.107,28.979-9.773,34.046-27.577C1212.29,563.3,1212.094,551.808,1212.037,536.608ZM670,540.362q0-26.989.02-53.977c.008-3.491.313-6.791-4.848-6.72-5.3.073-4.577,3.668-4.579,6.97-.008,13.994-.07,27.988.045,41.981.025,3.071-.666,4.375-4.119,4.336q-23.736-.268-47.477.008c-3.455.043-4.1-1.165-4.073-4.272.138-14.326.025-28.654.089-42.98.014-3.268-.085-5.947-4.515-6.049-4.674-.108-4.927,2.615-4.922,6.154q.081,54.227.015,108.453c0,3.339-.152,6.486,4.585,6.555,5.089.073,4.832-3.333,4.824-6.811-.036-15.66.08-31.321-.089-46.979-.038-3.48.5-4.94,4.521-4.872,15.489.262,30.986.234,46.477.017,3.8-.053,4.756,1.114,4.714,4.783-.184,15.99-.033,31.985-.114,47.978-.017,3.453.6,5.911,4.791,5.882,4.225-.029,4.7-2.588,4.689-5.981C669.961,576.679,670,558.52,670,540.362Zm642.925-60.293c-3.223-.8-5.257.885-7.382,3.013q-24.717,24.756-49.591,49.358c-4.789,4.761-4.8,5.351-.134,9.993q27.808,27.673,55.63,55.334a9.366,9.366,0,0,0,2.159,2.055c3.065,1.451,6.634,2.243,9.142-.252,2.9-2.888-.658-4.637-2.359-6.337-17.56-17.544-35.118-35.09-52.851-52.459-2.66-2.605-2.711-3.875-.017-6.507,16.089-15.713,31.987-31.623,47.886-47.529,1.394-1.395,4.061-2.435,2.832-5.2C1317.146,479.087,1314.744,480.316,1312.923,480.069Zm-62.014,60.077c0-18.308-.036-36.615.033-54.923.012-3.269-.593-5.462-4.542-5.547-4.2-.091-4.913,2.147-4.907,5.681q.095,54.924.008,109.849c0,3.262.64,5.54,4.531,5.612,4.108.075,4.931-2.211,4.915-5.748C1250.864,576.763,1250.908,558.454,1250.909,540.146Z" transform="translate(-460 -40)"/>'+
            '<path class="cls-2" d="M824.719,501.283v5.408q0,43.992.032,87.984c0,2.656-.1,5.09-3.1,6.033-3.79,1.19-6.5-.842-6.542-5-.073-8.331-.019-16.663-.019-25q0-42.242-.008-84.484c0-2.667-.5-5.778,3.1-6.38,3.41-.57,6.379-.534,8.688,3.53,17.273,30.406,34.869,60.629,52.367,90.907.908,1.572,1.841,3.13,2.967,5.044,1.6-1.8.984-3.657.987-5.282q.066-43.99.005-87.983c-.006-3.445.093-6.378,4.758-6.406,4.573-.028,4.918,2.713,4.913,6.264q-.082,54.24.038,108.479c.017,4.724-1.537,6.51-6.356,6.457-17.494-.192-34.993-.112-52.489-.043-3.4.013-5.931-.542-6-4.717-.077-4.5,2.64-5.006,6.234-4.984,14.3.087,28.605.036,43.8.036-17.635-30.488-34.906-60.344-52.176-90.2Z" transform="translate(-460 -40)"/>'+
            '<path class="cls-2" d="M1090.914,536.62c15.024,10.694,20.033,22.3,16.317,37.591-3.438,14.141-13.431,21.344-26.778,24.523-14.427,3.435-29.173,1.713-43.788,2.02-2.7.057-3.746-1.8-3.823-4.256-.063-2-.01-4-.01-5.993q0-52.194,0-104.388c0-6.155.242-6.471,6.555-6.366,12.285.2,24.647-.958,36.766,2.224,19.5,5.119,29.142,20.3,24.72,39.051C1099.524,526.747,1097.084,530.606,1090.914,536.62Zm-48.8,3.649v38.438c0,12.447,0,12.434,12.276,12.451,9.648.013,19.306.283,28.574-3.222,10.547-3.988,15.714-11.021,15.79-21.758.076-10.7-4.992-17.987-15.419-22.1-2.783-1.1-5.669-1.946-8.4-3.146-2.773-1.216-3.049-3.986-.529-5.667,2.623-1.749,5.484-3.135,8.2-4.752,5.307-3.162,8.614-7.682,9.413-13.927,1.7-13.287-4.443-21.989-18.167-25.466-8.8-2.229-17.8-1.969-26.787-2.155-3.811-.079-5.122.768-5.051,4.879C1042.278,509.315,1042.119,524.793,1042.118,540.269Z" transform="translate(-460 -40)"/>'+
            '<path class="cls-2" d="M783.65,525.576c-.356,12.7.825,27.543-1.61,42.284-4.932,29.847-33.554,44.1-60.484,29.953C709.592,591.53,705.385,580.3,703.009,568a93.762,93.762,0,0,1-1.478-17.4c-.1-21.822.007-43.645-.12-65.467-.024-4.171,1.645-5.758,5.676-5.428,3.744.307,3.9,2.789,3.891,5.674-.04,21.489.006,42.979-.034,64.468a103.6,103.6,0,0,0,1.482,17.4c3.509,20.87,16.535,27.494,36.016,25.2,14.749-1.739,21.85-11.231,23.887-26.089,3.323-24.235.6-48.474,1.771-72.671.182-3.768-.925-4.764-4.683-4.713-15.989.215-31.983.045-47.975.128-3.561.018-6.331-.36-6.231-4.927.1-4.378,2.918-4.468,6.163-4.46,18.824.051,37.649.115,56.472-.043,4.339-.036,5.922,1.516,5.864,5.832C783.541,498.154,783.65,510.816,783.65,525.576Z" transform="translate(-460 -40)"/>'+
            '<path class="cls-2" d="M931.594,540.371c.1,10.318-.291,20.66,2.275,30.806,3.536,13.982,12.3,21.19,26.737,21.639,9.31.29,18.3-.821,26.039-6.756,4.647-3.565,7.3-7.94,7-14.084-.3-6.318-.2-12.665-.01-18.99.091-2.977-.681-4.235-3.879-4.013-3.814.264-7.663-.029-11.492.091-3.428.107-5.383-1.04-5.324-4.818.054-3.485,1.823-4.6,5.061-4.558,7,.1,14,.126,20.993-.009,3.653-.071,5.055,1.444,5,5.065-.132,9-.246,18,.006,26.99.3,10.591-4.357,18.635-13.135,23.655-15.739,9-32.415,9.6-48.9,2.205-9.647-4.327-14.683-13.155-16.8-23.052a159.344,159.344,0,0,1,.075-68.888c3.641-16.14,14.343-25.667,31.124-27.2,24.589-2.251,36.184,4.725,44.321,20.261,2.715,5.185,2.089,6.339-3.262,8.534-2.257.926-3.019.525-4.076-1.6-8.465-17.036-28.443-23.627-45.712-15.2-7.623,3.719-11.581,10.214-13.645,18.135C931.271,519.033,931.659,529.718,931.594,540.371Z" transform="translate(-460 -40)"/>'+
            '<path class="cls-2" d="M1212.037,536.608c.057,15.2.253,26.691-2.942,37.915-5.067,17.8-15.672,26.47-34.046,27.577a57.312,57.312,0,0,1-15.4-.941c-12.269-2.593-20.455-9.812-24.894-21.471a66.685,66.685,0,0,1-4.233-20.45c-.812-15.969-1.517-31.957,1.287-47.825,4.242-24.01,18.671-35.5,45.021-33.042,20.207,1.881,30.951,13.709,34.066,35.525C1212.15,522.688,1211.978,531.5,1212.037,536.608Zm-72.469,3.374c.1,8.981-.3,17.988,1.332,26.893,1.565,8.556,4.338,16.393,12.09,21.523,18.763,12.414,43.849,2.282,47.82-19.686,3.221-17.819,2.671-35.829.638-53.736-1.01-8.9-3.824-17.27-11.827-22.75-6.416-4.394-13.686-4.866-21.078-4.546-15.122.652-23.19,7.4-26.815,22.006C1139.249,519.675,1139.684,529.84,1139.568,539.982Z" transform="translate(-460 -40)"/>'+
            '<path class="cls-2" d="M670,540.362c0,18.158-.038,36.317.033,54.476.014,3.393-.464,5.952-4.689,5.981-4.194.029-4.808-2.429-4.791-5.882.081-15.993-.07-31.988.114-47.978.042-3.669-.911-4.836-4.714-4.783-15.491.217-30.988.245-46.477-.017-4.024-.068-4.559,1.392-4.521,4.872.169,15.658.053,31.319.089,46.979.008,3.478.265,6.884-4.824,6.811-4.737-.069-4.587-3.216-4.585-6.555q.045-54.226-.015-108.453c0-3.539.248-6.262,4.922-6.154,4.43.1,4.529,2.781,4.515,6.049-.064,14.326.049,28.654-.089,42.98-.03,3.107.618,4.315,4.073,4.272q23.736-.293,47.477-.008c3.453.039,4.144-1.265,4.119-4.336-.115-13.993-.053-27.987-.045-41.981,0-3.3-.72-6.9,4.579-6.97,5.161-.071,4.856,3.229,4.848,6.72Q669.955,513.373,670,540.362Z" transform="translate(-460 -40)"/>'+
            '<path class="cls-2" d="M1312.923,480.069c1.821.247,4.223-.982,5.315,1.471,1.229,2.763-1.438,3.8-2.832,5.2-15.9,15.906-31.8,31.816-47.886,47.529-2.694,2.632-2.643,3.9.017,6.507,17.733,17.369,35.291,34.915,52.851,52.459,1.7,1.7,5.263,3.449,2.359,6.337-2.508,2.5-6.077,1.7-9.142.252a9.366,9.366,0,0,1-2.159-2.055q-27.817-27.665-55.63-55.334c-4.664-4.642-4.655-5.232.134-9.993q24.807-24.668,49.591-49.358C1307.666,480.954,1309.7,479.272,1312.923,480.069Z" transform="translate(-460 -40)"/>'+
            '<path class="cls-2" d="M1250.908,540.146c0,18.308-.044,36.617.039,54.924.016,3.537-.807,5.823-4.915,5.748-3.891-.072-4.536-2.35-4.531-5.612q.073-54.924-.008-109.849c-.006-3.534.711-5.772,4.907-5.681,3.949.085,4.554,2.278,4.542,5.547C1250.873,503.531,1250.909,521.838,1250.908,540.146Z" transform="translate(-460 -40)"/>'+
            '<path class="cls-1" d="M1042.118,540.269c0-15.476.16-30.954-.106-46.424-.071-4.111,1.24-4.958,5.051-4.879,8.985.186,17.988-.074,26.787,2.155,13.724,3.477,19.869,12.179,18.167,25.466-.8,6.245-4.106,10.765-9.413,13.927-2.714,1.617-5.575,3-8.2,4.752-2.52,1.681-2.244,4.451.529,5.667,2.735,1.2,5.621,2.048,8.4,3.146,10.427,4.112,15.5,11.4,15.419,22.1-.076,10.737-5.243,17.77-15.79,21.758-9.268,3.5-18.926,3.235-28.574,3.222-12.276-.017-12.276,0-12.276-12.451Z" transform="translate(-460 -40)"/>'+
            '<path class="cls-1" d="M1139.567,539.981c.117-10.141-.318-20.306,2.161-30.3,3.625-14.606,11.693-21.354,26.815-22.006,7.392-.32,14.662.152,21.078,4.546,8,5.48,10.817,13.849,11.827,22.75,2.033,17.907,2.583,35.917-.638,53.736-3.971,21.968-29.057,32.1-47.82,19.686-7.752-5.13-10.525-12.967-12.09-21.523C1139.271,557.97,1139.668,548.963,1139.567,539.981Z" transform="translate(-460 -40)"/>'+
        '</svg>'+
        '<div class="error404"></div>'+
        '<div class="header-menu nav-back">'+
            '<a href="javascript:history.back()">'+
                '<p>이전 페이지</p>'+
            '</a>'+
        '</div>'+
        '<div class="header-menu nav-home">'+
            '<a href="/">'+
                '<p>홈</p>'+
            '</a>'+
        '</div>'+
        '<div class="header-line"></div>'+
        '<div class="header-menu nav-support">'+
            '<a href="/support">'+
                '<p>지원</p>'+
            '</a>'+
        '</div>'+
    '</section>');

    $("body:not([class]) > #section, body.data-undefined > #section").remove();
};