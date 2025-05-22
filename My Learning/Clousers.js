function  outerFunction (){
let OuterFunctionsVar = "I am from Outer function";

function innerLog (){
    return console.log(OuterFunctionsVar);

}
innerLog()
}
// outerFunction()



function count (){
let count = 0;

  function contInc(){
    count++;
return count;
}

    return contInc()

}

const counterr  = count()
// console.log(counterr());
// console.log(counterr());
// console.log(counterr());
// console.log(counterr());
// console.log(counterr());
// console.log(counterr());
// console.log(count());



function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2




function Contact (mr_or_mis,name,time,date,place){


return{
// mr:mr,
mr_or_mis:mr_or_mis,
name:name,
time:time,
date:date,
place:place,

    getSalary: function  (){
return console.log(`Hello ${mr_or_mis}: ${this.name}, take your salary today from the salary counter
Time: ${this.time}
Date: ${this.date}
thank you.`);
    },
meeting: function (){
    return console.log(`Hello ${mr_or_mis}. ${name}, a meeting is scheduled with you today. In ${place}.
Time: ${time}
Date: ${date}
Thank you very much for being on time.`);

},
goodMorning: function (){
return console.log(`Hello ${mr_or_mis} ${name}, today date ${date} and time ${time} am good morning to you from our company. We pray to God for you that you have a good day. And try to do something good for our company today as always`);

}

}

}

Contact("Ms","Kashis Pirzada","7:00 PM",Date(),"bosse's office").goodMorning()


// console.log(  Date().toString())
