$.fn.copyTo = function(selector) {
    $(selector).val($(this[0]).val().replace(/[ä@]/g, "a").replace(/[éē]/g, "e").replace(/[Ⓖ]/g, "g").replace(/[ōØ]/g, "o").replace(/[×]/g, " x ").replace(/[&]/g, " and ").replace(/[']/g, "").replace(/[`~∽☆★♪!#♯$%^*()_|+\-–−=?;:",.<>\{\}\[\]\\\/\n ]/g, "-").replace(/--------/g, "-").replace(/-------/g, "-").replace(/------/g, "-").replace(/-----/g, "-").replace(/----/g, "-").replace(/---/g, "-").replace(/--/g, "-").replace(/^-+/g, "").replace(/^-+/g, "").replace(/-+$/g, ""));
};

$(document).ready(function() {
    $("#generate-btn").click(function() {
        $("#textinput1_2007121003").copyTo("#textoutput2_2007121003");
    });
});