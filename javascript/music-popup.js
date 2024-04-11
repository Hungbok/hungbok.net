$(document).ready(function() {
    function openVideo(e, videoID, url) {
        e.preventDefault();

        var $popup = $('<div class="grtyoutube-popup" style="display: none;"></div>');
        var $content = $('<div class="grtyoutube-popup-content"></div>');
        $content.append('<span class="grtyoutube-popup-close"></span><span class="grtyoutube-loading"></span><iframe class="grtyoutube-iframe" src="' + url + videoID + '?width=750&height=450&isPC=true&autoPlay=false" width="750" height="300" frameborder="0" scrolling="no" allowtransparency="true" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; clipboard-write"></iframe>');
        $popup.append($content);
        $("body").append($popup);

        $popup.fadeIn();

        $('body').addClass('lb-disable-scrolling');
        $('#element').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });

        $(".grtyoutube-popup-close, .grtyoutube-popup").click(function() {
            var $popup = $(".grtyoutube-popup");

            $popup.fadeOut(400, function() {
                $(this).remove();
            });

            $('body').removeClass('lb-disable-scrolling');
            $('#element').off('scroll touchmove mousewheel');
        });

        $(document).keyup(function(event) {
            if (event.keyCode == 27) {
                var $popup = $(".grtyoutube-popup");
                
                $popup.fadeOut(400, function() {
                    $(this).remove();
                });

                $('body').removeClass('lb-disable-scrolling');
                $('#element').off('scroll touchmove mousewheel');
            }
        });
    }

    $(document).on('click', '.spotify-album', function(e) {
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://open.spotify.com/embed/album/');
    });

    $(document).on('click', '.apple-album', function(e) {
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://embed.music.apple.com/album/');
    });

    $(document).on('click', '.amazon-album', function(e) {
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://music.amazon.com/embed/');
    });

    $(document).on('click', '.deezer-album', function(e) {
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://widget.deezer.com/widget/auto/album/');
    });

    $(document).on('click', '.naver-album', function(e) {
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://vibe.naver.com/embed/album/');
    });

    $(document).on('click', '.line-album', function(e) {
        var videoID = $(this).attr("videoid");
        openVideo(e, videoID, 'https://music.line.me/webapp/embed/album/');
    });
});
