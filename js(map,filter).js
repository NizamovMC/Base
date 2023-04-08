// Task 1 ============================================
/* Дан массив a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11] - с помощью map переберите массив и создайте новый массив a1_res куда добавьте элементы данного массива умноженные на 2. Возвратите массив  a1_res. */

let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

function t1() {
    a1_res = a1.map(elem => {
       return elem*2;
    });
    return a1_res;
}

document.querySelector('.b-1').onclick = () => {
    console.log(t1());
}

// Task 2 ============================================
/*  Дан массив a2= [2,3,4,5,10,11,12] - с помощью map переберите массив и создайте массив a2_res куда добавьте элементы данного массива возведенные во вторую степень. Возвратите массив a2_res. Действия должны запускаться при вызове функции t2.*/

let a2 = [2,3,4,5,10,11,12];

function t2() {
a2_res = a2.map(elem => elem ** 2);
return a2_res;
}

document.querySelector('.b-2').onclick = () => {
    console.log(t2());
}

// Task 3 ============================================
/*  Дан массив a3 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте массив a3_res куда добавьте все элементы приведенные к числу. Возвратите a3_res.
Действия должны запускаться при вызове функции t3. */

let a3 = [4,"3",6,7,"12",34,"56",78,90,11];

function t3() {
a3_res = a3.map(Number);
return a3_res;
}

document.querySelector('.b-3').onclick = () => {
    console.log(t3());
}

// Task 4 ============================================
/*  Следующая задача проще будет решаться через метод forEach, который мы изучим во второй части урока! Сейчас мы делаем костыль, для отработки навыков работы с map. Дан массив a4 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте массив a4_res куда добавьте ТОЛЬКО числа из массива a4. Возвратите a4_res. Действия должны запускаться при вызове функции t4. */

let a4 = [4,"3",6,7,"12",34,"56",78,90,11];

function t4() {
ar_res = [];
a4_res = a4.map(elem => {
    if(typeof elem === 'number') {
        console.log(elem);
        ar_res.push(elem);
     }
     //ar_res.push(elem);
     //return typeof elem === 'number';
})
a4_res = ar_res;
return a4_res;
}

document.querySelector('.b-4').onclick = () => {
    console.log(t4());
}

// Task 5 ============================================
/*  Дан массив b1 = [3, 14, 15, 92]. C помощью filter переберите массив и создайте b1_res, который содержит только четные числа из b1. Возвратите b1_res. Действия должны запускаться при вызове функции t5. */

let b1 = [3, 14, 15, 92];

function t5() {
b1_res = b1.filter(elem => { //function(elem, index) {
    if(elem % 2 == 0) {
        return true;
    }
})
return b1_res;
}
document.querySelector('.b-5').onclick = () => {
    console.log(t5());
}

// Task 6 ============================================
/*  Дан массив b6 = [3, 14, 15, 92, "6", "5", "hello", 32]. C помощью filter переберите массив b6 и создайте массив b6_res, который содержит только числа из b6. Возвратите b6_res. Действия должны запускаться при вызове функции t6. */

let b6 = [3, 14, 15, 92, "6", "5", "hello", 32];

function t6() {
    b6_res = b6.filter(elem => {
        return typeof (elem) == "number";
})
return b6_res;
}

document.querySelector('.b-6').onclick = () => {
    console.log(t6());
}

// Task 7 ============================================
/*  Дан массив b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32]. C помощью filter переберите массив b7 и создайте  b7_res, который содержит только строки из b7, длина которых больше 3. Возвратите b7_res. Действия должны запускаться при вызове функции t7. */

let b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32];

function t7() {
b7_res = b7.filter(elem => typeof (elem) == "string" && elem.length > 3);
return b7_res;
}

document.querySelector('.b-7').onclick = () => {
    console.log(t7());
}

// Task 8 ============================================
/* Дан массив b8 = [3, 14, 15, 92, "6", "5", "hello", 32]. С помощью filter, переберите массив b8 и создайте массив b8_res, который содержит индексы четных элементов. Возвратите b8_res. Действия должны запускаться при вызове функции t8 */

let b8 = [3, 14, 15, 92, "6", "5", "hello", 32];

function t8() {
    b8_res = b8
    .map((elem, index)  => {   
        return {elem, index}
    })
    .filter(elem => elem.elem % 2 === 0)
    .map(elem => elem.index);
    
return b8_res;
}

