//                          Day 14 Classes
//      tasks/Activities

// Activity 1 Class Definition

// task 1: Define a Class person with properties name, age, and method to return a greeting message. create an instance of the class and log the greeting message.

class Student {

constructor(name,age){
    this.name=name;
    this.age=age;
}
greet(){
return console.log(`my name is ${this.name}, and my age is ${this.age};`);
}



}
let Student1 = new Student("ali",23)
Student1.greet()

// task 2: Add a method to Person class that updates the age property and logs the updated age.
class Person {

    constructor( name="DM",age=19){

this.name = name;
this.age=age;

    }
    // methods are here

}
console.log( new Person().age= 20);





