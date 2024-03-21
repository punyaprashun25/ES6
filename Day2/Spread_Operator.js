// In es5 
//replacement of apply() method

function sum(a,b,c)
{
    console.log(a+b+c);
}

var arrVal = [1,2,3];
// sum.apply(null, arrVal);

// es6
sum(...arrVal);

// replacement of Concat()
let arr1 = [1,2,3];
let arr2 = [4,5,6];
// let arr3 = arr1.concat(arr2);
let arr3 = [...arr1,...arr2];
// console.log(arr3);

// replacement of Copy()

let arrc1 = [1,2,3];

// deep copy...means changes in the arrc2 will also change the elements in the arrc1
let arrc2 = arrc1;
arrc2.push(4,5);
// console.log(arrc1);
// console.log(arrc2);


// Shallow copy...means changes in the arrc3 will not change the elements in the arrc1
let arrc3 = [...arr1];
// arrc3.push(4,5)
console.log(arrc1);
console.log(arrc3);


