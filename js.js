
// Task 20
// Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements (читать)

// очень внимательно изучите верстку!!! 
// обратите внимание, что мы не используем class, а присвоили name!!!
function f20(event) {
    event.preventDefault(); // чтобы форма не перезагружала страницу!!!!
    let form = document.querySelector('.f-20');
    console.log(form.elements);
    console.log(form.elements['username'].value); // так можно обратиться к элементу внутри формы
    let a = form.elements['username'].value;
    let b = form.elements['password'].value;
    let out = document.querySelector('.out-20');
    out.innerHTML = `${a} ${b}`;
}
document.querySelector('.b-20').onclick = f20;