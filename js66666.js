// let out = document.querySelector('.out');
// let p = 0;
// let outStr = '';
// let flag = 3;

// while (p < 4) {
//     let p1 = 0;
//     while (p1 < 4) {
//         if (p1 < flag) {
//             outStr += '0';
//         }
//         else {
//             outStr = '*';
//         }
//         p1++;
//     }
//     flag--;
//     outStr += '<br>';
//     p++;
// }
// out.innerHTML = outStr;

//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.


function t1() {
let out = document.querySelector('.out-1');
let a = 0;
let b = '';
while(a < 50) {
    a++;
    console.log(a);
    b += a + ' ';
}

console.log(b);
out.innerHTML = b;
}
document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.

function t2() {
    let out = document.querySelector('.out-2');
    let a = 0;
    let b = '';
    while(a < 122) {
        a = a + 2;
        console.log(a);
        b += a + ' ';
    }
    console.log(b);
    out.innerHTML = b;
}
document.querySelector('.b-2').onclick = t2;

//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.

function t3() {
    let out = document.querySelector('.out-3');
    let a = 26;
    let b = '';
    while(a > 7) {
        a--;
        console.log(a);
        b += a + ' ';
    }
    console.log(b);
    out.innerHTML = b;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.


function t4() {
    let out = document.querySelector('.out-4');
    let a = 80;
    let b = '';
    while(a > 35) {
        a= a - 3;
        b += a + '_';
    }
    out.innerHTML = b;
}

document.querySelector('.b-4').onclick = t4;

//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

function t5() {
    let out = document.querySelector('.out-5');
    let a = 0;
    let b = '';
    while(a < 17) {
        a++;
        if(a % 2 == 0) {
            b += a + '**_';
        }
        if(a % 2 !== 0) {
            b += a + '*_';
        }
    }
    out.innerHTML = b;
}

document.querySelector('.b-5').onclick = t5;

//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.

function t6() {
let a = +document.querySelector('.i-6').value;
let out = document.querySelector('.out-6');
//out.innerHTML = '******';
while(a ) {
c++;
console.log(c);
out.innerHTML = '******';
}
}

document.querySelector('.b-6').onclick = t6;

//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.

function t7() {
    let a = +document.querySelector('.i-7').value;
    //a = a + 1;
    console.log(a);
    let out = document.querySelector('.out-7');
    let b = '';
    while(a > 0) {
   
    console.log(a);
    b += a + ' ';
    a--;
    //out.innerHTML = b;
    }
    out.innerHTML = b;
}
document.querySelector('.b-7').onclick = t7;

// Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.

function t8() {
    let a = +document.querySelector('.i-81').value;
    a = a - 1;
    let b = +document.querySelector('.i-82').value;
    let out = document.querySelector('.out-8');
    let c = '';
    while(a < b) {
    a++;
    console.log(a);
    c += a + ' ';
    
    }
    out.innerHTML = c;
    console.log(c);
}
document.querySelector('.b-8').onclick = t8; 
