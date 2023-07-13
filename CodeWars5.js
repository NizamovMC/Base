const n = 96000;
function noBoringZeros(n) {
  let array = Array.from(String(n));
  console.log(array);
  if (array.length === 1 && array[0] === 0) {
    return 0;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
    if (array[i] === "0") {
      array.pop();
      console.log(+array.join(""));
    } else {
      return +array.join("");
    }
  }
  return +array.join("");
}
noBoringZeros(n);
