const student = {
    name:"ali",
    age:23,
    Intro:function (){
        return console.log(`Hello My name is ${this.name} and my age is ${this.age}.`);

    }
}

student.Intro();
console.log(student.name);
