const a = { a: 1, b: 2, c: 3 };
console.log(a);
function keysAndValues(a) {
  let array = [];
  let arr1 = [];
  let arr2 = [];
  console.log(array);
  for (let key in a) {
    arr1.push(key);
    console.log(arr1);
  }
  for (let key in a) {
    arr2.push(a[key]);
    console.log(arr2);
  }
  array.push(arr1);
  array.push(arr2);
  console.log(array);
}
keysAndValue(a);
const str = "Marat";
const reverse = (str) => {
  let sum = "";
  //let newStr = str.split("");
  //console.log(newStr);
  for (let i = 0; i <= str.length - 1; i++) {
    console.log(str[i]);
    sum = str[i] + sum;
  }
  console.log(sum);
};
reverse(str);
