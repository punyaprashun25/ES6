// Parent class
class Animal
{
    color;
    height;
    weight;
    constructor(color, height, weight)
    {
        this.color = color;
        this.height = height;
        this.weight = weight;
    }
    eat()
    {
        console.log("I am eating..");
    }
    sleep()
    {
        console.log("I am sleeping..");
    }
    getDetails()
    {
        console.log(`Color : ${this.color}\nHeight : ${this.height}\nWeight : ${this.weight}`);
    }
}

// Child Class
class Dog extends Animal
{
    breed;
    constructor(color,height, weight,bread)
    {
        super(color, height, weight);
        this.bread = bread;
    }
    eat(){
        console.log("I am eating bread...");
    }
    bark()
    {
        console.log("Barking...");
    }
    // overriding the methods
    getDetails()
    {
        console.log(`Color : ${this.color}\nHeight : ${this.height}\nWeight : ${this.weight}\nBreed : ${this.bread}`);
    }
}

const animal = new Animal("White", 15, 50);
console.log("Animal Object : ")
animal.eat();
animal.sleep();
animal.getDetails();

const dog = new Dog("White",20, 30, "Husky");
console.log("Dog object : ")
dog.eat();
dog.bark();
dog.getDetails()