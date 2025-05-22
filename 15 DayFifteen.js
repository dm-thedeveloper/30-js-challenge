console.log("colusers");

// Day fifteen Clousers

/// Activity/ tasks

// Activity 1: Understanding Clousers

// task 1: Write a function that returns another Function, where the inner function access the a varibale from the outer function's scope. call the inner function and log the result

function OuterFnx  () {
let vari = "I am From the Outer or Parent Function."
function Log (){
return console.log(vari);
}
Log()
}

OuterFnx();

// task 2: Create a Clousere that maintains a private counter. Implement functions to increament and get the current value of the counter


function Counter (){

let count = 0  ;

return {
    increament: function () { count++; return count;},
    decreament: function () {  count-- ;return count;},
    getCounter: function () {return count;},
}



}
const c= Counter()
console.log("i",c.increament());
console.log("i",c.increament());
console.log("d",c.decreament());
console.log("d",c.decreament());
console.log("d",c.decreament());
console.log("d",c.decreament());
console.log("d",c.decreament());
console.log("g",c.getCounter());


// Activity 2: Practical Clousers

// task 3: Write a function that generates unique IDs. use a clouser to keep track of the last generated ID and increament it with each call.
function uniqueIdGenerator  (){
let lastId = 0;
return function () {
    lastId+=1;
    return lastId
}
}
let id = uniqueIdGenerator()
console.log(id());
console.log(id());
console.log(id());
console.log(id());


function UniquePasswordGenerator  (length){
    const letters = 'abcdefghijklmnopqrstuvwxyz';
     let random=""

     for(let i=0;i<length;i++){
        random+=letters[Math.floor(Math.random()*letters.length)]
     }

console.log(random);

}


UniquePasswordGenerator(2)

// task 4: create a clouser that captures user's name and returns a function that greets the user by name.

function greet(name){

    return function () {return (`Hello ${name}`)}
}


const grretFromJohn= greet("john")

console.log(grretFromJohn());
// Activity 3: Clousers in loops;
// task 5: create a loop that create an array of functions. each functions should log its index when called. Use a clouser to ensure each function logs the correct index




function createAFunctionArray  (length){
let array = [];
let index=[];
for(let i=0;i<=length;i++){
index.push(i);
}
for(let i=0;i<=length;i++){
    array.push(i)
}
console.log(array);


}
createAFunctionArray(5);