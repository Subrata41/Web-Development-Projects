const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const ans = document.getElementById('ans');
const result = document.getElementById('result');

ans.addEventListener('click', sumCalculate);

function sumCalculate() {
    const sum = Number(num1.value) + Number(num2.value);
    result.value = sum;
}