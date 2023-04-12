function summa() {
let numberOne = +document.querySelector('.input-1').value;
let numberTwo = +document.querySelector('.input-2').value;
let out = document.querySelector('.out');
    out.innerHTML = numberOne + numberTwo;
}
document.querySelector('.button-primary-1').onclick = summa;

function sbros() {
    // let numberOne = +document.querySelector('.input-1').value;
    // let numberTwo = +document.querySelector('.input-2').value;
    // let out = document.querySelector('.out');
    // numberOne = '';
    // numberTwo = '';
    // out.innerHTML = 0;

    let numberOne = document.querySelector('.input-1');
    let numberTwo = document.querySelector('.input-2');
    let out = document.querySelector('.out');
    numberOne.value = '';
    numberTwo .value= '';
    out.innerHTML = 0;
}
// function sbros1() {
//     let numberOne = +document.querySelector('.input-1').value;
//     console.log(numberOne);
//     numberOne == 0;
//     return numberOne;
// }
// function sbros2() {
//     let numberTwo = +document.querySelector('.input-2').value;
//     return numberTwo == 0;
// }
document.querySelector('.button-primary-2').onclick = sbros;


   