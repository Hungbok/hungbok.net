$(document).ready(function() {
    $.fn.grtyoutube = function(options) {
        return this.each(function() {
            var getvideoid = $(this).attr("youtubeid");
            var settings = $.extend({
                videoID: getvideoid,
                autoPlay: true,
                theme: "dark"
            }, options);
            if (settings.autoPlay === true) {
                settings.autoPlay = 1;
            } else if (settings.autoPlay === false) {
                settings.autoPlay = 0;
            }
            if (settings.theme === "dark") {
                settings.theme = "grtyoutube-dark-theme";
            } else if (settings.theme === "light") {
                settings.theme = "grtyoutube-light-theme";
            }
            if (getvideoid) {
                $(this).on("click", function() {
                    var $popup = $('<div class="grtyoutube-popup ' + settings.theme + '"></div>');
                    var $content = $('<div class="grtyoutube-popup-content"></div>');
                    $content.append('<span class="grtyoutube-popup-close"></span><span class="grtyoutube-loading"></span><iframe class="grtyoutube-iframe" src="https://player.vimeo.com/video/' + settings.videoID + '?badge=0&autopause=0&quality_selector=1&autoplay=' + settings.autoPlay + '&transparent=0" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>');
                    $popup.append($content);
                    $("body").append($popup);
                
                    // Add fade-in effect
                    $popup.hide().fadeIn();
                
                    $('body').addClass('lb-disable-scrolling');
                    $('#element').on('scroll touchmove mousewheel', function(event) {
                        event.preventDefault();
                        event.stopPropagation();
                        return false;
                    });
                });
            }
            $(this).on('click', function(event) {
                event.preventDefault();
                $(".grtyoutube-popup-close, .grtyoutube-popup").click(function() {
                    var $popup = $(".grtyoutube-popup");
            
                    // Add fade-out effect
                    $popup.addClass("fadeOut");
                    $popup.one("animationend", function() {
                        $(this).remove();
                    });
            
                    $('body').removeClass('lb-disable-scrolling');
                    $('#element').off('scroll touchmove mousewheel');
                });
            });
            $(document).keyup(function(event) {
                if (event.keyCode == 27) {
                    var $popup = $(".grtyoutube-popup");
                    $popup.addClass("fadeOut");
                    $popup.one("animationend", function() {
                        $(this).remove();
                    });
                    $('body').removeClass('lb-disable-scrolling');
                    $('#element').off('scroll touchmove mousewheel');
                }
            });
        });
    };
    $(".youtube-link").grtyoutube({
        autoPlay: true,
        theme: "dark"
    });
});