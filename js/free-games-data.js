
$(document).ready(function () {
    // JSON 파일 경로 설정
    var jsonFilePath = 'https://www.hungbok.net/data/free-games/sale.json';
    
    // 데이터 가져오기
    $.getJSON(jsonFilePath, function (data) {
        // 가져온 데이터를 원하는 횟수만큼 반복
        for (var i = 0; i < 16; i++) {
            // sale-container에 데이터 추가
            $('.sale-container').append('<div class="sale-item ' + data[i].esd + '">'+
            '<a href="' + data[i].link + '" target="_blank">'+
                '<div class="image">'+
                    '<img src="' + data[i].image + '" onerror="this.src=`https://www.hungbok.net/img/hungbok/hb_error_horizontal.svg`;">'+
                '</div>'+
                '<h1>' + data[i].platform + '<br>' + data[i].title + '</h1>'+
                '<div class="timer-container start" settime="' + data[i].starttime + '"></div>'+
                '<div class="timer-container end" settime="' + data[i].endtime + '"></div>'+
            '</a>'+
        '</div>',);
        }
    });
});

$(document).ready(function() {
    let data = [];
    let itemsPerPage = 8;
    let currentPage = 1;
    
    function fetchData(page, perPage) {
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        return fetch('https://www.hungbok.net/data/free-games/data.json')
            .then(response => response.json())
            .then(data => data.slice(startIndex, endIndex));
    }
    
    function createItemElement(t) {
        var e = '<div class="item ' + t.esd + ' ' + t.key + '">'+
                    '<div class="image">'+
                        '<img src="' + t.image + '" onerror="this.src=`https://www.hungbok.net/img/hungbok/hb_error_horizontal.svg`;">'+
                    '</div>'+
                    '<h1>' + t.title + '</h1>'+
                    '<div class="timer-container" settime="' + t.time + '"></div>'+
                    '<a href="' + t.link + '" target="_blank"></a>'+
                    '<img class="background" src="' + t.image + '">'+
                '</div>';
        var i = document.createElement("div");
        i.innerHTML = e.trim();
        const itemElement = i.firstChild;

        // Call the function to load the script for each new item
        loadScript('https://www.hungbok.net/js/free-games-timer.js', function() {
            // You can perform additional actions after the script is loaded if needed
            console.log('Script loaded for item:', t.title);
        });

        return itemElement;
    }

    // Function to load a script dynamically
    function loadScript(url, callback){
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onload = callback;
        document.head.appendChild(script);
    }

    function displayData(page) {
        fetchData(page, itemsPerPage).then(newData => {
            data = data.concat(newData);
    
            const container = document.querySelector('.container');
    
            newData.forEach(item => {
                const itemElement = createItemElement(item);
                container.appendChild(itemElement);
            });
        });
    }
    
    window.onload = () => displayData(currentPage);
    
    window.onscroll = function() {
        const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        const totalPageHeight = document.body.scrollHeight;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
        if (scrollPosition + windowHeight >= totalPageHeight - 350) {
            currentPage++;
            displayData(currentPage);
        }
    };
});
