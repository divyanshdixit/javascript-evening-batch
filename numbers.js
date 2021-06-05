// Numbers:- 
// js has only one type of numbers:

// 64 bit floating point
// intergers(without period) are accurate upto 15 digits

var x = 999999999999999; // 15 digits
console.log(x)
var y = 9999999999999999; // 16 digits
console.log(y)

// js interpreter works from left to right:

var x = 10;
var y = 10;
var z = "The result is :" + x + y;
console.log(z);


// js try to convert strings to numbers in all numeric operations (for addition + it works different)

// if string contains numeric value result will a number

var a = "100";
var b = "10";

var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;

console.log(c, d, e, f);


// NaN: not a number
// when try to do airthmatic with non-numeric string will give NaN

// typeof NaN is number:

var g = 100*"a";
console.log(g)


// isNaN() => to find out if a value is number or not , returns true if value is not a number, else false.

console.log(isNaN(g));

// Infinity => number 

// By default js displys numbers as base to decimals:


// Number Method:

// 1 - toString(base) =>
//  convert numner top string , return number as string:
// binary 
// octal 
// hexadecimal
// o/p number will be from base 2 to base 36

var num = 23;
console.log(typeof num.toString());
console.log(num.toString());