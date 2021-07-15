// arrow function:

// introduce in ES6 (2015)
// allows to write shorter function syntax

// syntax:

// name = function(){
//     return 'hello world!';
// }

// function name(){
//     return 'hello';
// }

// with arrow :

name = () => {
    return 'hello ';
} 

name = () => 'hello';

name();

// pass argument in arrow function

name = (fname,lname) => {
    return 'Hello my name is ' + fname  + lname; 
}

name('divyanhs', 'dixit')

name = fname => {
    return 'Hello my name is ' + fname  + lname; 
}

// this keyword in arrow function:

// no binding of this with arrow function
// this keyword always refers the object that defined arrow function 

// ex: with regular function (this refers the object that calls the function)

h = function(){
    console.log(this);
}

// window objecy call the function
window.addEventListener('load', h);

// button object call the function 
document.getElementById('btn').addEventListener('click', h)


// ex : with arrow function (this refers the owner of the function)

h = () => {
    console.log(this)
}

window.addEventListener('load', h); // => window obejct

// button object calls the function but the onwer is window obejct => 
document.getElementById('btn').addEventListener('click', h) // => object window

// window is the owner of the function


