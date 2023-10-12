const setTheme = theme => document.documentElement.className = theme;

$(document).ready(function(){
    $(".searchbox").append('<div class="toggle-container">'+
                                '<button class="theme-btn light" onclick="setTheme(`light`)"><img src="https://www.hungbok.net/img/icon/light_mode.svg"></button>'+
                                '<button class="theme-btn dark" onclick="setTheme(`dark`)"><img src="https://www.hungbok.net/img/icon/dark_mode.svg"></button>'+
                            '</div>');
});