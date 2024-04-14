async function loadAsyncScripts() {
    // 동영상 팝업 재생
    await loadScript('//www.hungbok.net/javascript/youtube-popup.js');
    // 이미지 팝업 슬라이드쇼
    await loadScript('//www.hungbok.net/javascript/lightbox.js');
    // 이미지 및 동영상 슬라이드쇼
    await loadScript('//www.hungbok.net/javascript/slick.js');
    await loadScript('//www.hungbok.net/javascript/table-multi-hover.js');
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
        $.getJSON(`//data.hungbok.net/data/anime/${queryParam}.json`, function (data) {
            // JSON 데이터를 HTML에 대체삽입
        
            // en 또는 ko 데이터에 접근하는 함수
            function getLocalizedData(data, key) {
                return data['ko'] && data['ko'][key] ? data['ko'][key] : data['en'][key];
            }

            $("#page-title").text(getLocalizedData(data[0], 'title') + ' | HungBok');
            $('body').addClass('body-' + data[0].type + ' ' + getLocalizedData(data[0], 'lang'));
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
                $(".slider").append('<div class="slider-item">'+
                    '<div class="video-play-button youtube-link" videoid="' + item.id + '">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/anime/' + url + '/hb_video_' + item.id + '.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/anime/' + url + '/hb_video_' + item.id + '.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<div class="youtube-title">' + item.title + '</div>'+
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
                $(".slider").append('<div class="slider-item">'+
                    '<a class="slider-image" href="//media.hungbok.net/image/anime/' + url + '/hb_' + item.img + '.jpg" data-lightbox="preview">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/anime/' + url + '/hb_' + item.img + '.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/anime/' + url + '/hb_' + item.img + '.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</a>'+
                '</div>');
            });
    
            var story_value = data.storycount; // story 수
            var storyData = [];
            for (var i = 1; i <= story_value; i++) {
                var storyText = data['storytext' + i];
                var storyTitle = data['storytitle' + i];
                var storyTitleOriginal = data['storytitle_og' + i];
                var storyEpisode = data['storyepisode' + i];
                var storyDate = data['storydate' + i];
                var storyId = data['storyid' + i];
                var storyImage = 'story_' + i;
                var storyTime = data['storytime' + i];
                storyData.push({
                    text: storyText,
                    title: storyTitle,
                    titleog: storyTitleOriginal,
                    epi: storyEpisode,
                    date: storyDate,
                    id: storyId,
                    img: storyImage,
                    time: storyTime,
                });
            }
            // story 생성
            storyData.forEach(function(item) {
                $(".story").append('<div class="story-card">'+
                    '<div class="story-episode">'+
                        '<p>' + item.epi + '</p>'+
                    '</div>'+
                    '<div class="story-title">'+
                        '<p ttt="' + item.titleog + '">' + item.title + '</p>'+
                    '</div>'+
                    '<div class="story-date">'+
                        '<p>' + item.date + '</p>'+
                    '</div>'+
                    '<div class="story-image">'+
                        '<img class="story-background" src="//media.hungbok.net/image/hb/hb_error_horizontal.svg">'+
                        '<img class="story-background" src="//media.hungbok.net/image/anime/' + url + '/' + item.img + '.jpg" onerror="this.remove ? this.remove() : this.removeNode();" loading="lazy">'+
                    '</div>'+
                    '<div class="story-description">'+
                        '<p>' + item.text + '</p>'+
                    '</div>'+
                '</div>');
            });
            
            var setting_value = data.settingcount; // 설정 카드 수
            var settingData = [];
            for (var i = 1; i <= setting_value; i++) {
                var settingText = data['settingtext' + i];
                var settingTitle = data['settingtitle' + i];
                var settingTitleOriginal = data['settingtitle_og' + i];
                var settingImage = 'setting_' + i;
                settingData.push({
                    text: settingText,
                    title: settingTitle,
                    titleog: settingTitleOriginal,
                    img: settingImage,
                });
            }
            // 설정 카드 생성
            settingData.forEach(function(item) {
                $(".setting").append('<div class="setting-card">'+
                    '<div class="setting-image">'+
                        '<img class="setting-background" src="//media.hungbok.net/image/hb/hb_error_horizontal.svg">'+
                        '<img class="setting-background" src="//media.hungbok.net/image/anime/' + url + '/' + item.img + '.jpg" onerror="this.remove ? this.remove() : this.removeNode();" loading="lazy">'+
                    '</div>'+
                    '<div class="setting-title">'+
                        '<p ttt="' + item.titleog + '">' + item.title + '</p>'+
                    '</div>'+
                    '<div class="setting-description">'+
                        '<p>' + item.text + '</p>'+
                    '</div>'+
                '</div>');
            });
            
            var character_value = data.charcount; // character 수
            var characterCounts = [
                data.char1count,
                data.char2count,
                data.char3count,
                data.char4count,
                data.char5count,
                data.char6count,
                data.char7count,
                data.char8count,
                data.char9count,
                data.char10count,
                data.char11count,
                data.char12count,
                data.char13count,
                data.char14count,
                data.char15count,
                data.char16count,
                data.char17count,
                data.char18count,
                data.char19count,
                data.char20count,
                data.char21count,
                data.char22count,
                data.char23count,
                data.char24count,
                data.char25count,
                data.char26count,
                data.char27count,
                data.char28count,
                data.char29count,
                data.char30count,
                data.char31count,
                data.char32count,
                data.char33count,
                data.char34count,
                data.char35count,
                data.char36count,
                data.char37count,
                data.char38count,
                data.char39count,
                data.char40count,
                data.char41count,
                data.char42count,
                data.char43count,
                data.char44count,
                data.char45count,
                data.char46count,
                data.char47count,
                data.char48count,
                data.char49count,
                data.char50count,
                data.char51count,
                data.char52count,
                data.char53count,
                data.char54count,
                data.char55count,
                data.char56count,
                data.char57count,
                data.char58count,
                data.char59count,
                data.char60count,
                data.char61count,
                data.char62count,
                data.char63count,
                data.char64count,
                data.char65count,
                data.char66count,
                data.char67count,
                data.char68count,
                data.char69count,
                data.char70count,
                data.char71count,
                data.char72count,
                data.char73count,
                data.char74count,
                data.char75count,
                data.char76count,
                data.char77count,
                data.char78count,
                data.char79count,
                data.char80count,
                data.char81count,
                data.char82count,
                data.char83count,
                data.char84count,
                data.char85count,
                data.char86count,
                data.char87count,
                data.char88count,
                data.char89count,
                data.char90count,
                data.char91count,
                data.char92count,
                data.char93count,
                data.char94count,
                data.char95count,
                data.char96count,
                data.char97count,
                data.char98count,
                data.char99count,
                data.char100count,
            ];
            var characterData = [];
            for (var i = 1; i <= character_value; i++) {
                var characterText = data['chartext' + i];
                var characterName = data['charname' + i];
                var characterNameOriginal = data['charname_og' + i];
                var characterImage = 'character_' + i;
                var characterVoice = 'voice' + i;
                characterData.push({
                    text: characterText,
                    name: characterName,
                    nameog: characterNameOriginal,
                    img: characterImage,
                    vo: characterVoice,
                });
            }
            // character 생성
            characterData.forEach(function(item) {
                $(".character").append('<div class="character-card">'+
                    '<div class="character-image">'+
                        '<img class="character-background" src="//media.hungbok.net/image/anime/' + url + '/' + item.img + '.jpg"  onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                    '</div>'+
                    '<div class="character-info">'+
                        '<div class="character-name" ttt="' + item.nameog + '">' + item.name + '</div>'+
                        '<div class="character-voice ' + item.vo + '"></div>'+
                    '</div>'+
                    '<div class="character-description">'+
                        '<p>' + item.text + '</p>'+
                    '</div>'+
                '</div>');
            });
            // voicer 생성
            characterCounts.forEach(function (characterCount, countIndex) {
                for (var j = 1; j <= characterCount; j++) {
                    var cLang = data['char' + (countIndex + 1) + 'lang' + j];
                    var cName = data['char' + (countIndex + 1) + 'name' + j];
                    var cNameog = data['char' + (countIndex + 1) + 'name_og' + j];
        
                    $('.voice' + (countIndex + 1)).append('<div class="character-voicer ' + cLang + '">'+
                        '<p class="character-voicername" ttt="' + cNameog + '">' + cName + '</p>'+
                    '</div>');
                }
            });
            
            var music_value = data.musiccount; // music 수
            var musicData = [];
            for (var i = 1; i <= music_value; i++) {
                var musicType = data['musictype' + i];
                var musicTitle = data['musictitle' + i];
                var musicTitleOriginal = data['musictitle_og' + i];
                var musicUrl = data['musicurl' + i];
                var musicVideoId = data['musicvideoid' + i];
                var musicSing = data['musicsing' + i];
                var musicSingOriginal = data['musicsing_og' + i];
                var musicWrite = data['musicwrite' + i];
                var musicWriteOriginal = data['musicwrite_og' + i];
                var musicProduce = data['musicproduce' + i];
                var musicProduceOriginal = data['musicproduce_og' + i];
                var musicArrange = data['musicarrange' + i];
                var musicArrangeOriginal = data['musicarrange_og' + i];
                var musicImage = 'music_' + i;
                musicData.push({
                    type: musicType,
                    title: musicTitle,
                    titleog: musicTitleOriginal,
                    url: musicUrl,
                    videoid: musicVideoId,
                    sing: musicSing,
                    singog: musicSingOriginal,
                    write: musicWrite,
                    writeog: musicWriteOriginal,
                    produce: musicProduce,
                    produceog: musicProduceOriginal,
                    arrange: musicArrange,
                    arrangeog: musicArrangeOriginal,
                    img: musicImage,
                });
            }
            // music 생성
            musicData.forEach(function(item) {
                $(".music").append('<div class="music-card">'+
                    '<div class="music-title">'+
                        '<p>' + item.type + '</p>'+
                        '<p ttt="' + item.titleog + '">' + item.title + '</p>'+
                    '</div>'+
                    '<div class="music-video">'+
                        '<div class="youtube-link" youtubeid="' + item.videoid + '">'+
                            '<img src="//media.hungbok.net/image/hb/hb_error_horizontal.svg">'+
                            '<img class="slider-background" src="//media.hungbok.net/image/anime/' + url + '/' + item.videoid + '.avif" onerror="this.remove ? this.remove() : this.removeNode();" loading="lazy">'+
                        '</div>'+
                    '</div>'+
                    '<div class="music-image">'+
                        '<a href="' + item.url + '" target="_blank">'+
                            '<img class="music-background" src="//media.hungbok.net/image/hb/hb_error_square.svg">'+
                            '<img class="music-cover" src="//media.hungbok.net/image/anime/' + url + '/' + item.img + '.jpg" onerror="this.remove ? this.remove() : this.removeNode();" loading="lazy">'+
                        '</a>'+
                        '<img class="music-lp" src="//media.hungbok.net/image/icon/recode.png">'+
                    '</div>'+
                    '<div class="music-text">'+
                        '<p>노래</p>' + item.sing + '</div>'+
                    '<div class="music-text">'+
                        '<p>작사</p>' + item.write + '</div>'+
                    '<div class="music-text">'+
                        '<p>작곡</p>' + item.produce + '</div>'+
                    '<div class="music-text">'+
                        '<p>편곡</p>' + item.arrange + '</div>'+
                '</div>');
            });
    
            const metascore_score = data.metasc;
            const metascore_link = data.metalink;
            const metascore_percent = data.metaper;
            const metacritic_userscore_score = data.metausersc;
            const metacritic_userscore_link = data.metauserlink;
            const metacritic_userscore_percent = data.metauserper;
    
            const tomatometer_score = data.tomatosc;
            const tomatometer_link = data.tomatolink;
            const tomatometer_percent = data.tomatoper;
            const rottentomatoes_audience_score = data.tomatousersc;
            const rottentomatoes_audience_link = data.tomatouserlink;
            const rottentomatoes_audience_percent = data.tomatouserper;
    
            const imdb_score = data.imdbsc;
            const imdb_link = data.imdblink;
            const imdb_percent = data.imdbper;
    
            const letterboxd_score = data.lettersc;
            const letterboxd_link = data.letterlink;
            const letterboxd_percent = data.letterper;
    
            const tmdb_score = data.tmdbsc;
            const tmdb_link = data.tmdblink;
            const tmdb_percent = data.tmdbper;
    
            const filmarks_score = data.filmarkssc;
            const filmarks_link = data.filmarkslink;
            const filmarks_percent = data.filmarksper;
    
            const yahoojp_score = data.yahoosc;
            const yahoojp_link = data.yahoolink;
            const yahoojp_percent = data.yahooper;
    
            const google_score = data.googlesc;
            const google_link = data.googlelink;
            const google_percent = data.googleper;
    
            const eiga_score = data.eigasc;
            const eiga_link = data.eigalink;
            const eiga_percent = data.eigaper;
    
            const douban_score = data.doubansc;
            const douban_link = data.doubanlink;
            const douban_percent = data.doubanper;
    
            const bilibili_score = data.bilisc;
            const bilibili_link = data.bililink;
            const bilibili_percent = data.biliper;
    
            const myanimelist_score = data.malsc;
            const myanimelist_link = data.mallink;
            const myanimelist_percent = data.malper;
    
            const mydramalist_score = data.mdlsc;
            const mydramalist_link = data.mdllink;
            const mydramalist_percent = data.mdlper;
    
            const anikore_score = data.anikoresc;
            const anikore_link = data.anikorelink;
            const anikore_percent = data.anikoreper;
            const anikore_userscore_score = data.anikoreusersc;
            const anikore_userscore_link = data.anikoreuserlink;
            const anikore_userscore_percent = data.anikoreuserper;
    
            const anilist_score = data.anilistsc;
            const anilist_link = data.anilistlink;
            const anilist_percent = data.anilistper;
    
            const watchapedia_score = data.watchasc;
            const watchapedia_link = data.watchalink;
            const watchapedia_percent = data.watchaper;
    
            const kinolights_score = data.kinosc;
            const kinolights_link = data.kinolink;
            const kinolights_percent = data.kinoper;
            const kinolights_userscore_score = data.kinousersc;
            const kinolights_userscore_link = data.kinouserlink;
            const kinolights_userscore_percent = data.kinouserper;
    
            const primevideo_score = data.primesc;
            const primevideo_link = data.primelink;
            const primevideo_percent = data.primeper;
    
            const unext_score = data.unextsc;
            const unext_link = data.unextlink;
            const unext_percent = data.unextper;
    
            const crunchyroll_score = data.crunchysc;
            const crunchyroll_link = data.crunchylink;
            const crunchyroll_percent = data.crunchyper;
    
            const laftel_score = data.laftelsc;
            const laftel_link = data.laftellink;
            const laftel_percent = data.laftelper;
            
            // 평가 틀 생성
            $(".rating.metacritic").append('<div class="rating-card metacritic rating-two-score">'+
                '<div class="rating-image">'+
                    '<img title="Metacritic" src="//media.hungbok.net/image/logo/metacritic.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">메타스코어</div>'+
                    "<a href='" + metascore_link + "' class='rating-star' target='_blank' ttt='" + metascore_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + metascore_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + metacritic_userscore_link + "' class='rating-star' target='_blank' ttt='" + metacritic_userscore_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + metacritic_userscore_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.rottentomatoes").append('<div class="rating-card rottentomatoes rating-two-score">'+
                '<div class="rating-image">'+
                    '<img title="Rotten Tomatoes" src="//media.hungbok.net/image/logo/rottentomatoes.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">토마토미터</div>'+
                    "<a href='" + tomatometer_link + "' class='rating-star' target='_blank' ttt='" + tomatometer_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + tomatometer_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">관객 점수</div>'+
                    "<a href='" + rottentomatoes_audience_link + "' class='rating-star' target='_blank' ttt='" + rottentomatoes_audience_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + rottentomatoes_audience_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.imdb").append('<div class="rating-card imdb rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="IMDb" src="//media.hungbok.net/image/logo/imdb.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + imdb_link + "' class='rating-star' target='_blank' ttt='" + imdb_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + imdb_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.letterboxd").append('<div class="rating-card letterboxd rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Letterboxd" src="//media.hungbok.net/image/logo/letterboxd.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + letterboxd_link + "' class='rating-star' target='_blank' ttt='" + letterboxd_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + letterboxd_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.tmdb").append('<div class="rating-card tmdb rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="The Movie Database" src="//media.hungbok.net/image/logo/tmdb.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + tmdb_link + "' class='rating-star' target='_blank' ttt='" + tmdb_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + tmdb_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.filmarks").append('<div class="rating-card filmarks rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Filmarks" src="//media.hungbok.net/image/logo/filmarks.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + filmarks_link + "' class='rating-star' target='_blank' ttt='" + filmarks_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + filmarks_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.yahoojapan").append('<div class="rating-card yahoojapan rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Yahoo Japan" src="//media.hungbok.net/image/logo/yahoojapan.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + yahoojp_link + "' class='rating-star' target='_blank' ttt='" + yahoojp_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + yahoojp_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.google").append('<div class="rating-card google rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Google" src="//media.hungbok.net/image/logo/google.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + google_link + "' class='rating-star' target='_blank' ttt='" + google_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + google_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.eiga").append('<div class="rating-card eiga rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Eiga.com" src="//media.hungbok.net/image/logo/eiga.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + eiga_link + "' class='rating-star' target='_blank' ttt='" + eiga_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + eiga_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.douban").append('<div class="rating-card douban rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Douban" src="//media.hungbok.net/image/logo/douban.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + douban_link + "' class='rating-star' target='_blank' ttt='" + douban_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + douban_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.bilibili").append('<div class="rating-card bilibili rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="BiliBili" src="//media.hungbok.net/image/logo/bilibili.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + bilibili_link + "' class='rating-star' target='_blank' ttt='" + bilibili_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + bilibili_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.myanimelist").append('<div class="rating-card myanimelist rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="MyAnimeList" src="//media.hungbok.net/image/logo/myanimelist.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + myanimelist_link + "' class='rating-star' target='_blank' ttt='" + myanimelist_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + myanimelist_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.mydramalist").append('<div class="rating-card mydramalist rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="MyDramaList" src="//media.hungbok.net/image/logo/mydramalist.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + mydramalist_link + "' class='rating-star' target='_blank' ttt='" + mydramalist_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + mydramalist_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.anikore").append('<div class="rating-card anikore rating-two-score">'+
                '<div class="rating-image">'+
                    '<img title="Anikore" src="//media.hungbok.net/image/logo/anikore.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">종합 점수</div>'+
                    "<a href='" + anikore_link + "' class='rating-star' target='_blank' ttt='" + anikore_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + anikore_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + anikore_userscore_link + "' class='rating-star' target='_blank' ttt='" + anikore_userscore_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + anikore_userscore_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.anilist").append('<div class="rating-card anilist rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Anilist" src="//media.hungbok.net/image/logo/anilist.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + anilist_link + "' class='rating-star' target='_blank' ttt='" + anilist_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + anilist_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.watchapedia").append('<div class="rating-card watchapedia rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Watchapedia" src="//media.hungbok.net/image/logo/watchapedia.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + watchapedia_link + "' class='rating-star' target='_blank' ttt='" + watchapedia_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + watchapedia_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.kinolights").append('<div class="rating-card kinolights rating-two-score">'+
                '<div class="rating-image">'+
                    '<img title="Kinolights" src="//media.hungbok.net/image/logo/kinolights.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">신호등 평점</div>'+
                    "<a href='" + kinolights_link + "' class='rating-star' target='_blank' ttt='" + kinolights_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + kinolights_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + kinolights_userscore_link + "' class='rating-star' target='_blank' ttt='" + kinolights_userscore_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + kinolights_userscore_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.primevideo").append('<div class="rating-card primevideo rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Prime Video" src="//media.hungbok.net/image/logo/primevideo.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + primevideo_link + "' class='rating-star' target='_blank' ttt='" + primevideo_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + primevideo_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.unext").append('<div class="rating-card unext rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="U-Next" src="//media.hungbok.net/image/logo/unext.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + unext_link + "' class='rating-star' target='_blank' ttt='" + unext_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + unext_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.crunchyroll").append('<div class="rating-card crunchyroll rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Crunchyroll" src="//media.hungbok.net/image/logo/crunchyroll.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + crunchyroll_link + "' class='rating-star' target='_blank' ttt='" + crunchyroll_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + crunchyroll_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');
    
            $(".rating.laftel").append('<div class="rating-card laftel rating-one-score">'+
                '<div class="rating-image">'+
                    '<img title="Laftel" src="//media.hungbok.net/image/logo/laftel.svg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + laftel_link + "' class='rating-star' target='_blank' ttt='" + laftel_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + laftel_percent + ';">'+
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
                $('.rating-star[ttt="undefined"], .rating-star[ttt="none"]').each(function() {
                  // 하위 .star-ratings 클래스를 삭제하고 '-'로 대체
                  $(this).find('.star-ratings').remove();
                  $(this).text('-');
                  
                  // .none 클래스를 삭제
                  $(this).removeClass('none');
                });
            });
    
            var description = document.querySelector('.description');
            var showMore = document.querySelector('.show-more');
            
            if(description.offsetHeight > 500){
                description.style.maxHeight = "500px";
                showMore.style.display = "block";
            }
            
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
        });
    } else {
        $('body').addClass('en');
        $('.section').remove();
        $('.top-backgrounds').remove();
        $('main').append('<div class="game-section">'+
            '<div class="owl-carousel custom-carousel owl-theme">'+
                '<div class="item" style="background-image: url(https://cdn1.epicanime.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7);">'+
                    '<div class="item-desc">'+
                        '<h3>Cyberpunk 2077</h3>'+
                        '<p>Cyberpunk 2077 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicanime.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f);">'+
                    '<div class="item-desc">'+
                        '<h3>The Witcher 3: Wild Hunt</h3>'+
                        '<p>The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicanime.com/epic/offer/RDR2PC1227_Epic%20anime_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg);">'+
                    '<div class="item-desc">'+
                        '<h3>Red Dead Redemption 2</h3>'+
                        '<p>Red Dead Redemption 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicanime.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-1lbll.jpg?h=2560&quality=high&resize=1&w=1440);">'+
                    '<div class="item-desc">'+
                        '<h3>PUBG: BATTLEGROUNDS</h3>'+
                        '<p>PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicanime.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb);">'+
                    '<div class="item-desc">'+
                        '<h3>Fortnite</h3>'+
                        '<p>Battle royale where 100 players fight to be the last person standing. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicanime.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7);">'+
                    '<div class="item-desc">'+
                        '<h3>Dead by Daylight</h3>'+
                        '<p>Dead by Daylight is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicanime.com/offer/0c05e0889c3e42a4be1d81077d6e653a/SAB_Store_Landscape_2560x1440_2560x1440-00b4029199a7a6778fd27dec96f08a28);">'+
                    '<div class="item-desc">'+
                        '<h3>SKULL AND BONES™</h3>'+
                        '<p>SKULL AND BONES™ is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment\'s Warcraft III.</p>'+
                        '<div class="slide-progress-main">'+
                            '<div class="progressBar"></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="item" style="background-image: url(https://cdn1.epicanime.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_Riotanime_S1_2560x1440-055bbe0f10c1778fcbd134f2de02daf6);">'+
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
                '<div class="item" style="background-image: url(https://cdn1.epicanime.com/salesEvent/salesEvent/Landscape%20Product%20image-JAP_2560x1440-e038a07c8f4ced528ff97619017058e5);">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
                                '<img class="discover-thumbnail-background" src="https://www.heungbok.kro.kr/game/grand-theft-auto-5/thumbnail.jpg" onerror="this.style.display=`none``;" loading="lazy">'+
                                '<div class="discover-title-name" title="クールドジ男子">쿨하고 바보 같은 남자</div>'+
                            '</a>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="discover-title">'+
                '<div class="discover-text">Epic anime Store</div>'+
            '</div>'+
            '<div class="discover-container">'+
                '<div class="discover-content">'+
                    '<div class="discover-item">'+
                        '<div class="discover-title-time">01 : 30</div>'+
                        '<div class="discover-item-thumbnail discover-thumbnail-hover">'+
                            '<a href="/anime/cool-doji-danshi/home" tabindex="0" target="_blank">'+
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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
                                '<img class="discover-thumbnail-logo" src="//media.hungbok.net/image/anime/fortnite/hb_logo.png" onerror="this.src=`/image/error-icon.svg`" loading="lazy">'+
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

function showError(image) {
    // URL의 쿼리 매개변수에서 'q'값을 가져옴
    var urlParams = new URLSearchParams(window.location.search);
    var q = urlParams.get('q');

    // JSON 파일 불러오기
    fetch(`//data.hungbok.net/data/anime/${q}.json`)
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
                return data['ko'] && data['ko'][key] ? data['ko'][key] : data['en'][key];
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

    $(document).on('mousemove', '.music-image', function(e){
        var x = e.offsetX;
        var y = e.offsetY;
        var rotateY = -0.4 * x + 20;
        var rotateX = 0.4 * y - 20;
        $(this).css('transform', `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    });

    $(document).on('mouseleave', '.music-image', function(){
        $(this).css('transform', 'perspective(350px) rotateY(0deg) rotateX(0deg)');
    });
});

window.addEventListener('load', function() {
    loadAsyncScripts();
});