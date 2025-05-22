// console.log("Hello")
//                                           Day Four
// Task / Activities

// Activity #1 :For Loop
// * Task1: Write Program Print Number Form 1 to 10 using a For Loop;

for (let n = 0; n <= 10; n++) {
    console.log(n);
}

// * Task2: Write Program to Print a multiplicatio Table of Five
let tn=5;
for (let t = 1; t <=10 ; t++) {
console.log(`${t} into ${tn} = ${t*tn}`);
};



// Activity #3 :While Loop
// * Task1: Write Program to Calculate the sum of 1 to 10 using while loop;
let Start_Form=0;
let end=19;
let sum=0;
while (Start_Form<=end) {
sum+=end;
Start_Form++;
}
console.log(sum);

// * Task4: Write Program to Print Numbers form 10 to 1 using a while loop;

let rn= 10
while (rn>=1) {
    console.log(rn);
rn--;

}



// Activity #3 :Do...While Loop
// * Task5: Write Program to Print Numbers form 1 to 5 using a do...while loop;

let otf= 1;
do{
    console.log(otf);
    otf++;
}
while(otf<=5);
// * Task6: Write Program to Calculate the Factorial of a number using a do..while loop;

let f=1;

let factorial =1;
let num =4;
do{
factorial*=f;
    f++;
}while(f<=num)
console.log(`factorial OF ${num} is ${factorial}`);



// Activity #3 :Nested Loops
// * Task7: Write a Program to  print a pattern using nested ofr loops.filter(item => item)
// *
// * *
// * * *
// * * * *
// * * * * *
let rows=1;
for (let i=5; i  >=rows; i--) {
    // console.log("Row:"+i);
let stars="";
for (let j = 1; j <= i; j++) {
    stars+="* "
}
console.log(stars);
}





// Activity #4 :Loop Control Statement
// * Task8: Write a Program to  print a numbers from 1 to 10, but skip the number 5 using the continue statement;

for(i=1;i<=10;i++){

    if(i===5) continue;
console.log(i);
}
// * Task8: Write a Program to  print a numbers from 1 to 10, but stop the Loop when the number is 7 using the break statemnt;

for(i=1;i<=10;i++){

    if(i===7) break;
console.log(i);
}




