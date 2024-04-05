async function loadAsyncScripts() {
    // 동영상 팝업 재생
    await loadScript('//www.hungbok.net/javascript/youtube-popup.js');
    // 이미지 팝업 슬라이드쇼
    await loadScript('//www.hungbok.net/javascript/lightbox.js');
    // 이미지 및 동영상 슬라이드쇼
    await loadScript('//www.hungbok.net/javascript/slick.js');
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
        $.getJSON(`//data.hungbok.net/data/games/${queryParam}.json`, function (data) {
            // JSON 데이터를 HTML에 대체삽입
        
            // en 또는 ko 데이터에 접근하는 함수
            function getLocalizedData(data, key) {
                return data['en'] && data['en'][key] ? data['en'][key] : data['en'][key];
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
                '{metacritic}': data[0].metacritic,
                '{opencritic}': data[0].opencritic,
                '{metacritic1}': data[0].metacritic1,
                '{metacritic2}': data[0].metacritic2,
                '{metacritic3}': data[0].metacritic3,
                '{metacritic4}': data[0].metacritic4,
                '{metacritic5}': data[0].metacritic5,
                '{metacritic6}': data[0].metacritic6,
                '{metacritic7}': data[0].metacritic7,
                '{metacritic8}': data[0].metacritic8,
                '{metacritic9}': data[0].metacritic9,
                '{metacritic10}': data[0].metacritic10,
                '{metacritic11}': data[0].metacritic11,
                '{metacritic12}': data[0].metacritic12,
                '{metacritic_class1}': data[0].metacritic_class1,
                '{metacritic_class2}': data[0].metacritic_class2,
                '{metacritic_class3}': data[0].metacritic_class3,
                '{metacritic_class4}': data[0].metacritic_class4,
                '{metacritic_class5}': data[0].metacritic_class5,
                '{metacritic_class6}': data[0].metacritic_class6,
                '{metacritic_class7}': data[0].metacritic_class7,
                '{metacritic_class8}': data[0].metacritic_class8,
                '{metacritic_class9}': data[0].metacritic_class9,
                '{metacritic_class10}': data[0].metacritic_class10,
                '{metacritic_class11}': data[0].metacritic_class11,
                '{metacritic_class12}': data[0].metacritic_class12,
                '{opencritic_rating}': data[0].opencritic_rating,
                '{top_critic_average}': data[0].top_critic_average,
                '{critics_recommend}': data[0].critics_recommend,
                
                '{system_requirements_tab1}': data[0].system_requirements_tab1,
                '{system_requirements_tab2}': data[0].system_requirements_tab2,
                '{system_requirements_tab3}': data[0].system_requirements_tab3,
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
            $(".platform.ubisoftstore").append('<div class="icon-ubisoftstore" ttt="Ubisoft Store"></div>');
            $(".platform.battlenet").append('<div class="icon-battlenet" ttt="Battle.net"></div>');
            $(".platform.rockstargamesstore").append('<div class="icon-rockstargamesstore" ttt="Rockstar Games Store"></div>');
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
    
            var description = document.querySelector('.description');
            var showMore = document.querySelector('.show-more');
            
            if(description.offsetHeight > 500){
                description.style.maxHeight = "500px";
                showMore.style.display = "block";
            }

            const data_import_type_first = data[0].data_import_type_first;
            const data_import_first = data[0].data_import_first;
            const data_import_type_second = data[0].data_import_type_second;
            const data_import_second = data[0].data_import_second;
            const data_import_type_third = data[0].data_import_type_third;
            const data_import_third = data[0].data_import_third;

            $(".dlc").append('<p class="description-title">This product is an Expansion Pack or Downloadable Content.</p>'+
            '<p>This content requires one of the following products to play.</p>'+
            '<div>'+
                '<p class="data-import" data-type={data_import_type_first} data-file={data_import_first}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_first + '?p=' + data_import_first + '" target="_blank">'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_first + '/' + data_import_first + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</a>'+
                    '<a data-placeholder="title"></a>'+
                '</p>'+
                '<p class="data-import" data-type={data_import_type_second} data-file={data_import_second}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_second + '?p=' + data_import_second + '" target="_blank">'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_second + '/' + data_import_second + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '</a>'+
                        '<a data-placeholder="title"></a>'+
                '</p>'+
                '<p class="data-import" data-type={data_import_type_third} data-file={data_import_third}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_third + '?p=' + data_import_third + '" target="_blank">'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_third + '/' + data_import_third + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '</a>'+
                        '<a data-placeholder="title"></a>'+
                '</p>'+
            '</div>');

            $(".mod").append('<p class="description-title">This product is an Mod or Add-on.</p>'+
            '<p>This content requires the following product to play.</p>'+
            '<div>'+
                '<p class="data-import" data-type={data_import_type_first} data-file={data_import_first}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_first + '?p=' + data_import_first + '" target="_blank">'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_first + '/' + data_import_first + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</a>'+
                    '<a data-placeholder="title"></a>'+
                '</p>'+
                '<p class="data-import" data-type={data_import_type_second} data-file={data_import_second}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_second + '?p=' + data_import_second + '" target="_blank">'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_second + '/' + data_import_second + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '</a>'+
                        '<a data-placeholder="title"></a>'+
                '</p>'+
                '<p class="data-import" data-type={data_import_type_third} data-file={data_import_third}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_third + '?p=' + data_import_third + '" target="_blank">'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_third + '/' + data_import_third + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '</a>'+
                        '<a data-placeholder="title"></a>'+
                '</p>'+
            '</div>');

            $(".mode").append('<p class="description-title">This product is in Mode.</p>'+
            '<p>Included in the following product.</p>'+
            '<div>'+
                '<p class="data-import" data-type={data_import_type_first} data-file={data_import_first}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_first + '?p=' + data_import_first + '" target="_blank">'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_first + '/' + data_import_first + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</a>'+
                    '<a data-placeholder="title"></a>'+
                '</p>'+
                '<p class="data-import" data-type={data_import_type_second} data-file={data_import_second}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_second + '?p=' + data_import_second + '" target="_blank">'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_second + '/' + data_import_second + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '</a>'+
                        '<a data-placeholder="title"></a>'+
                '</p>'+
                '<p class="data-import" data-type={data_import_type_third} data-file={data_import_third}>'+
                    '<a href="https://www.hungbok.com/' + data_import_type_third + '?p=' + data_import_third + '" target="_blank">'+
                        '<img src="//media.hungbok.net/image/' + data_import_type_third + '/' + data_import_third + '/hb_capsule.jpg" onerror="this.src=`//data.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '</a>'+
                        '<a data-placeholder="title"></a>'+
                '</p>'+
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
                        if (jsonData.hasOwnProperty('ko') && jsonData['ko'].hasOwnProperty(key)) {
                            placeholder.innerText = jsonData['ko'][key];
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
                        $('#warning').append('<div id="child">Sorry, you may not access this content.</div><a class="age-check-back" onclick="window.history.back()">Back</a>'); // #child 요소 추가
                    }
                });
            
                // 쿠키 'agecheck'의 값에 따라 초기 로직 처리
                const ageCheck = getCookie('agecheck');
                if (ageCheck === 'success') {
                    $('body').removeClass('adult'); // 'adult' 클래스 제거
                    $('#warning').remove(); // #warning 요소 숨기기
                } else if (ageCheck === 'fail') {
                    $('#warning').show(); // #warning 요소 보이기
                    $('.age-check-container').remove(); // #warning 요소 숨기기
                    $('#warning').append('<div id="child">Sorry, you may not access this content.</div><a class="age-check-back" onclick="window.history.back()">Back</a>'); // #child 요소 추가
                }
            });
        });
    } else {
        $('body').addClass('en');
        $('.section').remove();
        $('.top-backgrounds').remove();
        $('main').append('<div class="game-section">'+
            '<div class="owl-carousel custom-carousel owl-theme">'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7);">'+
                    '<div class="item-desc">'+
                        '<h3>Cyberpunk 2077</h3>'+
                        '<p>Cyberpunk 2077 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f);">'+
                    '<div class="item-desc">'+
                        '<h3>The Witcher 3: Wild Hunt</h3>'+
                        '<p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg);">'+
                    '<div class="item-desc">'+
                        '<h3>Red Dead Redemption 2</h3>'+
                        '<p>Red Dead Redemption 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-1lbll.jpg?h=2560&quality=high&resize=1&w=1440);">'+
                    '<div class="item-desc">'+
                        '<h3>PUBG: BATTLEGROUNDS</h3>'+
                        '<p>PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb);">'+
                    '<div class="item-desc">'+
                        '<h3>Fortnite</h3>'+
                        '<p>Battle royale where 100 players fight to be the last person standing. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7);">'+
                    '<div class="item-desc">'+
                        '<h3>Dead by Daylight</h3>'+
                        '<p>Dead by Daylight is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/offer/0c05e0889c3e42a4be1d81077d6e653a/SAB_Store_Landscape_2560x1440_2560x1440-00b4029199a7a6778fd27dec96f08a28);">'+
                    '<div class="item-desc">'+
                        '<h3>SKULL AND BONES™</h3>'+
                        '<p>SKULL AND BONES™ is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-055bbe0f10c1778fcbd134f2de02daf6);">'+
                    '<div class="item-desc">'+
                        '<h3>VALORANT</h3>'+
                        '<p>VALORANT is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn.cloudflare.steamstatic.com/steam/apps/271590/hero_capsule.jpg?t=1671484916);">'+
                    '<div class="item-desc">'+
                        '<h3>Grand Theft Auto V: Premium Edition</h3>'+
                        '<p>Grand Theft Auto V: Premium Edition is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicgames.com/salesEvent/salesEvent/Landscape%20Product%20image-JAP_2560x1440-e038a07c8f4ced528ff97619017058e5);">'+
                    '<div class="item-desc">'+
                        '<h3>Genshin Impact</h3>'+
                        '<p>Genshin Impact is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item eleven">'+
                    '<div class="item-desc">'+
                        '<h3></h3>'+
                        '<p></p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="discover-section">'+
            '<div class="discover-title">'+
                '<div class="discover-text">New Added</div>'+
            '</div>'+
            '<div class="discover-container">'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/minecraft/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/detroit-become-human/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/inside/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/grand-theft-auto-5/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/cyberpunk-2077/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="discover-title">'+
                '<div class="discover-text">Coming Soon</div>'+
            '</div>'+
            '<div class="discover-container">'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/stray/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/biohazard-7-resident-evil/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/journey/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/biohazard-2/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/portal-2/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="discover-title">'+
                '<div class="discover-text">Steam</div>'+
            '</div>'+
            '<div class="discover-container">'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/detroit-become-human/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/inside/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/minecraft/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/cyberpunk-2077/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/grand-theft-auto-5/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="discover-title">'+
                '<div class="discover-text">Epic Games Store</div>'+
            '</div>'+
            '<div class="discover-container">'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/biohazard-2/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/portal-2/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/biohazard-7-resident-evil/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/stray/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/journey/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="discover-title">'+
                '<div class="discover-text">Console</div>'+
            '</div>'+
            '<div class="discover-container">'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/minecraft/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/portal-2/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/inside/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/grand-theft-auto-5/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/games/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/biohazard-7-resident-evil/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>');
        $.getScript('//www.hungbok.net/javascript/owl.carousel.min.js', function() {
            // 스크립트가 성공적으로 로드되고 실행된 후에 실행할 코드를 작성합니다.
            // 이 코드는 your_script.js 파일 내의 함수 또는 기능을 호출할 수 있습니다.
            var $owl = $('.owl-carousel');

            $owl.children().each( function( index ) {
              $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
            });

            $(document).ready(function() {
                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    autoWidth: true,
                    loop: true,
                    merge: true,
                    center: true,
                    autoplay: true,
                    autoplayHoverPause: true,
                    autoplayTimeout: 6000,
                    autoplaySpeed: 1000,
                    items: 1,
                    onInitialized: startProgressBar,
                    onTranslate: resetProgressBar,
                    onTranslated: startProgressBar
                });
            
                function startProgressBar() {
                    $(".progressBar").css({
                        width: "100%",
                        transition: "width 5000ms linear"
                    });
                }
            
                function resetProgressBar() {
                    $(".progressBar").css({
                        width: 0,
                        transition: "width 0ms"
                    });
                }
            
                owl.on('mouseover',function(e){
                    owl.trigger('stop.owl.autoplay');
                    var progressBar = $(".progressBar");
                    var width = progressBar.width();
                    progressBar.stop(true, true).css({
                        width: width,
                        transition: "width 0s"
                    });
                });
            
                owl.on('mouseleave',function(e){
                    owl.trigger('play.owl.autoplay');
                    startProgressBar();
                });

                owl.on('changed.owl.carousel', function(event) {
                    var item = event.item.index;   // 현재 아이템 위치
            
                    // 11번째 아이템에 도달했을 때 즉시 다음 아이템으로 이동
                    if($('.owl-item').eq(item).find('.item.eleven').length > 0) {
                        setTimeout(function() {
                            owl.trigger('next.owl.carousel');
                        }, 500);
                    }
                });
            });

            $(window).on('resize', function() {
                owl.trigger('next.owl.carousel');
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
                    $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
                });
            });
        });
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
        document.getElementsByClassName("top-background-shadow")[0].style.transform = "scaleX(1) scaleY(-1) translate(-50%, " + newPosition2 + "px)";
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
                return data['en'] && data['en'][key] ? data['en'][key] : data['en'][key];
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