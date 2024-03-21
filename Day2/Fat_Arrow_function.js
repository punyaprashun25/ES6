// ES5

// var sum = function(){
//     var a = 5;
//     var b = 10;
//     return a+b;
// }
// console.log(sum());

// ES6

const sum = () => {
    let a = 5;
    let b = 10;
    return a+b;
};

let a = 10;
let b = 20;
const sum2 = (a, b) => a+b;
console.log(sum(a,b));