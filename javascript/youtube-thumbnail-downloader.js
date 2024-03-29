function generateImages() {
    var linkInput = document.getElementById('linkInput').value;
    var imageContainer = document.getElementById('image');

    // 기존 이미지들을 지우고 새로운 이미지를 생성하기 전에 컨테이너를 비웁니다.
    imageContainer.innerHTML = '';

    // 이미지 URL을 생성합니다.
    var imageUrlMaxRes = `https://img.youtube.com/vi/${linkInput}/maxresdefault.jpg`;
    var imageUrlSd = `https://img.youtube.com/vi/${linkInput}/sddefault.jpg`;
    var imageUrlMq = `https://img.youtube.com/vi/${linkInput}/mqdefault.jpg`;

    // 최대 해상도 이미지
    var imgMaxRes = createImage(imageUrlMaxRes);
    imageContainer.appendChild(imgMaxRes);

    // 표준 해상도 이미지
    var imgSd = createImage(imageUrlSd);
    imageContainer.appendChild(imgSd);

    // 중간 품질 이미지
    var imgMq = createImage(imageUrlMq);
    imageContainer.appendChild(imgMq);
}

// 이미지 생성 및 다운로드 기능을 추가하는 함수
function createImage(src) {
    var img = document.createElement('img');
    img.src = src;
    img.style.margin = '10px'; // 간격 조정
    img.onclick = function() {
        // 이미지 다운로드를 위한 링크 생성
        var a = document.createElement('a');
        a.href = src;
        a.download = src.split('/').pop(); // 파일 이름 설정
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return img;
}