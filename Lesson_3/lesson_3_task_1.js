/*С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/

// Алгоритм Эрастофена - показывает свою эффективность на больщих массивах, на массивах небольших быстрее работает решение "в лоб".
// из курса Алгоритмы


let array = Array();
let simple_num = Array();

// Наполняем  массив от 2 до (n - 1) True
for (let i = 2; i < 100; i++) {array.push(true);}
// Присваиваем кратным 2, 3, 5... False
for (let i = 2; i <  100; i++) {
    if (array[i]) {
        for (let j = i * i; j < 100; j += i) {
            array[j] = false;
        }
    }
}
// Собираем значения массива array[i] = true в массив simle_num
for (let i = 2; i < 100; i++) {
    if(array[i]) {simple_num.push(i);}
}

console.log(simple_num);
