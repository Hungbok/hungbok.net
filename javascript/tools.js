// Text Converter

$.fn.copyTo = function(selector) {
    $(selector).val($(this[0]).val().replace(/[ä@]/g, "a").replace(/[éē]/g, "e").replace(/[Ⓖ]/g, "g").replace(/[ōØ]/g, "o").replace(/[×]/g, " x ").replace(/[&]/g, " and ").replace(/[']/g, "").replace(/[`~∽☆★♪!#♯$%^*()_|+\-–−=?;:",.<>\{\}\[\]\\\/\n ]/g, "-").replace(/--------/g, "-").replace(/-------/g, "-").replace(/------/g, "-").replace(/-----/g, "-").replace(/----/g, "-").replace(/---/g, "-").replace(/--/g, "-").replace(/^-+/g, "").replace(/^-+/g, "").replace(/-+$/g, ""));
};

$(document).ready(function() {
    $("#generate-btn").click(function() {
        $("#textinput").copyTo("#textoutput");
    });
});

// Short URL Generator

function randomString() {
    var charsNumber = "0123456789";
    var charsLower = "abcdefghijklmnopqrstuvwxyz";
    var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    var charsSpecial = "!@#$%^&*()-_=+,<.>?|";
    var charsAll = [charsNumber, charsLower, charsUpper]; //  Include special character by default but allow checkbox to toggle option
    var specialCB = document.getElementById("specialCharsCB").checked;
    if (specialCB == true) { //  Evaluate checkbox status
        charsAll = [charsNumber, charsLower, charsUpper, charsSpecial];
    }
    var chars = charsAll.join('');
    // Check for number of characters to generate. Defauts to 8 characters
    var stringLength = document.querySelector('input[name="numbers"]:checked').value;
    var randomString = '';
    for (var i = 0; i < stringLength; i++) { // Get string length
        var randNum = Math.floor(Math.random() * chars.length); // and then
        randomString += chars.substring(randNum, randNum + 1); // randomize it
    }
    //  Adjust the size of the box based on the string. There must be a better way to do this.
    //  Perhaps to actually get the physical width of the string of characters? This is my
    //  temporary solution below.
    document.theForm.theField.size = stringLength = 20;
    // Print the string to the textfield
    document.theForm.theField.value = randomString;
}

document.addEventListener('DOMContentLoaded', function() {
    // 선택할 요소들의 셀렉터를 배열로 저장합니다.
    var selectors = ['#textoutput', '.filterDetail', 'input#inputD', 'input#stringBox'];

    // 각 셀렉터에 대해 반복하면서 이벤트 리스너를 추가합니다.
    selectors.forEach(function(selector) {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function(element) {
            element.addEventListener('click', function() {
                this.select();
            });
        });
    });
});

$(document).ready(function() {
    $('#textinput').on('keyup', function() {
        $('#text-count').html("(" + $(this).val().length + " / 300)");

        if ($(this).val().length > 100) {
            $(this).val($(this).val().substring(0, 300));
            $('#text-count').html("(300 / 300)");
        }
    });
});