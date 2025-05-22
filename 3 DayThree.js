//              Day three Control Structures
        //Task/Activities
//  Activity 1: IF-Else Statements
//     * Task#1:- Wtite a Programe to check if a number is Positive,negative and or Zero and log the Result to the Console.

//     * Task#@:- Wtite a Programe to check if a number is Positive,negative and or Zero and log the Result to the Console.

let num;

if(num<0){
    console.log("-ve");
}
else if(num ===0){
    console.log("Zero");
}
else if (num>=1){
    console.log("+ve");
}
else {console.log("Some Went Wrong...");}
//     * Task#3:- Wtite a Programe to check if a person is eligible to Vote (age>=18) and log to the Result to the console.

let age;

if(age>=18){
console.log("You Are eligible");
}else{
    console.log("You are not Eligible");
}





//  Activity 3: switch case
//     * Task#4:- Wtite a Programe that use a switch case to Determine the Day of week based on a number(1-7 ) and log the day name to the console
let dayNumber=5;
let dayName;
switch (dayNumber) {
    case 1:
dayName ="Monday"
        break;
        case 2:
            dayName ="tuesday"
                    break;
                    case 3:
                        dayName ="Wednesday"
                                break;
                                case 4:
                                    dayName ="Thursday"
                                            break;
                                            case 5:
                                                dayName ="Friday"
                                                        break;
                                                        case 6:
                                                            dayName ="Saturday"
                                                                    break;
                                                                    case 7:
                                                                        dayName ="Sunday"
                                                                                break;
    default:
        dayName=" write a number 1 to 7"
        break;
}
console.log(dayName);

//     * Task#5:- Wtite a Programe that use a switch case to Assign a grade ("A","B","C","D","F") based on a score and log grade to the console



let score=67;
let grade;
switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        break;
    case (score >= 80 && score < 90):
        grade = 'B';
        break;
    case (score >= 70 && score < 80):
        grade = 'C';
        break;
    case (score >= 60 && score < 70):
        grade = 'D';
        break;
    case (score >= 50 && score < 60):
        grade = 'E';
        break;
    case (score >= 0 && score < 50):
        grade = 'F';
        break;
    default:
        grade = 'Invalid score';
}

console.log(grade);





//  Activity 3: Conditional (Ternary) Operators
//     * Task#5:- Wtite a Programe that use a ternary operator to check if number is even or odd and log the result to the console

let number=78;
// if(number == null || undefined) console.log("write any number ");

let number_Even_or_odd=number%2===0?"Even":"Odd";

console.log(number_Even_or_odd);


//  Activity 4: Combining Conditions
//     * Task#5:- Wtite a Programe to check if year is a leap using multiple Conditions(Divisible by 4, but not 100 unless also divisible by 400) and log the result on consol.

let year=2024;

if (
    (year%4===0 && year % 100 !==0)||(year %400 ===0)) {
    console.log(year,": is a leap yaer");
}
else{
    console.log(year,": not a leap year");
}




