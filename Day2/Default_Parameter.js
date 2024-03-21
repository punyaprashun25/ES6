// in ES5
function sum(a, b)
{
    return a+b;
}
// console.log(sum(10));
// above code will gives output as NaN because we didn't pass the second argument

// to resolve this problem in ES5 we have to do something like below

// function multi(a, b)
// {
//     b = (typeof b !== 'undefined') ? b : 1;
//     console.log(a*b);
// }
// multi();

// In ES6

const mult = (a = 1, b = 1) => {
    console.log(`The mult of two numbers are : ${a*b}`);
}
mult();