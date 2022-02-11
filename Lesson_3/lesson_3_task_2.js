/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать 
функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/
let basket = [];

// Мне было интересно описать функции добавления и удаления товаров в корзину.
function addTobasket(id = Number, name = 'some_product', price = Number, count = Number) {
    let productInbasket = Array(id, name, price, count)
    basket.push(productInbasket)
    return `Корзина: ${basket}`
}

function delFrombasket(id = Number) {
    for(let i = 0; i<basket.length; i++){
        if(basket[i][0] === id){ 
            basket.splice(i, 1);
        break;
        }
    }
    return `Корзина: ${basket}`
}

// Функцию подсчета стоимости товаров реализовал через метод reduce.
function countBasketPrice(arr) {
    i = 0
    if (i < arr.length) {
        let result = arr.reduce(function(sum, current) {
            current = arr[i][2] * arr[i][3]
            i++
            return sum + current;
    }, 0);
    return `Сумма товаров в корзине: ${result} рублей`;
    }
}


addTobasket(1,'iphone', 99000, 2)
addTobasket(2, 'macbook',149999, 3)
addTobasket(3, 'Macbook case', 100000, 1)
delFrombasket(2)
console.log(basket);
console.log(countBasketPrice(basket));
