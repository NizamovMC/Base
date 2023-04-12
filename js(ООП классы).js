let good2 = new Goods ('Brom', 100,'https://burst.shopifycdn.com/photos/hand-holds-the-bottom-corner-of-a-large-coffee-table-book.jpg?height=285&format=pjpg&exif=0&iptc=0', 250);
console.log(good2);
document.querySelector('.out-4').append(good2.draw());

let good3 = new Goods2 ('Brom', 100,'https://burst.shopifycdn.com/photos/hand-holds-the-bottom-corner-of-a-large-coffee-table-book.jpg?height=285&format=pjpg&exif=0&iptc=0', 250, true);
document.querySelector('.out-6').append(good3.draw());
console.log(good3);

let nameAndPassword = new Valid('email', '126');
nameAndPassword.validate();
console.log(nameAndPassword.isValid);
let nameAndPassword2 = new Valid('email', '1234567');
nameAndPassword2.validate();
console.log(nameAndPassword2.isValid);

let valid2 = new Valid2('', '123');
valid2.validate();
console.log(valid2);

let valid3 = new Valid2('qwerty', '1234567');
valid3.validate();
console.log(valid3);