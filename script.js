let str = "h^$&^#$&^elLo world";
function consonantCount(str) {
    let sum = 0;
    let arr = str.replace(/[^a-zA-Z]/g,'').split('');
    //console.log(arr);
    for(i = 0; i < arr.length; i++) {
        if(arr[i] !== 'a' && arr[i] !== 'e' && arr[i] !== 'o' && arr[i] !== 'i' && arr[i] !== 'u') {
            sum += 1;
            //sum = sum.join();
        }
       
        //console.log(sum);
    }

  }

  consonantCount(str)

  let str1 = "apple ban";
  function addLength(str1) {
    let result = [];
    let resultString = '';
    let arr = str1.split(' ');
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].length);
        // for(let k = 0; k < arr[i].length; k++) {
        //     //console.log(k);
        //     sum += 1;
        // //console.log(sum);
        // }
        resultString = `${arr[i]} ${arr[i].length}`;
        console.log(resultString);
        result.push(resultString);
        console.log(result);
        }
        
        
      }
  addLength(str1)



  let str1 = "apple ban";
  function addLength(str1) {
    let result = [];
    let resultString = '';
    let sum1= 0;
    let sum2 = 0;
    let arr = str1.split(' ');
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        for(let k = 0; k < arr[i].length; k++) {
            //console.log(k);
            sum1 += 1;
        //console.log(sum1);
        }
        console.log(sum1);
        }
        for(let j = 0; j < arr[1].length; j++) {
          console.log(arr[1]);
          sum2 += 1;
      //console.log(sum2);
      }
      console.log(sum2);
      resultString = `${arr[0]} ${sum1},${arr[1]} ${sum2}`;
      console.log(resultString);
      result = resultString.split(',');
        console.log(result);
        
      }
  addLength(str1)
  let array = [1,-2,3,4,5];
  function invert(array) {
    for(let i = 0; i < array.length; i++) {
      console.log(array[i]);
      if(array[i] > 0) {
        array[i] = array[i] * -1;
        console.log(array[i]);
      }
      else {
        array[i] = array[i] * -1;
      }
    }
    console.log(array);
    return array;
 }

 invert(array);
let str = 'The quick brown fox jumps over the lazy dog.';
function reverseWords(str) {
  let sum = '';
  let arr2 = [];
  let arr = str.split(' ');
  console.log(arr);
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    for(let k = arr[i].length - 1; k >= 0; k--){
      console.log(arr[i][k]);
      sum += arr[i][k];
      console.log(sum);
    }
    arr2.push(sum);
    console.log(arr2);
    sum = '';
  }
  arr2 = arr2.join(' ');
  console.log(arr2);
}
reverseWords(str);


"sihT si na !elpmaxe" ehT kciuq nworb xof spmuj revo eht yzal .god
sihTsina!elpmaxe      ehT kciuq nworb xof spmuj revo eht yzal .god

function repeatStr (n, s) {
  let sum = '';
  for(let i = 0; i < n; i++) {
  sum += s
  }
  console.log(sum);
}
repeatStr (3, 'f');
function areYouPlayingBanjo(name) {
  if(name[0] == 'r') {
    return `${name} plays banjo`
  } 
  else {
    `${name} does not play banjo`
  }
  return name;
}
areYouPlayingBanjo('marat');
function strCount(str, letter){  
  let sum = 0;
  let arr = str.split('');
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === letter){
      sum += 1;
      console.log(sum);
  }
}
}
strCount('Hello', 'l');

let myStr = "This is the first. ";
myStr += "This is the second sentence.";
console.log(myStr);

function pillars(numPill, dist, width) {
  return numPill < 2 ? 0 : ((numPill - 1) * dist * 100) + (width * (numPill - 2));
}
let asd = pillars(4, 10, 10)

console.log(asd);

function contamination(text, char){
  let sum = '';
  let arr = text.split('');
  console.log(arr);
  for(i = 0; i < arr.length; i++){
    console.log(i);
    sum += char;
    console.log(sum);
  }
}
contamination('abc', 'z');

function fixTheMeerkat(arr) {
 let reverseArr = arr.reverse();
  console.log(reverseArr);
 }
 fixTheMeerkat(["tail", "body", "head"]);
const text = 'a MIND needs Books as a Sword needS a WHETSTONE, if it is to keep its edge.';
const text2 = text.toLowerCase();
// BEGIN (write your solution here)
console.log(text2);
// END

const truncate = (text, length) => {
  console.log(text);
  console.log(length);
  //length = length * -1;
   const str = text.slice(0, length);
   console.log(str);
   return str;
  // END 
};

truncate('abcfgv', 4);

const getHiddenCard = (a, b = 4) => {
  let c = '*';
  console.log(`${c.repeat(b)}${a.slice(-4)}`);
  return `${c.repeat(4)}${a.slice(-4)}`;
}

getHiddenCard('2034399002125581', 3);

const capitalize = (str) => {
  console.log(`${str.slice(0, 1).toUpperCase()}${str.slice(1)}`);
}
capitalize("arya");