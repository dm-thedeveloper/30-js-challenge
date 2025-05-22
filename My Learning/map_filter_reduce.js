// console.log("l");


let num =[1,2,3,4,5,6,7,8]
let even= num.filter((num)=>{
    if(num%2===0) return num
});
// console.log(even);

let f= "apple";
// console.log(f[0]);




function findWithLetters(array, letter = "a") {
 // Convert the letter to uppercase for case-insensitive comparison
    let upperLetter = letter.toUpperCase();

    // Filter the array based on the first character
    let filteredArray = array.filter(val => val[0].toUpperCase() === upperLetter);
    // Log the filtered array
    console.log(filteredArray);
  }

  // Example usage
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

  // Example function calls
  findWithLetters(fruits, "x"); // Finds fruits starting with 'A'
//   findWithLetters(fruits, "b"); // Finds fruits starting with 'B'
//   findWithLetters(fruits, "z"); // Finds fruits starting with 'Z'



let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, value, index) =>{
  console.log(`Accumulator: ${accumulator}, Value: ${value}, Index: ${index},`);
  return accumulator + value;
}, 0);
console.log(sum); // Output: 10
