// 좋아요 버튼 클릭 시 호출되는 함수
function like(buttonNumber) {
    // GitHub 저장소의 like.json 파일을 업데이트
    fetch(`https://api.github.com/repos/Hungbok/data.hungbok.net/contents/like${buttonNumber}.json`, {
        headers: {
            'Authorization': 'token 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',
        }
    })
        .then(response => response.json())
        .then(data => {
            // 현재 좋아요 개수 가져오기
            const currentCount = data.content ? JSON.parse(atob(data.content)).count : 0;

            // 좋아요 개수 증가
            const newCount = currentCount + 1;

            // 좋아요 개수 업데이트
            const content = { count: newCount };
            const encodedContent = btoa(JSON.stringify(content));

            // GitHub API를 사용하여 like.json 파일 업데이트
            fetch(`https://api.github.com/repos/Hungbok/data.hungbok.net/contents/like${buttonNumber}.json`, {
                method: 'PUT',
                headers: {
                    'Authorization': 'token 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',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: `Update like count for button ${buttonNumber}`,
                    content: encodedContent,
                    sha: data.sha,
                }),
            })
                .then(response => response.json())
                .then(() => {
                    // 화면에 좋아요 개수 업데이트
                    document.getElementById(`count${buttonNumber}`).innerText = newCount;
                })
                .catch(error => console.error(`Error updating like count for button ${buttonNumber}:`, error));
        })
        .catch(error => console.error(`Error fetching like${buttonNumber}.json:`, error));
}

// 초기 좋아요 개수 표시
function fetchInitialCount(buttonNumber) {
    fetch(`https://api.github.com/repos/Hungbok/data.hungbok.net/contents/like${buttonNumber}.json`, {
        headers: {
            'Authorization': 'token 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',
        }
    })
        .then(response => response.json())
        .then(data => {
            // 현재 좋아요 개수 가져오기
            const initialCount = data.content ? JSON.parse(atob(data.content)).count : 0;
            document.getElementById(`count${buttonNumber}`).innerText = initialCount;
        })
        .catch(error => console.error(`Error fetching initial like count for button ${buttonNumber}:`, error));
}

// 페이지에 존재하는 모든 버튼에 대해 초기 좋아요 개수 표시
document.querySelectorAll('[id^="likeButton"]').forEach(button => {
    const buttonNumber = button.id.replace('likeButton', '');
    fetchInitialCount(buttonNumber);
});