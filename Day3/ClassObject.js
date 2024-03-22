// 1st way to create class
// here we don't have to mention the properties explicitly, we can directly create consturctor and mention the properties.

class car{
    constructor(name, year)
    {
        this.name = name;
        this.year = year;
    }
    age()
    {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
    getDetails()
    {
        return `Car Model : ${this.name}\nManufacturing Year : ${this.year}`;
    }
}
const mycar = new car("Ford", 2004);
console.log(mycar.age());
console.log(mycar.getDetails());
// 2nd way to create class,
// here I have only mentioned the required properties and the default constructor will be provided by the javascript

class Myself
{
    name;
    age;
    qualification;
    getDetails()
    {
        return `Name : ${this.name}\nAge : ${this.age}\nQualification : ${this.qualification}`
    }
}

const myself = new Myself();
myself.name = "Punya Prashun";
myself.age = 22;
myself.qualification = "B.Tech";
console.log(myself.getDetails())
