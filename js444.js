//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
    let out = document.querySelector('.out-1');
    //if (!out.innerHTML.length) return
for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        out.innerHTML += '*';
    }
    out.innerHTML +='_';
}   
}
document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
function t2() {
let out = document.querySelector('.out-2');
for(let i = 1; i < 4; i++) {
    out.innerHTML += i + '<br>';
    for(let j = 0; j < 1; j++) {
        out.innerHTML += '*_*_*_<br>';
    }
}
}
document.querySelector('.b-2').onclick = t2;

//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
    let out = document.querySelector('.out-3');
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 1; j++) {
            out.innerHTML += '*_*_*_';
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
function t4() {
    let out = document.querySelector('.out-4');
    for(let i = 1; i < 4; i++) {
        out.innerHTML += i + '_';
        for(let k = 1; k < 6; k++) {
            out.innerHTML += k + ' ';
        }
    }
}
document.querySelector('.b-4').onclick = t4;

//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
    let out = document.querySelector('.out-5');
    let a = '101010';
    for(let i = 1; i < 4; i++) {
        for(let k = 0; k < 1; k++) {
            out.innerHTML += a;
        }
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-5').onclick = t5;

// function t6() {
//     let out = document.querySelector('.out-6');
//     let a = '10x01x';
//     for(let i = 1; i < 4; i++) {
//         for(let k = 0; k < 1; k++) {
//             out.innerHTML += a;
//         }
//         out.innerHTML += '<br>';
//     }
// }
// document.querySelector('.b-6').onclick = t6;

function t6() {
    let out = document.querySelector('.out-6');
    for(let i = 1; i < 4; i++) {
        for(let k = 1; k <= 6; k++) {
            if (k == 3 || k == 6) {
                out.innerHTML += 'x';
                }
                else if(k % 2 == 0) {
            out.innerHTML += 0;
             }
                else {
            out.innerHTML += 1;
            }
        
        } out.innerHTML += '<br>';
    }
}
document.querySelector('.b-6').onclick = t6;

//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
function t7() {
    let out = document.querySelector('.out-7');
    for(let i = 4; i > 0; i--) {
        for(let k = 1 + i; k < 6; k++) {      // первый раз 1 + 4 = 5  цикл сработал 1 '*' раз 
                                              // второй раз 1 + 3 = 4  цикл сработал 2 '**' раз 
         out.innerHTML +=' *';               //  первый раз 1 + 4 = 3  цикл сработал 3 '***' раз 
        // console.log(k);                     //  первый раз 1 + 4 = 2 цикл сработал 4'****'  раз 
            //console.log(i);                // цикл i равен 4 поэтому циклы закончились
        }out.innerHTML +='<br>';
    }
}

document.querySelector('.b-7').onclick = t7;

//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
    let out = document.querySelector(".out-8")
    for(let i = 0; i < 5; i++){
        for(let k = 5 - i; k > 0; k--){
            out.innerHTML += "*"
        }
        out.innerHTML += `<br>`
    }
}
document.querySelector('.b-8').onclick = t8;

//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
    let out = document.querySelector('.out-9');
    for(let i = 5; i > 0; i--) {
        for(let k = i; k <= 5; k++) {
            console.log(k);
            out.innerHTML += (k + 1) - i + ' ';
            
        }out.innerHTML +='<br>';
    }
}
document.querySelector('.b-9').onclick = t9;

//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
    let out = document.querySelector('.out-10');
    let n = '';
    let m = '0';
    for(let i = 0; i < 5; i++) {
        for(let k = 1; k <= 10; k++) {
           console.log(k);
           n += k;
            if(k !== 10) {
              m + k;
            } console.log(k);
            
            out.innerHTML += n;
            
        }out.innerHTML +='<br>';
    }    
}

document.querySelector('.b-10').onclick = t10;