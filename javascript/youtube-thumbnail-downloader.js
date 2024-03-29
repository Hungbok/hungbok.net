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
    var imageUrls = {
        'maxresdefault': `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`,
        'sddefault': `https://img.youtube.com/vi/${videoID}/sddefault.jpg`,
        'hqdefault': `https://i3.ytimg.com/vi/${videoID}/hqdefault.jpg`,
        'mqdefault': `https://img.youtube.com/vi/${videoID}/mqdefault.jpg`
    };

    // 각 해상도별 이미지 생성 및 추가
    Object.keys(imageUrls).forEach(key => {
        var canvas = document.createElement('canvas');
        canvas.width = key === 'sddefault' ? 640 : (key === 'hqdefault' ? 480 : canvas.width);
        canvas.height = key === 'sddefault' ? 360 : (key === 'hqdefault' ? 270 : canvas.height);
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
            if (key === 'sddefault') {
                ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 640, 360);
            } else if (key === 'hqdefault') {
                ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, 480, 270);
            } else {
                ctx.drawImage(img, 0, 0);
            }
            canvas.onclick = function() {
                var downloadLink = document.createElement('a');
                downloadLink.href = canvas.toDataURL('image/jpeg');
                downloadLink.download = `${key}.jpg`;
                downloadLink.click();
            };
            imageContainer.appendChild(canvas);
        };
        img.src = imageUrls[key];
    });
}