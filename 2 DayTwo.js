// Day two: Operators
//Task / Activitoes
//  * Activity #1: Arithmetic Operators
// *Task #1:Wrrite a program to add numberstwo and log the Resultto the Console.
let a= 3;
let b= 5;
let sunmOf_a_AND_b =a+b;
console.log(sunmOf_a_AND_b);

// *Task #2:Wrrite a program to Subtract  two numbers and log the Resultto the Console.
let x= 5;
let  y = 8;
let subtractOf_a_AND_b = a-b;
console.log(subtractOf_a_AND_b);


// *Task #3:Wrrite a program to Multiply  two numbers and log the Resultto the Console.

let r= 7;
let s= 45;
let multiplyOf_r_AND_s= a*b;
console.log(multiplyOf_r_AND_s);

// *Task #4:Wrrite a program to Divide  two numbers and log the Resultto the Console.

let c= 225;
let d =25;
let divideOf_c_AND_d= c/d;
console.log(divideOf_c_AND_d);


// *Task #5:Wrrite a program to Find the Remainder When two number is divided by another and log the Result to the Console;

let v=49;
let w= 5;
let remainderOf_v_DiviedBy_w = v%w;
console.log(remainderOf_v_DiviedBy_w);


//  * Activity #2: Assigment Operators
// *Task #6: USe += operator to add a numberto a variable and to the Result the console;

let n=22;
console.log(n+=6);
// *Task #7: USe -= operator to Subtract From  a variable and to the Result to the console;
let n2=56;
console.log(n2-=13);

//  * Activity #3: Comparisons OPerators
// *Task #8:Write a program to capmre two numbers > and <and log the resultto the console.

let cn= 3;
let cn2 = 6;
console.log(cn>cn2)
console.log(cn2<cn);;
// *Task #9:Write a program to capmre two numbers >= and =<and log the resultto the console.

let cng= 34;
let cng2 =213;
console.log(cng>=cng2)
console.log(cng2<cng);;

// *Task #10:Write a program to capmre two numbers == and === and log the resultto the console.

let cne= 12;
let cne2 ="12";
console.log(cne==cne2)
console.log(cne===cne2)


//  * Activity #4:Logical Operators

// *Task #10:Write a program that Uses the && operator to combine two conditionsand logthe result to the console;

let q=3;
let _w = 4;


let _S= "Histesh_";
let _s2= "choudhry"

console.log(q!=_w && _S.length === _s2.length );
// *Task #11:Write a program that Uses the || operator to combine two conditionsand logthe result to the console;

console.log(typeof q == typeof _S || typeof _s2 != typeof _w);
// *Task #12:Write a program that Uses the || operator to negate a  conditionsand logthe result to the console;

console.log(!typeof q === typeof _w);


//  * Activity #5:Ternary Operators
// *Task #13:Write a program that Uses the Ternary  operator to check if number is positive or negative
let num=1;
let Positive_or_negative=num >=0 ?`+ the Number ${num} is Positive`:` - the Number ${num} is Negative`;
console.log(Positive_or_negative);