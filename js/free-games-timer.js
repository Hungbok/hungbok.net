$(document).ready(function() {
    // 서버 시간을 가져오는 함수
    function getServerTime() {
        // 서버에서 현재 시간을 가져오는 방법에 따라 변경
        // 여기서는 클라이언트의 로컬 시간을 사용
        return new Date();
    }
    
    // 서버 시간을 업데이트하는 함수
    function updateServerTime() {
        var serverTimeElement = document.getElementById("serverTime");
        var serverTime = getServerTime();
    
        var year = serverTime.getFullYear();
        var month = (serverTime.getMonth() + 1).toString().padStart(2, '0');
        var day = serverTime.getDate().toString().padStart(2, '0');
        var hours = serverTime.getHours().toString().padStart(2, '0');
        var minutes = serverTime.getMinutes().toString().padStart(2, '0');
        var seconds = serverTime.getSeconds().toString().padStart(2, '0');
    
        var formattedTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    
        // HTML 요소에 서버 시간 표시
        serverTimeElement.textContent = formattedTime + " UTC+09:00";
    }
    
    // 타이머 생성 함수
    function createTimer(timerContainer, endTime) {
        var timerInterval;
        var targetTime = new Date(parseTimeString(endTime));
        var oneMinuteLeftTime = new Date(targetTime.getTime() - 60 * 1000); // 종료 1분 전
        var tenMinuteLeftTime = new Date(targetTime.getTime() - 60 * 60 * 1000); // 종료 10분 전(1시간 전)
        var warningTime = new Date(targetTime.getTime() - 6 * 60 * 60 * 1000); // 종료 1시간 전(6시간 전)
        var halfDayLeftTime = new Date(targetTime.getTime() - 12 * 60 * 60 * 1000); // 종료 12시간 전
        var dangerTime = new Date(targetTime.getTime() - 24 * 60 * 60 * 1000); // 종료 24시간 전
    
        function updateTimer() {
            var currentTime = getServerTime(); // 서버 시간 가져오기
            var timeDifference = targetTime - currentTime;
            var oneMinuteLeftDifference = oneMinuteLeftTime - currentTime;
            var tenMinuteLeftDifference = tenMinuteLeftTime - currentTime;
            var warningDifference = warningTime - currentTime;
            var halfDayLeftDifference = halfDayLeftTime - currentTime;
            var dangerDifference = dangerTime - currentTime;
    
            if (timeDifference <= 0) {
                clearInterval(timerInterval);
                timerContainer.textContent = "00:00:00";
                if (timerContainer.classList.contains("start")) {
                    timerContainer.classList.add("on-sale");
                    timerContainer.textContent = "";
                } else if (timerContainer.classList.contains("end")) {
                    timerContainer.parentNode.parentNode.classList.add("sale-end");
                    timerContainer.textContent = "";
                    timerContainer.previousSibling.textContent = "";
                } else {
                    timerContainer.parentNode.classList.add("expire");
                }
            } else {
                var seconds = Math.floor(timeDifference / 1000) % 60;
                var minutes = Math.floor(timeDifference / (1000 * 60)) % 60;
                var hours = Math.floor(timeDifference / (1000 * 60 * 60));
                var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
                if (hours >= 100) {
                    var hours = Math.floor(timeDifference / (1000 * 60 * 60)) % 24;
                    formattedTime = days + ":" + hours.toString().padStart(2, '0') + ":" +
                                    minutes.toString().padStart(2, '0') + ":" +
                                    seconds.toString().padStart(2, '0');
                } else {
                    formattedTime = hours.toString().padStart(2, '0') + ":" +
                                    minutes.toString().padStart(2, '0') + ":" +
                                    seconds.toString().padStart(2, '0');
                }
    
                // 종료 1분 전
                if (oneMinuteLeftDifference <= 0) {
                    timerContainer.classList.add("one-minute-left");
                }
    
                // 종료 10분 전(1시간 전)
                if (tenMinuteLeftDifference <= 0) {
                    timerContainer.classList.add("ten-minute-left");
                }
    
                // 종료 1시간 전(6시간 전)
                if (warningDifference <= 0) {
                    timerContainer.classList.add("one-hour-left");
                }
    
                // 종료 12시간 전
                if (halfDayLeftDifference <= 0) {
                    timerContainer.classList.add("half-day-left");
                }
    
                // 종료 24시간 전
                if (dangerDifference <= 0) {
                    timerContainer.classList.add("one-day-left");
                }
    
                timerContainer.textContent = formattedTime;
            }
        }
    
        updateTimer(); // 초기 설정
    
        // 0.1초 간격으로 타이머 업데이트
        timerInterval = setInterval(updateTimer, 100);
    }
    
    // 시간 문자열 파싱 함수
    function parseTimeString(timeString) {
        var parts = timeString.split('-');
        var year = parseInt(parts[0], 10);
        var month = parseInt(parts[1], 10) - 1; // 월은 0부터 시작하므로 1을 뺍니다.
        var day = parseInt(parts[2], 10);
        var hours = parseInt(parts[3], 10);
        var minutes = parseInt(parts[4], 10);
        var seconds = parseInt(parts[5], 10);
    
        return new Date(year, month, day, hours, minutes, seconds);
    }
    
    // 초기에 한 번 호출하고 1초 간격으로 업데이트
    updateServerTime();
    setInterval(updateServerTime, 100);
    
    // 타이머 생성 및 설정
    var timerContainers = document.querySelectorAll('.timer-container');
    timerContainers.forEach(function(timerContainer) {
        var endTime = timerContainer.getAttribute('settime');
        createTimer(timerContainer, endTime);
    });
})