/*
4. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей 
пирамиды должно быть 20 рядов, а не 5:
*/
for (let  i = 0; i < 20; i++) {
    let stars = []
    for (let  j = 0; j <= i; j++){
        stars.push('*');
    }
    console.log(stars.join(''))
};