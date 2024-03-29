// YouTube URL 또는 비디오 ID에서 비디오 ID를 추출하는 함수
function extractVideoID(urlOrId) {
    const patterns = [
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/, // 전체 YouTube URL
        /(?:https?:\/\/)?youtu\.be\/([a-zA-Z0-9_-]+)/, // 짧은 YouTube URL
        /([a-zA-Z0-9_-]{11})/ // 비디오 ID 패턴
    ];

    for (let pattern of patterns) {
        const match = urlOrId.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }

    return null; // 일치하는 패턴 없음
}

function generateImages() {
    var input = document.getElementById('linkInput').value;
    var videoID = extractVideoID(input);

    if (!videoID) {
        showErrorMessage('올바른 YouTube 비디오 ID나 URL을 입력해주세요.');
        return;
    }

    var imageContainer = document.getElementById('image');
    imageContainer.innerHTML = ''; // 이미지 컨테이너 초기화

    // 이미지 URL 생성
    var imageUrlMaxRes = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
    var imageUrlSd = `https://img.youtube.com/vi/${videoID}/sddefault.jpg`;
    var imageUrlHq = `https://i3.ytimg.com/vi/${videoID}/hqdefault.jpg`;
    var imageUrlMq = `https://img.youtube.com/vi/${videoID}/mqdefault.jpg`;

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
    a.target = "_blank"; // 새 탭에서 링크 열기
    a.style.display = 'flex'; // a 태그를 인라인 블록으로 설정하여 마진 적용 가능
    a.style.maxWidth = '100%';
    a.style.justifyContent = 'center';
    a.style.padding = '5px';
    a.style.backgroundColor = '#ffffff';
    a.style.borderRadius = '5px';

    var img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '100%';

    a.appendChild(img);
    
    return a; // 클릭 시 이미지가 다운로드되는 a 태그 반환
}