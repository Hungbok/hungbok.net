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
        $.getJSON(`//data.hungbok.net/data/news/${queryParam}.json`, function (data) {
            // JSON 데이터를 HTML에 대체삽입
        
            // en 또는 ko 데이터에 접근하는 함수
            function getLocalizedData(data, key) {
                return data['en'] && data['en'][key] ? data['en'][key] : data['en'][key];
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
                '{en_audio}': data[0].en_audio,
                '{en_text}': data[0].en_text,
                '{id_audio}': data[0].id_audio,
                '{id_text}': data[0].id_text,
                '{ms_audio}': data[0].ms_audio,
                '{ms_text}': data[0].ms_text,
                '{cs_audio}': data[0].cs_audio,
                '{cs_text}': data[0].cs_text,
                '{da_audio}': data[0].da_audio,
                '{da_text}': data[0].da_text,
                '{de_audio}': data[0].de_audio,
                '{de_text}': data[0].de_text,
                '{es_audio}': data[0].es_audio,
                '{es_text}': data[0].es_text,
                '{fr_audio}': data[0].fr_audio,
                '{fr_text}': data[0].fr_text,
                '{es_mx_audio}': data[0].es_mx_audio,
                '{es_mx_text}': data[0].es_mx_text,
                '{it_audio}': data[0].it_audio,
                '{it_text}': data[0].it_text,
                '{hu_audio}': data[0].hu_audio,
                '{hu_text}': data[0].hu_text,
                '{nl_audio}': data[0].nl_audio,
                '{nl_text}': data[0].nl_text,
                '{no_audio}': data[0].no_audio,
                '{no_text}': data[0].no_text,
                '{pl_audio}': data[0].pl_audio,
                '{pl_text}': data[0].pl_text,
                '{pt_audio}': data[0].pt_audio,
                '{pt_text}': data[0].pt_text,
                '{ro_audio}': data[0].ro_audio,
                '{ro_text}': data[0].ro_text,
                '{fi_audio}': data[0].fi_audio,
                '{fi_text}': data[0].fi_text,
                '{sv_audio}': data[0].sv_audio,
                '{sv_text}': data[0].sv_text,
                '{vi_audio}': data[0].vi_audio,
                '{vi_text}': data[0].vi_text,
                '{tr_audio}': data[0].tr_audio,
                '{tr_text}': data[0].tr_text,
                '{bg_audio}': data[0].bg_audio,
                '{bg_text}': data[0].bg_text,
                '{ru_audio}': data[0].ru_audio,
                '{ru_text}': data[0].ru_text,
                '{uk_audio}': data[0].uk_audio,
                '{uk_text}': data[0].uk_text,
                '{el_audio}': data[0].el_audio,
                '{el_text}': data[0].el_text,
                '{ar_audio}': data[0].ar_audio,
                '{ar_text}': data[0].ar_text,
                '{hi_audio}': data[0].hi_audio,
                '{hi_text}': data[0].hi_text,
                '{th_audio}': data[0].th_audio,
                '{th_text}': data[0].th_text,
                '{ja_audio}': data[0].ja_audio,
                '{ja_text}': data[0].ja_text,
                '{ko_audio}': data[0].ko_audio,
                '{ko_text}': data[0].ko_text,
                '{pt_br_audio}': data[0].pt_br_audio,
                '{pt_br_text}': data[0].pt_br_text,
                '{zh_cn_audio}': data[0].zh_cn_audio,
                '{zh_cn_text}': data[0].zh_cn_text,
                '{zh_tw_audio}': data[0].zh_tw_audio,
                '{zh_tw_text}': data[0].zh_tw_text,
  
                '{social}': data[0].social,
                '{store}': data[0].store,
  
                '{attention}': data[0].attention,
                '{plot}': getLocalizedData(data[0], 'plot'),
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
                
                '{system_requirements}': data[0].system_requirements,
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
                        '<div class="youtube-title">' + item.title + '</div>'+
                    '</div>'+
                '</div>');
                $(".slider-nav").append('<div class="slider-item">'+
                    '<div class="video-play-button">'+
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
                    '</a>'+
                '</div>');
                $(".slider-nav").append('<div class="slider-item">'+
                    '<a class="slider-image">'+
                        '<img class="slider-background" src="//media.hungbok.net/image/games/' + url + '/hb_' + item.img + '.jpg" onerror="this.src=`//media.hungbok.net/image/hb/hb_error_horizontal.svg`;">'+
                    '</a>'+
                '</div>');
            });

            var description_value = getLocalizedData(data[0], 'descriptioncount'); // description 수
            var descriptionData = [];
            for (var i = 1; i <= description_value; i++) {
                var desClass = getLocalizedData(data[0], 'pclass' + i);
                var desText = getLocalizedData(data[0], 'ptext' + i);
                descriptionData.push({
                    class: desClass,
                    text: desText,
                });
            }
            // description 생성
            descriptionData.forEach(function(item) {
                $(".description-content").append('<p class="' + item.class + '">' + item.text + '</p>');
            });

            // 틀 생성

            // 소셜 const
            const websiteurl = data[0].website;
            const facebookurl = data[0].facebook;
            const instagramurl = data[0].instagram;
            const threadsurl = data[0].threads;
            const twitterurl = data[0].twitter;
            const waibourl = data[0].waibo;
            const mastodonurl = data[0].mastodon;
            const discordurl = data[0].discord;
            const vkurl = data[0].vk;
            const tumblrurl = data[0].tumblr;
            const navercafeurl = data[0].navercafe;
            const youtubeurl = data[0].youtube;
            const twitchurl = data[0].twitch;
            const tiktokurl = data[0].tiktok;
            const douyinurl = data[0].douyin;
            const niconicodougaurl = data[0].niconicodouga;
            const bilibiliurl = data[0].bilibili;
            const kakaotalkurl = data[0].kakaotalk;
            const lineurl = data[0].line;
            const whatsappurl = data[0].whatsapp;
            const linkedinurl = data[0].linkedin;
            const wikipediaurl = data[0].wikipedia;
            const wikipediaenurl = data[0].wikipediaen;
            const wikipediajaurl = data[0].wikipediaja;
            const fandomurl = data[0].fandom;
            const namuwikiurl = data[0].namuwiki;
            const niconicodaihyakkaurl = data[0].niconicodaihyakka;
            const pixivhyakkajitenurl = data[0].pixivhyakkajiten;
            const baidubaikeurl = data[0].baidubaike;
            const kickurl = data[0].kick;
            const kakaostoryurl = data[0].kakaostory;
            const telegramurl = data[0].telegram;
            const snapchaturl = data[0].snapchat;
            const wechaturl = data[0].wechat;
            const qqurl = data[0].qq;
            const redditurl = data[0].reddit;

            // 소셜 링크

            // https://www.example.com
            $(".website").append('<div class="external-link" ttt="Official Website">'+
                '<a class="external-link-button icon-website" href="' + websiteurl + '" target="_blank"></a>'+
            '</div>');

            // https://www.facebook.com/FortniteGame
            $(".facebook").append('<div class="external-link" ttt="facebook">'+
                '<a class="external-link-button icon-facebook" href="https://www.facebook.com/' + facebookurl + '" target="_blank"></a>'+
            '</div>');

            // https://www.instagram.com/rockstargames
            $(".instagram").append('<div class="external-link" ttt="Instagram">'+
                '<a class="external-link-button icon-instagram" href="https://www.instagram.com/' + instagramurl + '" target="_blank"></a>'+
            '</div>');

            // https://x.com/CyberpunkGame
            $(".x").append('<div class="external-link" ttt="X">'+
                '<a class="external-link-button icon-x" href="https://x.com/' + twitterurl + '" target="_blank"></a>'+
            '</div>');

            // https://www.threads.net/@rockstargames
            $(".threads").append('<div class="external-link" ttt="Threads">'+
                '<a class="external-link-button icon-threads" href="https://www.threads.net/' + threadsurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://weibo.com/ysmihoyo
            $(".waibo").append('<div class="external-link" ttt="Weibo">'+
                '<a class="external-link-button icon-waibo" href="https://weibo.com/' + waibourl + '" target="_blank"></a>'+
            '</div>');
            
            // https://mastodon.social/@SteamDB@infosec.exchange
            $(".mastodon").append('<div class="external-link" ttt="Mastodon">'+
                '<a class="external-link-button icon-mastodon" href="https://mastodon.social/' + mastodonurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://discord.gg/genshinimpact
            $(".discord").append('<div class="external-link" ttt="Discord">'+
                '<a class="external-link-button icon-discord" href="https://discord.gg/' + discordurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://vk.com/genshinimpact
            $(".vk").append('<div class="external-link" ttt="VK">'+
                '<a class="external-link-button icon-vk" href="https://vk.com/' + vkurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://www.tumblr.com/cyberpunkgame
            $(".tumblr").append('<div class="external-link" ttt="Tumblr">'+
                '<a class="external-link-button icon-tumblr" href="https://www.tumblr.com/' + tumblrurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://cafe.naver.com/genshin
            $(".navercafe").append('<div class="external-link" ttt="Naver Cafe">'+
                '<a class="external-link-button icon-navercafe" href="https://cafe.naver.com/' + navercafeurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://www.youtube.com/@CyberpunkGame
            $(".youtube").append('<div class="external-link" ttt="YouTube">'+
                '<a class="external-link-button icon-youtube" href="https://www.youtube.com/' + youtubeurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://www.twitch.tv/cdprojektred
            $(".twitch").append('<div class="external-link" ttt="Twitch">'+
                '<a class="external-link-button icon-twitch" href="https://www.twitch.tv/' + twitchurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://kick.com/ninja
            $(".kick").append('<div class="external-link" ttt="Kick">'+
                '<a class="external-link-button icon-kick" href="https://kick.com/' + kickurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://www.tiktok.com/@Xbox
            $(".tiktok").append('<div class="external-link" ttt="TikTok">'+
                '<a class="external-link-button icon-tiktok" href="https://www.tiktok.com/' + tiktokurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://v.douyin.com/iNkT3QN7/
            $(".douyin").append('<div class="external-link" ttt="抖音">'+
                '<a class="external-link-button icon-tiktok" href="https://v.douyin.com/' + douyinurl + '" target="_blank"></a>'+
            '</div>');
            
            // http://www.nicovideo.jp/user/15426275
            $(".niconicodouga").append('<div class="external-link" ttt="ニコニコ動画">'+
                '<a class="external-link-button icon-niconicodouga" href="https://www.nicovideo.jp/user/' + niconicodougaurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://space.bilibili.com/3461579184015582
            $(".bilibili").append('<div class="external-link" ttt="bìlibìli">'+
                '<a class="external-link-button icon-bilibili" href="https://space.bilibili.com/' + bilibiliurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://pf.kakao.com/_DzxjIb
            $(".kakaotalk").append('<div class="external-link" ttt="KakaoTalk">'+
                '<a class="external-link-button icon-kakaotalk" href="https://pf.kakao.com/' + kakaotalkurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://story.kakao.com/ch/nintendokorea
            $(".kakaostory").append('<div class="external-link" ttt="KakaoStory">'+
                '<a class="external-link-button icon-kakaostory" href="https://story.kakao.com/ch/' + kakaostoryurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://line.me/ti/p/@playstation
            $(".line").append('<div class="external-link" ttt="LINE">'+
                '<a class="external-link-button icon-line" href="https://line.me/ti/p/' + lineurl + '" target="_blank"></a>'+
            '</div>');
            
            // 
            $(".telegram").append('<div class="external-link" ttt="Telegram">'+
                '<a class="external-link-button icon-telegram" href="' + telegramurl + '" target="_blank"></a>'+
            '</div>');
            
            // 
            $(".snapchat").append('<div class="external-link" ttt="Snapchat">'+
                '<a class="external-link-button icon-snapchat" href="' + snapchaturl + '" target="_blank"></a>'+
            '</div>');
            
            // https://www.whatsapp.com/channel/0029Va4J1hI5a248Y7hu6A2Y
            $(".whatsapp").append('<div class="external-link" ttt="WhatsApp">'+
                '<a class="external-link-button icon-whatsapp" href="https://www.whatsapp.com/channel/' + whatsappurl + '" target="_blank"></a>'+
            '</div>');
            
            // 
            $(".wechat").append('<div class="external-link" ttt="WeChat">'+
                '<a class="external-link-button icon-wechat" href="' + wechaturl + '" target="_blank"></a>'+
            '</div>');
            
            // 
            $(".qq").append('<div class="external-link" ttt="QQ">'+
                '<a class="external-link-button icon-qq" href="' + qqurl + '" target="_blank"></a>'+
            '</div>');
            
            // 
            $(".reddit").append('<div class="external-link" ttt="reddit">'+
                '<a class="external-link-button icon-reddit" href="' + redditurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://www.linkedin.com/company/iointeractive/
            $(".linkedin").append('<div class="external-link" ttt="LinkedIn">'+
                '<a class="external-link-button icon-linkedin" href="https://www.linkedin.com/company/' + linkedinurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://en.wikipedia.org/wiki/Counter-Strike
            $(".wikipedia").append('<div class="external-link" ttt="Wikipedia">'+
                '<a class="external-link-button icon-wikipedia" href="https://en.wikipedia.org/wiki/' + wikipediaurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://en.wikipedia.org/wiki/Counter-Strike_2
            $(".wikipediaen").append('<div class="external-link us" ttt="Wikipedia">'+
                '<a class="external-link-button icon-wikipedia" href="https://en.wikipedia.org/wiki/' + wikipediaenurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://ja.wikipedia.org/wiki/カウンターストライク
            $(".wikipediaja").append('<div class="external-link jp" ttt="Wikipedia">'+
                '<a class="external-link-button icon-wikipedia" href="https://ja.wikipedia.org/wiki/' + wikipediajaurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://counterstrike.fandom.com/
            $(".fandom").append('<div class="external-link" ttt="FANDOM">'+
                '<a class="external-link-button icon-fandom" href="https://' + fandomurl + '.fandom.com" target="_blank"></a>'+
            '</div>');
            
            // https://namu.wiki/w/사이버펑크%202077
            $(".namuwiki").append('<div class="external-link" ttt="나무위키">'+
                '<a class="external-link-button icon-namuwiki" href="https://namu.wiki/w/' + namuwikiurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://dic.nicovideo.jp/a/steam
            $(".niconicodaihyakka").append('<div class="external-link" ttt="ニコニコ大百科">'+
                '<a class="external-link-button icon-niconicodaihyakka" href="https://dic.nicovideo.jp/a/' + niconicodaihyakkaurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://dic.pixiv.net/a/Steam
            $(".pixivhyakkajiten").append('<div class="external-link" ttt="ピクシブ百科事典">'+
                '<a class="external-link-button icon-pixivhyakkajiten" href="https://dic.pixiv.net/a/' + pixivhyakkajitenurl + '" target="_blank"></a>'+
            '</div>');
            
            // https://baike.baidu.com/item/Steam/10092959
            $(".baidubaike").append('<div class="external-link" ttt="百度百科">'+
                '<a class="external-link-button icon-baidubaike" href="https://baike.baidu.com/item/' + baidubaikeurl + '" target="_blank"></a>'+
            '</div>');

            // ESD const
            const steamurl = data[0].steam;
            const epicgamesstoreurl = data[0].epicgamesstore;
            const gogcomurl = data[0].gog;
            const eaappurl = data[0].ea;
            const ubisoftconnecturl = data[0].ubisoft;
            const rockstargameslauncherurl = data[0].rockstargames;
            const stoveurl = data[0].stove;
            const metastoreurl = data[0].metastore;
            const googleplayurl = data[0].googleplay;
            const appstoreurl = data[0].appstore;
            const galaxystoreurl = data[0].galaxystore;
            const microsoftstoreurl = data[0].msstore;
            const dmmgamesurl = data[0].dmm;
            const dlsiteurl = data[0].dlsite;
            const amazonlunaurl = data[0].amazonluna;
            const geforcenowurl = data[0].geforcenow;
            const xboxcloudgamingurl = data[0].xboxcloudgaming;
            const stadiaurl = data[0].stadia;

            // ESD 링크
            $(".external-store-link.steam").append('<div class="external-link" ttt="Steam">'+
                '<a class="external-link-button icon-steam" href="https://store.steampowered.com/app/' + steamurl + '" target="_blank"></a>'+
            '</div>');

            $(".external-store-link.epicgamesstore").append('<div class="external-link" ttt="Epic Games Store">'+
                '<a class="external-link-button icon-epicgamesstore" href="https://store.epicgames.com/p/' + epicgamesstoreurl + '" target="_blank"></a>'+
            '</div>');

            $(".external-store-link.gog").append('<div class="external-link" ttt="GOG.com">'+
                '<a class="external-link-button icon-gogcom" href="https://www.gog.com/game/' + gogcomurl + '" target="_blank"></a>'+
            '</div>');

            $(".external-store-link.ea").append('<div class="external-link" ttt="EA">'+
                '<a class="external-link-button icon-eaapp" href="https://www.ea.com/games/' + eaappurl + '/buy/pc" target="_blank"></a>'+
            '</div>');

            $(".external-store-link.ubisoft").append('<div class="external-link" ttt="Ubisoft Store">'+
                '<a class="external-link-button icon-ubisoftconnect" href="https://store.ubisoft.com/' + ubisoftconnecturl + '.html" target="_blank"></a>'+
            '</div>');

            $(".external-store-link.msstore").append('<div class="external-link" ttt="Microsoft Store">'+
                '<a class="external-link-button icon-microsoftstore" href="https://apps.microsoft.com/detail/' + microsoftstoreurl + '" target="_blank"></a>'+
            '</div>');

            // battle.net
            const battleneturl = data[0].battlenet;
            const battlenetusurl = data[0].battlenetus;
            const battleneteuurl = data[0].battleneteu;
            const battlenetkrurl = data[0].battlenetkr;
            const battlenettwurl = data[0].battlenettw;
            $(".external-store-link.battlenet").append('<div class="external-link" ttt="Battle.net">'+
                '<a class="external-link-button icon-battlenet" href="https://shop.battle.net/product/' + battleneturl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.battlenetus").append('<div class="external-link region_001" ttt="Battle.net">'+
                '<a class="external-link-button icon-battlenet" href="https://us.shop.battle.net/product/' + battlenetusurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.battleneteu").append('<div class="external-link region_003" ttt="Battle.net">'+
                '<a class="external-link-button icon-battlenet" href="https://eu.shop.battle.net/product/' + battleneteuurl + '" target="_blank"></a>'+
            '</div>');
            //

            $(".external-store-link.rockstargames").append('<div class="external-link" ttt="Rockstar Games Store">'+
                '<a class="external-link-button icon-rockstargameslauncher" href="https://store.rockstargames.com/game/buy-' + rockstargameslauncherurl + '" target="_blank"></a>'+
            '</div>');

            $(".external-store-link.stove").append('<div class="external-link" ttt="STOVE">'+
                '<a class="external-link-button icon-stove" href="https://store.onstove.com/games/' + stoveurl + '" target="_blank"></a>'+
            '</div>');

            $(".external-store-link.metastore").append('<div class="external-link" ttt="Meta Store">'+
                '<a class="external-link-button icon-metastore" href="https://www.meta.com/experiences/' + metastoreurl + '" target="_blank"></a>'+
            '</div>');

            $(".external-store-link.dmm").append('<div class="external-link" ttt="DMM GAMES">'+
                '<a class="external-link-button icon-dmmgames" href="https://' + dmmgamesurl + '" target="_blank"></a>'+
            '</div>');

            $(".external-store-link.dlsite").append('<div class="external-link" ttt="DLsite">'+
                '<a class="external-link-button icon-dlsite" href="https://' + dlsiteurl + '" target="_blank"></a>'+
            '</div>');

            // xbox store
            const xboxgamesstoreurl = data[0].xboxstore;
            const xboxgamesstorexbourl = data[0].xboxstorexbo;
            const xboxgamesstorexsxurl = data[0].xboxstorexsx;
            $(".external-store-link.xboxstore").append('<div class="external-link" ttt="Xbox Store">'+
                '<a class="external-link-button icon-xboxgamesstore" href="https://www.microsoft.com/store/productid/' + xboxgamesstoreurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.xboxstorexbo").append('<div class="external-link" ttt="Xbox One | Xbox Store">'+
                '<a class="external-link-button icon-xboxgamesstore" href="https://www.microsoft.com/store/productid/' + xboxgamesstorexbourl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.xboxstorexsx").append('<div class="external-link" ttt="Xbox Series X|S | Xbox Store">'+
                '<a class="external-link-button icon-xboxgamesstore" href="https://www.microsoft.com/store/productid/' + xboxgamesstorexsxurl + '" target="_blank"></a>'+
            '</div>');
            //

            // playstation store
            const playstationstoreurl = data[0].psstore;
            const playstationstoreps4url = data[0].psstoreps4;
            const playstationstoreps5url = data[0].psstoreps5;
            const playstationstorejpurl = data[0].psstorejp;
            const playstationstorenaurl = data[0].psstorena;
            const playstationstoreeuurl = data[0].psstoreeu;
            const playstationstoreusurl = data[0].psstoreus;
            const playstationstorecaurl = data[0].psstoreca;
            const playstationstoremxurl = data[0].psstoremx;
            const playstationstoreukurl = data[0].psstoreuk;
            const playstationstorefrurl = data[0].psstorefr;
            const playstationstoredeurl = data[0].psstorede;
            const playstationstoreiturl = data[0].psstoreit;
            const playstationstorenlurl = data[0].psstorenl;
            const playstationstorebeurl = data[0].psstorebe;
            const playstationstoreplurl = data[0].psstorepl;
            const playstationstoreczurl = data[0].psstorecz;
            const playstationstoreesurl = data[0].psstorees;
            const playstationstorepturl = data[0].psstorept;
            const playstationstorekrurl = data[0].psstorekr;
            const playstationstorehkurl = data[0].psstorehk;
            const playstationstoretwurl = data[0].psstoretw;
            const playstationstoreauurl = data[0].psstoreau;
            const playstationstorenzurl = data[0].psstorenz;
            const playstationstorebrurl = data[0].psstorebr;
            const playstationstorearurl = data[0].psstorear;
            const playstationstorezaurl = data[0].psstoreza;
            const playstationstoreuscamxurl = data[0].psstoreuscamx;
            const playstationstoreukfrdeurl = data[0].psstoreukfrde;
            const playstationstorekrhktwurl = data[0].psstorekrhktw;
            const playstationstorehktwurl = data[0].psstorehktw;
            const playstationstoreaunzurl = data[0].psstoreaunz;
            const playstationstorebrarurl = data[0].psstorebrar;
            const playstationstorenaeuurl = data[0].psstorenaeu;
            const playstationstorenajpurl = data[0].psstorenajp;
            $(".external-store-link.psstore").append('<div class="external-link" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.psstoreps4").append('<div class="external-link" ttt="PlayStation 4 | PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreps4url + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.psstoreps5").append('<div class="external-link" ttt="PlayStation 5 | PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreps5url + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.psstorenaeu").append('<div class="external-link region_901" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorenaeuurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.psstorenajp").append('<div class="external-link region_902" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorenajpurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.psstoreuscamx").append('<div class="external-link region_701" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreuscamxurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.psstoreukfrde").append('<div class="external-link region_702" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreukfrdeurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.psstoreaunz").append('<div class="external-link region_802" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreaunzurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.psstorena").append('<div class="external-link region_001" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorenaurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.psstoreeu").append('<div class="external-link region_003" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreeuurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.psstoreus").append('<div class="external-link region_101" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreusurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.psstoreca").append('<div class="external-link region_102" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstorecaurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.psstoreuk").append('<div class="external-link region_201" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreukurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.psstoreau").append('<div class="external-link region_401" ttt="PlayStation Store">'+
                '<a class="external-link-button icon-playstationstore" href="https://store.playstation.com/concept/' + playstationstoreauurl + '" target="_blank"></a>'+
            '</div>');
            //

            // nintendo eshop
            const nintendoeshopurl = data[0].eshop;
            const nintendoeshopjpurl = data[0].eshopjp;
            const nintendoeshopnaurl = data[0].eshopna;
            const nintendoeshopeuurl = data[0].eshopeu;
            const nintendoeshopusurl = data[0].eshopus;
            const nintendoeshopcaurl = data[0].eshopca;
            const nintendoeshopmxurl = data[0].eshopmx;
            const nintendoeshopukurl = data[0].eshopuk;
            const nintendoeshopfrurl = data[0].eshopfr;
            const nintendoeshopdeurl = data[0].eshopde;
            const nintendoeshopiturl = data[0].eshopit;
            const nintendoeshopnlurl = data[0].eshopnl;
            const nintendoeshopbeurl = data[0].eshopbe;
            const nintendoeshopplurl = data[0].eshoppl;
            const nintendoeshopczurl = data[0].eshopcz;
            const nintendoeshopesurl = data[0].eshopes;
            const nintendoeshoppturl = data[0].eshoppt;
            const nintendoeshopkrurl = data[0].eshopkr;
            const nintendoeshophkurl = data[0].eshophk;
            const nintendoeshoptwurl = data[0].eshoptw;
            const nintendoeshopauurl = data[0].eshopau;
            const nintendoeshopnzurl = data[0].eshopnz;
            const nintendoeshopbrurl = data[0].eshopbr;
            const nintendoeshoparurl = data[0].eshopar;
            const nintendoeshopzaurl = data[0].eshopza;
            const nintendoeshopuscamxurl = data[0].eshopuscamx;
            const nintendoeshopukfrdeurl = data[0].eshopukfrde;
            const nintendoeshopkrhktwurl = data[0].eshopkrhktw;
            const nintendoeshophktwurl = data[0].eshophktw;
            const nintendoeshopaunzurl = data[0].eshopaunz;
            const nintendoeshopbrarurl = data[0].eshopbrar;
            const nintendoeshopnaeuurl = data[0].eshopnaeu;
            const nintendoeshopnajpurl = data[0].eshopnajp;
            $(".external-store-link.eshop").append('<div class="external-link" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://www.nintendo.com/store/products/' + nintendoeshopurl + '" target="_blank"></a>'+
            '</div>');
            // top multiple
            $(".external-store-link.eshopnaeu").append('<div class="external-link region_901" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopnaeuurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.eshopnajp").append('<div class="external-link region_902" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopnajpurl + '" target="_blank"></a>'+
            '</div>');
            // multiple
            $(".external-store-link.eshopuscamx").append('<div class="external-link region_701" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopuscamxurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.eshopukfrde").append('<div class="external-link region_702" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopukfrdeurl + '" target="_blank"></a>'+
            '</div>');

            $(".external-store-link.eshopaunz").append('<div class="external-link region_802" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopaunzurl + '" target="_blank"></a>'+
            '</div>');
            // top
            $(".external-store-link.eshopna").append('<div class="external-link region_001" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopnaurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.eshopeu").append('<div class="external-link region_003" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="' + nintendoeshopeuurl + '" target="_blank"></a>'+
            '</div>');
            // na
            $(".external-store-link.eshopus").append('<div class="external-link region_101" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://www.nintendo.com/store/products/' + nintendoeshopusurl + '" target="_blank"></a>'+
            '</div>');
            $(".external-store-link.eshopca").append('<div class="external-link region_102" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://www.nintendo.com/en-ca/store/products/' + nintendoeshopcaurl + '" target="_blank"></a>'+
            '</div>');
            // eu
            $(".external-store-link.eshopuk").append('<div class="external-link region_201" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com/GB/en/titles/' + nintendoeshopukurl + '" target="_blank"></a>'+
            '</div>');
            // oc
            $(".external-store-link.eshopau").append('<div class="external-link region_401" ttt="Nintendo eShop">'+
                '<a class="external-link-button icon-nintendoeshop" href="https://ec.nintendo.com/AU/en/titles/' + nintendoeshopauurl + '" target="_blank"></a>'+
            '</div>');
            //

            $(".external-store-link.googleplay").append('<div class="external-link" ttt="Google Play">'+
                '<a class="external-link-button icon-googleplay" href="https://play.google.com/store/apps/details?id=' + googleplayurl + '" target="_blank"></a>'+
            '</div>');

            $(".external-store-link.appstore").append('<div class="external-link" ttt="App Store">'+
                '<a class="external-link-button icon-appstore" href="https://apps.apple.com/app/id' + appstoreurl + '" target="_blank"></a>'+
            '</div>');

            $(".external-store-link.galaxystore").append('<div class="external-link" ttt="Galaxy Store">'+
                '<a class="external-link-button icon-galaxystore" href="https://galaxystore.samsung.com/detail/' + galaxystoreurl + '" target="_blank"></a>'+
            '</div>');

            // https://luna.amazon.com/detail/B0BTRVRN6M
            $(".external-store-link.luna").append('<div class="external-link" ttt="Amazon Luna">'+
                '<a class="external-link-button icon-amazonluna" href="https://luna.amazon.com/detail/' + amazonlunaurl + '" target="_blank"></a>'+
            '</div>');

            // https://nvda.ws/3Qee2Mx
            $(".external-store-link.geforcenow").append('<div class="external-link" ttt="GeForce NOW">'+
                '<a class="external-link-button icon-geforcenow" href="https://nvda.ws/' + geforcenowurl + '" target="_blank"></a>'+
            '</div>');

            // https://www.xbox.com/play/games/BT5P2X999VH2
            $(".external-store-link.xboxcloud").append('<div class="external-link" ttt="Xbox Cloud Gaming">'+
                '<a class="external-link-button icon-xboxcloudgaming" href="https://www.xbox.com/play/games/' + xboxcloudgamingurl + '" target="_blank"></a>'+
            '</div>');

            // https://stadia.google.com/store/details/990ec302c2cd4ba7817cedcf633ab20frcp1/sku/7ac7671e9f4342bd8c55ca140cf94138p
            $(".external-store-link.stadia").append('<div class="external-link" ttt="Stadia">'+
                '<a class="external-link-button icon-stadia" href="https://stadia.google.com/store/details/' + stadiaurl + '" target="_blank"></a>'+
            '</div>');

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
        });
    } else {
        $('body').addClass('en');
        $('.section').remove();
        $('.top-backgrounds').remove();
        $('main').append(`<section class="section">
                <input type="text" id="searchInput" placeholder="검색어 입력" autocomplete='off'>
                <div id="searchResults"></div>
                <div id="pagination"></div>
            </section>`);
    }
});