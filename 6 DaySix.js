//                                      Day Six: ARRAYS
//          task/Activiies
//  Activity 1: Array Creation And Access
// * task 1: cretae an array of numbers form 1 to 5 and log the array to the console.

let arr = [1,2,3,4,5]
// * task 2:Access the first and the last elements of the array and log them  to the console.

console.log(arr.at(0),arr.at(arr.length-1));

//  Activity 2: Array Methods (Basic)
// * task 3: Use the Push Method to add a new number to the end of the array and console the result
arr.push(6);
// * task 4: Use the Pop Method to to remove the last number form  the array and log the updated array.
arr.pop()
// * task 5: Use the shift Method to remove a new number to the beginning of the array and console the result
arr.shift()
// * task 6: Use the unShift Method to add a new number to the beginning of the array and console the result
arr.unshift(0)

console.log(arr);
//  Activity 3: Array Methods (InterMediate )
// * task 7: Use the map Method to create a new array where each number is doubled and log the result in the console.;

let numbers = [1,2,3,4,5,6]

let doubleNumbers = numbers.map((val)=> {return val*2})
console.log(doubleNumbers);

// * task 8: Use the filter Method to create a new array with only even numbers and log the new array;

let numbers1 = [1,2,3,4,5,6,7,8,9]

let evenNumbers = numbers1.filter((val)=>{
    if(val%2 === 0) return val
});
console.log(evenNumbers);
//  Activity 4: Array Iteration.
// * task 10: Use a for loop to iterate over the array and log each element to the console.
let arr2= ["apple","banana","cat","dog","eagle"]
for(i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}
// * task 11: Use the forEach loop to iterate over the array and log each element to the console.

arr2.forEach((val)=>console.log("Using ForEach:\t"+ val))
//  Activity 5:Multi-dimensional Arrays
// * task 12:create a two Dimensional array(matirx)and log the entire array to the console
let _2DArray = [["a","b","c"],[1,2,3,4]]
// _2DArray[0].map(item => console.log(item))
console.log(_2DArray);

// * task 13: Access and log a specific Element form a two Dimensional Array;

console.log(_2DArray[1][3]);





