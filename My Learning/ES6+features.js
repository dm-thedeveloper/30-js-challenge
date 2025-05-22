
/// Rest Operaotr;
let [firstPerson,...Rest] = ["ale","KM","DM","sood","Deedar","Gul"]
// console.log(Rest.sort());


function arrLoop(...ARRAY) {
    return ARRAY.map(item =>console.log(item))
}
// arrLoop(1,2,34,)


// ENHAUNCED OBJECT LITERALS

let name="Ali";
let age=23;
let prpName = "Education";
let Education = "Graudation";


let men = {name,age,
    [prpName]:Education
    ,
    grett(){ return `my name is ${this.name},and my age is ${this.age} And Education is ${this[Education]}`}}

console.log(men.grett());



let CreateUser =(name,age,addprop,addval)=>{
let userPbject = {
    name,age,
    [addprop]:addval,

}

console.log(userPbject);
};
CreateUser("DM",23,"Education","Graduation")

const createUser = (name, age, role) => {
    return {
      name,
      age,
      role,
      isActive: true,
      greet() {
        console.log(`Hello, my name is ${this.name}`);
      },
      [`${role}_level`]: 1
    };
  };

  const user = createUser('John', 30, 'admin');
  console.log(user);
  // { name: 'John', age: 30, role: 'admin', isActive: true, greet: [Function: greet], admin_level: 1 }

  user.greet(); // Hello, my name is John
