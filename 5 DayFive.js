//                                    Day 5
//                               Functions
//   taks / Activities
// Activity#1: function Declaration..
// * task#1:- Write a Function to check if number is even or odd and log to the console.

function noEvenOrOdd(num) {


    if(num%2===0) console.log(`${num} is even`);
    else{  console.log(`${num} is Odd`)  }

};
noEvenOrOdd(56109);

// * task#2:- Write a Function to calculate the square of a number and return the result;

function squarOfAno(no) {
    return no*no

}

console.log(squarOfAno(8));

// Activity#2: functionExpressions..
// * task#3:- Write a Function to Find the maximum of two numbers and log result to the console.
function findMaxNo(a,b,c) {

    if (a>=b&&a>=c) {
        console.log(`${a} is maximum`);

    }
    else if(b>=c&&b>=a){
        console.log(`${b} is maximum`);
    }
    else if (c>=a&&c>=b){
        console.log(`${c} is maximum`);

    }
    else console.log(`${a} , ${b} & ${c} are equl `);

}

findMaxNo(21112,1212,22)

// * task#4:- Write a Function to to concatenate two stringss and return the result.

function concatenateTwoStrings(str1,str2) {
    return str1+" "+str2;
}
console.log(concatenateTwoStrings("hello","world"));

// Activity#3: Arrow Functions

// * task#5:- Write an Arrow Function to calculate the sum of two numbers and return the result

const add2Numers= (a,b)=>{ return a+b};
console.log(add2Numers(4,5));
// * task#6:- Write an Arrow Function to check if a string contains a specific character and return a boolean value;



const findCharacter= (str,char)=>{
    return str.includes(char);

};
console.log(findCharacter("hello","l"));


// Activity#4: Function parameter and default Values
// * task#7:- Write a function that takes two parameters and returns their product. provide a default value for the second parameter.

function greet(greet,to="world") {
console.log(greet+" "+to);
}
greet("hello");

// * task#8:- Write a function that takes a person's age and return a greeting message.provide a default value for the age;

function greetMsg(name,age="18") {
console.log(`Hi ${name}, your age is ${age}`);
}
greetMsg("ali")



// Activity#5: Higher-order-Function
// * task#9:- Write a function that takes a Function and a number, and calls a function that many times

function SayHello() {
    return "hello"

};


function hellotimes(fnx,times=1) {
    for(i=0; i<times;i++) console.log(fnx());
};

hellotimes(SayHello,2)

// * task#10:- Write a Higher-order-Function that takes two functions and a vlaue, applies the first function to the value, and then applies the second function to the result.

function mult(a) {
return a*3
};

function divide(a) {
    return a**a

}

function MutDiv(fn1,fn2,num) {
    let r1= fn1(num);
    return fn2(r1/num);

}
console.log(MutDiv(mult,divide,8));