// introduced in ES6 
// classes are templates for js objects

// class syntax:

// class keyword to create class
// always add a constructor method(function)

// class className{
//     constructor(){}

    // methods in class:

    // method1(){}
// }

// constructor method called automatic when a new object is created
// it is used to initialize  object props
// if not used , js will add an empty constructor method

class person{
    // constructor(){}
    constructor(n,y){
        this.name = n,
        this.birthYear = y 
    }

    // methods
    // age(){
    //     let date = new Date();
    //     let currentYear = date.getFullYear();
    //     return currentYear - this.birthYear;
    // }

    // send params to method
    age(yr){
        return yr - this.birthYear;
    }

}


// using a class to create an object

let p1 = new person('divyansh', 1995);
let p2 = new person('abhishek', 2000);

let date = new Date();
let currentYear = date.getFullYear();

console.log(p1.age(currentYear));
console.log(p2.age(currentYear));