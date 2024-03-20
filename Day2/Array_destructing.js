// before es6

const myproglang = ['js', 'python', 'c', 'java']

// let p1 = myproglang[0];
// let p2 = myproglang[1];
// let p3 = myproglang[2];
// let p4 = myproglang[3];
// console.log("My fav prog langs are : "+p1+ " "+p2+" "+p3+" "+p4);

// after es6

// destructuring all the elements of the array
let [p1, p2, p3, p4] = myproglang;
console.log(`my fav programming languages are : ${p1}, ${p2}, ${p3} and ${p4}`);

// destructuring particular element of the array

let [e1,,,e4] = myproglang;
console.log(`My fav programming langauges are : ${e1} and ${e4}`);