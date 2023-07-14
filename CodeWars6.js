function getEvenNumbers(numbersArray) {
  let newArray = [];
  for (let i = 0; i <= numbersArray.length - 1; i += 1) {
    if (numbersArray[i] % 2 === 0) {
      newArray.push(numbersArray[i]);
    }
  }
  return newArray;
}
