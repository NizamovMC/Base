// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/
function t1(event) {
	document.querySelector('.out-1').textContent = document.querySelector('.i-1').value;  
}
document.querySelector('.i-1').onkeyup = t1;

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
    document.querySelector('.out-2').textContent = event.keyCode; 
    console.log(event); 
}
document.querySelector('.i-2').onkeypress = t2;
// ваше событие здесь!!!
// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

//let w3 = 75;

// function t3(event) {
// if(event.keyCode == 48 || 49 || 50 || 51 || 52 || 53 || 54 || 55 || 56 || 57) {
//     document.querySelector('.out-3').innerHTML = false;
// } else {
//     document.querySelector('.out-3').innerHTML = true;
// }
// }
// document.querySelector('.i-3').onkeypress = t3;

function t3(event) {
    console.log(event);
 if(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105){
    document.querySelector('.out-3').innerHTML = false;
 } 
  else {document.querySelector('.out-3').innerHTML = true;
}
}
document.querySelector('.i-3').onkeypress = t3;

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
    document.querySelector('.out-4').textContent = document.querySelector('.i-4').value.toLowerCase();  
    //console.log(event);
}
document.querySelector('.i-4').onkeyup = t4;

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
    document.querySelector('.out-5').textContent = document.querySelector('.i-5').value.toUpperCase();  
    //console.log(event);
}
document.querySelector('.i-5').onkeyup = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */
let str = '';
function t6(event) {
    let k = event.key;
    if (k.toLowerCase() === k) { 
        str += k;
    }
    document.querySelector('.i-6').value = str;
    return false;
}

document.querySelector('.i-6').onkeypress= t6;

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
//const a7 = ['q', 'w', 'e', 'r', 't', 'y'];
function t7(event) {
    let str = '';
    const a7 = ['q', 'w', 'e', 'r', 't', 'y'];
    let b = Math.floor(Math.random() * a7.length);
    str = a7[b];
    // if(event.keyCode >= 65 && event.keyCode <= 90) {
    //     document.querySelector('.out-7').innerHTML = str;
    // 
    document.querySelector('.out-7').innerHTML = str
}
document.querySelector('.i-7').onkeypress= t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(event) {
const a = {
    i : 1,
    o : 0,
    l : 7,
}
// document.querySelector('.out-8').textContent = document.querySelector('.i-8').value;
// if (event.key == a.key){
//     document.querySelector('.out-8').innerHTML = a[event.key];
// }
if (a[event.key] !== undefined) {
    return a[event.key];
}
else {
    return event.key;
    
}
}
document.querySelector('.i-8').onkeypress = (event) => {
    document.querySelector('.out-8').textContent = t8(event);
}
//document.querySelector('.i-8').onkeyup= t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
