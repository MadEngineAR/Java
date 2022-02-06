/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/
function sum(a, b) {
    if (isNaN(a) | (isNaN(b)))
        return console.log('Введите корректные данные');
    return `Сумма чисел равна ${a + b}`
}

function difference(a, b) {
    if (isNaN(a) | (isNaN(b)))
        return console.log('Введите корректные данные');
    return `Разность чисел равна ${a - b}`
}

function mult(a, b) {
    if (isNaN(a) | (isNaN(b)))
        return console.log('Введите корректные данные');
    return `Произведение чисел равно ${a * b}`
}

function div(a, b) {
    if (isNaN(a) | (isNaN(b)))
        return console.log('Введите корректные данные');
    else if (b == 0)
        return message = 'На ноль делить нельзя'
    return `Отношение чисел равно ${(a / b).toFixed(4)}`
}

console.log(sum(3))
console.log(sum(7, 'aa'))
console.log(sum(7, 3))
console.log(difference(8, 10))
console.log(mult(3, 0))
console.log(mult(3, 5));
console.log(div(3, 0))
console.log(div(7, 3))
