/*
Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/
function getSomewithParam(a, b) {
    if (a > 0 & b > 0)
        return `Разность чисел равна = ${a - b}`;
    else if (a < 0 & b < 0)
        return `Произведение чисел равно = ${a * b}`
    else if ((a < 0 & b > 0) | (a > 0 & b < 0))
        return `Сумма чисел равна = ${a + b}`;
    else return 'Введите корректные значения'
}


console.log(getSomewithParam(3, 2))
console.log(getSomewithParam(-3, -2))
console.log(getSomewithParam(-3, 2))
console.log(getSomewithParam(3, -2))
console.log(getSomewithParam(-3))