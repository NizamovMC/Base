const array = [
  -56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68,
];
function multipleOfIndex(array) {
  let newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] % i === 0) {
      newArray.push(array[i]);
      console.log(newArray);
    } else if (array[i] === 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function multipleOfIndex(array) {
  const newArray = array.filter(function (item, index) {
    if (item % index === 0) {
      return true;
    } else if (item === 0) {
      return true;
    }
  });
  console.log(newArray);
  return newArray;
}

multipleOfIndex(array);

const array2 = ["Telescopes", "Glasses", "Eyes", "Monocles"];
function sortByLength(array) {
  return array.sort(function (a, b) {
    return a.length - b.length; // sort it by ascending order based from string's length
  });
}
sortByLength(array);
var name = "Abe";
var greet_abe = function () {
  console.log("Hello, " + name + "!");
};
//name = "Ben";
var greet_ben = function () {
  const name = "Ben";
  console.log("Hello, " + name + "!");
};

greet_abe();
greet_ben();
