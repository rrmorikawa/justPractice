"use strict";

//Object literal
var dog = {
  test: {name: "Kaipo", color: "brown"},
  //color: "brown",
  age: 13}


//contructor functions using new keyword
// function Dog(name, color, age){
//     this.name = name
//     this.color = color
//     this.age = age
//     //this.speak = () => display("woof")
// }

// display(Object.getOwnPropertyDescriptor(dog, "name"));

Object.defineProperty(dog, "description",
{   
    get: () => {
        return dog.test.name + " is " + dog.test.color
    },
    set: (value) => {
        var nameAndColor = value.split(' ')
       dog.test.name = nameAndColor[0]

        dog.test.color = nameAndColor[1]
    }

})
display(dog.description)
dog.description = "Pooka brown"
display(dog.description)
display(dog.test.name)


//class using es6
// class Dog{
//     constructor(name, color, age){
//         this.name = name
//         this.color = color
//         this.age = age
//     }
//     speak(){
//         display("woof")
//     }
// }
// var dog = new Dog("Pooka", "brown", 13);
// display(dog);
// dog.speak();


