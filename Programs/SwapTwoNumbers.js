// Swapping two numbers using third variable

let a = 5, b = 5, temp;
console.log(`Before Swapping :  a = ${a} and b = ${b}`);

// temp = a;
// a = b;
// b = temp;

// swapping without third variable using + and -

// a = a+b;
// b = a-b;
// a = a-b;

// swapping without third variable using * and /

// a = a*b;
// b = a/b;
// a = a/b;

// swapping without third variable using XOR(^)

a = a^b;
b = a^b;
a = a^b;

console.log(`After Swapping :  a = ${a} and b = ${b}`);