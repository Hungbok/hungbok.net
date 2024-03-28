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