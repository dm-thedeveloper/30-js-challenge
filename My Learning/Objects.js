// let obj= {name:"DM",age:12,greet:()=>{console.log("Hi !");}}

// obj.greet= ()=>{console.log("Slam");}
// // console.log(obj.greet());
// // obj.greet()
// let deleted= delete obj.age;
// // delete obj.greet;
// console.log(deleted);
// // console.log(obj);

let person = {name:"Khan",Hi(){console.log(`${this.name}`);},age:45}
let newPerson = {...person,age:23}
let keys= Object.keys(person)
let entires = Object.entries(person)

// console.log(entires);


// person.Hi();
const user = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
// console.log(user["name"]);
for(let key in user){
  console.log(`${key}: ${user[key]}`);
}
