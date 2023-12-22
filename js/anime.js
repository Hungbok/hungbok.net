async function loadAsyncScripts() {
    await loadScript('/js/table-multi-hover.js');
    await loadScript('/js/youtube-popup.js');
    await loadScript('/js/player.js');
    await loadScript('/js/lightbox.js');
    await loadScript('/js/slick.js');
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

document.addEventListener("DOMContentLoaded", function () {
    // 파라미터에서 'q' 값을 가져옴
    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("q");
    
    if (queryParam) {
        // JSON 파일 가져오기
        $.getJSON(`/data/anime/${queryParam}.json`, function (data) {
            // JSON 데이터를 HTML에 대체삽입
            $("#title").text(data.title_ko + ' | HungBok');
            $('body').addClass('data-' + data.data_status);
    
            document.body.innerHTML = document.body.innerHTML.replace(/{title_og}/g, data.title_og);
            document.body.innerHTML = document.body.innerHTML.replace(/{title_en}/g, data.title_en);
            document.body.innerHTML = document.body.innerHTML.replace(/{title_ja}/g, data.title_ja);
            document.body.innerHTML = document.body.innerHTML.replace(/{title_ko}/g, data.title_ko);
            document.body.innerHTML = document.body.innerHTML.replace(/{type}/g, data.type);
            document.body.innerHTML = document.body.innerHTML.replace(/{status}/g, data.status);
            document.body.innerHTML = document.body.innerHTML.replace(/{exclusive}/g, data.exclusive);
            document.body.innerHTML = document.body.innerHTML.replace(/{year}/g, data.year);
            document.body.innerHTML = document.body.innerHTML.replace(/{month}/g, data.month);
            document.body.innerHTML = document.body.innerHTML.replace(/{day}/g, data.day);
            document.body.innerHTML = document.body.innerHTML.replace(/{title_kana}/g, data.title_kana);
            document.body.innerHTML = document.body.innerHTML.replace(/{title_romaji}/g, data.title_romaji);
            document.body.innerHTML = document.body.innerHTML.replace(/{synopsis}/g, data.synopsis);
            // document.body.innerHTML = document.body.innerHTML.replace(/{director_og}/g, data.director_og);
            document.body.innerHTML = document.body.innerHTML.replace(/{director_ko}/g, data.director_ko);
            // document.body.innerHTML = document.body.innerHTML.replace(/{writer_og}/g, data.writer_og);
            document.body.innerHTML = document.body.innerHTML.replace(/{writer_ko}/g, data.writer_ko);
            // document.body.innerHTML = document.body.innerHTML.replace(/{original_og}/g, data.original_og);
            document.body.innerHTML = document.body.innerHTML.replace(/{original_ko}/g, data.original_ko);
            // document.body.innerHTML = document.body.innerHTML.replace(/{producer_og}/g, data.producer_og);
            document.body.innerHTML = document.body.innerHTML.replace(/{producer_ko}/g, data.producer_ko);
            // document.body.innerHTML = document.body.innerHTML.replace(/{starring_og}/g, data.starring_og);
            document.body.innerHTML = document.body.innerHTML.replace(/{starring_ko}/g, data.starring_ko);
            // document.body.innerHTML = document.body.innerHTML.replace(/{music_og}/g, data.music_og);
            document.body.innerHTML = document.body.innerHTML.replace(/{music_ko}/g, data.music_ko);
            // document.body.innerHTML = document.body.innerHTML.replace(/{theme_og}/g, data.theme_og);
            document.body.innerHTML = document.body.innerHTML.replace(/{theme_ko}/g, data.theme_ko);
            // document.body.innerHTML = document.body.innerHTML.replace(/{cg_og}/g, data.cinematographer_og);
            document.body.innerHTML = document.body.innerHTML.replace(/{cg_ko}/g, data.cinematographer_ko);
            // document.body.innerHTML = document.body.innerHTML.replace(/{editor_og}/g, data.editor_og);
            document.body.innerHTML = document.body.innerHTML.replace(/{editor_ko}/g, data.editor_ko);
            // document.body.innerHTML = document.body.innerHTML.replace(/{summary}/g, data.summary);
    
            document.body.innerHTML = document.body.innerHTML.replace(/{country}/g, data.country);
            document.body.innerHTML = document.body.innerHTML.replace(/{language}/g, data.language);
            // document.body.innerHTML = document.body.innerHTML.replace(/{season}/g, data.season);
            document.body.innerHTML = document.body.innerHTML.replace(/{episode}/g, data.episode);
            document.body.innerHTML = document.body.innerHTML.replace(/{runningtime}/g, data.runningtime);
            document.body.innerHTML = document.body.innerHTML.replace(/{age}/g, data.age_rating);
            document.body.innerHTML = document.body.innerHTML.replace(/{grac}/g, data.grac_rating);
            document.body.innerHTML = document.body.innerHTML.replace(/{cero}/g, data.cero_rating);
            document.body.innerHTML = document.body.innerHTML.replace(/{esrb}/g, data.esrb_rating);
            document.body.innerHTML = document.body.innerHTML.replace(/{pegi}/g, data.pegi_rating);
            document.body.innerHTML = document.body.innerHTML.replace(/{iarc}/g, data.iarc_rating);
            document.body.innerHTML = document.body.innerHTML.replace(/{apple}/g, data.apple_rating);
            document.body.innerHTML = document.body.innerHTML.replace(/{kcsc}/g, data.kcsc_rating);
            document.body.innerHTML = document.body.innerHTML.replace(/{tvpg}/g, data.tvpg_rating);
            document.body.innerHTML = document.body.innerHTML.replace(/{kmrb}/g, data.kmrb_rating);
            document.body.innerHTML = document.body.innerHTML.replace(/{eirin}/g, data.eirin_rating);
            document.body.innerHTML = document.body.innerHTML.replace(/{cara}/g, data.cara_rating);
            
            // document.body.innerHTML = document.body.innerHTML.replace(/{imdb}/g, data.imdb);
            // document.body.innerHTML = document.body.innerHTML.replace(/{tmdb}/g, data.tmdb);
            // document.body.innerHTML = document.body.innerHTML.replace(/{eiga}/g, data.eiga);
            // document.body.innerHTML = document.body.innerHTML.replace(/{wiki}/g, data.wiki);
            // document.body.innerHTML = document.body.innerHTML.replace(/{ja_wiki}/g, data.ja_wiki);
            // document.body.innerHTML = document.body.innerHTML.replace(/{fandom}/g, data.fandom);
    
            // document.body.innerHTML = document.body.innerHTML.replace(/{plot}/g, data.plot);
            // document.body.innerHTML = document.body.innerHTML.replace(/{ja_plot}/g, data.ja_plot);
            // document.body.innerHTML = document.body.innerHTML.replace(/{ko_plot}/g, data.ko_plot);
    
            // document.body.innerHTML = document.body.innerHTML.replace(/{story}/g, data.story);
            document.body.innerHTML = document.body.innerHTML.replace(/{series_url}/g, data.series_url);
            document.body.innerHTML = document.body.innerHTML.replace(/{book_url}/g, data.book_url);
            document.body.innerHTML = document.body.innerHTML.replace(/{movie_url}/g, data.movie_url);
            document.body.innerHTML = document.body.innerHTML.replace(/{tv_url}/g, data.tv_url);
            document.body.innerHTML = document.body.innerHTML.replace(/{anime_url}/g, data.tv_url);
            document.body.innerHTML = document.body.innerHTML.replace(/{game_url}/g, data.game_url);
    
            document.body.innerHTML = document.body.innerHTML.replace(/{url}/g, data.url);
            document.body.innerHTML = document.body.innerHTML.replace(/{page}/g, data.page);
            document.body.innerHTML = document.body.innerHTML.replace(/{logo}/g, data.logo);
            document.body.innerHTML = document.body.innerHTML.replace(/{poster}/g, data.poster);
            document.body.innerHTML = document.body.innerHTML.replace(/{thumbnail}/g, data.thumbnail);
            document.body.innerHTML = document.body.innerHTML.replace(/{background}/g, data.background);
            // document.body.innerHTML = document.body.innerHTML.replace(/{trailer}/g, data.trailer);
            // document.body.innerHTML = document.body.innerHTML.replace(/{preview}/g, data.preview);
            document.body.innerHTML = document.body.innerHTML.replace(/{rating}/g, data.rating);
    
            const url = data.url;
            const series_url = data.series_url;
            const book_url = data.book_url;
            const movie_url = data.movie_url;
            const tv_url = data.tv_url;
            const anime_url = data.anime_url;
            const game_url = data.game_url;
    
            const playerid = data.storyid1;
            const playertitle = data.storytitle1;
            const playerepisode = data.storyepisode1;
    
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
    
            const opencritic_rating_score = data.openrasc;
            const opencritic_rating_link = data.openralink;
            const opencritic_rating_image = data.openraimg;
            const opencritic_score = data.opensc;
            const opencritic_link = data.openlink;
            const opencritic_percent = data.openper;
            const opencritic_recommend_score = data.openresc;
            const opencritic_recommend_link = data.openrelink;
            const opencritic_recommend_percent = data.openreper;
    
            const appstore_score = data.appstoresc;
            const appstore_link = data.appstorelink;
            const appstore_percent = data.appstoreper;
    
            const googleplay_score = data.googleplaysc;
            const googleplay_link = data.googleplaylink;
            const googleplay_percent = data.googleplayper;
    
            const steam_score = data.steamsc;
            const steam_link = data.steamlink;
            const steam_percent = data.steamper;
            const steam_userscore_score = data.steamusersc;
            const steam_userscore_link = data.steamuserlink;
            const steam_userscore_percent = data.steamuserper;
    
            const epicgames_score = data.epicsc;
            const epicgames_link = data.epiclink;
            const epicgames_percent = data.epicper;
    
            const gog_score = data.gogsc;
            const gog_link = data.goglink;
            const gog_percent = data.gogper;
    
            const microsoft_score = data.mssc;
            const microsoft_link = data.mslink;
            const microsoft_percent = data.msper;

            

            var tag_value = data.tagcount; // tag 수
            var tagData = [];
            for (var i = 1; i <= tag_value; i++) {
                var tagClass = data['tagclass' + i];
                var tagTtt = data['tagttt' + i];
                var tagText = data['tagtext' + i];
                tagData.push({
                    class: tagClass,
                    ttt: tagTtt,
                    text: tagText,
                });
            }
            // tag 생성
            tagData.forEach(function(item) {
                $(".contents-top-tag").append('<p class=' + item.class + ' ' + item.ttt + '>' + item.text + '</p>');
            });



            var link_value = data.linkcount; // link 수
            var linkData = [];
            for (var i = 1; i <= link_value; i++) {
                var linkIcon = data['linkicon' + i];
                var linkTitle = data['linktitle' + i];
                var linkUrl = data['linkurl' + i];
                linkData.push({
                    icon: linkIcon,
                    title: linkTitle,
                    url: linkUrl,
                });
            }
            // link 생성
            linkData.forEach(function(item) {
                $(".contents-top-links").append('<a class="contents-top-link" ttt="' + item.title + '" href="' + item.url + '" target="_blank">'+
                    '<img src="/img/icon/' + item.icon + '.svg" onerror="this.src=`/img/icon/warning.svg`;this.className=`onerror`;" loading="lazy">'+
                '</a>');
            });
    
    
    
            var sublink_value = data.sublinkcount; // sublink 수
            var sublinkData = [];
            for (var i = 1; i <= sublink_value; i++) {
                var sublinkIcon = data['sublinkicon' + i];
                var sublinkTitle = data['sublinktitle' + i];
                var sublinkUrl = data['sublinkurl' + i];
                sublinkData.push({
                    icon: sublinkIcon,
                    title: sublinkTitle,
                    url: sublinkUrl,
                });
            }
            // sublink 생성
            sublinkData.forEach(function(item) {
                $(".external-links").append('<div class="' + item.url + '">'+
                        '<a class="external-link-content" target="_blank">'+
                            '<img src="/img/icon/' + item.icon + '.svg" onerror="this.src=`/img/icon/warning.svg`;this.className=`onerror`;" loading="lazy">'+
                        '</a>'+
                    '</div>');

            });
    
    
            
            var video_value = data.videocount; // video 수
    
            var videoData = [];
            
            for (var i = 1; i <= video_value; i++) {
                var videoId = data['videoid' + i];
                var videoTitle = data['videotitle' + i];
                
                videoData.push({
                    id: videoId,
                    title: videoTitle,
                });
            }
            
            // video 생성
            videoData.forEach(function(item) {
                $(".slider").append('<div class="slider-item">'+
                    '<div class="youtube-link" youtubeid="' + item.id + '">'+
                        '<img src="/img/hungbok/hb_error_horizontal.svg">'+
                        '<img class="slider-background" src="/img/anime/' + url + '/' + item.id + '.avif" onerror="this.remove ? this.remove() : this.removeNode();">'+
                        '<div class="youtube-title">' + item.title + '</div>'+
                    '</div>'+
                '</div>');
            });
    
    
            
            var image_value = data.imagecount; // image 수
    
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
                    '<a class="slider-image" href="/img/anime/' + url + '/' + item.img + '.jpg" data-lightbox="preview">'+
                        '<img src="/img/hungbok/hb_error_horizontal.svg">'+
                        '<img class="slider-background" src="/img/anime/' + url + '/' + item.img + '.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                    '</a>'+
                '</div>');
            });
    
    
            
            var production_value = data.procount; // 제작사 수
    
            var productionData = [];
            
            for (var i = 1; i <= production_value; i++) {
                var productionText = data['protext' + i];
                var productionImg = data['proimg' + i];
                
                productionData.push({
                    text: productionText,
                    img: productionImg,
                });
            }
    
            // 제작사 로고 생성
            productionData.forEach(function(item) {
                $(".production").append('<p class="info-logo" ttt="' + item.text + '">'+
                    '<img src="/img/logo/' + item.img + '.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
                '</p>');
            });
    
    
            
            var publisher_value = data.pubcount; // 배급사 수
    
            var publisherData = [];
            
            for (var i = 1; i <= publisher_value; i++) {
                var publisherText = data['pubtext' + i];
                var publisherImg = data['pubimg' + i];
                
                publisherData.push({
                    text: publisherText,
                    img: publisherImg,
                });
            }
            
            // 배급사 로고 생성
            publisherData.forEach(function(item) {
                $(".publisher").append('<p class="info-logo" ttt="' + item.text + '">'+
                    '<img src="/img/logo/' + item.img + '.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
                '</p>');
            });
    
    
    
            var wiki_value = data.wikicount; // wiki 수
    
            var wikiData = [];
            
            for (var i = 1; i <= wiki_value; i++) {
                var wikiIcon = data['wikiicon' + i];
                var wikiTitle = data['wikititle' + i];
                var wikiClass = data['wikiclass' + i];
                var wikiUrl = data['wikiurl' + i];
                
                wikiData.push({
                    icon: wikiIcon,
                    title: wikiTitle,
                    class: wikiClass,
                    url: wikiUrl,
                });
            }
            
            // wiki 생성
            wikiData.forEach(function(item) {
                $(".wiki").append('<a class="wiki-link ' + item.class + '" ttt="' + item.title + '" href="' + item.url + '" target="_blank">'+
                    '<img src="/img/icon/' + item.icon + '.svg" onerror="this.src=`/img/icon/warning.svg`;this.className=`onerror`;" loading="lazy">'+
                '</a>');
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
                        '<img class="story-background" src="/img/hungbok/hb_error_horizontal.svg">'+
                        '<img class="story-background" src="/img/anime/' + url + '/' + item.img + '.jpg" onerror="this.remove ? this.remove() : this.removeNode();" loading="lazy">'+
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
                        '<img class="setting-background" src="/img/hungbok/hb_error_horizontal.svg">'+
                        '<img class="setting-background" src="/img/anime/' + url + '/' + item.img + '.jpg" onerror="this.remove ? this.remove() : this.removeNode();" loading="lazy">'+
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
                        '<img class="character-background" src="/img/anime/' + url + '/' + item.img + '.jpg"  onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                            '<img src="/img/hungbok/hb_error_horizontal.svg">'+
                            '<img class="slider-background" src="/img/anime/' + url + '/' + item.videoid + '.avif" onerror="this.remove ? this.remove() : this.removeNode();" loading="lazy">'+
                        '</div>'+
                    '</div>'+
                    '<div class="music-image">'+
                        '<a href="' + item.url + '" target="_blank">'+
                            '<img class="music-background" src="/img/hungbok/hb_error_square.svg">'+
                            '<img class="music-background" src="/img/anime/' + url + '/' + item.img + '.jpg" onerror="this.remove ? this.remove() : this.removeNode();" loading="lazy">'+
                        '</a>'+
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
                $(".episode tbody").append('<tr i="' + item.line + '" class="episode-tr">' + item.text + '</tr>');
            });
    
    
    
            // 평가 틀 생성
            $(".rating.tv.metacritic, .rating.tva.metacritic, .rating.movie.metacritic, .rating.web.metacritic, .rating.ova.metacritic, .rating.special.metacritic").append('<div class="rating-card metacritic rating-two-score">'+
                '<div class="rating-image">'+
                    '<img title="Metacritic" src="/img/logo/metacritic.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Rotten Tomatoes" src="/img/logo/rottentomatoes.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="IMDb" src="/img/logo/imdb.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Letterboxd" src="/img/logo/letterboxd.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="The Movie Database" src="/img/logo/tmdb.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Filmarks" src="/img/logo/filmarks.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Yahoo Japan" src="/img/logo/yahoojapan.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Google" src="/img/logo/google.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Eiga.com" src="/img/logo/eiga.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Douban" src="/img/logo/douban.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="BiliBili" src="/img/logo/bilibili.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="MyAnimeList" src="/img/logo/myanimelist.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="MyDramaList" src="/img/logo/mydramalist.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Anikore" src="/img/logo/anikore.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Anilist" src="/img/logo/anilist.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Watchapedia" src="/img/logo/watchapedia.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Kinolights" src="/img/logo/kinolights.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Prime Video" src="/img/logo/primevideo.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="U-Next" src="/img/logo/unext.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Crunchyroll" src="/img/logo/crunchyroll.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
                    '<img title="Laftel" src="/img/logo/laftel.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
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
            
            $(".rating.game.metacritic").append('<div class="rating-card metacritic rating-three-score">'+
                '<div class="rating-image">'+
                    '<img title="Metacritic" src="/img/logo/metacritic.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
            '</div>');
    
            var metacritic_value = data.metacount;
    
            var metacriticData = [];
            
            for (var i = 1; i <= metacritic_value; i++) {
                var metaClass = data['metaclass' + i];
                var metaTtt = data['metattt' + i];
                var metaImg = data['metaimg' + i];
                var metaScore = data['metasc' + i];
                var metaLink = data['metalink' + i];
                var metaPercent = data['metaper' + i];
                var metaUserScore = data['metausersc' + i];
                var metaUserLink = data['metauserlink' + i];
                var metaUserPercent = data['metauserper' + i];
                
                metacriticData.push({
                    class: metaClass,
                    ttt: metaTtt,
                    img: metaImg,
                    link: metaLink,
                    score: metaScore,
                    percent: metaPercent,
                    userscore_link: metaUserLink,
                    userscore_score: metaUserScore,
                    userscore_percent: metaUserPercent,
                });
            }
    
            metacriticData.forEach(function(item) {
                $(".rating-card.metacritic.rating-three-score").append('<div class="rating-card rating-two-score ' + item.class + '">'+
                    '<img title="' + item.ttt + '" class="rating-platform" src="/img/icon/' + item.img + '.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
                    '<div class="rating-score">'+
                        '<div class="rating-title">메타스코어</div>'+
                        "<a href='" + item.link + "' class='rating-star' target='_blank' ttt='" + item.score + "'>"+
                            '<div class="star-ratings">'+
                                '<div class="fill-ratings" style="width: ' + item.percent + ';">'+
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
                        "<a href='" + item.userscore_link + "' class='rating-star' target='_blank' ttt='" + item.userscore_score + "'>"+
                            '<div class="star-ratings">'+
                                '<div class="fill-ratings" style="width: ' + item.userscore_percent + ';">'+
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
                    '<img title="OpenCritic" src="/img/logo/opencritic.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">오픈크리틱 평가</div>'+
                    "<a href='" + opencritic_rating_link + "' class='rating-star' target='_blank' ttt='" + opencritic_rating_score + "'>"+
                        '<img src="/img/icon/' + opencritic_rating_image + '.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
                    '</a>'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">평론가 평점</div>'+
                    "<a href='" + opencritic_link + "' class='rating-star' target='_blank' ttt='" + opencritic_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + opencritic_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">평론가 추천도</div>'+
                    "<a href='" + opencritic_recommend_link + "' class='rating-star' target='_blank' ttt='" + opencritic_recommend_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + opencritic_recommend_percent + ';">'+
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
                    '<img title="Google Play" src="/img/logo/googleplay.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + googleplay_link + "' class='rating-star' target='_blank' ttt='" + googleplay_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + googleplay_percent + ';">'+
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
                    '<img title="App Store" src="/img/logo/appstore.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + appstore_link + "' class='rating-star' target='_blank' ttt='" + appstore_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + appstore_percent + ';">'+
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
                    '<img title="Microsoft Store" src="/img/logo/microsoft.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + microsoft_link + "' class='rating-star' target='_blank' ttt='" + microsoft_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + microsoft_percent + ';">'+
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
                    '<img title="Steam" src="/img/logo/steam.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">모든 평가</div>'+
                    "<a href='" + steam_link + "' class='rating-star' target='_blank' ttt='" + steam_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + steam_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">최근 평가</div>'+
                    "<a href='" + steam_userscore_link + "' class='rating-star' target='_blank' ttt='" + steam_userscore_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + steam_userscore_percent + ';">'+
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
                    '<img title="Epic Games Store" src="/img/logo/epicgamesstore.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + epicgames_link + "' class='rating-star' target='_blank' ttt='" + epicgames_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + epicgames_percent + ';">'+
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
                    '<img title="GOG.com" src="/img/logo/gog.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
                '</div>'+
                '<div class="rating-score">'+
                    '<div class="rating-title">유저 평점</div>'+
                    "<a href='" + gog_link + "' class='rating-star' target='_blank' ttt='" + gog_score + "'>"+
                        '<div class="star-ratings">'+
                            '<div class="fill-ratings" style="width: ' + gog_percent + ';">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                            '<div class="empty-ratings">'+
                                '<span>★★★★★</span>'+
                            '</div>'+
                        '</div>'+
                    '</a>'+
                '</div>'+
            '</div>');



            $(".book.data-import").append('<div class="book-stack">'+
                '<div class="book-item">'+
                    '<div class="book-image">'+
                        '<img src="/img/book/' + book_url + '/book_1.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                        '<img src="/img/hungbok/hb_error_vertical.svg">'+
                    '</div>'+
                '</div>'+
                '<div class="book-item-hover">'+
                    '<div class="book-item">'+
                        '<div class="book-image">'+
                            '<img src="/img/book/' + book_url + '/book_2.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                            '<img src="/img/hungbok/hb_error_vertical.svg">'+
                        '</div>'+
                    '</div>'+
                    '<div class="book-item">'+
                        '<div class="book-image">'+
                            '<img src="/img/book/' + book_url + '/book_3.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                            '<img src="/img/hungbok/hb_error_vertical.svg">'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="book-stack">'+
                '<div class="book-subtitle" data-placeholder="title_og"></div>'+
                '<div class="book-title" data-placeholder="title_ko"></div>'+
                '<a class="book-button" href="./book?q=' + book_url + '" target="_blank"></a>'+
                '<div class="book-item-list">'+
                    '<div class="book-item">'+
                        '<div class="book-image">'+
                            '<img src="/img/book/' + book_url + '/book_4.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                            '<img src="/img/hungbok/hb_error_vertical.svg">'+
                        '</div>'+
                    '</div>'+
                    '<div class="book-item">'+
                        '<div class="book-image">'+
                            '<img src="/img/book/' + book_url + '/book_5.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                            '<img src="/img/hungbok/hb_error_vertical.svg">'+
                        '</div>'+
                    '</div>'+
                    '<div class="book-item">'+
                        '<div class="book-image">'+
                            '<img src="/img/book/' + book_url + '/book_6.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                            '<img src="/img/hungbok/hb_error_vertical.svg">'+
                        '</div>'+
                    '</div>'+
                    '<div class="book-item">'+
                        '<div class="book-image">'+
                            '<img src="/img/book/' + book_url + '/book_7.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                            '<img src="/img/hungbok/hb_error_vertical.svg">'+
                        '</div>'+
                    '</div>'+
                    '<div class="book-item">'+
                        '<div class="book-image">'+
                            '<img src="/img/book/' + book_url + '/book_8.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                            '<img src="/img/hungbok/hb_error_vertical.svg">'+
                        '</div>'+
                    '</div>'+
                    '<div class="book-item">'+
                        '<div class="book-image">'+
                            '<img src="/img/book/' + book_url + '/book_9.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                            '<img src="/img/hungbok/hb_error_vertical.svg">'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>');



            $(".movie.data-import").append('<div class="movie-stack">'+
                '<div class="movie-item">'+
                    '<div class="movie-image">'+
                        '<img src="/img/movie/' + movie_url + '/thumbnail.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                        '<img src="/img/hungbok/hb_error_vertical.svg">'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="movie-stack">'+
                '<div class="movie-subtitle" data-placeholder="title_og"></div>'+
                '<div class="movie-titles">'+
                    '<div class="movie-title" data-placeholder="title_ko"></div>'+
                    '<div class="movie-date" data-placeholder="year"></div>'+
                '</div>'+
                '<a class="movie-button" href="./movie?q=' + movie_url + '" target="_blank"></a>'+
                '<div class="movie-preview">'+
                    '<div class="movie-preview-image">'+
                        '<img src="/img/movie/' + movie_url + '/image_1.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                        '<img src="/img/hungbok/hb_error_horizontal.svg">'+
                    '</div>'+
                    '<div class="movie-preview-image">'+
                        '<img src="/img/movie/' + movie_url + '/image_2.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                        '<img src="/img/hungbok/hb_error_horizontal.svg">'+
                    '</div>'+
                    '<div class="movie-preview-image">'+
                        '<img src="/img/movie/' + movie_url + '/image_3.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                        '<img src="/img/hungbok/hb_error_horizontal.svg">'+
                    '</div>'+
                    '<div class="movie-preview-image">'+
                        '<img src="/img/movie/' + movie_url + '/image_4.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                        '<img src="/img/hungbok/hb_error_horizontal.svg">'+
                    '</div>'+
                '</div>'+
            '</div>');
            


            $(".tv.data-import").append('<div class="tv-stack">'+
                '<div class="tv-item">'+
                    '<div class="tv-image">'+
                        '<img src="/img/tv/' + tv_url + '/thumbnail.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                        '<img src="/img/hungbok/hb_error_vertical.svg">'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="tv-stack">'+
                '<div class="tv-subtitle" data-placeholder="title_og"></div>'+
                '<div class="tv-titles">'+
                    '<div class="tv-title" data-placeholder="title_ko"></div>'+
                    '<div class="tv-date" data-placeholder="year"></div>'+
                '</div>'+
                '<a class="tv-button" href="./tv?q=' + tv_url + '" target="_blank"></a>'+
                '<div class="tv-preview">'+
                    '<div class="tv-preview-image">'+
                        '<img src="/img/tv/' + tv_url + '/image_1.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                        '<img src="/img/hungbok/hb_error_horizontal.svg">'+
                    '</div>'+
                    '<div class="tv-preview-image">'+
                        '<img src="/img/tv/' + tv_url + '/image_2.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                        '<img src="/img/hungbok/hb_error_horizontal.svg">'+
                    '</div>'+
                    '<div class="tv-preview-image">'+
                        '<img src="/img/tv/' + tv_url + '/image_3.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                        '<img src="/img/hungbok/hb_error_horizontal.svg">'+
                    '</div>'+
                '</div>'+
            '</div>');
    


            $(".anime.data-import").append('<div class="anime-stack">'+
                '<div class="anime-preview-image">'+
                    '<img src="/img/anime/' + anime_url + '/background.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                    '<img src="/img/hungbok/hb_error_horizontal.svg">'+
                '</div>'+
                '<div class="anime-subtitle" data-placeholder="title_og"></div>'+
                '<div class="anime-title" data-placeholder="title_ko"></div>'+
                '<a class="anime-button" href="./anime?q=' + anime_url + '" target="_blank"></a>'+
            '</div>'+
            '<div class="anime-stack">'+
                '<div class="anime-item">'+
                    '<div class="anime-image">'+
                        '<img src="/img/anime/' + anime_url + '/thumbnail.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                        '<img src="/img/hungbok/hb_error_vertical.svg">'+
                    '</div>'+
                '</div>'+
            '</div>');



            $(".game.data-import").append('<div class="game-stack">'+
                '<div class="game-subtitle" data-placeholder="title_og"></div>'+
                '<div class="game-title" data-placeholder="title_ko"></div>'+
                '<a class="game-button" href="./game?q=' + game_url + '" target="_blank"></a>'+
                '<div class="game-preview-image">'+
                    '<img src="/img/game/' + game_url + '/background.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                    '<img src="/img/hungbok/hb_error_horizontal.svg">'+
                '</div>'+
            '</div>'+
            '<div class="game-stack">'+
                '<div class="game-item">'+
                    '<div class="game-image">'+
                        '<img src="/img/game/' + game_url + '/thumbnail.jpg" onerror="this.remove ? this.remove() : this.removeNode();">'+
                        '<img src="/img/hungbok/hb_error_vertical.svg">'+
                    '</div>'+
                '</div>'+
            '</div>');



            // character 언어
            $(".character-info .ja").prepend('<p class="character-lang">'+
                '<img src="/img/flag/jp.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .en").prepend('<p class="character-lang">'+
                '<img src="/img/flag/us.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .ko").prepend('<p class="character-lang">'+
                '<img src="/img/flag/kr.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .en-ca").prepend('<p class="character-lang">'+
                '<img src="/img/flag/ca.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .en-uk").prepend('<p class="character-lang">'+
                '<img src="/img/flag/uk.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .en-us").prepend('<p class="character-lang">'+
                '<img src="/img/flag/us.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .cs").prepend('<p class="character-lang">'+
                '<img src="/img/flag/cz.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .de").prepend('<p class="character-lang">'+
                '<img src="/img/flag/de.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .es").prepend('<p class="character-lang">'+
                '<img src="/img/flag/es.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .es-es").prepend('<p class="character-lang">'+
                '<img src="/img/flag/es.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .es-mx").prepend('<p class="character-lang">'+
                '<img src="/img/flag/mx.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .fi").prepend('<p class="character-lang">'+
                '<img src="/img/flag/fi.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .fr").prepend('<p class="character-lang">'+
                '<img src="/img/flag/fr.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .hu").prepend('<p class="character-lang">'+
                '<img src="/img/flag/hu.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .hi").prepend('<p class="character-lang">'+
                '<img src="/img/flag/in.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .it").prepend('<p class="character-lang">'+
                '<img src="/img/flag/it.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .nl").prepend('<p class="character-lang">'+
                '<img src="/img/flag/nl.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .pl").prepend('<p class="character-lang">'+
                '<img src="/img/flag/pl.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .pt").prepend('<p class="character-lang">'+
                '<img src="/img/flag/pt.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .pt-pt").prepend('<p class="character-lang">'+
                '<img src="/img/flag/pt.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .pt-br").prepend('<p class="character-lang">'+
                '<img src="/img/flag/br.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .ru").prepend('<p class="character-lang">'+
                '<img src="/img/flag/ru.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .ar").prepend('<p class="character-lang">'+
                '<img src="/img/flag/sa.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .th").prepend('<p class="character-lang">'+
                '<img src="/img/flag/th.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .tr").prepend('<p class="character-lang">'+
                '<img src="/img/flag/tr.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .uk").prepend('<p class="character-lang">'+
                '<img src="/img/flag/ua.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .zh").prepend('<p class="character-lang">'+
                '<img src="/img/flag/cn.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .zh-cn").prepend('<p class="character-lang">'+
                '<img src="/img/flag/cn.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .zh-tw").prepend('<p class="character-lang">'+
                '<img src="/img/flag/tw.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>');
    
            $(".character-info .none").prepend('<p class="character-lang">'+
                '-'+
            '</p>');
    
    
            // info 언어
            $(".language.ja").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/jp.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>일본어</div>');
    
            $(".language.en").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/us.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>영어</div>');
    
            $(".language.ko").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/kr.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>한국어</div>');
    
            $(".language.en-ca").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/ca.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>영어(캐나다)</div>');
    
            $(".language.en-uk").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/uk.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>영어(영국)</div>');
    
            $(".language.en-us").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/us.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>영어(미국)</div>');
    
            $(".language.cs").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/cz.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>체코어</div>');
    
            $(".language.de").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/de.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>독일어</div>');
    
            $(".language.es").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/es.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>스페인어</div>');
    
            $(".language.es-es").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/es.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>스페인어(스페인)</div>');
    
            $(".language.es-mx").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/mx.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>스페인어(멕시코)</div>');
    
            $(".language.fi").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/fi.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>핀란드어</div>');
    
            $(".language.fr").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/fr.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>프랑스어</div>');
    
            $(".language.hu").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/hu.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>헝가리어</div>');
    
            $(".language.hi").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/in.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>힌디어</div>');
    
            $(".language.it").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/it.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>이탈리아어</div>');
    
            $(".language.nl").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/nl.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>네덜란드어</div>');
    
            $(".language.pl").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/pl.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>폴란드어</div>');
    
            $(".language.pt").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/pt.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>포르투갈어</div>');
    
            $(".language.pt-pt").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/pt.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>포르투갈어(포르투갈)</div>');
    
            $(".language.pt-br").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/br.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>포르투갈어(브라질)</div>');
    
            $(".language.ru").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/ru.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>러시아어</div>');
    
            $(".language.ar").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/sa.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>아랍어</div>');
    
            $(".language.th").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/th.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>태국어</div>');
    
            $(".language.tr").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/tr.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>튀르키예어</div>');
    
            $(".language.uk").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/ua.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>우크라이나어</div>');
    
            $(".language.zh").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/cn.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>중국어</div>');
    
            $(".language.zh-cn").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/cn.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>중국어(간체)</div>');
    
            $(".language.zh-tw").append('<div class="info-flag">'+
            '<p class="info-lang">'+
                '<img src="/img/flag/tw.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>중국어(번체)</div>');
    
            $(".language.none").append('<div class="info-flag">'+
            '<p class="info-lang">'+
            '</p>-</div>');
            
    
            // info 국가
            $(".country.jp").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/jp.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>일본</div>');
    
            $(".country.us").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/us.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>미국</div>');
    
            $(".country.kr").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/kr.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>대한민국</div>');
    
            $(".country.ca").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/ca.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>캐나다</div>');
    
            $(".country.uk").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/uk.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>영국</div>');
    
            $(".country.cz").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/cz.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>체코</div>');
    
            $(".country.de").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/de.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>독일</div>');
    
            $(".country.es").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/es.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>스페인</div>');
    
            $(".country.mx").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/mx.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>멕시코</div>');
    
            $(".country.fi").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/fi.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>핀란드</div>');
    
            $(".country.fr").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/fr.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>프랑스</div>');
    
            $(".country.hu").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/hu.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>헝가리</div>');
    
            $(".country.in").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/in.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>인도</div>');
    
            $(".country.it").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/it.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>이탈리아</div>');
    
            $(".country.nl").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/nl.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>네덜란드</div>');
    
            $(".country.pl").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/pl.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>폴란드</div>');
    
            $(".country.pt").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/pt.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>포르투갈</div>');
    
            $(".country.br").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/br.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>브라질</div>');
    
            $(".country.ru").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/ru.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>러시아</div>');
    
            $(".country.sa").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/sa.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>사우디아라비아</div>');
    
            $(".country.th").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/th.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>태국</div>');
    
            $(".country.tr").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/tr.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>튀르키예</div>');
    
            $(".country.ua").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/ua.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>우크라이나</div>');
    
            $(".country.cn").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/cn.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>중국</div>');
    
            $(".country.tw").append('<div class="info-flag">'+
            '<p class="info-country">'+
                '<img src="/img/flag/tw.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p>대만</div>');
    
            $(".country.none").append('<div class="info-flag">'+
            '<p class="info-country">'+
            '</p>-</div>');
    
    
            // wiki 언어
            $(".wiki-link.ja").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/jp.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.en").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/us.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.ko").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/kr.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.en-ca").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/ca.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.en-uk").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/uk.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.en-us").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/us.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.cs").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/cz.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.de").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/de.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.es").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/es.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.es-es").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/es.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.es-mx").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/mx.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.fi").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/fi.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.fr").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/fr.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.hu").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/hu.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.hi").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/in.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.it").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/it.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.nl").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/nl.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.pl").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/pl.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.pt").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/pt.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.pt-pt").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/pt.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.pt-br").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/br.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.ru").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/ru.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.ar").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/sa.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.th").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/th.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.tr").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/tr.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.uk").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/ua.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.zh").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/cn.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.zh-cn").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/cn.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.zh-tw").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
                '<img src="/img/flag/tw.svg" onerror="this.src=`/img/icon/image_not_found.svg`;this.className=`onerror`;" loading="lazy">'+
            '</p></div>');
    
            $(".wiki-link.none").append('<div class="wiki-flag">'+
            '<p class="wiki-lang">'+
            '</p></div>');
    
    
    
            $(document).ready(function() {
                // .rating-star.none 클래스를 찾아서 처리합니다.
                $('.rating-star.none').each(function() {
                  // 하위 .star-ratings 클래스를 삭제하고 '-'로 대체
                  $(this).find('.star-ratings').remove();
                  $(this).text('-');
                  
                  // .none 클래스를 삭제
                  $(this).removeClass('none');
                });
            });



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
                var jsonFile = '/data/' + elementType + '/' + elementId + '.json';
            
                loadJSON(jsonFile, function (response) {
                    var jsonData = JSON.parse(response);
                    var placeholders = element.querySelectorAll('[data-placeholder]');
            
                    placeholders.forEach(function (placeholder) {
                        var key = placeholder.getAttribute('data-placeholder');
                        if (jsonData.hasOwnProperty(key)) {
                            placeholder.innerText = jsonData[key];
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
        $('body').addClass('mainpage body-anime')
        var sectionElement = document.getElementById("section");
        sectionElement.remove();
    }
});

loadAsyncScripts();