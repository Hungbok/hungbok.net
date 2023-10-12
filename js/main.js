const setTheme = theme => document.documentElement.className = theme;

$(document).ready(function(){
    $(".searchbox").append('<div class="toggle-container">'+
                                '<button class="theme-btn light" onclick="setTheme(`light`)">☀</button>'+
                                '<button class="theme-btn dark" onclick="setTheme(`dark`)">☾</button>'+
                            '</div>');
});