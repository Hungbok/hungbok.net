// QR 코드를 생성할 요소
var qrcodeElement = document.getElementById("qrcode");
var linkInput = document.getElementById("linkInput");
var generateButton = document.getElementById("generateButton");

// 로고 이미지를 미리 로드
var logoImage = new Image();
logoImage.src = '//www.hungbok.net/image/hb/hb_qrcode_icon.svg'; // 로고 이미지 파일의 경로
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

$(document).ready(function() {
    $('#textinput').on('input', function() {
        const maxLength = 100;
        let textLength = $(this).val().length;

        if (textLength > maxLength) {
            $(this).val($(this).val().substring(0, maxLength));
            textLength = maxLength; // 문자 수를 최대 길이로 설정
        }
        
        $('#text-count').html(`(${textLength} / ${maxLength})`);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('qrcode').addEventListener('click', function() {
        var canvas = this.querySelector('canvas'); // canvas 요소를 찾습니다.
        if (canvas) {
            var imgData = canvas.toDataURL('image/png');
            var link = document.createElement('a');
            link.download = 'hb_qrcode_' + linkInput.value + '.png'; // 파일 이름 설정
            link.href = imgData;

            // Firefox의 경우, link가 body에 추가되어 있어야 동작합니다.
            // 또한, link.click() 호출 후 바로 link를 제거하면 Firefox에서 작동하지 않을 수 있습니다.
            // setTimeout을 사용하여 비동기적으로 제거합니다.
            document.body.appendChild(link); // DOM에 link를 임시로 추가합니다.
            link.click(); // link 클릭 이벤트를 강제로 발생시켜 파일 다운로드를 시작합니다.
            setTimeout(function() { 
                document.body.removeChild(link); // 사용 후 link를 제거합니다.
            }, 0);
        }
    });
    var textarea = document.getElementById('linkInput');

    textarea.addEventListener('input', autoResize, false);

    function autoResize() {
        this.style.height = 'auto'; // 높이를 자동으로 재설정
        this.style.height = this.scrollHeight + 'px'; // scrollHeight를 사용하여 실제 텍스트 높이에 맞게 조정
    }
});