{
    var a = 10;
}
// here variable is accessed even if it is in the block
console.log(a);

{
    let b = 20;
}
// here we get error that b is not defined. means can't access block level variable
// console.log(b);

const PI = 3.14;
// here we get error Assignment to constant variable. because we can't redefine Constant variable.
PI = 5.6;
console.log(PI);