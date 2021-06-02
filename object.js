// Js objects:

// objects are variable too which  can hold many values
// objects has properties and methods


// Rule: Dont declare string, number and boolean as an object

//  when js variable is declared with the keyword "new" the variable is created an object
// var x = new AnyFunctionName() => here x is treated as an object

var name = "Divyansh";
var city = "kanpur";

var person = { // Object literals
    name:"Divyansh", // key:value
    city:"kanpur"
}

// Accessing object props:

// 1- objectName.propertyName, 2- ObjectName["propertyName"]

console.log(person.name)
console.log(person["city"])
console.log(person)


// Object Methods:

// methods are actions that can be performed on object 
// methdos are stored in props as function defintion

var person1 = { // Object literals
    fname:"Divyansh", // string , number, object, array , function
    lname:"Dixit",
    fullName:function(num){
        return num;
    }
}


// Accessing the method:

console.log(person1.fullName(1))


// This keyword: always referes to its owner:

// in a fn definition  "this " keyword refers to owner of the function:

var person2 = { // Object literals
    fname:"Kishu", // string , number, object, array , function
    lname:"Dixit",
    fullName:function(){
        return this.fname + " " + this.lname;
    }
}

// Divyansh Dixit
// Dixit

// var person4 = {
//     color: ["fair", "Black"],
//     details:{
//         gender:"Male",
//         innerFunction: function(){

//         }
//     },
//     outsideFunction:function(){

//     }
// }

var person3 = {
    fname:"Divyansh",
    getObj: { // nesting object
        lname: "Dixit",
        getFullName: function(){
            return person3.fname + ' ' + this.lname;
        }

    }
}


// 
console.log(person3.getObj.getFullName())
console.log(person2.fullName())


var person5 = {
    fname:"Divyansh",
}

// change the existing property value
person5.fname = "Kishu";

// adding new value in object
person5.lname = "Dixit"

// adding new method in object
person5.fullName = function(){
    return this.fname + " " + this.lname
}

console.log(person5.fname);
console.log(person5.lname);
console.log(person5.fullName());


// json => string

// var person = { // 
//     "name":"Divyansh"
// }
