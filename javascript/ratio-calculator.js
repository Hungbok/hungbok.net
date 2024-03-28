// Ratio Calculator

document.getElementById('generateButton').addEventListener('click', function() {
    let A = document.getElementById('inputA').value;
    let B = document.getElementById('inputB').value;
    let C = document.getElementById('inputC').value;
    let D = document.getElementById('inputD').value;
  
    // D의 값을 비우고 재계산
    if (A && B && C) {
      D = (C * B) / A;
      document.getElementById('inputD').value = D;
    }
});

document.getElementById('set21-9').addEventListener('click', function() {
    document.getElementById('inputA').value = '21';
    document.getElementById('inputB').value = '9';
});

document.getElementById('set16-9').addEventListener('click', function() {
    document.getElementById('inputA').value = '16';
    document.getElementById('inputB').value = '9';
});

document.getElementById('set4-5').addEventListener('click', function() {
    document.getElementById('inputA').value = '4';
    document.getElementById('inputB').value = '5';
});

document.getElementById('set4-3').addEventListener('click', function() {
    document.getElementById('inputA').value = '4';
    document.getElementById('inputB').value = '3';
});

document.getElementById('set2-3').addEventListener('click', function() {
    document.getElementById('inputA').value = '2';
    document.getElementById('inputB').value = '3';
});

document.getElementById('set1-16').addEventListener('click', function() {
    document.getElementById('inputA').value = '1';
    document.getElementById('inputB').value = '16';
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('inputC').value = '';
    document.getElementById('inputD').value = '';
});

document.getElementById('allclear').addEventListener('click', function() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('inputC').value = '';
    document.getElementById('inputD').value = '';
});
  
// 숫자 외 입력 방지
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
});

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

function numberMaxLength(e){
    if(e.value.length > e.maxLength){
        e.value = e.value.slice(0, e.maxLength);
    }
}