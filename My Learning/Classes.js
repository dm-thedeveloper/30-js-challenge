// console.log("h");




class Employee {
    constructor(name,age,dept,salary) {
        this.name=name;
        this.age=age;
        this.dept =dept;
        this.salary=salary;
    }

    EmployeeReciept(){
return `\t\t\t\t~dM Development Society Employee Reciept\n~*~*~*~*~*~*~*~*\nName:${this.name}\nAge:${this.age}\nDepartment:${this.dept}\nSalary:${this.salary}`

    }
}
const Employee1  = new Employee("Zuhaib",23,"FronEnd","60,000")

// console.log(Employee1.EmployeeReciept());


class Professions {
    constructor(prfessio1,prfessio2,prfessio3,prfessio4){
this.prfessio1= prfessio1;
this.prfessio2= prfessio2;
this.prfessio3= prfessio3;
this.prfessio4= prfessio4;

    }
}

const P =new Professions("Programmer","Entertainer","Doctor","Pilice");

// console.log(P.prfessio1,P.prfessio2);



class math {
    static a =3;
    static b =5;
    static Formula1(a,b){
return (a+b)*(a-b)
    }
}

console.log(math.Formula1(math.a,math.b));
console.log(math.Formula1(8,4));
