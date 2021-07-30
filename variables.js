var x; // 'undefined'
console.log(x); 
var y = 10

// + (concat)

x = 'divyansh';
console.log(x + y)

// console.log(y, window.y);
 
// console.log(x-y)

// console.log('Divyansh' * 10);

var a = 10, b='2', c= 30;  // (one line many variables)
console.log(a,b,c)

// if JS "var" varibales will re-declare it'll not loose theie value:

var g = 20; 
var g ; // 20
console.log(g);

// // let, const => block scope (es2015) es6

// // function scope(local), global scope before es2015

// // Re-declaration using let and var:

// var d = 10;
// console.log(d);
// {
//     let d = 2; // use var and let both
//     console.log(d);
// }
// console.log(d);


// // loop scope: let will give only block scope 

// var i =5;

// for(var i=0; i<2;i++){ // use let instead will change the result (i will visible to all over the script using var)
//     console.log(i); // 0, 1, 
// }

// console.log(i);

// // "var" belong to window Object(global scope) but let and const will not the part of window 

// var fname = "Divyansh";
// console.log(fname);
// console.log(window.fname); // both gives same result

// let lname = "Dixit";
// console.log(lname);
// console.log(window.lname); // will not give same result


// // Re-declare "var" with "let" in same scope and block:

// var f = 2;
// let f = 3; // not allowed

// {
//     var f = 4; // allowed
//     let f = 5; // not allowed
// }

// console.log(f)


// // Re-declare "let" variable with "let" in same block and scope

// let g = 2;
// let g = 3; // not allowed

// {
//     let g = 4; // allowed
//     let g = 5; // not
// }

// // Re-declare a "let" variable with "var" in same scope and block

// let x = 2; 
// var x = 3; // Not allowed

// {
//     let x = 4;  
//     var x = 5; // not allowed
// }

// // Re-declare variable with "let" in another scope or block is allowed:

// let x = 2;

// {
//     let x = 3;
//     console.log(x) // 3
// }

// console.log(x) // 2
// {
//     let x = 5;
//     console.log(x)
// }


// // Hoisting: 

// // var => top hoisted, can be initalised at any Time

// // can be use the variable before it is declared
// a = 10;
// console.log(a)
// var a;

// // hoisting using let: hoisted on top but not initalized

// fname = "Divyansh";
// console.log(fname);
// let fname; // gives reference error


// // Const:  
// // let name;
// // var name;
// // const name = "Divyansh"

// // it defines a constant reference to value (that's why we cant change the primitive value but we can change the props of const object)

// var x = 10;
// {
//     const x = 20;
// console.log(x)  // 20
// }

// // Primitive value: that has single data value not have props or methods
// // Number, strings, boolean, undefined

// // var obj1 = {
// //     key : value
// // }

// const person = {
//     name:"Divyansh",
//     city:"kanpur",
//     age: 25
// }

// person.name = "kishu";

// console.log(person.name)


// // Re-decalre "var" or "let " variable with const in same block or scope is not allowed

// var e = 10;
// let e = 20; // not allowed
// const e = 30; // not allowed


// // Const hoisting: varianle define with "const" are also hoisted on top but not initialised so gives referenceError

// alert(fname);
// const fname = "kishu";
