/*
 *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

function power(val, pow, result = 1, count = 0) {
    if (isNaN(val) | (isNaN(pow)))
        return console.log('Введите корректные данные');
    if (pow === 0) return `Число ${val} в степени ${pow} равно 1`;
    else if (count === Math.abs(pow) & pow > 0)
        return `Число ${val} в степени ${pow} равно ${result}`;
    else if (count === Math.abs(pow) & pow < 0)
        return `Число ${val} в степени ${pow} равно ${(1 / result).toFixed(4)}`;
    else
        result = result * val
    return power(val, pow, result, count += 1);

}

console.log(power(2, 0));
console.log(power(2, -3));
console.log(power(4, 2));
console.log(power(-5, 3)); 
