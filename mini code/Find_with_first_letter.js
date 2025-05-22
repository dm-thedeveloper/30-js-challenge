let fruits = [
    "Apple",
    "Avocado",
    "Banana",
    "Blueberry",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tangerine",
    "Uva",
    "Vanilla",
    "Watermelon",
    "Ximenia",
    "Yambean",
    "Zucchini"
  ];
//   Find_with_first_letter.js
function Find(ARRAY,letter) {

let leter = letter.toUpperCase();
let filtedWords =ARRAY.filter(item => item[0].toUpperCase()===leter);

let result;
if (filtedWords=="") {result=  ("write a to Z")}
else {result=filtedWords};
console.log(result);

};

Find(fruits,"a")








