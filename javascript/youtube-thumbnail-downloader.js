function generateImages() {
    var linkInput = document.getElementById('linkInput').value;
    var imageContainer = document.getElementById('image');

    imageContainer.innerHTML = ''; // 이미지 컨테이너 초기화

    // 이미지 URL 생성
    var imageUrlMaxRes = `https://img.youtube.com/vi/${linkInput}/maxresdefault.jpg`;
    var imageUrlSd = `https://img.youtube.com/vi/${linkInput}/sddefault.jpg`;
    var imageUrlHq = `https://i3.ytimg.com/vi/${linkInput}/hqdefault.jpg`;
    var imageUrlMq = `https://img.youtube.com/vi/${linkInput}/mqdefault.jpg`;

    // 각 해상도별 이미지 생성 및 추가
    imageContainer.appendChild(createImage(imageUrlMaxRes, 'maxresdefault'));
    imageContainer.appendChild(createImage(imageUrlSd, 'sddefault'));
    imageContainer.appendChild(createImage(imageUrlHq, 'hqdefault'));
    imageContainer.appendChild(createImage(imageUrlMq, 'mqdefault'));
}

function createImage(src, name) {
    var a = document.createElement('a');
    a.href = src;
    a.download = `${name}.jpg`; // 다운로드될 파일명 설정
    a.style.display = 'inline-block'; // a 태그를 인라인 블록으로 설정하여 마진 적용 가능
    a.style.maxWidth = '100%';
    
    var img = document.createElement('img');
    img.src = src;
    img.style.width = '100%';

    a.appendChild(img);
    
    return a; // 클릭 시 이미지가 다운로드되는 a 태그 반환
}