// Basic
let monthNumber=7;
let monthName;

switch (monthNumber) {
    case 1:
        monthName ="January"
        break;
        case 2:
        monthName ="Feburary"
        break;
        case 3:
        monthName ="March";
        break;
        case 4:
        monthName ="April"
        break;
        case 5:
        monthName ="May"
        break;
        case 6:
        monthName ="June"
        break;
        case 7:
        monthName ="July"
        break;
        case 8:
        monthName ="August"
        break;
        case 9:
        monthName ="september"
        break;
        case 10:
        monthName ="october"
        break;
        case 11:
        monthName ="November"
        break;
        case 12:
        monthName ="December"
        break;

default:
    console.log("Write a Number 1 to 12");

        break;
}
if( monthNumber > 12 ) monthName="" ;
else if(monthNumber === 0) monthName =""
else if(monthNumber <1) monthName =""
console.log(monthName);


// USing Multiple Cases

let celebName=" m aamir";
let celebOccupation;


switch (celebName.toLowerCase().trim()) {
    case "aatif aslam":
    case "bilal saeed":
    case "rahat fateh":
    celebOccupation ="Singer";
        break;
        case "fawad khan":
            case "gohar rasheed":
            case "raza samo":
            celebOccupation ="Actor";
            break;
            case "shahid afridi":
                case "m aamir":
                case "dahani":
                celebOccupation ="Cricketer";
                break;
    default:
celebOccupation ="I can't UnderStand type name of: singer,actor,cricketer"
break;
}

console.log(celebOccupation);


// switch with functions;


function  add(a,b) {return a+b};
function  mins(a,b) {return a-b};
function  mult(a,b) {return a*b};
function  divide(a,b) {return a/b};

let num1=34;
let num2 =7234;
let operation= " * ";
let res;

switch (operation.trim()) {
    case "+":
       res= add(num1,num2);
        break;
        case "-":
            res= mins(num1,num2);
             break;
             case "*":
                res= mult(num1,num2);
                 break;
                 case "/":
                    res= divide(num1,num2);
                     break;
    default:
        res =" I can Solve the basic Arithmetc Operations =,-,*,/"
        break;
}







console.log(res);







