const x = "45385593107843568"; //'01011110001100111';
function fakeBin(x) {
  const array = x.split("");
  let newArray = [];
  console.log(array);
  for (let i = 0; i <= array.length - 1; i++) {
    console.log(array[i]);
    if (array[i] < 5) {
      // array[i] === 0;
      newArray.push("0");
      console.log(newArray);
    }
    if (array[i] >= 5) {
      //array[i] === 1;
      newArray.push("1");
    }
  }
  console.log(newArray.join(""));
  return newArray;
}

fakeBin(x);
