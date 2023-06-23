// Task 7
//При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a7 объект, где ключи - значения id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}. Функция должна возвращать результирующий массив.

let a7 = [{ id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f7() {
    let result = {};
    for(let i = 0; i < a7.length; i++) {
        console.log(a7[i].id);
        const c = a7[i]
        result[c.id] = c.name;
    }
        return result;
}

document.querySelector('.b-7').addEventListener('click', ()=>{
    console.log(f7());
});


// Task 8
//При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать массив a8. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a8 массив, который будет содержать только числовые id. Т.е. [23, 45]. Функция должна возвращать результирующий массив.

let a8 = [ { id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f8() {
    let result = [];
    for(let i = 0; i < a7.length; i++) {
        //let c = (a7[i].id);
        result.push(a7[i].id);
}
return result;
}
document.querySelector('.b-8').addEventListener('click', ()=>{
    console.log(f8());
});

// Task 9
//При нажатии .b-9 выполняете функцию f9. Функция должна возвращать в out-9 самый большой индекс из вложенных в a9 массивов. В данном случае это 4. Т.е. самый большой вложенный массив это [0,0,0,0,0], а в нем самый большой индекс 4.

let a9 = [ [4,3,2], [2,5], [0,0,0,0,0]];

function f9() {
let max = a9[0].length - 1;
let out = document.querySelector('.out-9');
for(let i = 0; i < a9.length; i++) {
    if(max < a9[i].length - 1) {
        max = a9[i].length - 1;
    }
}
    return max;
}

document.querySelector('.b-9').addEventListener('click', ()=>{
    document.querySelector('.out-9').innerHTML = f9();
});

// Task 10
//При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"} и возвращать полученный массив.

let a10 = [4, 6, 9, 'Hello'];

function f10() {
let arr = {};
for(let i = 0; i < a10.length; i++) {
    let a = a10[i];
    arr[a] = a;
}
return arr;
}

document.querySelector('.b-10').addEventListener('click', () => {
    console.log(f10());
});
