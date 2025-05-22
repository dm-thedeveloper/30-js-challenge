let array= ["apple","banana","orange"]
// console.log(array[array.length-1]);
// console.log(array.at(0));
for(i=0;i<array.length;i++){
// console.log(array.at(i));

}
// console.log(array.indexOf("banana"));
let array1 = new Array(1,2,3,4,5)
// console.log(array1[2]);
let index2= array[2];
// console.log(index2);

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function(a,b) {console.log(a+b); } ];

// get the object at index 1 and then show its name
// (console.log(arr[1].name) ); // John

// get the function at index 3 and run it
// console.log(arr[3](35,8));



let int =[1,2,3,4,5,6];
let negint =[]
// int.name="ali";
// int[4]=["DM",["khan"]]
console.log(int.toString());
console.log(String(int));

console.log(int.includes(6),int.indexOf(3));

// int.forEach(itn=> console.log(itn));
// console.log(int.slice(0,3));
int.splice(2,0,-1,-2);
console.log(int.concat(arr,array));
// console.log(int+array);
let decArray = int.concat(arr,array);
console.log(decArray.sort());


