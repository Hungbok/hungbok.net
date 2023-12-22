async function loadAsyncScripts() {
    // 스크립트 1 로드 및 실행
    await loadScript('https://www.hungbok.net/js/free-games-data.js');
    
    // 일정한 딜레이 후에 스크립트 2 로드 및 실행
    await delay(500); // 1000 밀리초 (1초) 딜레이
    await loadScript('https://www.hungbok.ner/js/free-games-timer.js');
    
    // 여기에 필요한 다른 스크립트를 순서대로 로드 및 실행할 수 있습니다.
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 비동기 스크립트 실행 시작
loadAsyncScripts();

function updateButtons(group, clickedButton) {
    const buttons = document.querySelectorAll(`#${group} .button`);

    // 클릭된 버튼이 이미 active인 경우
    if (clickedButton.classList.contains('active')) {
        // 해당 그룹의 모든 버튼에서 active 제거
        buttons.forEach(button => {
            button.classList.remove('active');
        });

        // .button.all에 active 추가
        document.querySelector(`#${group} .button.all`).classList.add('active');
    } else {
        // 클릭된 버튼이 active가 아닌 경우
        buttons.forEach(button => {
            button.classList.remove('active');
        });

        clickedButton.classList.add('active');
    }
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function () {
        const group = this.closest('.button-group').id;
        updateButtons(group, this);
    });
});

var filterContainer = document.querySelector('.container');
var filterAllButton = document.querySelector('.filter .button.all');
const filterButtons = document.querySelectorAll(`#groupA .button`);
var filterAllButton2 = document.querySelector('.filter-type .button.all');
const filterButtons2 = document.querySelectorAll(`#groupB .button`);

function allitem() {
    if (filterContainer.classList.contains('all')) {
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    } else {
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    }
}
function key() {
    if (filterContainer.classList.contains('key')) {
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    } else {
        filterContainer.classList.add('key');
        filterContainer.classList.remove('all');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
        filterButtons2.forEach(button => {
            button.classList.remove('active');
        });
        filterAllButton2.classList.add('active');
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    }
}
function bundle() {
    if (filterContainer.classList.contains('bundle')) {
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    } else {
        filterContainer.classList.add('bundle');
        filterContainer.classList.remove('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('subscribe');
        filterButtons2.forEach(button => {
            button.classList.remove('active');
        });
        filterAllButton2.classList.add('active');
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    }
}
function subscribe() {
    if (filterContainer.classList.contains('subscribe')) {
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    } else {
        filterContainer.classList.add('subscribe');
        filterContainer.classList.remove('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterButtons2.forEach(button => {
            button.classList.remove('active');
        });
        filterAllButton2.classList.add('active');
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    }
}
function alltype() {
    if (filterContainer.classList.contains('alltype')) {
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    } else {
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    }
}
function steam() {
    if (filterContainer.classList.contains('steam')) {
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    } else {
        filterContainer.classList.add('steam');
        filterContainer.classList.remove('alltype');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        filterAllButton.classList.add('active');
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    }
}
function epic() {
    if (filterContainer.classList.contains('epic')) {
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    } else {
        filterContainer.classList.add('epic');
        filterContainer.classList.remove('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        filterAllButton.classList.add('active');
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    }
}
function gog() {
    if (filterContainer.classList.contains('gog')) {
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    } else {
        filterContainer.classList.add('gog');
        filterContainer.classList.remove('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        filterAllButton.classList.add('active');
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    }
}
function ubi() {
    if (filterContainer.classList.contains('ubi')) {
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    } else {
        filterContainer.classList.add('ubi');
        filterContainer.classList.remove('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        filterAllButton.classList.add('active');
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    }
}
function xbox() {
    if (filterContainer.classList.contains('xbox')) {
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    } else {
        filterContainer.classList.add('xbox');
        filterContainer.classList.remove('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        filterAllButton.classList.add('active');
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    }
}
function fanatical() {
    if (filterContainer.classList.contains('fanatical')) {
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    } else {
        filterContainer.classList.add('fanatical');
        filterContainer.classList.remove('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        filterAllButton.classList.add('active');
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    }
}
function humble() {
    if (filterContainer.classList.contains('humble')) {
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    } else {
        filterContainer.classList.add('humble');
        filterContainer.classList.remove('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        filterAllButton.classList.add('active');
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    }
}
function choice() {
    if (filterContainer.classList.contains('choice')) {
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    } else {
        filterContainer.classList.add('choice');
        filterContainer.classList.remove('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        filterAllButton.classList.add('active');
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    }
}
function prime() {
    if (filterContainer.classList.contains('prime')) {
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    } else {
        filterContainer.classList.add('prime');
        filterContainer.classList.remove('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('psplus');
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        filterAllButton.classList.add('active');
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    }
}
function psplus() {
    if (filterContainer.classList.contains('psplus')) {
        filterContainer.classList.add('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterContainer.classList.remove('psplus');
    } else {
        filterContainer.classList.add('psplus');
        filterContainer.classList.remove('alltype');
        filterContainer.classList.remove('steam');
        filterContainer.classList.remove('epic');
        filterContainer.classList.remove('gog');
        filterContainer.classList.remove('ubi');
        filterContainer.classList.remove('xbox');
        filterContainer.classList.remove('fanatical');
        filterContainer.classList.remove('humble');
        filterContainer.classList.remove('choice');
        filterContainer.classList.remove('prime');
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        filterAllButton.classList.add('active');
        filterContainer.classList.add('all');
        filterContainer.classList.remove('key');
        filterContainer.classList.remove('bundle');
        filterContainer.classList.remove('subscribe');
    }
}

function toggleStatusItems() {
    var clickableDiv = document.querySelector('.available-button');
    var saleContainer = document.querySelector('.container');

    if (clickableDiv.classList.contains('active')) {
        clickableDiv.classList.remove('active');
        saleContainer.classList.remove('available');
    } else {
        clickableDiv.classList.add('active');
        saleContainer.classList.add('available');
    }
}

function toggleHighlight() {
    var clickableDiv = document.querySelector('.sale-more-button');
    var saleContainer = document.querySelector('.sale-container');
    var saleSection = document.querySelector('.sale-section');

    // highlight 클래스가 있으면 제거, 없으면 추가
    if (clickableDiv.classList.contains('highlight')) {
        clickableDiv.classList.remove('highlight');
        saleContainer.classList.remove('highlight');
        animateHeight(saleSection, 190); // 760px에서 390px로 부드럽게 돌아감
    } else {
        clickableDiv.classList.add('highlight');
        saleContainer.classList.add('highlight');
        animateHeight(saleSection, 834); // 390px에서 760px로 부드럽게 늘어남
    }
}

function animateHeight(element, targetHeight) {
    var currentHeight = element.clientHeight;
    var difference = targetHeight - currentHeight;
    var duration = 500; // 애니메이션 지속 시간 (ms)
    var startTime;

    function step(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        var progress = timestamp - startTime;
        var percentage = Math.min(progress / duration, 1);

        element.style.height = currentHeight + difference * percentage + 'px';

        if (progress < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}