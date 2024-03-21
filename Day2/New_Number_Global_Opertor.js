let num = Infinity;
let num2 = NaN;
let num3 = "Punya";
let num4 = -5;

// note: Global methods can take an input to check but Number specific methods first checks that if the input parameter is number or not.

console.log(isFinite(num));
console.log(isFinite(num2));
console.log(isFinite(num3));
console.log(isFinite(num4));

console.log(Number.isFinite(num));
console.log(Number.isFinite(num2));
console.log(Number.isFinite(num3));
console.log(Number.isFinite(num4));

console.log(isNaN(num));
console.log(isNaN(num2));
console.log(isNaN(num3));
console.log(isNaN(num4));

console.log(Number.isNaN(num));
console.log(Number.isNaN(num2));
console.log(Number.isNaN(num3));
console.log(Number.isNaN(num4));


console.log(Number.isInteger(num))
console.log(Number.isInteger(num2))
console.log(Number.isInteger(num3))
console.log(Number.isInteger(num4))
