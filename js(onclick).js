// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    let text = document.querySelector('.div-1').textContent;
    document.querySelector('.out-1').textContent = text;
    return text;
}
document.querySelector('.div-1').onclick = t1;

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(event) {
let out = document.querySelector('.out-2');
if(event.altKey) {
out.innerHTML = true;
} else {
    out.innerHTML = false;
}
}
document.querySelector('.div-2').onclick = t2;
// function t2(event) {
//     let out = document.querySelector('.out-2');
//     if (event.altKey) {
//       console.log(true);
//       out.innerHTML = true;
//     }
// }
// document.querySelector('.div-2').onclick = t2;
// ваше событие здесь!!!
// let out = document.querySelector('#out-1'); 
// let qe = document.querySelector('.out-2'); 
// document.querySelector('.div-2').onclick = t2; 
// function t2(event) { 
//     out.innerHTML += event.altKey; 
//     console.log(event.altKey); 
// } 

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
let out = document.querySelector('.out-3');
document.querySelector('.div-3').style.width = w3 + 'px';
w3 = w3 + 5;
out.innerHTML = w3;
}
document.querySelector('.div-3').onclick = t3;

    // Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
let out = document.querySelector('.out-4');
let a = document.querySelector('.div-4').textContent;
out.innerHTML = a;
}
document.querySelector('.div-4').ondblclick = t4;

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
// let active = document.querySelector('.div-5.active');
// let notActive = document.createElement('div-5');
// if(active === true) {
// active = notActive;
// } 
// if(notActive === true) {
//     notActive = active;
// }
document.querySelector('.div-5').classList.toggle('active');
}
document.querySelector('.div-5.active').ondblclick = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
// let hide = document.querySelector('.ul-6');
//     if (hide.classList.contains('hide')){
//         hide.classList.remove('hide');
//     } 
//     else {
//         hide.classList.add('hide');
//     }
    document.querySelector('.ul-6').classList.toggle('hide');
}

document.querySelector('.div-6').ondblclick = t6;
// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {
document.querySelector('.div-7').classList.toggle('active');
return false;
}
document.querySelector('.div-7').oncontextmenu = t7;

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8() {
let check = document.querySelector('.ch-8');
let div = document.querySelector('.form-control');
if (check.checked) {
    div.oncontextmenu = () => {
        return true;
    }
} else {
    div.oncontextmenu = () => {
        return false;
    }
}
}
document.querySelector('.ch-8').onchange = t8;
// ваше событие здесь!!!
// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
    document.querySelector('.div-9 img').setAttribute('src', 'img/2.png');
}
document.querySelector('.div-9').oncontextmenu = t9;

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
    document.querySelector('.div-9 img').setAttribute('src', 'img/2.png');
}
document.querySelector('.div-10').onmouseenter = t10;

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11() {
    
}

