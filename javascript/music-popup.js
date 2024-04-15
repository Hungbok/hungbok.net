$(document).ready(function() {
    function openVideo(e, videoID, url) {
        e.preventDefault();

        var $popup = $('<div class="music-popup" style="display: none;"></div>');
        var $content = $('<div class="music-popup-content"></div>');
        $content.append('<span class="music-popup-close"></span><span class="music-loading"></span><iframe class="music-iframe" src="' + url + videoID + '?width=1000&height=450&isPC=true&autoPlay=false" width="1000" height="450" frameborder="0" scrolling="no" allowtransparency="true" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; clipboard-write"></iframe>');
        $popup.append($content);
        $("body").append($popup);

        $popup.fadeIn();

        $('body').addClass('lb-disable-scrolling');
        $('#element').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });

        $(".music-popup-close, .music-popup").click(function() {
            var $popup = $(".music-popup");

            $popup.fadeOut(400, function() {
                $(this).remove();
            });

            $('body').removeClass('lb-disable-scrolling');
            $('#element').off('scroll touchmove mousewheel');
        });

        $(document).keyup(function(event) {
            if (event.keyCode == 27) {
                var $popup = $(".music-popup");
                
                $popup.fadeOut(400, function() {
                    $(this).remove();
                });

                $('body').removeClass('lb-disable-scrolling');
                $('#element').off('scroll touchmove mousewheel');
            }
        });
    }

    $(document).on('click', '.spotify-album', function(e) {
        var $popup = $(".music-track-popup");

        $popup.fadeOut(400, function() {
            $(this).remove();
        });
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://open.spotify.com/embed/album/');
    });

    $(document).on('click', '.apple-album', function(e) {
        var $popup = $(".music-track-popup");

        $popup.fadeOut(400, function() {
            $(this).remove();
        });
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://embed.music.apple.com/album/');
    });

    $(document).on('click', '.amazon-album', function(e) {
        var $popup = $(".music-track-popup");

        $popup.fadeOut(400, function() {
            $(this).remove();
        });
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://music.amazon.com/embed/');
    });

    $(document).on('click', '.deezer-album', function(e) {
        var $popup = $(".music-track-popup");

        $popup.fadeOut(400, function() {
            $(this).remove();
        });
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://widget.deezer.com/widget/auto/album/');
    });

    $(document).on('click', '.naver-album', function(e) {
        var $popup = $(".music-track-popup");

        $popup.fadeOut(400, function() {
            $(this).remove();
        });
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://vibe.naver.com/embed/album/');
    });

    $(document).on('click', '.line-album', function(e) {
        var $popup = $(".music-track-popup");

        $popup.fadeOut(400, function() {
            $(this).remove();
        });
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://music.line.me/webapp/embed/album/');
    });

    function openTrack(e, videoID, url, width, height) {
        e.preventDefault();

        var $popup = $('<div class="music-track-popup" style="display: none;"></div>');
        var $content = $('<div class="music-track-popup-content" style="width: ' + width + 'px;"></div>');
        var $overlay = $('<span class="music-track-popup-overlay"></span>');
        $content.append('<span class="music-track-popup-pip"></span><span class="music-track-popup-close"></span><span class="music-track-loading"></span><iframe class="music-track-iframe" src="' + url + videoID + '?width=' + width + '&height=' + height + '&isPC=true&autoPlay=false" width="' + width + '" height="' + height + '" frameborder="0" scrolling="no" allowtransparency="true" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; clipboard-write"></iframe>');
        $popup.append($content);
        $popup.append($overlay);
        $("body").append($popup);

        $popup.fadeIn();

        $('body').addClass('lb-disable-scrolling');
        $('#element').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });

        $(".music-track-popup-close, .music-track-popup-overlay").click(function() {
            var $popup = $(".music-track-popup");

            $popup.fadeOut(400, function() {
                $(this).remove();
            });

            $('body').removeClass('lb-disable-scrolling');
            $('#element').off('scroll touchmove mousewheel');
        });

        $(".music-track-popup-pip").click(function() {
            $('.music-track-popup').addClass('picture-in-picture-music');

            $('body').removeClass('lb-disable-scrolling');
            $('#element').off('scroll touchmove mousewheel');
        });

        $(document).keyup(function(event) {
            if (event.keyCode == 27) {
                var $popup = $(".music-track-popup");
                
                $popup.fadeOut(400, function() {
                    $(this).remove();
                });

                $('body').removeClass('lb-disable-scrolling');
                $('#element').off('scroll touchmove mousewheel');
            }
        });
    }

    $(document).on('click', '.spotify-track', function(e) {
        var $popup = $(".music-track-popup");

        $popup.fadeOut(400, function() {
            $(this).remove();
        });
        var videoID = $(this).attr("videoid");
        openTrack(e, videoID, 'https://open.spotify.com/embed/track/', '750', '152');
    });

    $(document).on('click', '.apple-track', function(e) {
        var $popup = $(".music-track-popup");

        $popup.fadeOut(400, function() {
            $(this).remove();
        });
        var videoID = $(this).attr("videoid");
        openTrack(e, videoID, 'https://embed.music.apple.com/album/', '750', '175');
    });

    $(document).on('click', '.amazon-track', function(e) {
        var $popup = $(".music-track-popup");

        $popup.fadeOut(400, function() {
            $(this).remove();
        });
        var videoID = $(this).attr("videoid");
        openTrack(e, videoID, 'https://music.amazon.com/embed/', '750', '300');
    });

    $(document).on('click', '.deezer-track', function(e) {
        var $popup = $(".music-track-popup");

        $popup.fadeOut(400, function() {
            $(this).remove();
        });
        var videoID = $(this).attr("videoid");
        openTrack(e, videoID, 'https://widget.deezer.com/widget/auto/track/', '500', '300');
    });

    $(document).on('click', '.naver-track', function(e) {
        var $popup = $(".music-track-popup");

        $popup.fadeOut(400, function() {
            $(this).remove();
        });
        var videoID = $(this).attr("videoid");
        openTrack(e, videoID, 'https://vibe.naver.com/embed/track/', '500', '154');
    });

    $(document).on('click', '.line-track', function(e) {
        var $popup = $(".music-track-popup");

        $popup.fadeOut(400, function() {
            $(this).remove();
        });
        var videoID = $(this).attr("videoid");
        openTrack(e, videoID, 'https://music.line.me/webapp/embed/track/', '500', '214');
    });
});
