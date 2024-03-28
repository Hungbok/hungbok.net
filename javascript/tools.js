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

// URL to QR Code

// QR 코드를 생성할 요소
var qrcodeElement = document.getElementById("qrcode");
var linkInput = document.getElementById("linkInput");
var generateButton = document.getElementById("generateButton");
var saveButton = document.getElementById("qrcode");

// 로고 이미지를 미리 로드
var logoImage = new Image();
logoImage.src = 'img/hungbok/hb_circle_outline.svg'; // 로고 이미지 파일의 경로
logoImage.onload = function() {
    // 로고 이미지 로드가 완료되면 generateQRCode 함수를 호출하여 QR 코드를 생성
    generateQRCode();
};

generateButton.addEventListener("click", function() {
    // 이전 QR 코드 제거
    clearQRCode();
    // QR 코드 생성
    generateQRCode();
});

saveButton.addEventListener("click", function() {
    saveQRCode();
});

function generateQRCode() {
    // 입력된 링크 주소 가져오기
    var link = linkInput.value;

    // 링크가 비어있는지 확인
    if (link === "") {
        var link = "https://hgbk.me/Lvdr78bE"
    }

    // QR 코드 생성
    var qrcode = new QRCode(qrcodeElement, {
        text: link,
        width: 512,
        height: 512,
        correctLevel: QRCode.CorrectLevel.H, // 에러 수정 수준을 선택 (L, M, Q, H 중 선택)
        colorDark: "#000000", // 전경색 (검은색)
        // colorLight: "rgba(0, 0, 0, 0)", // 배경색 (투명)
    });

    // 로고 이미지를 추가
    var canvas = qrcodeElement.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var logoSize = canvas.width / 4; // 로고의 크기

    ctx.drawImage(logoImage, centerX - logoSize / 2, centerY - logoSize / 2, logoSize, logoSize);
}

function clearQRCode() {
    // 이전 QR 코드 제거
    while (qrcodeElement.firstChild) {
        qrcodeElement.removeChild(qrcodeElement.firstChild);
    }
}

function saveQRCode() {
    // QR 코드 이미지를 canvas에 그린 후, 이미지로 저장
    var canvas = qrcodeElement.querySelector("canvas");
    var link = document.createElement('a');
    link.download = 'hb_' + linkInput.value + '.png';
    link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    link.click();
}

$(document).ready(function() {
    $('#text-input').on('keyup', function() {
        $('#text-count').html("(" + $(this).val().length + " / 100)");

        if ($(this).val().length > 100) {
            $(this).val($(this).val().substring(0, 100));
            $('#text-count').html("(100 / 100)");
        }
    });
});