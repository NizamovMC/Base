// TASK 05
// По нажатию b-5 выполняется функция f5. Функция применяет к a5 метод map и возвращает в массив a5_res содержащий индексы массива a5. Выведите в консоль оба массива после выполнения f5.

let a5 = [55, 66, 77];
let a5_res;

const f5 = () => {
  a5_res = a5.map((index, item) => {
    return item;
  });
  console.log(a5);
  console.log(a5_res);
};
document.querySelector(".b-1").onclick = f5;
// TASK 06
// По нажатию b-6 выполняется функция f6. Функция применяет к a6 метод map и возвращает в массив a6_res содержащий индексы массива a6. Выведите в консоль оба массива после выполнения f6.

let a6 = [];
a6[2] = 8;
a6[3] = 13;
a6[6] = 3;

let a6_res;
const f6 = () => {
  a6_res = a6.map((item, index) => {
    return index;
  });
  console.log(a6);
  console.log(a6_res);
};
document.querySelector(".b-1").onclick = f6;

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция применяет к a7 метод map и возвращает в массив a7_res содержащий длины вложенных массивов. Выведите в консоль оба массива после выполнения f7.

let a7 = [
  [22, 13, 45],
  [5, 2],
  [5, 3, 6, 7, 9],
];
let a7_res;

const f7 = () => {
  a7_res = a7.map((item, index) => {
    return item.length;
  });
  console.log(a7);
  console.log(a7_res);
};
