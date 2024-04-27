
function convertContent(originalContent) {
    const noparsePlaceholders = [];
    let noparseIndex = 0;

    let contentWithPlaceholders = originalContent.replace(/\[noparse\](.*?)\[\/noparse\]/g, function(match, p1) {
        const placeholder = `@@NOPARSE${noparseIndex}@@`;
        noparsePlaceholders.push({ placeholder, content: p1 });
        noparseIndex++;
        return placeholder;
    });

    let convertedContent = contentWithPlaceholders
        .split('\n').map(line => `<div>${line}</div>`).join('')
        .replace(/\[h1\](.*?)\[\/h1\]/g, '<p class="h1">$1</p>')
        .replace(/\[b\](.*?)\[\/b\]/g, '<p class="bold">$1</p>')
        .replace(/\[u\](.*?)\[\/u\]/g, '<p class="underbar">$1</p>')
        .replace(/\[i\](.*?)\[\/i\]/g, '<p class="italic">$1</p>')
        .replace(/\[strike\](.*?)\[\/strike\]/g, '<p class="strike">$1</p>')
        .replace(/\[spoiler\](.*?)\[\/spoiler\]/g, '<p class="spoiler">$1</p>')
        .replace(/\[url=(.*?)\](.*?)\[\/url\]/g, '<a href="https://$1">$2</a>')
        .replace(/\[img=(.*?)\](.*?)\[\/img\]/g, '<div class="image-container"><img src="https://$1" title="$2"></div>')
        .replace(/\[yt=(.*?)\](.*?)\[\/yt\]/g, '<div class="video-container"><iframe src="https://www.youtube.com/embed/$1" title="$2" frameborder="0" allowfullscreen=""></iframe></div>')
        .replace(/\[x=(.*?)=(.*?)\](.*?)\[\/x\]/g, '<div class="widget-container"><blockquote class="twitter-tweet" align="center" data-theme="dark" title="$3"><a href="https://twitter.com/$1/status/$2"></a></blockquote></div>');

    noparsePlaceholders.forEach(({ placeholder, content }) => {
        convertedContent = convertedContent.replace(placeholder, `<p>${content}</p>`);
    });

    return convertedContent;
}

window.onload = function() {
    document.getElementById('generate-btn').addEventListener('click', function() {
        const originalContent = document.getElementById('textinput').value;
        const convertedContent = convertContent(originalContent);
        document.getElementById('textoutput').value = convertedContent;
    });
};

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

document.addEventListener('DOMContentLoaded', function() {
    var textarea = document.getElementById('textinput');

    textarea.addEventListener('input', autoResize, false);

    function autoResize() {
        this.style.height = 'auto'; // 높이를 자동으로 재설정
        this.style.height = this.scrollHeight + 'px'; // scrollHeight를 사용하여 실제 텍스트 높이에 맞게 조정
    }
});