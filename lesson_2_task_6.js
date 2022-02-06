/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
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

function mathOperation(a, b, operation = '') {
    if (isNaN(a) | (isNaN(b) | operation === null))
        return console.log('Введите корректные данные');
    switch (operation) {
        case '+': return sum(a, b)
        case '-': return difference(a, b)
        case '*': return mult(a, b)
        case '/': return div(a, b)
        default: return 'Добрый вечер'
    }
}

console.log(mathOperation(3, 0, ''))
console.log(mathOperation(3, 0, '/'))
console.log(mathOperation(3, 4, '/'))
console.log(mathOperation(3, 0, '*'))
console.log(mathOperation(3, 4, '+'));
console.log(mathOperation(3, 4, '-'));