document.querySelector('.b-8').onclick = () => {
    console.log(t8());
}

// Task 9 ============================================
/*  Дан массив b9 = [3, "hello", 4, "world", 5, "hi"]. С помощью filter, переберите массив b9 и создайте массив b9_num и b9_string, которые содержат первый - числа из b9, второй - строки. Задачу решите с помощью filter. Действия должны запускаться при вызове функции t9. */

let b9 = [3, "hello", 4, "world", 5, "hi"];

function t9() {
let b9_string = b9.filter((elem) => typeof (elem) == "string");
let b9_num = b9.filter((elem) => typeof (elem) === 'number');
    return [b9_num, b9_string];
}

document.querySelector('.b-9').onclick = () => {
    console.log(t9());
}

// Task 10 ============================================
/*  Дан массив b10 = [ [1,2,3], [3,4,6], [4,5,7], [8,9,3]]. С помощью filter переберите массив и создайте  b10_res, в который входят вложенные массивы содержащие цифру 3.  Возвратите b10_res. Действия должны запускаться при вызове функции t10. */

let b10 = [ [1,2,3], [3,4,6], [4,5,7], [8,9,3]]

function t10() {
const b10_res = b10.filter(elem => elem.filter(el => el === 3).length);
return b10_res;
}

document.querySelector('.b-10').onclick = () => {
    console.log(t10());
}

// Task 11 ============================================
let a11 = [4,5,6,7,12,34,56,78,90,11];

function t11() {
    let a11_res = [];
    a11.forEach(elem =>{
    elem = elem * 2;
    a11_res.push(elem);
    //console.log(a11_res);
    })
    return a11_res;
}

document.querySelector('.b-11').onclick = () => {
    console.log(t11());
}

//task 12 ============================================
function t12() {
    let a12_res = [];
    a11.forEach(elem =>{
    elem = elem / 2;
    a12_res.push(elem);
    console.log(a12_res);
    })
    return a12_res; 
}

document.querySelector('.b-12').onclick = () => {
    console.log(t12());
}

//Task 13 ==================================

a13 = [2, "hello", 3, "hi", 4, "Mazai"]  

function t13() {
    a13_res = [];
    a13.forEach(elem => {
    if(typeof (elem) === 'number') {
        a13_res.push(elem);
    }
   }) 
   return a13_res;  
}

document.querySelector('.b-13').onclick = () => {
    console.log(t13());
}

//Task 14 =============================


//Task 15 ========================================

function t15() {
    let a15 = [];
    let span = document.querySelectorAll('.task-15');
    const t5 = (e) => {
        a15.push(e.target.getAttribute('data'));
        console.log(a15);                
    }

span.forEach(elem => elem.addEventListener('click', t5));
};

//Task 16

let a16_res =[];
function t16() {
    let str16 = 'helloworld';
    a16_res = str16.split('');
    console.log(a16_res);
    document.querySelector('.out-16').innerHTML = a16_res;
}

document.querySelector('.b-16').onclick = t16;

// Task 17
let a17_res =[];
function t17() {
    let str17 = "hello world hi mazai";
    a17_res = str17.split(' ');
    console.log(a17_res);
    document.querySelector('.out-17').innerHTML = a17_res;
}

document.querySelector('.b-17').onclick = t17;

// Task ====

let a18_res =[];
function t18() {
    let a18 = [1,2,66,77,15];
    a18_res = a18.join('-');
    console.log(a18_res);
    document.querySelector('.out-18').innerHTML = a18_res;
}

document.querySelector('.b-18').onclick = t18;

// Task 19 ====
let a19_res ='';
function t19() {
    let a19 = [['hi', 'mahai'], ['test', 'best']];
    for(let item of a19) {
        console.log(item);
    
    a19_res += item.join('-') + '-';
    console.log(a19_res);
    }
document.querySelector('.out-19').innerHTML = a19_res;
}

document.querySelector('.b-19').onclick = t19;

let a20_res = '';
function t20() {
    let a20 = {name: 'ivan', age: 15, sex: 1, id: 45}
    a20_res = '?';
    for (let key in a20) {
        a20_res += key+ '='+a20[key] + '&';
    }
    document.querySelector('.out-20').innerHTML = a20_res;
}

document.querySelector('.b-20').onclick = t20;