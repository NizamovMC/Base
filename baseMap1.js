// TASK 01
// По нажатию b-1 выполняется функция f1. Функция применяет к массиву a1 метод map. В качестве функции callback указывается функция, которая умножает каждый элемент массива a1 на 3. Результат выполнения map присваивается в a1_res. После применения map выведите a1 в консоль, a1_res в консоль.

let a1 = [5, 6, 7];
let a1_res;

const f1 = () => {
  a1_res = a1.map((item) => {
    return item * 3;
  });
  console.log(a1);
  console.log(a1_res);
};
document.querySelector(".b-1").onclick = f1;
