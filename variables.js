var x; // 'undefined'

var a = 10, b=20, c= 30;  // (one line many variables)

// if JS "var" varibales will re-declare it'll not loose theie value:

var y = 20; 
var y ; // 20
console.log(y);

// let, const => block scope (es2015)

// function scope(local), global scope before es2015

// Re-declaration using let and var:

var d = 10;
console.log(d);
{
    let d = 2; // use var and let both
    console.log(d);
}
console.log(d);


// loop scope: let will give only block scope 

var i =5;

for(var i=0; i<2;i++){ // use let instead will change the result (i will visible to all over the script using var)
    console.log(i); // 0, 1, 
}

console.log(i);

// "var" belong to window Object(global scope) but let and const will not the part of window 

var fname = "Divyansh";
console.log(fname);
console.log(window.fname); // both gives same result

let lname = "Dixit";
console.log(lname);
console.log(window.lname); // will not give same result


// Re-declare "var" with "let" in same scope and block:

var f = 2;
let f = 3; // not allowed

{
    var f = 4; // allowed
    let f = 5; // not allowed
}

console.log(f)


// Re-declare "let" variable with "let" in same block and scope

let g = 2;
let g = 3; // not allowed

{
    let g = 4; // allowed
    let g = 5; // not
}


// Re-declare a "let" variable with "var" in same scope and block
