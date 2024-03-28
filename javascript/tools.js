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