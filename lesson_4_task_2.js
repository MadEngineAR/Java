/*
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

// Описаны два типа обьектов basket и product.
// ОБъект basket имеет три метода - добавления и удаления объекта product, а также метод подсчета стоимости basket.
const basket = {
    products : [],

    addTobasket(prod) {
        this.products.push(prod)
        return `Корзина: ${this.products}`
    },

    delFrombasket(prod) {
        for(let i = 0; i < this.products.length; i++){
            if(prod.id === this.products[i].id) { 
                this.products.splice(i, 1);
            break;
            }
        }
        return `Корзина: ${this.products}`
    },

    countBasketPrice() {
        i = 0
        if (i < this.products.length) {
            let result = this.products.reduce(function(sum, current) {
                current = current.price * current.count
                i++
                return sum + current;
        }, 0);
        return `Сумма товаров в корзине: ${result} рублей`;
        }
    }
};
const product_1 = {
    id : 1,
    name : 'iphone',
    price: 99000,
    count: 2
};
const product_2 = {
    id : 2,
    name : 'macbook',
    price: 149999,
    count: 3
};
const product_3 = {
    id : 3,
    name : 'Macbook case',
    price: 10000,
    count: 1
};

basket.addTobasket(product_1);
basket.addTobasket(product_2);
basket.addTobasket(product_3);
basket.delFrombasket(product_2);
console.log(basket.products);
console.log(basket.countBasketPrice());
