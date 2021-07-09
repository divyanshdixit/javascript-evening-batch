// type conversion:

// 1- converting string to numbers:

// Number()

"Divyansh24"

console.log(Number("3.14")) // Number
console.log("3.14");
console.log(Number(""))
console.log(Number(" "))
console.log(Number("50 50")) // not a number
console.log(Number(" 50 ")) // number
console.log(Number(" 50,40 "))
console.log(Number(" 25Divyansh "))

// 
let y = "25Divyansh";

let x = +y; //(unary operator => convert a variabel to number)
console.log(x,y);

// 

var f = 10;
g = 'divyansh';

f+g;
g-f; // 10
g*f; // 200
g/f;// 2

console.log(g-f, g*f, g/f);

// 2- converting numbers to string:

// String()
// toString()

let v = 10;
console.log(String(x));
console.log(String(v));
console.log(String(100));
console.log(String(100+1));


// 3- Date to number

var d = new Date();
// console.log(Number(d)); 
// console.log(d.getTime()); 
console.log(d.toLocaleTimeString()); 

// 4- date to string:

console.log(String(d));

// 5- Booleans to Numbers
console.log(Number(false));
console.log(Number(true));

// 6- Booleans to string
console.log(String(false))
console.log(String(true))
