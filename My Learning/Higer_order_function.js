function add(a,b) {
    return a+b;
}
function multi(a,b) {
    return a*b;
}


function expression(fun,x,y){
    // return fun(x,y)
    console.log(fun(x,y));
};

// console.log(expression(add,3,3));
// console.log(expression(multi,7,3));
expression(add,2,3);
expression(multi,7,7);



function  hello() {
    return "Ali"
}
let n="ali"
function helloHowmanytimes(fnx,times=1) {
for(i=0;i<times;i++)console.log(fnx());
}
helloHowmanytimes(hello,2);