const bioData = {
    name : "Punya prashun",
    age: 22,
    deg : "B.Tech"
};
// order is followed
// Declare the variables then assign the varibale

// let name, age, deg;
// ({name, age, deg} = bioData);

// declaring and assigning at the same time

// let {name, age, deg} = bioData;
// console.log(`My name is ${name} and my age is ${age}`);

// let {myname, age, deg} = bioData;

// above code will throw an error because variable name should be same as the key of the object.

// renaming variables

// let {name : myname, age: myage, deg: mydeg} = bioData

// in the above code colon(:) is given to rename the key name from name to myname and so on.

const myself = {
    name : "Punya",
    hobbies : {
        first : "Playing game",
        second : "Coding"
    }
};
let {name : myname, hobbies : myHobbies} = myself;
//  console.log(`my hobbies are : ${myHobbies}`)

//  here directly access to nested object will return object only not the value, we have to specify the keys to access the values.

console.log(`My hobbies are : ${myHobbies.first} and ${myHobbies.second}`);

// above code will work fine
