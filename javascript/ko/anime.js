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

            function getLocalizedTextData(data, key) {
                if (data['ko'] && data['ko'][key]) {
                    return data['ko'][key];
                } else if (data['en'] && data['en'][key]) {
                    return data['en'][key];
                } else {
                    return data[key];
                }
            }

            $("#page-title").text(getLocalizedData(data[0], 'title') + ' | HungBok');
            $('body').addClass('body-' + data[0].type + ' ' + getLocalizedData(data[0], 'lang') + ' ' + data[0].age_check);
            $('#report-title').attr('value', 'https://www.hungbok.com' + data[0].page);
    

            // 대체할 값들을 저장한 객체
            var replacement = {
                '{type}': data[0].type,
                '{original_title}': data[0].title,
                '{title}': getLocalizedData(data[0], 'title'),
                '{original}': getLocalizedData(data[0], 'original'),
                '{genre}': getLocalizedData(data[0], 'genre'),
                '{franchise}': getLocalizedData(data[0], 'franchise'),
                '{general_director}': getLocalizedData(data[0], 'general_director'),
                '{director}': getLocalizedData(data[0], 'director'),
                '{screenplay}': getLocalizedData(data[0], 'screenplay'),
                '{writer}': getLocalizedData(data[0], 'writer'),
                '{character_design}': getLocalizedData(data[0], 'character_design'),
                '{performer}': getLocalizedData(data[0], 'performer'),
                '{music_producer}': getLocalizedData(data[0], 'music_producer'),
                '{producer}': getLocalizedData(data[0], 'producer'),
                '{animation_production}': data[0].animation_production,
                '{production}': data[0].production,
                '{info_animation_production}': getLocalizedData(data[0], 'animation_production'),
                '{info_production}': getLocalizedData(data[0], 'production'),
                '{broadcast}': getLocalizedData(data[0], 'broadcast'),
                '{start_airing}': getLocalizedData(data[0], 'start_airing'),
                '{end_airing}': getLocalizedData(data[0], 'end_airing'),
                '{runningtime}': getLocalizedData(data[0], 'runningtime'),
                '{total_episode}': getLocalizedData(data[0], 'total_episode'),
                '{country}': data[0].country,
                '{language}': data[0].language,
  
                '{age}': data[0].age,
                '{kmrb}': data[0].kmrb,
                '{kcsc}': data[0].kcsc,
                '{eirin}': data[0].eirin,
                '{tvpg}': data[0].tvpg,
                '{mpaa}': data[0].mpaa,
                '{acb}': data[0].acb,
                '{bbfc}': data[0].bbfc,
                '{fsk}': data[0].fsk,
  
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
                var videoExtension = 'jpg';
                if (videoServer === 'youtube') {
                    videoExtension = 'jpg';
                }
                if (videoServer === 'video') {
                    videoExtension = 'jpg';
                }
                if (videoServer === 'vimeo') {
                    videoExtension = 'avif';
                }
                videoData.push({
                    id: videoId,
                    title: videoTitle,
                    server: videoServer,
                    extension: videoExtension,
                });
            }
            // video 생성
            videoData.forEach(function(item) {
                $(".slider").append('<div class="slider-item">'+
                    '<div class="video-play-button ' + item.server + '-link" videoid="' + item.id + '">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/anime/' + url + '/hb_video_' + item.id + '.' + item.extension + '" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/anime/' + url + '/hb_video_' + item.id + '.' + item.extension + '" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
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
    
            var story_value = data[0].storycount; // story 수
            var storyData = [];
            for (var i = 1; i <= story_value; i++) {
                var storyTitle = getLocalizedTextData(data[0], ['storytitle' + i]);
                var storyTitleOriginal = data[0]['storytitle' + i];
                var storyText = getLocalizedTextData(data[0]['storytext' + i]);
                var storyEpisode = data[0]['storyepisode' + i];
                var storyDate = data[0]['storydate' + i];
                var storyId = data[0]['storyid' + i];
                var storyImage = 'story_' + i;
                var storyTime = data[0]['storytime' + i];
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
            
            var setting_value = data[0].settingcount; // 설정 카드 수
            var settingData = [];
            for (var i = 1; i <= setting_value; i++) {
                var settingText = data[0]['settingtext' + i];
                var settingTitle = data[0]['settingtitle' + i];
                var settingTitleOriginal = data[0]['settingtitle_og' + i];
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
            
            var character_value = data[0].charcount; // character 수
            var characterCounts = [
                data[0].char1count,
                data[0].char2count,
                data[0].char3count,
                data[0].char4count,
                data[0].char5count,
                data[0].char6count,
                data[0].char7count,
                data[0].char8count,
                data[0].char9count,
                data[0].char10count,
                data[0].char11count,
                data[0].char12count,
                data[0].char13count,
                data[0].char14count,
                data[0].char15count,
                data[0].char16count,
                data[0].char17count,
                data[0].char18count,
                data[0].char19count,
                data[0].char20count,
                data[0].char21count,
                data[0].char22count,
                data[0].char23count,
                data[0].char24count,
                data[0].char25count,
                data[0].char26count,
                data[0].char27count,
                data[0].char28count,
                data[0].char29count,
                data[0].char30count,
                data[0].char31count,
                data[0].char32count,
                data[0].char33count,
                data[0].char34count,
                data[0].char35count,
                data[0].char36count,
                data[0].char37count,
                data[0].char38count,
                data[0].char39count,
                data[0].char40count,
                data[0].char41count,
                data[0].char42count,
                data[0].char43count,
                data[0].char44count,
                data[0].char45count,
                data[0].char46count,
                data[0].char47count,
                data[0].char48count,
                data[0].char49count,
                data[0].char50count,
                data[0].char51count,
                data[0].char52count,
                data[0].char53count,
                data[0].char54count,
                data[0].char55count,
                data[0].char56count,
                data[0].char57count,
                data[0].char58count,
                data[0].char59count,
                data[0].char60count,
                data[0].char61count,
                data[0].char62count,
                data[0].char63count,
                data[0].char64count,
                data[0].char65count,
                data[0].char66count,
                data[0].char67count,
                data[0].char68count,
                data[0].char69count,
                data[0].char70count,
                data[0].char71count,
                data[0].char72count,
                data[0].char73count,
                data[0].char74count,
                data[0].char75count,
                data[0].char76count,
                data[0].char77count,
                data[0].char78count,
                data[0].char79count,
                data[0].char80count,
                data[0].char81count,
                data[0].char82count,
                data[0].char83count,
                data[0].char84count,
                data[0].char85count,
                data[0].char86count,
                data[0].char87count,
                data[0].char88count,
                data[0].char89count,
                data[0].char90count,
                data[0].char91count,
                data[0].char92count,
                data[0].char93count,
                data[0].char94count,
                data[0].char95count,
                data[0].char96count,
                data[0].char97count,
                data[0].char98count,
                data[0].char99count,
                data[0].char100count,
            ];
            var characterData = [];
            for (var i = 1; i <= character_value; i++) {
                var characterText = data[0]['chartext' + i];
                var characterName = data[0]['charname' + i];
                var characterNameOriginal = data[0]['charname_og' + i];
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
                    var cLang = data[0]['char' + (countIndex + 1) + 'lang' + j];
                    var cName = data[0]['char' + (countIndex + 1) + 'name' + j];
                    var cNameog = data[0]['char' + (countIndex + 1) + 'name_og' + j];
        
                    $('.voice' + (countIndex + 1)).append('<div class="character-voicer ' + cLang + '">'+
                        '<p class="character-voicername" ttt="' + cNameog + '">' + cName + '</p>'+
                    '</div>');
                }
            });
            
            var music_value = data[0].musiccount; // music 수
            var musicData = [];
            for (var i = 1; i <= music_value; i++) {
                var musicType = data[0]['musictype' + i];
                var musicTitle = data[0]['musictitle' + i];
                var musicTitleOriginal = data[0]['musictitle_og' + i];
                var musicUrl = data[0]['musicurl' + i];
                var musicVideoId = data[0]['musicvideoid' + i];
                var musicSing = data[0]['musicsing' + i];
                var musicSingOriginal = data[0]['musicsing_og' + i];
                var musicWrite = data[0]['musicwrite' + i];
                var musicWriteOriginal = data[0]['musicwrite_og' + i];
                var musicProduce = data[0]['musicproduce' + i];
                var musicProduceOriginal = data[0]['musicproduce_og' + i];
                var musicArrange = data[0]['musicarrange' + i];
                var musicArrangeOriginal = data[0]['musicarrange_og' + i];
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

            var episode_value = data.epicount; // 에피소드 줄 수
            var episodeData = [];
            for (var i = 1; i <= episode_value; i++) {
                var episodeText = data['epiline' + i];
                var episodeLine = i - 1;
                episodeData.push({
                    line: episodeLine,
                    text: episodeText,
                });
            }
            // 에피소드 줄 생성
            episodeData.forEach(function(item) {
                $(".episode-tables tbody").append('<tr i="' + item.line + '" class="episode-tr">' + item.text + '</tr>');
            });
            
            const metascore_score = data[0].metasc;
            const metascore_link = data[0].metalink;
            const metascore_percent = data[0].metaper;
            const metacritic_userscore_score = data[0].metausersc;
            const metacritic_userscore_link = data[0].metauserlink;
            const metacritic_userscore_percent = data[0].metauserper;
    
            const tomatometer_score = data[0].tomatosc;
            const tomatometer_link = data[0].tomatolink;
            const tomatometer_percent = data[0].tomatoper;
            const rottentomatoes_audience_score = data[0].tomatousersc;
            const rottentomatoes_audience_link = data[0].tomatouserlink;
            const rottentomatoes_audience_percent = data[0].tomatouserper;
    
            const imdb_score = data[0].imdbsc;
            const imdb_link = data[0].imdblink;
            const imdb_percent = data[0].imdbper;
    
            const letterboxd_score = data[0].lettersc;
            const letterboxd_link = data[0].letterlink;
            const letterboxd_percent = data[0].letterper;
    
            const tmdb_score = data[0].tmdbsc;
            const tmdb_link = data[0].tmdblink;
            const tmdb_percent = data[0].tmdbper;
    
            const filmarks_score = data[0].filmarkssc;
            const filmarks_link = data[0].filmarkslink;
            const filmarks_percent = data[0].filmarksper;
    
            const yahoojp_score = data[0].yahoosc;
            const yahoojp_link = data[0].yahoolink;
            const yahoojp_percent = data[0].yahooper;
    
            const google_score = data[0].googlesc;
            const google_link = data[0].googlelink;
            const google_percent = data[0].googleper;
    
            const eiga_score = data[0].eigasc;
            const eiga_link = data[0].eigalink;
            const eiga_percent = data[0].eigaper;
    
            const douban_score = data[0].doubansc;
            const douban_link = data[0].doubanlink;
            const douban_percent = data[0].doubanper;
    
            const bilibili_score = data[0].bilisc;
            const bilibili_link = data[0].bililink;
            const bilibili_percent = data[0].biliper;
    
            const myanimelist_score = data[0].malsc;
            const myanimelist_link = data[0].mallink;
            const myanimelist_percent = data[0].malper;
    
            const mydramalist_score = data[0].mdlsc;
            const mydramalist_link = data[0].mdllink;
            const mydramalist_percent = data[0].mdlper;
    
            const anikore_score = data[0].anikoresc;
            const anikore_link = data[0].anikorelink;
            const anikore_percent = data[0].anikoreper;
            const anikore_userscore_score = data[0].anikoreusersc;
            const anikore_userscore_link = data[0].anikoreuserlink;
            const anikore_userscore_percent = data[0].anikoreuserper;
    
            const anilist_score = data[0].anilistsc;
            const anilist_link = data[0].anilistlink;
            const anilist_percent = data[0].anilistper;
    
            const watchapedia_score = data[0].watchasc;
            const watchapedia_link = data[0].watchalink;
            const watchapedia_percent = data[0].watchaper;
    
            const kinolights_score = data[0].kinosc;
            const kinolights_link = data[0].kinolink;
            const kinolights_percent = data[0].kinoper;
            const kinolights_userscore_score = data[0].kinousersc;
            const kinolights_userscore_link = data[0].kinouserlink;
            const kinolights_userscore_percent = data[0].kinouserper;
    
            const primevideo_score = data[0].primesc;
            const primevideo_link = data[0].primelink;
            const primevideo_percent = data[0].primeper;
    
            const unext_score = data[0].unextsc;
            const unext_link = data[0].unextlink;
            const unext_percent = data[0].unextper;
    
            const crunchyroll_score = data[0].crunchysc;
            const crunchyroll_link = data[0].crunchylink;
            const crunchyroll_percent = data[0].crunchyper;
    
            const laftel_score = data[0].laftelsc;
            const laftel_link = data[0].laftellink;
            const laftel_percent = data[0].laftelper;
            
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
                
                if(description.offsetHeight > 500){
                    description.style.maxHeight = "500px";
                    showMore.style.display = "block";
                }
            });

            const data_import_type_first = data[0].data_import_type_first;
            const data_import_first = data[0].data_import_first;
            const data_import_type_second = data[0].data_import_type_second;
            const data_import_second = data[0].data_import_second;
            const data_import_type_third = data[0].data_import_type_third;
            const data_import_third = data[0].data_import_third;

            $(".related").append('<p class="description-title">관련 작품</p>'+
            '<p>이 콘텐츠는 다음 작품과 관련이 있습니다.</p>'+
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
                        $('#warning').append('<div id="child">죄송합니다. 이 콘텐츠에 액세스할 수 없습니다.</div><a class="age-check-back" onclick="window.history.back()">돌아가기</a>'); // #child 요소 추가
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
                        $('#warning').append('<div id="child">죄송합니다. 이 콘텐츠에 액세스할 수 없습니다.</div><a class="age-check-back" onclick="window.history.back()">돌아가기</a>'); // #child 요소 추가
                    } else {
                        $('#warning').remove();
                    }
                }
            });
        });
    } else {
        $('body').addClass('ko');
        $('.section').remove();
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
                    '<a class="discover-text" href="https://www.hungbok.com/ko/games/calendar">신규 출시</a>'+
                    '<a class="discover-button" href="https://www.hungbok.com/ko/games/calendar">모두 보기</a>'+
                '</div>'+
                '<div class="discover-container new-release"></div>'+
            '</div>'+
            '<div class="discover-contents">'+
                '<div class="discover-title">'+
                    '<a class="discover-text" href="https://www.hungbok.com/ko/games/calendar">출시 예정</a>'+
                    '<a class="discover-button" href="https://www.hungbok.com/ko/games/calendar">모두 보기</a>'+
                '</div>'+
                '<div class="discover-container upcoming-release"></div>'+
            '</div>'+
            '<div class="discover-contents">'+
                '<div class="discover-title">'+
                    '<a class="discover-text" href="https://www.hungbok.com/ko/free-games?category=games">무료 배포</a>'+
                    '<a class="discover-button" href="https://www.hungbok.com/ko/free-games?category=games">모두 보기</a>'+
                '</div>'+
                '<div class="discover-container free-games" id="freegamesContainer"></div>'+
            '</div>'+
            '<div class="discover-contents">'+
                '<div class="discover-title">'+
                    '<a class="discover-text" href="https://www.hungbok.com/ko/games/sales">최신 할인</a>'+
                    '<a class="discover-button" href="https://www.hungbok.com/ko/games/sales">모두 보기</a>'+
                '</div>'+
                '<div class="discover-container" id="upcomingContainer"></div>'+
            '</div>'+
            '<div class="discover-contents">'+
                '<div class="discover-title">'+
                    '<a class="discover-text" href="https://www.hungbok.com/ko/free-games?category=bundle">신규 번들</a>'+
                    '<a class="discover-button" href="https://www.hungbok.com/ko/free-games?category=bundle">모두 보기</a>'+
                '</div>'+
                '<div class="discover-container free-games" id="bundleContainer"></div>'+
            '</div>'+
            '<div class="discover-contents">'+
                '<div class="discover-title">'+
                    '<a class="discover-text" href="https://www.hungbok.com/ko/games/list">신규 추가</a>'+
                    '<a class="discover-button" href="https://www.hungbok.com/ko/games/list">모두 보기</a>'+
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
                    // ko 값이 있으면 그 값을, 없으면 en 값을 사용
                    const title = game.ko ? game.ko.title : game.en.title;
                    const summary = game.ko ? game.ko.summary : game.en.summary;
        
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
                    if (data['ko'] && key in data['ko'] && data['ko'][key] !== undefined) {
                        return data['ko'][key];
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
                            const formattedDate = formatDateToKR(game.date);
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
                            const formattedDate = formatDateToKR(game.date);
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
                if (data['ko'] && key in data['ko'] && data['ko'][key] !== undefined) {
                    return data['ko'][key];
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
                    const formattedDate = formatDateToKR(date);
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