function setTime(timezoneId, unit, value) {
    let inputElement = document.getElementById(timezoneId);
    let timezone = getTimezoneFromId(timezoneId);
    let momentTime = moment.tz(inputElement.value, timezone);

    switch (unit) {
        case 'year':
            momentTime.year(value);
            break;
        case 'month':
            // moment.js는 월을 0부터 세므로, 입력 값에 1을 빼줍니다.
            momentTime.month(value - 1);
            break;
        case 'date':
            momentTime.date(value);
            break;
        case 'hour':
            momentTime.hour(value);
            break;
        case 'minute':
            momentTime.minute(value);
            break;
        case 'second':
            momentTime.second(value);
            break;
    }

    // 변경된 시간을 현재 타임존 입력에 설정합니다.
    inputElement.value = momentTime.format('YYYY-MM-DDTHH:mm:ss');

    // 다른 타임존 입력을 업데이트하고, .active 클래스를 업데이트합니다.
    updateOtherTimezones(timezoneId, momentTime);
}

function setActiveClasses(timezoneId, momentTime) {
    // 타입 별로 .active 클래스를 업데이트합니다.
    const types = ['year', 'month', 'date', 'hour', 'minute', 'second'];
    types.forEach(type => {
        // 특정 타입에 해당하는 모든 요소를 가져옵니다.
        const allElements = document.querySelectorAll(`[id^="${timezoneId}-${type}-"]`);
        let value;
        switch (type) {
            case 'year':
                value = momentTime.year();
                break;
            case 'month':
                value = momentTime.month() + 1; // moment.js는 월을 0부터 시작합니다.
                break;
            case 'date':
                value = momentTime.date();
                break;
            case 'hour':
                value = momentTime.hour();
                break;
            case 'minute':
                value = momentTime.minute();
                break;
            case 'second':
                value = momentTime.second();
                break;
        }

        // 각 요소를 순회하면서 조건에 맞는 요소에만 .active 클래스를 설정합니다.
        allElements.forEach(el => {
            // 요소 ID에서 숫자 부분을 추출합니다.
            const elIdParts = el.id.split('-');
            const elValue = parseInt(elIdParts[elIdParts.length - 1], 10);

            if (elValue === value) {
                el.classList.add('active');
                adjustParentTopForActive();
            } else {
                el.classList.remove('active');
            }
        });
    });
}

function updateOtherTimezones(currentTimezoneId, momentTime) {
    let otherTimezones = ['pt', 'ct', 'et', 'brt', 'gmt', 'cet', 'eet', 'ast', 'gst', 'ict', 'hst', 'jst', 'aedt', 'nzdt'];

    otherTimezones.forEach(id => {
        let otherTimezone = getTimezoneFromId(id);
        let otherMomentTime = momentTime.clone().tz(otherTimezone);
        document.getElementById(id).value = otherMomentTime.format('YYYY-MM-DDTHH:mm:ss');
        setActiveClasses(id, otherMomentTime); // 이 부분이 중요합니다. 각 타임존을 업데이트한 후에 .active 클래스를 설정합니다.
    });
}

function getTimezoneFromId(id) {
    switch (id) {
        case 'pt':
            return "America/Los_Angeles";
        case 'ct':
            return "America/Mexico_City";
        case 'et':
            return "America/New_York";
        case 'brt':
            return "America/Sao_Paulo";
        case 'gmt':
            return "Europe/London";
        case 'cet':
            return "Europe/Paris";
        case 'eet':
            return "Africa/Cairo";
        case 'ast':
            return "Asia/Riyadh";
        case 'gst':
            return "Asia/Dubai";
        case 'ict':
            return "Asia/Jakarta";
        case 'hst':
            return "Asia/Hong_Kong";
        case 'jst':
            return "Asia/Tokyo";
        case 'aedt':
            return "Australia/Sydney";
        case 'nzdt':
            return "Pacific/Auckland";
        default:
            return "UTC";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    ['pt', 'ct', 'et', 'brt', 'gmt', 'cet', 'eet', 'ast', 'gst', 'ict', 'hst', 'jst', 'aedt', 'nzdt'].forEach(id => {
        let timezone = getTimezoneFromId(id);
        let now = moment.tz(timezone);
        let inputElement = document.getElementById(id);
        inputElement.value = now.format('YYYY-MM-DDTHH:mm:ss');

        // 각 타임존에 대하여 .active 클래스 설정
        setActiveClasses(id, now);
    });

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            let timezoneId = this.getAttribute('data-timezone-id');
            let unit = this.getAttribute('data-unit');
            let value = parseInt(this.getAttribute('data-value'), 10);
            setTime(timezoneId, unit, value);
        });
    });

    adjustParentTopForActive();

    document.querySelectorAll('.current-time-button').forEach(button => {
        button.addEventListener('click', function() {
            let timezoneId = this.getAttribute('data-timezone-id');
            setLocalTimeToTimezone(timezoneId);
        });
    });
});

function adjustParentTopForActive() {
    const timezoneContainers = document.querySelectorAll('.timezone-content');

    timezoneContainers.forEach(container => {
        const allChildren = container.children;
        const activeElement = container.querySelector('.active');
        if (activeElement) {
            const activeIndex = Array.from(allChildren).indexOf(activeElement);
            const adjustValue = -100 * activeIndex;
            container.style.top = `${adjustValue}px`;
        }
    });
}

function setLocalTimeToTimezone(timezoneId) {
    // 사용자의 로컬 시간을 가져옵니다.
    let localTime = moment();

    // 선택된 타임존으로 시간을 변환합니다.
    let timezone = getTimezoneFromId(timezoneId);
    let convertedTime = localTime.tz(timezone);

    // 변환된 시간을 해당 타임존의 입력 필드에 설정합니다.
    document.getElementById(timezoneId).value = convertedTime.format('YYYY-MM-DDTHH:mm:ss');

    // 각 타임존을 업데이트하고 .active 클래스를 설정합니다.
    updateOtherTimezones(timezoneId, convertedTime);
}