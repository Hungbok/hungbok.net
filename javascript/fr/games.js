async function loadAsyncScripts() {
    // 동영상 팝업 재생
    await loadScript('//www.hungbok.net/javascript/youtube-popup.js');
    // 이미지 팝업 슬라이드쇼
    await loadScript('//www.hungbok.net/javascript/lightbox.js');
    // 이미지 및 동영상 슬라이드쇼
    await loadScript('//www.hungbok.net/javascript/slick.js');
    await loadScript('//www.hungbok.net/javascript/html_loader.js');
    await loadScript('//www.hungbok.net/javascript/fr/error404.js');
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
        $.getJSON(`//data.hungbok.net/data/games/${queryParam}.json`, function (data) {
            // JSON 데이터를 HTML에 대체삽입
        
            // en 또는 fr 데이터에 접근하는 함수
            function getLocalizedData(data, key) {
                return data['fr'] && data['fr'][key] ? data['fr'][key] : data['en'][key];
            }

            $("#page-title").text(getLocalizedData(data[0], 'title') + ' | HungBok');
            $('body').addClass('body-' + data[0].type + ' ' + getLocalizedData(data[0], 'lang') + ' ' + data[0].age_check);
            $('#report-title').attr('value', 'https://www.hungbok.com' + data[0].page);
    

            // 대체할 값들을 저장한 객체
            var replacement = {
                '{type}': data[0].type,
                '{title}': getLocalizedData(data[0], 'title'),
                '{developer}': data[0].developer,
                '{info_developer}': getLocalizedData(data[0], 'info_developer'),
                '{publisher}': data[0].publisher,
                '{info_publisher}': getLocalizedData(data[0], 'info_publisher'),
                '{platform}': data[0].platform,
                '{release}': getLocalizedData(data[0], 'release'),
                '{genre}': getLocalizedData(data[0], 'genre'),
                '{mode}': getLocalizedData(data[0], 'mode'),
                '{franchise}': getLocalizedData(data[0], 'franchise'),
  
                '{pc}': data[0].pc,
                '{console}': data[0].console,
                '{mobile}': data[0].mobile,
                '{esd}': data[0].esd,
                '{release_date}': getLocalizedData(data[0], 'release_date'),
                '{engine}': getLocalizedData(data[0], 'engine'),
                '{age}': data[0].age,
                '{esrb}': data[0].esrb,
                '{pegi}': data[0].pegi,
                '{iarc}': data[0].iarc,
                '{cero}': data[0].cero,
                '{grac}': data[0].grac,
                '{usk}': data[0].usk,
                '{acb}': data[0].acb,
                '{gsrr}': data[0].gsrr,
                '{rars}': data[0].rars,
                '{classind}': data[0].classind,
                '{appstoreage}': data[0].appstoreage,
  
                '{language}': data[0].language,
                '{language_supported}': data[0].language_supported,
  
                '{social_class1}': data[0].social_class1,
                '{social_link1}': data[0].social_link1,
                '{social_class2}': data[0].social_class2,
                '{social_link2}': data[0].social_link2,
                '{social_class3}': data[0].social_class3,
                '{social_link3}': data[0].social_link3,
                '{social_class4}': data[0].social_class4,
                '{social_link4}': data[0].social_link4,
                '{social_class5}': data[0].social_class5,
                '{social_link5}': data[0].social_link5,
                '{social_class6}': data[0].social_class6,
                '{social_link6}': data[0].social_link6,
                '{social_class7}': data[0].social_class7,
                '{social_link7}': data[0].social_link7,
                '{social_class8}': data[0].social_class8,
                '{social_link8}': data[0].social_link8,
                '{social_class9}': data[0].social_class9,
                '{social_link9}': data[0].social_link9,
                '{social_class10}': data[0].social_class10,
                '{social_link10}': data[0].social_link10,

                '{store_class1}': data[0].store_class1,
                '{store_link1}': data[0].store_link1,
                '{store_class2}': data[0].store_class2,
                '{store_link2}': data[0].store_link2,
                '{store_class3}': data[0].store_class3,
                '{store_link3}': data[0].store_link3,
                '{store_class4}': data[0].store_class4,
                '{store_link4}': data[0].store_link4,
                '{store_class5}': data[0].store_class5,
                '{store_link5}': data[0].store_link5,
                '{store_class6}': data[0].store_class6,
                '{store_link6}': data[0].store_link6,
                '{store_class7}': data[0].store_class7,
                '{store_link7}': data[0].store_link7,
                '{store_class8}': data[0].store_class8,
                '{store_link8}': data[0].store_link8,
                '{store_class9}': data[0].store_class9,
                '{store_link9}': data[0].store_link9,
                '{store_class10}': data[0].store_class10,
                '{store_link10}': data[0].store_link10,
  
                '{attention}': data[0].attention,
                '{plot}': getLocalizedData(data[0], 'plot'),
                '{description}': getLocalizedData(data[0], 'description'),
                '{source}': getLocalizedData(data[0], 'source'),
                '{update}': getLocalizedData(data[0], 'update'),
  
                '{url}': data[0].url,
                '{share}': data[0].share,
                '{page}': data[0].page,
                '{logo}': data[0].logo,
                '{capsule}': data[0].capsule,
                '{poster}': data[0].poster,
                '{thumbnail}': data[0].thumbnail,
                '{franchise1}': data[0].franchise1,
                '{franchise2}': data[0].franchise2,
                '{franchise3}': data[0].franchise3,
                '{franchise4}': data[0].franchise4,
                '{franchise5}': data[0].franchise5,

                '{review}': data[0].review,
                '{rating}': data[0].rating,
                
                '{system_requirements_tab1}': data[0].system_requirements_tab1,
                '{system_requirements_tab2}': data[0].system_requirements_tab2,
                '{system_requirements_tab3}': data[0].system_requirements_tab3,
                '{system_requirements_tab4}': data[0].system_requirements_tab4,
                '{system_requirements_tab5}': data[0].system_requirements_tab5,
                '{minimum_os}': data[0].minimum_os,
                '{minimum_processor}': data[0].minimum_processor,
                '{minimum_memory}': data[0].minimum_memory,
                '{minimum_graphics}': data[0].minimum_graphics,
                '{minimum_storage}': data[0].minimum_storage,
                '{minimum_other}': data[0].minimum_other,
                '{recommended_os}': data[0].recommended_os,
                '{recommended_processor}': data[0].recommended_processor,
                '{recommended_memory}': data[0].recommended_memory,
                '{recommended_graphics}': data[0].recommended_graphics,
                '{recommended_storage}': data[0].recommended_storage,
                '{recommended_other}': data[0].recommended_other,
                '{minimum_os2}': data[0].minimum_os2,
                '{minimum_processor2}': data[0].minimum_processor2,
                '{minimum_memory2}': data[0].minimum_memory2,
                '{minimum_graphics2}': data[0].minimum_graphics2,
                '{minimum_storage2}': data[0].minimum_storage2,
                '{minimum_other2}': data[0].minimum_other2,
                '{recommended_os2}': data[0].recommended_os2,
                '{recommended_processor2}': data[0].recommended_processor2,
                '{recommended_memory2}': data[0].recommended_memory2,
                '{recommended_graphics2}': data[0].recommended_graphics2,
                '{recommended_storage2}': data[0].recommended_storage2,
                '{recommended_other2}': data[0].recommended_other2,
                '{minimum_os3}': data[0].minimum_os3,
                '{minimum_processor3}': data[0].minimum_processor3,
                '{minimum_memory3}': data[0].minimum_memory3,
                '{minimum_graphics3}': data[0].minimum_graphics3,
                '{minimum_storage3}': data[0].minimum_storage3,
                '{minimum_other3}': data[0].minimum_other3,
                '{recommended_os3}': data[0].recommended_os3,
                '{recommended_processor3}': data[0].recommended_processor3,
                '{recommended_memory3}': data[0].recommended_memory3,
                '{recommended_graphics3}': data[0].recommended_graphics3,
                '{recommended_storage3}': data[0].recommended_storage3,
                '{recommended_other3}': data[0].recommended_other3,
                '{minimum_os4}': data[0].minimum_os4,
                '{minimum_processor4}': data[0].minimum_processor4,
                '{minimum_memory4}': data[0].minimum_memory4,
                '{minimum_graphics4}': data[0].minimum_graphics4,
                '{minimum_storage4}': data[0].minimum_storage4,
                '{minimum_other4}': data[0].minimum_other4,
                '{recommended_os4}': data[0].recommended_os4,
                '{recommended_processor4}': data[0].recommended_processor4,
                '{recommended_memory4}': data[0].recommended_memory4,
                '{recommended_graphics4}': data[0].recommended_graphics4,
                '{recommended_storage4}': data[0].recommended_storage4,
                '{recommended_other4}': data[0].recommended_other4,
                '{minimum_os5}': data[0].minimum_os5,
                '{minimum_processor5}': data[0].minimum_processor5,
                '{minimum_memory5}': data[0].minimum_memory5,
                '{minimum_graphics5}': data[0].minimum_graphics5,
                '{minimum_storage5}': data[0].minimum_storage5,
                '{minimum_other5}': data[0].minimum_other5,
                '{recommended_os5}': data[0].recommended_os5,
                '{recommended_processor5}': data[0].recommended_processor5,
                '{recommended_memory5}': data[0].recommended_memory5,
                '{recommended_graphics5}': data[0].recommended_graphics5,
                '{recommended_storage5}': data[0].recommended_storage5,
                '{recommended_other5}': data[0].recommended_other5,
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

            // 통합 const
            const url = data[0].url;
    
            // 반복생성

            var video_value = data[0].videocount; // video 수
            var videoData = [];
            for (var i = 1; i <= video_value; i++) {
                var videoId = data[0]['videoid' + i];
                var videoTitle = getLocalizedData(data[0], 'videotitle' + i);
                var videoServer = data[0]['videoserver' + i];
                videoData.push({
                    id: videoId,
                    title: videoTitle,
                    server: videoServer,
                });
            }
            // video 생성
            videoData.forEach(function(item) {
                $(".slider-main").append('<div class="slider-item">'+
                    '<div class="video-play-button youtube-link" videoid="' + item.id + '">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/games/' + url + '/hb_video_' + item.id + '.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/games/' + url + '/hb_video_' + item.id + '.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<div class="youtube-title">' + item.title + '</div>'+
                    '</div>'+
                '</div>');
                $(".slider-nav").append('<div class="slider-item">'+
                    '<div class="video-play-button">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/games/' + url + '/hb_video_' + item.id + '.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/games/' + url + '/hb_video_' + item.id + '.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</div>'+
                '</div>');
            });
    
            var image_value = data[0].imagecount; // image 수
            var imageData = [];
            for (var i = 1; i <= image_value; i++) {
                var imageImage = 'image_' + i;
                imageData.push({
                    img: imageImage,
                });
            }
            // image 생성
            imageData.forEach(function(item) {
                $(".slider-main").append('<div class="slider-item">'+
                    '<a class="slider-image" href="//media.hungbok.net/image/games/' + url + '/hb_' + item.img + '.jpg" data-lightbox="preview">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/games/' + url + '/hb_' + item.img + '.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/games/' + url + '/hb_' + item.img + '.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</a>'+
                '</div>');
                $(".slider-nav").append('<div class="slider-item">'+
                    '<a class="slider-image">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/games/' + url + '/hb_' + item.img + '.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/games/' + url + '/hb_' + item.img + '.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</a>'+
                '</div>');
            });

            // 얼리엑세스 틀
            $(".early-access").append('<p class="description-title">This Game is an Early Access Game.</p>'+
            '<p>Early Access games are still under development and may change significantly over time. As a result, you may experience unforeseen issues or completely new gameplay elements while playing this game.</p>'+
            '<p>You can play now to experience the game while it\'s being built or wait until it offers a more complete experience.</p>'+
            '<p class="description-link"><a href="https://www.hungbok.com/" target="_blank">Learn More</a></p>');

            // Platform
            $(".platform.pc").append('<div class="icon-pc" ttt="PC"></div>');
            $(".platform.playstation").append('<div class="icon-playstation" ttt="PlayStation"></div>');
            $(".platform.xbox").append('<div class="icon-xbox" ttt="Xbox"></div>');
            $(".platform.nintendo").append('<div class="icon-nintendo" ttt="Nintendo"></div>');
            $(".platform.console").append('<div class="icon-console" ttt="Console"></div>');
            $(".platform.arcade").append('<div class="icon-arcade" ttt="Arcade"></div>');
            $(".platform.mobile").append('<div class="icon-mobile" ttt="Mobile"></div>');
            $(".platform.cloud").append('<div class="icon-cloud" ttt="Cloud"></div>');

            // Store
            $(".platform.steam").append('<div class="icon-steam" ttt="Steam"></div>');
            $(".platform.epicgamesstore").append('<div class="icon-epicgamesstore" ttt="Epic Games Store"></div>');
            $(".platform.gogcom").append('<div class="icon-gogcom" ttt="GOG.com"></div>');
            $(".platform.microsoftstore").append('<div class="icon-microsoftstore" ttt="Microsoft Store"></div>');
            $(".platform.eaapp").append('<div class="icon-eaapp" ttt="EA"></div>');
            $(".platform.ubisoftstore").append('<div class="icon-ubisoftconnect" ttt="Ubisoft Store"></div>');
            $(".platform.battlenet").append('<div class="icon-battlenet" ttt="Battle.net"></div>');
            $(".platform.rockstargamesstore").append('<div class="icon-rockstargameslauncher" ttt="Rockstar Games Store"></div>');
            $(".platform.stove").append('<div class="icon-stove" ttt="Stove"></div>');
            $(".platform.xboxstore").append('<div class="icon-xboxgamesstore" ttt="Xbox Games Store"></div>');
            $(".platform.playstationstore").append('<div class="icon-playstationstore" ttt="PlayStation Store"></div>');
            $(".platform.nintendoeshop").append('<div class="icon-nintendoeshop" ttt="Nintendo eShop"></div>');
            $(".platform.metastore").append('<div class="icon-metastore" ttt="Meta Store"></div>');
            $(".platform.googleplay").append('<div class="icon-googleplay" ttt="Google Play"></div>');
            $(".platform.appstore").append('<div class="icon-appstore" ttt="App Store"></div>');
            $(".platform.galaxystore").append('<div class="icon-galaxystore" ttt="Galaxy Store"></div>');
            $(".platform.dmmgames").append('<div class="icon-dmmgames" ttt="DMM GAMES"></div>');
            $(".platform.dlsite").append('<div class="icon-dlsite" ttt="DLsite"></div>');
            
            $(".platform.windows").append('<div class="icon-windows" ttt="Windows"></div>');
            $(".platform.mac").append('<div class="icon-mac" ttt="macOS"></div>');
            $(".platform.macos").append('<div class="icon-macos" ttt="macOS"></div>');
            $(".platform.linux").append('<div class="icon-linux" ttt="Linux"></div>');

            $(".platform.playstationvr2").append('<div class="icon-playstationvr2" ttt="PlayStation VR2"></div>');
            $(".platform.playstation5").append('<div class="icon-playstation5" ttt="PlayStation 5"></div>');
            $(".platform.playstationvr").append('<div class="icon-playstationvr" ttt="PlayStation VR"></div>');
            $(".platform.playstation4pro").append('<div class="icon-playstation4pro" ttt="PlayStation 4 Pro"></div>');
            $(".platform.playstation4").append('<div class="icon-playstation4" ttt="PlayStation 4"></div>');
            $(".platform.playstationvita").append('<div class="icon-playstationvita" ttt="PlayStation Vita"></div>');
            $(".platform.playstation3").append('<div class="icon-playstation3" ttt="PlayStation 3"></div>');
            $(".platform.playstationportable").append('<div class="icon-playstationportable" ttt="PlayStation Portable"></div>');
            $(".platform.playstation2").append('<div class="icon-playstation2" ttt="PlayStation 2"></div>');
            $(".platform.playstation1").append('<div class="icon-playstation1" ttt="PlayStation"></div>');

            $(".platform.xboxseriesxs").append('<div class="icon-xboxseriesxs" ttt="Xbox Series X|S"></div>');
            $(".platform.xboxseriesx").append('<div class="icon-xboxseriesx" ttt="Xbox Series X"></div>');
            $(".platform.xboxseriess").append('<div class="icon-xboxseriess" ttt="Xbox Series S"></div>');
            $(".platform.xboxonex").append('<div class="icon-xboxonex" ttt="Xbox One X"></div>');
            $(".platform.xboxone").append('<div class="icon-xboxone" ttt="Xbox One"></div>');
            $(".platform.xbox360").append('<div class="icon-xbox360" ttt="Xbox 360"></div>');
            $(".platform.xbox1").append('<div class="icon-xbox1" ttt="Xbox"></div>');

            $(".platform.nintendoswitch").append('<div class="icon-nintendoswitch" ttt="Nintendo Switch"></div>');
            $(".platform.newnintendo3ds").append('<div class="icon-newnintendo3ds" ttt="New Nintendo 3DS"></div>');
            $(".platform.wiiu").append('<div class="icon-wiiu" ttt="Wii U"></div>');
            $(".platform.nintendo3ds").append('<div class="icon-nintendo3ds" ttt="Nintendo 3DS"></div>');
            $(".platform.nintendodsi").append('<div class="icon-nintendodsi" ttt="Nintendo DSi"></div>');
            $(".platform.wii").append('<div class="icon-wii" ttt="Wii"></div>');
            $(".platform.nintendods").append('<div class="icon-nintendods" ttt="Nintendo DS"></div>');
            $(".platform.nintendogamecube").append('<div class="icon-nintendogamecube" ttt="Nintendo Gamecube"></div>');
            $(".platform.gameboyadvance").append('<div class="icon-gameboyadvance" ttt="Game Boy Advance"></div>');
            $(".platform.gameboycolor").append('<div class="icon-gameboycolor" ttt="Game Boy Color"></div>');
            $(".platform.nintendo64").append('<div class="icon-nintendo64" ttt="Nintendo 64"></div>');
            $(".platform.virtualboy").append('<div class="icon-virtualboy" ttt="Virtual Boy"></div>');
            $(".platform.superfamicom").append('<div class="icon-superfamicom" ttt="Super Famicom"></div>');
            $(".platform.gameboy").append('<div class="icon-gameboy" ttt="Game Boy"></div>');
            $(".platform.familycomputer").append('<div class="icon-familycomputer" ttt="Family Computer"></div>');
            $(".platform.gameandwatch").append('<div class="icon-gameandwatch" ttt="GAME & WATCH"></div>');

            $(".platform.ios").append('<div class="icon-ios" ttt="iOS"></div>');
            $(".platform.ipados").append('<div class="icon-ipados" ttt="iPadOS"></div>');
            $(".platform.android").append('<div class="icon-android" ttt="Android"></div>');

            $(".platform.xboxcloudgaming").append('<div class="icon-xboxcloudgaming" ttt="Xbox Cloud Gaming"></div>');
            $(".platform.amazonluna").append('<div class="icon-amazonluna" ttt="Amazon Luna"></div>');
            $(".platform.geforcenow").append('<div class="icon-geforcenow" ttt="Geforce Now"></div>');
            $(".platform.stadia").append('<div class="icon-stadia" ttt="Stadia"></div>');
    
            const opencritic_link = data[0].openlink;
            const opencritic_rating_score = data[0].openrasc;
            let opencritic_score = data[0].opensc;
            const opencritic_recommend_score = data[0].openresc;

            let opencritic_rating = data[0].openrasc;
            if (opencritic_rating_score === 'mighty') {
                opencritic_rating = 'Super';
            }
            if (opencritic_rating_score === 'strong') {
                opencritic_rating = 'Très bien';
            }
            if (opencritic_rating_score === 'fair') {
                opencritic_rating = 'Passable';
            }
            if (opencritic_rating_score === 'weak') {
                opencritic_rating = 'Mauvais';
            }
    
            const appstore_link = data[0].appstorelink;
            let appstore_score = data[0].appstoresc;
            let appstore_percent = appstore_score * 20;
    
            const googleplay_link = data[0].googleplaylink;
            let googleplay_score = data[0].googleplaysc;
            let googleplay_percent = googleplay_score * 20;
    
            const microsoft_link = data[0].mslink;
            let microsoft_score = data[0].mssc;
            let microsoft_percent = microsoft_score * 20;
    
            const xbox_link = data[0].xboxlink;
            let xbox_score = data[0].xboxsc;
            let xbox_percent = xbox_score * 20;
    
            const playstation_link = data[0].playstationlink;
            let playstation_score = data[0].playstationsc;
            let playstation_percent = playstation_score * 20;
    
            let steam_link = data[0].steamlink;
            let steam_score = data[0].steamsc;
            const steam_percent = data[0].steamper;
            let steam_userscore_score = data[0].steamusersc;
            const steam_userscore_percent = data[0].steamuserper;
            
            let steam_rating = data[0].steamsc;
            if (steam_score === 'op') {
                steam_rating = 'extrêmement positives';
            }
            if (steam_score === 'vp') {
                steam_rating = 'très positives';
            }
            if (steam_score === 'p') {
                steam_rating = 'positives';
            }
            if (steam_score === 'mp') {
                steam_rating = 'plutôt positives';
            }
            if (steam_score === 'm') {
                steam_rating = 'moyennes';
            }
            if (steam_score === 'mn') {
                steam_rating = 'plutôt négatives';
            }
            if (steam_score === 'n') {
                steam_rating = 'négatives';
            }
            if (steam_score === 'vn') {
                steam_rating = 'très négatives';
            }
            if (steam_score === 'on') {
                steam_rating = 'extrêmement négatives';
            }
            
            let steam_userscore_rating = data[0].steamusersc;
            if (steam_userscore_score === 'op') {
                steam_userscore_rating = 'extrêmement positives';
            }
            if (steam_userscore_score === 'vp') {
                steam_userscore_rating = 'très positives';
            }
            if (steam_userscore_score === 'p') {
                steam_userscore_rating = 'positives';
            }
            if (steam_userscore_score === 'mp') {
                steam_userscore_rating = 'plutôt positives';
            }
            if (steam_userscore_score === 'm') {
                steam_userscore_rating = 'moyennes';
            }
            if (steam_userscore_score === 'mn') {
                steam_userscore_rating = 'plutôt négatives';
            }
            if (steam_userscore_score === 'n') {
                steam_userscore_rating = 'négatives';
            }
            if (steam_userscore_score === 'vn') {
                steam_userscore_rating = 'très négatives';
            }
            if (steam_userscore_score === 'on') {
                steam_userscore_rating = 'extrêmement négatives';
            }
    
            const epicgames_link = data[0].epiclink;
            let epicgames_score = data[0].epicsc;
            let epicgames_percent = epicgames_score * 20;
    
            const gog_link = data[0].goglink;
            let gog_score = data[0].gogsc;
            let gog_percent = gog_score * 20;
            
            $(".rating.metacritic").append('<div class="rating-card metacritic rating-three-score">'+
                '<div class="rating-image">'+
                    '<img title="Metacritic" src="//media.hungbok.net/image/logo/metacritic.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
            '</div>');
    
            var metacritic_value = data[0].metacount;
            var metacriticData = [];
            for (var i = 1; i <= metacritic_value; i++) {
                var metaPlatform = data[0]['metaplatform' + i];
                var metaLink = data[0].metalink;
                var metaScore = data[0]['metasc' + i];
                var metaUserScore = data[0]['metausersc' + i];
                var metaTTT = data[0]['metaplatform' + i];
                if (metaPlatform === 'pc') {
                    metaTTT = 'PC';
                }
                if (metaPlatform === 'playstation1') {
                    metaTTT = 'PlayStation';
                }
                if (metaPlatform === 'playstation2') {
                    metaTTT = 'PlayStation 2';
                }
                if (metaPlatform === 'playstationportable') {
                    metaTTT = 'PlayStation Portable';
                }
                if (metaPlatform === 'playstation3') {
                    metaTTT = 'PlayStation 3';
                }
                if (metaPlatform === 'playstationvita') {
                    metaTTT = 'PlayStation Vita';
                }
                if (metaPlatform === 'playstation4') {
                    metaTTT = 'PlayStation 4';
                }
                if (metaPlatform === 'playstation5') {
                    metaTTT = 'PlayStation 5';
                }
                if (metaPlatform === 'xbox1') {
                    metaTTT = 'Xbox';
                }
                if (metaPlatform === 'xbox360') {
                    metaTTT = 'Xbox 360';
                }
                if (metaPlatform === 'xboxone') {
                    metaTTT = 'Xbox One';
                }
                if (metaPlatform === 'xboxseriesxs') {
                    metaTTT = 'Xbox Series X|S';
                }
                if (metaPlatform === 'nintendo64') {
                    metaTTT = 'Nintendo 64';
                }
                if (metaPlatform === 'gameboyadvance') {
                    metaTTT = 'Game Boy Advance';
                }
                if (metaPlatform === 'nintendogamecube') {
                    metaTTT = 'Nintendo Gamecube';
                }
                if (metaPlatform === 'nintendods') {
                    metaTTT = 'Nintendo DS';
                }
                if (metaPlatform === 'wii') {
                    metaTTT = 'Wii';
                }
                if (metaPlatform === 'nintendo3ds') {
                    metaTTT = 'Nintendo 3DS';
                }
                if (metaPlatform === 'wiiu') {
                    metaTTT = 'Wii U';
                }
                if (metaPlatform === 'nintendoswitch') {
                    metaTTT = 'Nintendo Switch';
                }
                if (metaPlatform === 'ios') {
                    metaTTT = 'iOS';
                }
                var metaPlatformLink = data[0]['metaplatform' + i];
                if (metaPlatform === 'ios') {
                    metaPlatformLink = 'ios-iphoneipad';
                }
                if (metaPlatform === 'playstation1') {
                    metaPlatformLink = 'playstation';
                }
                if (metaPlatform === 'playstation2') {
                    metaPlatformLink = 'playstation-2';
                }
                if (metaPlatform === 'playstationportable') {
                    metaPlatformLink = 'psp';
                }
                if (metaPlatform === 'playstation3') {
                    metaPlatformLink = 'playstation-3';
                }
                if (metaPlatform === 'playstationvita') {
                    metaPlatformLink = 'playstation-vita';
                }
                if (metaPlatform === 'playstation4') {
                    metaPlatformLink = 'playstation-4';
                }
                if (metaPlatform === 'playstation5') {
                    metaPlatformLink = 'playstation-5';
                }
                if (metaPlatform === 'xbox1') {
                    metaPlatformLink = 'xbox';
                }
                if (metaPlatform === 'xbox360') {
                    metaPlatformLink = 'xbox-360';
                }
                if (metaPlatform === 'xboxone') {
                    metaPlatformLink = 'xbox-one';
                }
                if (metaPlatform === 'xboxseriesxs') {
                    metaPlatformLink = 'xbox-series-x';
                }
                if (metaPlatform === 'nintendo64') {
                    metaPlatformLink = 'nintendo-64';
                }
                if (metaPlatform === 'gameboyadvance') {
                    metaPlatformLink = 'game-boy-advance';
                }
                if (metaPlatform === 'nintendogamecube') {
                    metaPlatformLink = 'gamecube';
                }
                if (metaPlatform === 'nintendods') {
                    metaPlatformLink = 'ds';
                }
                if (metaPlatform === 'wii') {
                    metaPlatformLink = 'wii';
                }
                if (metaPlatform === 'nintendo3ds') {
                    metaPlatformLink = '3ds';
                }
                if (metaPlatform === 'wiiu') {
                    metaPlatformLink = 'wii-u';
                }
                if (metaPlatform === 'nintendoswitch') {
                    metaPlatformLink = 'nintendo-switch';
                }
                var metaUserPercent = (metaUserScore * 10).toString();
                metacriticData.push({
                    platform: metaPlatform,
                    link: metaLink,
                    score: metaScore,
                    userscore_score: metaUserScore,
                    ttt: metaTTT,
                    platformLink: metaPlatformLink,
                    userscore_percent: metaUserPercent,
                });
            }
            metacriticData.forEach(function(item) {
                $(".rating-card.metacritic.rating-three-score").append('<div class="rating-card rating-two-score ' + item.platform + '">'+
                    '<div class="rating-platform logo-' + item.platform + '" ttt="' + item.ttt + '"></div>'+
                    '<div class="rating-score">'+
                        '<div class="rating-title">Metascore</div>'+
                        "<a href='https://www.metacritic.com/game/" + item.link + "/critic-reviews/?platform=" + item.platformLink + "' class='rating-star' target='_blank' ttt='" + item.score + " / 100'>"+
                            '<div class="star-ratings">'+
                                '<div class="fill-ratings" style="width: ' + item.score + '%;">'+
                                    '<span>★★★★★</span>'+
                                '</div>'+
                                '<div class="empty-ratings">'+
                                    '<span>★★★★★</span>'+
                                '</div>'+
                            '</div>'+
                        '</a>'+
                    '</div>'+
                    '<div class="rating-score">'+
                        '<div class="rating-title">Score des utilisateurs</div>'+
                        "<a href='https://www.metacritic.com/game/" + item.link + "/user-reviews/?platform=" + item.platformLink + "' class='rating-star' target='_blank' ttt='" + item.userscore_score + " / 10'>"+
                            '<div class="star-ratings">'+
                                '<div class="fill-ratings" style="width: ' + item.userscore_percent + '%;">'+
                                    '<span>★★★★★</span>'+
                                '</div>'+
                                '<div class="empty-ratings">'+
                                    '<span>★★★★★</span>'+
                                '</div>'+
                            '</div>'+
                        '</a>'+
                    '</div>'+
                '</div>');
            });
            
            $(".rating.opencritic").append('<div class="rating-card opencritic rating-three-score">'+
                '<div class="rating-image">'+
                    '<img title="OpenCritic" src="//media.hungbok.net/image/logo/opencritic.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">Évaluation sur OpenCritic</div>'+
                    "<a href='https://opencritic.com/game/" + opencritic_link + "' class='rating-star " + opencritic_rating + "' target='_blank' ttt='" + opencritic_rating + "'>"+
                        '<img src="//media.hungbok.net/image/icon/' + opencritic_rating_score + '.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                    '</a>'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">Moyenne des meilleurs avis</div>'+
                    "<a href='https://opencritic.com/game/" + opencritic_link + "' class='rating-star " + opencritic_score + "' target='_blank' ttt='" + opencritic_score + " / 100'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + opencritic_score + '%;">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">Recommandations de la critique</div>'+
                    "<a href='https://opencritic.com/game/" + opencritic_link + "' class='rating-star " + opencritic_recommend_score + "' target='_blank' ttt='" + opencritic_recommend_score + "% / 100%'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + opencritic_recommend_score + '%;">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.steam").append('<div class="rating-card steam rating-two-score">'+
                '<div class="rating-image">'+
                    '<img title="Steam" src="//media.hungbok.net/image/logo/steam.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">TOUTES LES ÉVAL.</div>'+
                    "<a href='https://store.steampowered.com/app/" + steam_link + "#app_reviews_hash' class='rating-star " + steam_rating + "' target='_blank' ttt='" + steam_rating + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + steam_percent + '%;">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">ÉVALUATIONS RÉCENTES</div>'+
                    "<a href='https://store.steampowered.com/app/" + steam_link + "#app_reviews_hash' class='rating-star " + steam_userscore_rating + "' target='_blank' ttt='" + steam_userscore_rating + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + steam_userscore_percent + '%;">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.epicgames").append('<div class="rating-card epicgames rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Epic Games Store" src="//media.hungbok.net/image/logo/epicgamesstore.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">Score des utilisateurs</div>'+
                    "<a href='https://store.epicgames.com/p/" + epicgames_link + "' class='rating-star " + epicgames_score + "' target='_blank' ttt='" + epicgames_score + " / 5.0'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + epicgames_percent + '%;">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.gog").append('<div class="rating-card gog rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="GOG.com" src="//media.hungbok.net/image/logo/gog.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">Score des utilisateurs</div>'+
                    "<a href='https://www.gog.com/game/" + gog_link + "#reviews' class='rating-star " + gog_score + "' target='_blank' ttt='★" + gog_score + "/5'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + gog_percent + '%;">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.microsoft").append('<div class="rating-card microsoft rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Microsoft Store" src="//media.hungbok.net/image/logo/microsoft.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">Score des utilisateurs</div>'+
                    "<a href='https://apps.microsoft.com/detail/" + microsoft_link + "' class='rating-star " + microsoft_score + "' target='_blank' ttt='" + microsoft_score + "★ / 5.0★'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + microsoft_percent + '%;">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.playstation").append('<div class="rating-card playstation rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="PlayStation Store" src="//media.hungbok.net/image/logo/playstation.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">Score des utilisateurs</div>'+
                    "<a href='https://store.playstation.com/concept/" + playstation_link + "' class='rating-star " + playstation_score + "' target='_blank' ttt='" + playstation_score + "★ / 5.00★'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + playstation_percent + '%;">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.xbox").append('<div class="rating-card xbox rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Xbox Store" src="//media.hungbok.net/image/logo/xbox.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">Score des utilisateurs</div>'+
                    "<a href='https://www.microsoft.com/store/productid/" + xbox_link + "' class='rating-star " + xbox_score + "' target='_blank' ttt='" + xbox_score + "★ / 5.0★'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + xbox_percent + '%;">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.appstore").append('<div class="rating-card appstore rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="App Store" src="//media.hungbok.net/image/logo/appstore.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">Score des utilisateurs</div>'+
                    "<a href='https://apps.apple.com/app/" + appstore_link + "' class='rating-star " + appstore_score + "' target='_blank' ttt='" + appstore_score + " / 5.0'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + appstore_percent + '%;">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.googleplay").append('<div class="rating-card googleplay rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Google Play" src="//media.hungbok.net/image/logo/googleplay.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">Score des utilisateurs</div>'+
                    "<a href='https://play.google.com/store/apps/details?id=" + googleplay_link + "' class='rating-star " + googleplay_score + "' target='_blank' ttt='" + googleplay_score + "★ / 5.0★'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + googleplay_percent + '%;">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');

            $(document).ready(function() {
                // .rating-star.none 클래스를 찾아서 처리합니다.
                $('.rating-star.undefined, .rating-star.none, .rating-star[ttt="- / 100"], .rating-star[ttt="- / 10"], .rating-star[ttt="- / 5"]').each(function() {
                  // 하위 .star-ratings 클래스를 삭제하고 '-'로 대체
                  $(this).find('.star-ratings').remove();
                  $(this).text('-');
                  
                  // .none 클래스를 삭제
                  $(this).removeClass('none');
                });
            });

            window.addEventListener('load', function() {
                var description = document.querySelector('.description');
                var showMore = document.querySelector('.show-more');
                
                if(description.offsetHeight > 300){
                    description.style.maxHeight = "300px";
                    showMore.style.display = "block";
                }
            });

            const data_import_type_first = data[0].data_import_type_first;
            const data_import_first = data[0].data_import_first;
            const data_import_type_second = data[0].data_import_type_second;
            const data_import_second = data[0].data_import_second;
            const data_import_type_third = data[0].data_import_type_third;
            const data_import_third = data[0].data_import_third;

            $(".dlc").append('<p class="description-title">This product is an Expansion Pack or Downloadable Content.</p>'+
            '<p>This content requires one of the following products to play.</p>'+
            '<div>'+
                '<a class="data-import" href="https://www.hungbok.com/' + data_import_type_first + '?q=' + data_import_first + '" target="_blank" data-type={data_import_type_first} data-file={data_import_first}>'+
                    '<div>'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_first + '/' + data_import_first + '/hb_capsule.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="data-import-logo" src="//media.hungbok.net/image/' + data_import_type_first + '/' + data_import_first + '/hb_logo.png" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</div>'+
                '</a>'+
                '<a class="data-import" href="https://www.hungbok.com/' + data_import_type_second + '?q=' + data_import_second + '" target="_blank" data-type={data_import_type_second} data-file={data_import_second}>'+
                    '<div>'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_second + '/' + data_import_second + '/hb_capsule.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="data-import-logo" src="//media.hungbok.net/image/' + data_import_type_second + '/' + data_import_second + '/hb_logo.png" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</div>'+
                '</a>'+
                '<a class="data-import" href="https://www.hungbok.com/' + data_import_type_third + '?q=' + data_import_third + '" target="_blank" data-type={data_import_type_third} data-file={data_import_third}>'+
                    '<div>'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_third + '/' + data_import_third + '/hb_capsule.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="data-import-logo" src="//media.hungbok.net/image/' + data_import_type_third + '/' + data_import_third + '/hb_logo.png" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</div>'+
                '</a>'+
            '</div>');

            $(".add-on").append('<p class="description-title">This product is an Mod or Add-on.</p>'+
            '<p>This content requires the following product to play.</p>'+
            '<div>'+
                '<a class="data-import" href="https://www.hungbok.com/' + data_import_type_first + '?q=' + data_import_first + '" target="_blank" data-type={data_import_type_first} data-file={data_import_first}>'+
                    '<div>'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_first + '/' + data_import_first + '/hb_capsule.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="data-import-logo" src="//media.hungbok.net/image/' + data_import_type_first + '/' + data_import_first + '/hb_logo.png" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</div>'+
                '</a>'+
                '<a class="data-import" href="https://www.hungbok.com/' + data_import_type_second + '?q=' + data_import_second + '" target="_blank" data-type={data_import_type_second} data-file={data_import_second}>'+
                    '<div>'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_second + '/' + data_import_second + '/hb_capsule.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="data-import-logo" src="//media.hungbok.net/image/' + data_import_type_second + '/' + data_import_second + '/hb_logo.png" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</div>'+
                '</a>'+
                '<a class="data-import" href="https://www.hungbok.com/' + data_import_type_third + '?q=' + data_import_third + '" target="_blank" data-type={data_import_type_third} data-file={data_import_third}>'+
                    '<div>'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_third + '/' + data_import_third + '/hb_capsule.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="data-import-logo" src="//media.hungbok.net/image/' + data_import_type_third + '/' + data_import_third + '/hb_logo.png" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</div>'+
                '</a>'+
            '</div>');

            $(".mode").append('<p class="description-title">This product is in Mode.</p>'+
            '<p>Included in the following product.</p>'+
            '<div>'+
                '<a class="data-import" href="https://www.hungbok.com/' + data_import_type_first + '?q=' + data_import_first + '" target="_blank" data-type={data_import_type_first} data-file={data_import_first}>'+
                    '<div>'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_first + '/' + data_import_first + '/hb_capsule.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="data-import-logo" src="//media.hungbok.net/image/' + data_import_type_first + '/' + data_import_first + '/hb_logo.png" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</div>'+
                '</a>'+
                '<a class="data-import" href="https://www.hungbok.com/' + data_import_type_second + '?q=' + data_import_second + '" target="_blank" data-type={data_import_type_second} data-file={data_import_second}>'+
                    '<div>'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_second + '/' + data_import_second + '/hb_capsule.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="data-import-logo" src="//media.hungbok.net/image/' + data_import_type_second + '/' + data_import_second + '/hb_logo.png" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</div>'+
                '</a>'+
                '<a class="data-import" href="https://www.hungbok.com/' + data_import_type_third + '?q=' + data_import_third + '" target="_blank" data-type={data_import_type_third} data-file={data_import_third}>'+
                    '<div>'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_third + '/' + data_import_third + '/hb_capsule.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="data-import-logo" src="//media.hungbok.net/image/' + data_import_type_third + '/' + data_import_third + '/hb_logo.png" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</div>'+
                '</a>'+
            '</div>');

            document.body.innerHTML = document.body.innerHTML
            .replace(/{data_import_type_first}/g, data[0].data_import_type_first)
            .replace(/{data_import_first}/g, data[0].data_import_first)
            .replace(/{data_import_type_second}/g, data[0].data_import_type_second)
            .replace(/{data_import_second}/g, data[0].data_import_second)
            .replace(/{data_import_type_third}/g, data[0].data_import_type_third)
            .replace(/{data_import_third}/g, data[0].data_import_third);
            
            function loadJSON(file, callback) {
                var xhr = new XMLHttpRequest();
                xhr.overrideMimeType("application/json");
                xhr.open('GET', file, true);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        callback(xhr.responseText);
                    }
                };
                xhr.send(null);
            }
            
            function updateElementWithData(element) {
                var elementType = element.getAttribute('data-type');
                var elementId = element.getAttribute('data-file');
                var jsonFile = '//data.hungbok.net/data/' + elementType + '/' + elementId + '.json';
            
                loadJSON(jsonFile, function (response) {
                    var jsonData = JSON.parse(response);
                    var placeholders = element.querySelectorAll('[data-placeholder]');
            
                    placeholders.forEach(function (placeholder) {
                        var key = placeholder.getAttribute('data-placeholder');
                        if (jsonData[0]) { // jsonData가 배열이고 최소 하나의 요소를 포함하는지 확인합니다.
                            placeholder.innerText = getLocalizedData(jsonData[0], key);
                        }
                    });
                });
            }
            
            var dataImportElements = document.querySelectorAll('.data-import');
            
            dataImportElements.forEach(function (element) {
                updateElementWithData(element);
            });
            
            $(document).ready(function() {
            
                // 쿠키를 설정하는 함수
                function setCookie(name, value, hours) {
                    const date = new Date();
                    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
                    const expires = "expires=" + date.toUTCString();
                    document.cookie = name + "=" + value + ";" + expires + ";path=/";
                }
            
                // 쿠키를 가져오는 함수
                function getCookie(name) {
                    const cname = name + "=";
                    const decodedCookie = decodeURIComponent(document.cookie);
                    const ca = decodedCookie.split(';');
                    for (let i = 0; i < ca.length; i++) {
                        let c = ca[i];
                        while (c.charAt(0) == ' ') {
                            c = c.substring(1);
                        }
                        if (c.indexOf(cname) == 0) {
                            return c.substring(cname.length, c.length);
                        }
                    }
                    return "";
                }
            
                // 페이지 로드 시 실행되는 로직
                if ($('body').hasClass('adult')) {
                    const ageCheck = getCookie('agecheck');
                    if (!ageCheck) {
                        $('#warning').show();
                        $('body.adult > main > .section').remove();
                    }
                }
            
                // 나이 확인 버튼 클릭 이벤트
                $('#age-checking').click(function() {
                    const year = parseInt(document.getElementById('age-check-year').value);
                    const month = parseInt(document.getElementById('age-check-month').value) - 1; // JavaScript의 Date 객체는 월을 0부터 시작하므로 1을 빼줍니다.
                    const day = parseInt(document.getElementById('age-check-day').value);
                    const selectedDate = new Date(year, month, day);
                    const today = new Date();
                    const age = today.getFullYear() - selectedDate.getFullYear();
                    const monthDiff = today.getMonth() - selectedDate.getMonth();
                    const dayDiff = today.getDate() - selectedDate.getDate();
                
                    // 만 나이 계산
                    let adjustedAge = age;
                    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                        adjustedAge--; // 생일이 지나지 않았다면 나이에서 1을 뺍니다.
                    }
                
                    // 만 19세 이상이라면
                    if (adjustedAge >= 18) {
                        setCookie('agecheck', 'success', 24);
                        location.reload();
                    } else {
                        // 만 19세 미만이거나 나이를 확인할 수 없는 경우
                        setCookie('agecheck', 'fail', 24); // 'agecheck' 쿠키를 'fail'로 설정하고, 24시간 동안 유지
                        $('#warning').show(); // #warning 요소 보이기
                        $('.age-check-container').remove(); // .age-check-container 요소 제거
                        $('body.adult > main > .section').remove();
                        $('#warning').append('<div id="child">Désolé, vous ne pouvez pas accéder à ce contenu.</div><a class="age-check-back" onclick="window.history.back()">Retourner</a>'); // #child 요소 추가
                    }
                });
            
                // 쿠키 'agecheck'의 값에 따라 초기 로직 처리
                const ageCheck = getCookie('agecheck');
                if (ageCheck === 'success') {
                    $('body').removeClass('adult'); // 'adult' 클래스 제거
                    $('#warning').remove(); // #warning 요소 숨기기
                } else if (ageCheck === 'fail') {
                    if ($('body').hasClass('adult')) {
                        $('#warning').show(); // #warning 요소 보이기
                        $('.age-check-container').remove(); // .age-check-container 요소 제거
                        $('body.adult > main > .section').remove();
                        $('#warning').append('<div id="child">Désolé, vous ne pouvez pas accéder à ce contenu.</div><a class="age-check-back" onclick="window.history.back()">Retourner</a>'); // #child 요소 추가
                    } else {
                        $('#warning').remove();
                    }
                }
            });
        });
    } else {
        $('body').addClass('fr');
        $('.section').remove();
        $('.top-backgrounds').remove();
        $('main').append('<div class="game-section">'+
            '<div class="owl-carousel custom-carousel owl-theme"></div>'+
            '<div class="progress-container">'+
                '<div class="slide-progress-main">'+
                    '<div class="progressBar"></div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="discover-section" id="dataContainer">'+
            '<div class="discover-contents">'+
                '<div class="discover-title">'+
                    '<a class="discover-text" href="https://www.hungbok.com/fr/games/calendar">Nouvelles sorties</a>'+
                    '<a class="discover-button" href="https://www.hungbok.com/fr/games/calendar">Tout voir</a>'+
                '</div>'+
                '<div class="discover-container new-release"></div>'+
            '</div>'+
            '<div class="discover-contents">'+
                '<div class="discover-title">'+
                    '<a class="discover-text" href="https://www.hungbok.com/fr/games/calendar">Prochaines sorties</a>'+
                    '<a class="discover-button" href="https://www.hungbok.com/fr/games/calendar">Tout voir</a>'+
                '</div>'+
                '<div class="discover-container upcoming-release"></div>'+
            '</div>'+
            '<div class="discover-contents">'+
                '<div class="discover-title">'+
                    '<a class="discover-text" href="https://www.hungbok.com/fr/free-games?category=games">Distribution gratuite</a>'+
                    '<a class="discover-button" href="https://www.hungbok.com/fr/free-games?category=games">Tout voir</a>'+
                '</div>'+
                '<div class="discover-container free-games" id="freegamesContainer"></div>'+
            '</div>'+
            '<div class="discover-contents">'+
                '<div class="discover-title">'+
                    '<a class="discover-text" href="https://www.hungbok.com/fr/games/sales">Dernières réductions</a>'+
                    '<a class="discover-button" href="https://www.hungbok.com/fr/games/sales">Tout voir</a>'+
                '</div>'+
                '<div class="discover-container" id="upcomingContainer"></div>'+
            '</div>'+
            '<div class="discover-contents">'+
                '<div class="discover-title">'+
                    '<a class="discover-text" href="https://www.hungbok.com/fr/free-games?category=bundle">Nouveaux packs</a>'+
                    '<a class="discover-button" href="https://www.hungbok.com/fr/free-games?category=bundle">Tout voir</a>'+
                '</div>'+
                '<div class="discover-container free-games" id="bundleContainer"></div>'+
            '</div>'+
            '<div class="discover-contents">'+
                '<div class="discover-title">'+
                    '<a class="discover-text" href="https://www.hungbok.com/fr/games/list">Nouveautés</a>'+
                    '<a class="discover-button" href="https://www.hungbok.com/fr/games/list">Tout voir</a>'+
                '</div>'+
                '<div class="discover-container new-added"></div>'+
            '</div>'+
        '</div>');
        // JSON 파일에서 데이터를 불러오는 함수
        async function loadGameData() {
            try {
                // JSON 파일 불러오기
                const response = await fetch('//data.hungbok.net/data/discover/games.json');
                if (!response.ok) {
                    throw new Error('데이터를 불러오는 데 실패했습니다.');
                }
                const games = await response.json();
        
                // 상위 10개의 데이터를 가져옴
                const topGames = games.slice(0, 10);
        
                // 데이터를 HTML로 변환하여 페이지에 추가
                const container = document.querySelector('.owl-carousel.custom-carousel.owl-theme');
                topGames.forEach(game => {
                    // fr 값이 있으면 그 값을, 없으면 en 값을 사용
                    const title = game.fr ? game.fr.title : game.en.title;
                    const summary = game.fr ? game.fr.summary : game.en.summary;
        
                    const gameElement = `
                        <a href="https://www.hungbok.com/${game.type}?q=${game.url}" tabindex="0" class="item" style="background-image: url(${game.image});">
                            <div class="item-desc">
                                <h3>${title}</h3>
                                <p>${summary}</p>
                            </div>
                        </a>
                    `;
                    container.innerHTML += gameElement;
                });
            } catch (error) {
                console.error('오류가 발생했습니다:', error);
            }
        }

        loadGameData();

        window.onload = function() {
            $.getScript('//www.hungbok.net/javascript/owl.carousel.min.js', function() {
                // 스크립트가 성공적으로 로드되고 실행된 후에 실행할 코드를 작성합니다.
                // 이 코드는 your_script.js 파일 내의 함수 또는 기능을 호출할 수 있습니다.
                var $carousel = $('.owl-carousel');
    
                $carousel.children().each( function( index ) {
                  $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
                });
    
                $(document).ready(function() {
                    var $progressBarContainer = $('.slide-progress-main');
                    var $progressBar = $('.progressBar');
                    var $carousel = $('.owl-carousel');
                    var isMouseOver = false;
                    var autoSlideTimeout;
    
                    function autoSlide() {
                        clearTimeout(autoSlideTimeout);
                        autoSlideTimeout = setTimeout(function() {
                            $carousel.trigger('next.owl.carousel');
                        }, 5000);
                    }
    
                    $carousel.owlCarousel({
                        nav: true,
                        loop: true,
                        dots: true,
                        merge: true,
                        center: true,
                        autoplay: false,
                        autoWidth: true,
                        smartSpeed: 1000,
                        onInitialized: function() {
                            startProgressBar();
                            autoSlide();
                            $progressBarContainer.css('bottom', '17.5px');
                            $progressBar.css('opacity', '1');
                        },
                        onTranslate: function() {
                            $progressBarContainer.css('bottom', '-14.5px');
                            $progressBar.css('opacity', '0');
                            resetProgressBar();
                        }
                    }).on('translated.owl.carousel', function(e) {
                        $progressBarContainer.css('bottom', '17.5px');
                        $progressBar.css('opacity', '1');
                        checkMouseAndStartProgressBar();
                    });
    
                    function startProgressBar() {
                        // 진행 바를 0에서 100%까지 5초 동안 채웁니다.
                        $progressBar.css({width: '100%', transition: 'width 5000ms linear'});
                    }
                
                    function resetProgressBar() {
                        // 진행 바를 즉시 0%로 초기화합니다.
                        $progressBar.css({width: '0%', transition: 'none'});
                    }
    
                    function checkMouseAndStartProgressBar() {
                        if (!isMouseOver) {
                            startProgressBar();
                            autoSlide();
                        }
                    }
                
                    $carousel.on('mouseover', function() {
                        $progressBar.css({width: $progressBar.width(), transition: 'none'});
                        isMouseOver = true;
                        clearTimeout(autoSlideTimeout);
                    });
                
                    $carousel.on('mouseleave', function() {
                        isMouseOver = false;
                        startProgressBar();
                        autoSlide();
                    });
                });
    
                $(window).on('resize', function() {
                    $carousel.trigger('next.owl.carousel');
                });
    
                $(document).ready(function () {
                    // 처음 로딩되었을 때 첫번째 활성화된 .owl-item의 .item에 .active 추가
                    $('.owl-stage .owl-item.center .item').addClass('active');
                
                    // 슬라이드 이동 이벤트가 발생할 때마다 실행
                    $('.owl-carousel').on('translated.owl.carousel', function(e) {
                        // 기존에 .active가 있던 .item에서 .active 제거
                        $('.owl-stage .owl-item .item.active').removeClass('active');
                
                        // 새로 .active가 된 첫번째 .owl-item의 .item에 .active 추가
                        $('.owl-stage .owl-item.center .item').addClass('active');
                    });
    
                    $(document).on('click', '.owl-item > div', function() {
                        // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
                        var $speed = 300;  // in ms
                        $carousel.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
                    });
                });
            });
        };

        function formatDateToKR(dateStr) {
            const parts = dateStr.split('-');
            const year = parts[0];
            let month = parts.length > 1 ? parts[1] : "";
            let day = parts.length > 2 ? parts[2] : "";
        
            const months = ["1", "2", "3", "4",
                            "5", "6", "7", "8",
                            "9", "10", "11", "12"];
        
            if (month) { // 월 정보가 있을 경우에만 월 문자열을 처리
                month = months[parseInt(month, 10) - 1]; // 배열은 0부터 시작하므로 1을 빼줌
            }
        
            if (year && month && day) {
                return `${year}년 ${month}월 ${day}일`;
            } else if (year && month) {
                return `${year}년 ${month}월`;
            } else if (year) {
                return `${year}년`;
            } else {
                return ""; // 연도 정보조차 없는 경우 빈 문자열 반환
            }
        }
        
        function formatDateToJP(dateStr) {
            const parts = dateStr.split('-');
            const year = parts[0];
            let month = parts.length > 1 ? parts[1] : "";
            let day = parts.length > 2 ? parts[2] : "";
        
            const months = ["1", "2", "3", "4",
                            "5", "6", "7", "8",
                            "9", "10", "11", "12"];
        
            if (month) { // 월 정보가 있을 경우에만 월 문자열을 처리
                month = months[parseInt(month, 10) - 1]; // 배열은 0부터 시작하므로 1을 빼줌
            }
        
            if (year && month && day) {
                return `${year}年${month}月${day}日`;
            } else if (year && month) {
                return `${year}年${month}月`;
            } else if (year) {
                return `${year}年`;
            } else {
                return ""; // 연도 정보조차 없는 경우 빈 문자열 반환
            }
        }
        
        function formatDateToUS(dateStr) {
            const parts = dateStr.split('-');
            const year = parts[0];
            let month = parts.length > 1 ? parts[1] : "";
            let day = parts.length > 2 ? parts[2] : "";
        
            const months = ["January", "February", "March", "April",
                            "May", "June", "July", "August",
                            "September", "October", "November", "December"];
        
            if (month) { // 월 정보가 있을 경우에만 월 문자열을 처리
                month = months[parseInt(month, 10) - 1]; // 배열은 0부터 시작하므로 1을 빼줌
            }
        
            if (year && month && day) {
                return `${month} ${day}, ${year}`;
            } else if (year && month) {
                return `${month} ${year}`;
            } else if (year) {
                return `${year}`;
            } else {
                return ""; // 연도 정보조차 없는 경우 빈 문자열 반환
            }
        }
        
        function formatDateToUK(dateStr) {
            const parts = dateStr.split('-');
            const year = parts[0];
            let month = parts.length > 1 ? parts[1] : "";
            let day = parts.length > 2 ? parts[2] : "";
        
            const months = ["January", "February", "March", "April",
                            "May", "June", "July", "August",
                            "September", "October", "November", "December"];
        
            if (month) { // 월 정보가 있을 경우에만 월 문자열을 처리
                month = months[parseInt(month, 10) - 1]; // 배열은 0부터 시작하므로 1을 빼줌
            }
        
            if (year && month && day) {
                return `${day} ${month} ${year}`;
            } else if (year && month) {
                return `${month} ${year}`;
            } else if (year) {
                return `${year}`;
            } else {
                return ""; // 연도 정보조차 없는 경우 빈 문자열 반환
            }
        }

        // 현재 연도 및 날짜 계산
        const today = new Date();
        const currentYear = today.getFullYear();
        const apiUrl = `//data.hungbok.net/data/games/${currentYear}.json`;
        const newaddUrl = `//data.hungbok.net/data/games/list.json`;

        // JSON 데이터 불러오기
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                function getLocalizedData(data, key) {
                    if (data['fr'] && key in data['fr'] && data['fr'][key] !== undefined) {
                        return data['fr'][key];
                    } else if (data['en'] && key in data['en'] && data['en'][key] !== undefined) {
                        return data['en'][key];
                    } else {
                        // 데이터가 누락되었거나 해당 언어 설정이 없는 경우
                        return '제목 없음';
                    }
                }

                const validGames = data.filter(game => {
                    const dateParts = game.date.split('-');
                    return dateParts.length === 3 && new Date(game.date) < today; // yyyy-mm-dd 형식이며 오늘 이전인 데이터만 포함
                })
                .sort((a, b) => new Date(b.date) - new Date(a.date)); // 날짜가 큰 데이터부터 정렬
                
                const recentGames = validGames.slice(0, 5);
        
                if (recentGames.length < 5) {
                    document.querySelector('.discover-container.new-release').classList.add('disabled');
                }
                
                const gameFetchPromises = recentGames.map((game, index) => {
                    return fetch(`//data.hungbok.net/data/games/${game.url}.json`)
                        .then(response => response.json())
                        .then(gameData => {
                            const dataToUse = Array.isArray(gameData) && gameData.length > 0 ? gameData[0] : {};
                            const title = getLocalizedData(dataToUse, 'title');
                            const formattedDate = formatDateToUK(game.date);
                            const gameElement = `
                                <div class="discover-content" data-order="${index + 1}">
                                    <div class="discover-item">
                                        <div class="discover-title-time">${formattedDate}</div>
                                        <div class="discover-item-thumbnail discover-thumbnail-hover">
                                            <a href="https://www.hungbok.com/games?q=${game.url}" tabindex="0">
                                                <img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/${game.url}/hb_logo.png" onerror="this.onerror=null; this.src='//media.hungbok.net/image/hb/hb_error.svg'" loading="lazy">
                                                <img class="discover-thumbnail-background" src="//media.hungbok.net/image/games/${game.url}/hb_thumbnail.jpg" onerror="this.onerror=null; this.src='//media.hungbok.net/image/hb/hb_error_vertical.svg'" loading="lazy">
                                                <div class="discover-title-name" title="${title}">${title}</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>`;
                            return gameElement;
                        });
                });
                
                Promise.all(gameFetchPromises).then(gameElements => {
                    const container = document.querySelector('.discover-container.new-release');
                    gameElements.forEach(element => {
                        container.innerHTML += element;
                    });
                    
                    Array.from(container.children)
                        .sort((a, b) => a.getAttribute('data-order') - b.getAttribute('data-order'))
                        .forEach(node => container.appendChild(node));
                });
                
                const validupcomingGames = data.filter(game => {
                    const dateParts = game.date.split('-');
                    return dateParts.length === 3 && new Date(game.date) > today; // yyyy-mm-dd 형식이며 오늘 이전인 데이터만 포함
                })
                .sort((a, b) => new Date(a.date) - new Date(b.date)); // 날짜가 작은 데이터부터 정렬
                
                const upcomingGames = validupcomingGames.slice(0, 5);
        
                if (upcomingGames.length < 5) {
                    document.querySelector('.discover-container.upcoming-release').classList.add('disabled');
                }
                
                const upcominggameFetchPromises = upcomingGames.map((game, index) => {
                    return fetch(`//data.hungbok.net/data/games/${game.url}.json`)
                        .then(response => response.json())
                        .then(gameData => {
                            const dataToUse = Array.isArray(gameData) && gameData.length > 0 ? gameData[0] : {};
                            const title = getLocalizedData(dataToUse, 'title');
                            const formattedDate = formatDateToUK(game.date);
                            const gameElement = `
                                <div class="discover-content" data-order="${index + 1}">
                                    <div class="discover-item">
                                        <div class="discover-title-time">${formattedDate}</div>
                                        <div class="discover-item-thumbnail discover-thumbnail-hover">
                                            <a href="https://www.hungbok.com/games?q=${game.url}" tabindex="0">
                                                <img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/${game.url}/hb_logo.png" onerror="this.onerror=null; this.src='//media.hungbok.net/image/hb/hb_error.svg'" loading="lazy">
                                                <img class="discover-thumbnail-background" src="//media.hungbok.net/image/games/${game.url}/hb_thumbnail.jpg" onerror="this.onerror=null; this.src='//media.hungbok.net/image/hb/hb_error_vertical.svg'" loading="lazy">
                                                <div class="discover-title-name" title="${title}">${title}</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>`;
                            return gameElement;
                        });
                });
                
                Promise.all(upcominggameFetchPromises).then(gameElements => {
                    const container = document.querySelector('.discover-container.upcoming-release');
                    gameElements.forEach(element => {
                        container.innerHTML += element;
                    });
                    
                    Array.from(container.children)
                        .sort((a, b) => a.getAttribute('data-order') - b.getAttribute('data-order'))
                        .forEach(node => container.appendChild(node));
                });
            })
            .catch(error => {
                console.error('Error:', error);
                document.querySelector('.discover-container').classList.add('disabled');
            });

        fetch(newaddUrl)
        .then(response => response.json())
        .then(data => {
            function getLocalizedData(data, key) {
                if (data['fr'] && key in data['fr'] && data['fr'][key] !== undefined) {
                    return data['fr'][key];
                } else if (data['en'] && key in data['en'] && data['en'][key] !== undefined) {
                    return data['en'][key];
                } else {
                    return '제목 없음'; // 데이터가 누락되었거나 해당 언어 설정이 없는 경우
                }
            }
    
            const topGames = data.slice(0, 5);
    
            if (topGames.length < 5) {
                document.querySelector('.discover-container.new-added').classList.add('disabled');
                return;
            }
    
            const fetchPromises = topGames.map((game, index) => 
                fetch(`//data.hungbok.net/data/games/${game.url}.json`)
                .then(response => response.json())
                .then(gameData => {
                    const dataToUse = Array.isArray(gameData) && gameData.length > 0 ? gameData[0] : {};
                    const title = getLocalizedData(dataToUse, 'title');
                    const date = `${game.release_year}-${game.release_month}-${game.release_day}`;
                    const formattedDate = formatDateToUK(date);
                    return {
                        index,
                        gameElement: `
                            <div class="discover-content data-${index+1}">
                                <div class="discover-item">
                                    <div class="discover-title-time">${formattedDate}</div>
                                    <div class="discover-item-thumbnail discover-thumbnail-hover">
                                        <a href="https://www.hungbok.com/games?q=${game.url}" tabindex="0">
                                            <img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/${game.url}/hb_logo.png" onerror="this.onerror=null; this.src='//media.hungbok.net/image/hb/hb_error.svg'" loading="lazy">
                                            <img class="discover-thumbnail-background" src="//media.hungbok.net/image/games/${game.url}/hb_thumbnail.jpg" onerror="this.onerror=null; this.src='//media.hungbok.net/image/hb/hb_error_vertical.svg'" loading="lazy">
                                            <div class="discover-title-name" title="${title}">${title}</div>
                                        </a>
                                    </div>
                                </div>
                            </div>`
                    };
                })
            );
    
            Promise.all(fetchPromises).then(results => {
                results.sort((a, b) => a.index - b.index); // 인덱스로 정렬하여 순서대로 출력
                results.forEach(result => {
                    document.querySelector('.discover-container.new-added').innerHTML += result.gameElement;
                });
            });
        })
        .catch(error => {
            console.error('Error:', error);
            document.querySelector('.discover-container').classList.add('disabled');
        });

        let freegamesData = [];
        let filteredfreegamesData = [];
        let freegamesStart = 0;
        let freegamesLimit = 6;
        
        // 데이터를 가져오는 부분은 변경하지 않았습니다.
        Promise.all([
            fetch('//data.hungbok.net/data/free-games/games.json').then(response => response.json())
        ]).then(results => {
            freegamesData = results.flat();
            // 필터링 로직을 추가하여 조건에 맞는 데이터만 남깁니다.
            filteredfreegamesData = freegamesData.filter(item => {
                let now = new Date();
                let startParts = item.start.split('-');
                let itemStart = new Date(startParts[0], startParts[1] - 1, startParts[2], startParts[3], startParts[4], startParts[5]);
                let endParts = item.end.split('-');
                let itemEnd = new Date(endParts[0], endParts[1] - 1, endParts[2], endParts[3], endParts[4], endParts[5]);
                return now > itemStart && now < itemEnd;
            })
            // 종료 시간이 현재 시간에 가까운 순으로 정렬
            .sort((a, b) => {
                let now = new Date();
                let aEndParts = a.end.split('-');
                let aItemEnd = new Date(aEndParts[0], aEndParts[1] - 1, aEndParts[2], aEndParts[3], aEndParts[4], aEndParts[5]);
                let bEndParts = b.end.split('-');
                let bItemEnd = new Date(bEndParts[0], bEndParts[1] - 1, bEndParts[2], bEndParts[3], bEndParts[4], bEndParts[5]);
                // a가 b보다 종료 시간이 더 가까우면 음수, 더 멀면 양수를 반환
                return aItemEnd - bItemEnd;
            });
            loadMorefreegamesData();
        });
        
        // 아이템을 생성하고 추가하는 함수
        function createAndAppendfreegamesItem(item) {
            let now = new Date();
        
            // 'yyyy-mm-dd-hh-mm-ss' 형식의 문자열을 Date 객체로 변환
            let parts = item.end.split('-');
            let itemEnd = new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
        
            let isExpired = now > itemEnd; // 만료 여부 판단
            let expiredClass = isExpired ? 'expired' : ''; // 만료되었다면 'expired' 클래스를, 아니라면 빈 문자열을 할당
        
            let div = document.createElement('div');
            div.className = `item ${item.type} ${item.content} from-${item.from} esd-${item.esd} ${expiredClass}`;
            div.innerHTML = `
                <a class="item-image" href="${item.link}">
                    <img src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                    <img src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                </a>
                <div class="info">
                    <h1>${item.title}</h1>
                    <div class="timer-container start" settime="${item.start}"></div>
                    <div class="timer-container end" settime="${item.end}"></div>
                    <a class="item-link" href="${item.link}" target="_blank"></a>
                </div>
                <img class="item-background" src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
            `;
            document.getElementById('freegamesContainer').appendChild(div);
        
            // 아이템을 추가한 후에 타이머를 시작합니다.
            startTimer();
        }
        
        // 'loadMorefreegamesData' 함수 수정
        function loadMorefreegamesData() {
            let loadedItems = 0;
            while (loadedItems < freegamesLimit && freegamesStart < filteredfreegamesData.length) {
                let item = filteredfreegamesData[freegamesStart];
                createAndAppendfreegamesItem(item);
                freegamesStart++;
                loadedItems++;
            }
        }

        let bundleData = [];
        let filteredbundleData = [];
        let bundleStart = 0;
        let bundleLimit = 6;
        
        // 데이터를 가져오는 부분은 변경하지 않았습니다.
        Promise.all([
            fetch('//data.hungbok.net/data/free-games/bundle.json').then(response => response.json())
        ]).then(results => {
            bundleData = results.flat();
            // 필터링 로직을 추가하여 조건에 맞는 데이터만 남깁니다.
            filteredbundleData = bundleData.filter(item => {
                let now = new Date();
                let startParts = item.start.split('-');
                let itemStart = new Date(startParts[0], startParts[1] - 1, startParts[2], startParts[3], startParts[4], startParts[5]);
                let endParts = item.end.split('-');
                let itemEnd = new Date(endParts[0], endParts[1] - 1, endParts[2], endParts[3], endParts[4], endParts[5]);
                return now > itemStart && now < itemEnd;
            });
            
            // 'published' 값을 기준으로 정렬합니다. 가장 최근에 추가된 순으로 정렬
            filteredbundleData.sort((a, b) => {
                let aParts = a.published.split('-');
                let aPublished = new Date(aParts[0], aParts[1] - 1, aParts[2], aParts[3], aParts[4], aParts[5]);
                let bParts = b.published.split('-');
                let bPublished = new Date(bParts[0], bParts[1] - 1, bParts[2], bParts[3], bParts[4], bParts[5]);
                return bPublished - aPublished;
            });
        
            loadMorebundleData();
        });
        
        // 아이템을 생성하고 추가하는 함수
        function createAndAppendbundleItem(item) {
            let now = new Date();
        
            // 'yyyy-mm-dd-hh-mm-ss' 형식의 문자열을 Date 객체로 변환
            let parts = item.end.split('-');
            let itemEnd = new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
        
            let isExpired = now > itemEnd; // 만료 여부 판단
            let expiredClass = isExpired ? 'expired' : ''; // 만료되었다면 'expired' 클래스를, 아니라면 빈 문자열을 할당
        
            let div = document.createElement('div');
            div.className = `item ${item.type} ${item.content} from-${item.from} esd-${item.esd} ${expiredClass}`;
            div.innerHTML = `
                <a class="item-image" href="${item.link}">
                    <img src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                    <img src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                </a>
                <div class="info">
                    <h1>${item.title}</h1>
                    <div class="timer-container start" settime="${item.start}"></div>
                    <div class="timer-container end" settime="${item.end}"></div>
                    <a class="item-link" href="${item.link}" target="_blank"></a>
                </div>
                <img class="item-background" src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
            `;
            document.getElementById('bundleContainer').appendChild(div);
        
            // 아이템을 추가한 후에 타이머를 시작합니다.
            startTimer();
        }
        
        // 'loadMorebundleData' 함수 수정
        function loadMorebundleData() {
            let loadedItems = 0;
            while (loadedItems < bundleLimit && bundleStart < filteredbundleData.length) {
                let item = filteredbundleData[bundleStart];
                createAndAppendbundleItem(item);
                bundleStart++;
                loadedItems++;
            }
        }

        let upcomingData = [];
        let filteredUpcomingData = [];
        let upcomingStart = 0;
        let upcomingLimit = 9;
        
        // 데이터를 가져오는 부분은 변경하지 않았습니다.
        Promise.all([
            fetch('//data.hungbok.net/data/games/sales.json').then(response => response.json())
        ]).then(results => {
            upcomingData = results.flat();
            // 필터링 로직을 추가하여 조건에 맞는 데이터만 남깁니다.
            filteredUpcomingData = upcomingData.filter(item => {
                let now = new Date();
                let startParts = item.start.split('-');
                let itemStart = new Date(startParts[0], startParts[1] - 1, startParts[2], startParts[3], startParts[4], startParts[5]);
                let endParts = item.end.split('-');
                let itemEnd = new Date(endParts[0], endParts[1] - 1, endParts[2], endParts[3], endParts[4], endParts[5]);
                return now > itemStart && now < itemEnd;
            });
            loadMoreUpcomingData();
        });
        
        // 아이템을 생성하고 추가하는 함수
        function createAndAppendUpcomingItem(item) {
            let now = new Date();
        
            // 시작 시간 파싱
            let startParts = item.start.split('-');
            let itemStart = new Date(startParts[0], startParts[1] - 1, startParts[2], startParts[3], startParts[4], startParts[5]);
        
            // 종료 시간 파싱
            let endParts = item.end.split('-');
            let itemEnd = new Date(endParts[0], endParts[1] - 1, endParts[2], endParts[3], endParts[4], endParts[5]);
        
            // 현재 시간이 시작 시간 이후이고 종료 시간 이전인지 확인
            if (now > itemStart && now < itemEnd) {
                let div = document.createElement('div');
                div.className = `item ${item.type} ${item.content} from-${item.from} esd-${item.esd}`;
                div.innerHTML = `
                    <a class="item-link" href="${item.link}" target="_blank">
                        <div class="item-image">
                            <img src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                        </div>
                        <h1 class="from-${item.from}">${item.title}</h1>
                        <div class="sale-info">
                            <div class="sale-timer-container">
                                <div class="sale-timer timer-container start" settime="${item.start}"></div>
                                <div class="sale-timer timer-container end" settime="${item.end}"></div>
                            </div>
                        </div>
                        <img class="item-background" src="${item.image}" onerror="this.src='//media.hungbok.net/image/hb/hb_error_horizontal.svg';">
                    </a>
                `;
        
                document.getElementById('upcomingContainer').appendChild(div);
        
                startTimer();
            }
        }
        
        // 'loadMoreUpcomingData' 함수 수정
        function loadMoreUpcomingData() {
            let loadedItems = 0;
            while (loadedItems < upcomingLimit && upcomingStart < filteredUpcomingData.length) {
                let item = filteredUpcomingData[upcomingStart];
                createAndAppendUpcomingItem(item);
                upcomingStart++;
                loadedItems++;
            }
        }
        
        // 서버 시간과 로컬 시간 표시 함수
        function displayTime() {
            let now = new Date(); // 현재 시간을 받아옵니다.
        
            // 컴퓨터의 로컬 시간을 UTC 형식으로 변환합니다.
            let localTime = now.toISOString().slice(0,19).replace('T', ' ');
        
            // 사용자의 시간대를 얻습니다.
            let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
            // UTC+09:00 기준의 서버 시간을 계산하고 UTC 형식으로 변환합니다.
            let serverTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60 * 1000) + (9 * 60 * 60 * 1000));
            serverTime = serverTime.toISOString().slice(0,19).replace('T', ' ');
        }
        
        setInterval(displayTime, 1000); // 1초마다 함수를 반복 실행하여 시간을 업데이트합니다.
        
        // 타이머 기능
        function startTimer() {
            let timerElements = document.querySelectorAll('.timer-container'); // 타이머를 적용할 요소를 선택합니다.
        
            timerElements.forEach(element => { // 각 요소에 대해 반복합니다.
                let setTime = element.getAttribute('settime'); // settime 속성 값을 가져옵니다.
                let setTimeArray = setTime.split('-'); // '-'로 구분된 setTime 값을 배열로 변환합니다.
        
                // setTime 값이 yyyy-mm-dd-hh-mm-ss 형식이므로, Date 객체를 이 형식에 맞게 생성합니다.
                let endDate = new Date(setTimeArray[0], setTimeArray[1] - 1, setTimeArray[2], setTimeArray[3], setTimeArray[4], setTimeArray[5]);
        
                let interval = setInterval(function() { // setInterval 함수로 1초마다 반복합니다.
                    let now = new Date(); // 현재 시간을 가져옵니다.
                    let distance = endDate - now; // 남은 시간을 계산합니다.
        
                    // 시간, 분, 초를 계산합니다.
                    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
                    // 시간, 분, 초를 항상 두 자리 숫자로 표시합니다.
                    hours = hours.toString().padStart(2, '0');
                    minutes = minutes.toString().padStart(2, '0');
                    seconds = seconds.toString().padStart(2, '0');
        
                    // 남은 시간에 따른 클래스를 추가합니다.
                    if (distance <= 0) {
                        element.classList.add('expired');
                    } else if (distance <= 60000 && !element.classList.contains('one-minute-left')) {
                        element.classList.add('one-minute-left');
                    } else if (distance <= 3600000 && !element.classList.contains('one-hour-left')) {
                        element.classList.add('one-hour-left');
                    } else if (distance <= 10800000 && !element.classList.contains('three-hours-left')) {
                        element.classList.add('three-hours-left');
                    } else if (distance <= 21600000 && !element.classList.contains('six-hours-left')) {
                        element.classList.add('six-hours-left');
                    } else if (distance <= 43200000 && !element.classList.contains('twelve-hours-left')) {
                        element.classList.add('twelve-hours-left');
                    } else if (distance <= 86400000 && !element.classList.contains('one-day-left')) {
                        element.classList.add('one-day-left');
                    }
        
                    // 남은 시간이 24시간 미만인 경우에는 'hh:mm:ss' 형식으로, 그 이상인 경우에는 'dd:hh:mm:ss' 형식으로 표시합니다.
                    if (days > 0) {
                        days = days.toString().padStart(2, '0');
                        element.textContent = `${days}:${hours}:${minutes}:${seconds}`;
                    } else {
                        element.textContent = `${hours}:${minutes}:${seconds}`;
                    }
        
                    // 남은 시간이 없으면 타이머를 멈춥니다.
                    if (distance < 0) {
                        clearInterval(interval);
                        element.textContent = "00:00:00";
                    }
                }, 100);
            });
        }
    }
});

