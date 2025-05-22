console.log("ES6+features"); // Ecma Script : the new Java scrpipt relesed at 2015, it's the sixth Version of Java Script
//              Day Eight: ES6+features
//      task/Activities

// Activity1:Template Literals
//  * task1: Use template literals to create a string that includes variables for a person's name and age, and log the stirng to the console;
let name = "DM"
let age = 20;
let profesion = "Programmer (js)"

let detail = ` My name is ${name} and my age is ${`${age}`}, By Profession I am the ${profesion}.`
console.log(detail);


//  * task2: Create a  multi-Line String using template literals and log it to the console;

let multiline = ` this is line no 1
this is line no 2
this is line no 3
this is line no 4
this is line no 5`;
console.log(multiline);

// Activity2: Destructuring
//  * task3: Use array destructuring to extract the first and second elements from an array of numbers and log to the console;
let numbers = [20,40,60,80,100,120,140,160,180,200]
let [firstNumber,secondNumber] = numbers;
console.log(firstNumber);
//  * task4: use object Destructuring to extract the title and autor form a book object and log them to the console;

let book = {
    title:"Dum-Ishq-Ishq",
    autor:"AAjiz~dM",
    type:"Drama-Romantic"
};
console.log(`title:${book.title} \nAuthor:${book.autor}} `);

// Activity3: Spread and Rest Operator
//  * task5: Use the spread operator to create a new array that include all elements of an existing array plus additional elements and log the new array to the console;

let arr=["a","b","c","d","e","f"]

let newArr = new Array(...arr,1,2,3,4)
console.log(newArr);

//  * task6: Use the rest operator in a function to accept an arbitary number of arguments, sum them, and return the result;


function Sum(...numbers) {
let sum=0;
numbers.map(item => {
    sum+=item
})
console.log(sum);
}
Sum(1,2,3,4,5);

// Activity4: Default Parameters;
//  * task7: Write a function that takes two parameters and returns their product, with the second parameter having a default value  of 1. log the result of calling with and without second parameter


function Multiply(x=1,y ){
    return x*y
};
console.log(Multiply(undefined,5));
console.log(Multiply(2,5));

// Activity5: Enhaunces Object Literals
//  * task8: Use Enhaunced Object Literals to Create an object with metods and properties, and log the object to the conosle;
function CreateUser(name, email, password, meg, additionalProp, additionalVal) {
    let user = {
        name,
        email,
        password,
        meg,
        [additionalProp]: additionalVal,
        id() {
            return `Permanent Information:
            name: ${this.name}
            email: ${this.email}
            password: ${this.password}
            meg: ${this.meg}

            Additional Information:
            ${additionalProp}: ${this[additionalProp]}`;
        }
    };
    console.log(user.id());
    return user;
}

CreateUser("DM", "dostmuhammadmalhooo@gmail.com", "jkhsbd-ms,jfd", "Best Platform", "City", "Larkano");

//  * task9:Create an Object with computedproperty names based on varibales and log the object to the console;


let nameProp ="Name";
let nameVal ="DM"
let ageProp= "Age";
let ageVal =21;


let obj3 ={nameVal,ageVal}
let obj4 ={
    [nameProp]:nameVal,
    [ageProp]:ageVal
}

console.log(obj4);
console.log(obj3);