window.addEventListener("scroll", function() {
    var scrolledHeight= window.pageYOffset;
    var newPosition = -(scrolledHeight * 0.5);
    var newPosition2 = (scrolledHeight * 0.5);
  
    if (newPosition >= -250 && newPosition <= 0) {
        document.getElementsByClassName("top-background")[0].style.backgroundPosition = "center " + newPosition + "px";
        document.getElementsByClassName("top-background-mirror")[0].style.backgroundPosition = "center " + newPosition + "px";
    }
  
    if (newPosition2 >= 0 && newPosition2 <= 250) {
        document.getElementsByClassName("top-background-shadow")[0].style.transform = "scaleX(1) scaleY(-1) translate(0%, " + newPosition2 + "px)";
    }
});

function showError(image) {
    // URL의 쿼리 매개변수에서 'q'값을 가져옴
    var urlParams = new URLSearchParams(window.location.search);
    var q = urlParams.get('q');

    // JSON 파일 불러오기
    fetch(`//data.hungbok.net/data/games/${q}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // 'title'값을 가져와서 div에 설정
            var div = document.createElement('div');
            function getLocalizedData(data, key) {
                return data['fr'] && data['fr'][key] ? data['fr'][key] : data['en'][key];
            }
            div.innerHTML = getLocalizedData(data[0], 'title');

            // 기존 이미지 대신 div 삽입
            image.parentNode.insertBefore(div, image);
            image.parentNode.removeChild(image);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function hideError(image) {
    image.src = "//media.hungbok.net/image/hb/hb_error_horizontal.svg";
}

function logoError(image) {
    var altText = image.alt;
    var parent = image.parentNode;
    var textNode = document.createTextNode(altText);
    parent.replaceChild(textNode, image);
}

$(document).ready(function(){
    $(document).on('click', '.show-more', function(){
      var $this = $(this);
      var descriptionElement = $this.siblings('.description');
      descriptionElement.toggleClass('open');
  
      if ($this.hasClass('open')) {
        $this.removeClass('open');
      } else {
        $this.addClass('open');
      }
    });
});

function changeTab(evt, tabIndex) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("more-info-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("more-info-tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }
    document.getElementById("tab-content-" + tabIndex).style.display = "block";
    evt.currentTarget.className += " active-tab";
}

// 초기 탭 설정 (예: 첫 번째 탭 활성화)
changeTab({currentTarget: document.getElementsByClassName("more-info-tab")[0]}, 0);

window.addEventListener('load', function() {
    loadAsyncScripts();
});

function completeYear(input) {
    let yearValue = input.value;
    if (yearValue.length === 2) {
        // 입력된 연도가 2자리 숫자일 때
        if (parseInt(yearValue) <= 30) {
            input.value = '20' + yearValue;
        } else if (parseInt(yearValue) >= 31) {
            input.value = '19' + yearValue;
        }
    } else if (yearValue.length === 1) {
        // 입력된 연도가 1자리 숫자일 때 (예: '5' → '2005')
        input.value = '200' + yearValue;
    } else if (yearValue.length === 4) {
        // 입력된 연도가 3자리 숫자일 때 처리 로직 추가 가능
        if (parseInt(yearValue) <= 1900) {
            input.value = '1900';
        } else if (parseInt(yearValue) >= 2030) {
            input.value = '2030';
        }
    }
    // 4자리 숫자일 때는 변경하지 않음
    const year = document.getElementById('age-check-year').value;
    const month = document.getElementById('age-check-month').value;
    const day = document.getElementById('age-check-day').value;
    const btn = document.getElementById('age-checking');

    // 연도, 월, 일 입력 필드가 모두 채워져 있는지 확인
    if (year.length === 4 && month.length === 2 && day.length === 2) {
        // 모든 필드가 채워져 있으면 버튼 활성화
        btn.disabled = false;
    } else {
        // 하나라도 빈 필드가 있으면 버튼 비활성화
        btn.disabled = true;
    }
}

function completeMonth(input) {
    let monthValue = input.value;
    if (monthValue.length === 1) {
        // 입력된 월 또는 일이 1자리 숫자일 때
        if (parseInt(monthValue) <= 0) {
            input.value = '01';
        } else if (parseInt(monthValue) >= 1) {
            input.value = '0' + monthValue;
        }
    } else if (monthValue.length === 2) {
        // 입력된 연도가 1자리 숫자일 때 (예: '5' → '2005')
        if (parseInt(monthValue) <= 0) {
            input.value = monthValue;
            input.value = '01';
        }  else if (parseInt(monthValue) <= 12) {
            input.value = monthValue;
        } else if (parseInt(monthValue) >= 13) {
            input.value = '12';
        }
    }
    // 2자리 숫자일 때는 변경하지 않음
    const year = document.getElementById('age-check-year').value;
    const month = document.getElementById('age-check-month').value;
    const day = document.getElementById('age-check-day').value;
    const btn = document.getElementById('age-checking');

    // 연도, 월, 일 입력 필드가 모두 채워져 있는지 확인
    if (year.length === 4 && month.length === 2 && day.length === 2) {
        // 모든 필드가 채워져 있으면 버튼 활성화
        btn.disabled = false;
    } else {
        // 하나라도 빈 필드가 있으면 버튼 비활성화
        btn.disabled = true;
    }
}

function completeDay(input) {
    let dayValue = input.value;
    if (dayValue.length === 1) {
        // 입력된 월 또는 일이 1자리 숫자일 때
        if (parseInt(dayValue) <= 0) {
            input.value = '01';
        } else if (parseInt(dayValue) >= 1) {
            input.value = '0' + dayValue;
        }
    } else if (dayValue.length === 2) {
        // 입력된 연도가 1자리 숫자일 때 (예: '5' → '2005')
        if (parseInt(dayValue) <= 0) {
            input.value = '01';
        } else if (parseInt(dayValue) <= 31) {
            input.value = dayValue;
        } else if (parseInt(dayValue) >= 32) {
            input.value = '31';
        }
    }
    // 2자리 숫자일 때는 변경하지 않음
    const year = document.getElementById('age-check-year').value;
    const month = document.getElementById('age-check-month').value;
    const day = document.getElementById('age-check-day').value;
    const btn = document.getElementById('age-checking');

    // 연도, 월, 일 입력 필드가 모두 채워져 있는지 확인
    if (year.length === 4 && month.length === 2 && day.length === 2) {
        // 모든 필드가 채워져 있으면 버튼 활성화
        btn.disabled = false;
    } else {
        // 하나라도 빈 필드가 있으면 버튼 비활성화
        btn.disabled = true;
    }
}

function moveFocusToNextInput(input, requiredLength) {
    if (input.value.length === requiredLength) {
        // 다음 입력 필드로 포커스 이동
        let next = input.nextElementSibling;
        // 다음 요소가 input 요소인지 확인하고, 아니면 그 다음 요소를 찾음
        while (next && next.tagName !== 'INPUT') {
            next = next.nextElementSibling;
        }
        if (next) {
            next.focus();
        }
    }
}