var num = 10456;
// js treats primitive value as objects when excuting methods and props over it.

// toExponential() => return a string with exponential notation 

console.log(typeof num);
console.log(num.toExponential())
console.log(num.toExponential(6))


// toFixed() => retrun a string , with the no. written with a specified no of char after period

var x = 9.767;
console.log(x.toFixed())
console.log(x.toFixed(1))
console.log(x.toFixed(2))
console.log(x.toFixed(4))


// toPrecision() => return a string , with specifed length(total number of char in variable)

var y = 5.786;
console.log(y.toPrecision())
console.log(y.toPrecision(2));
console.log(y.toPrecision(6));


// valueOf() => return a number as a number

// for ex: covert number object to primtive number value


//  Coverting variables to numbers:

// 3 methods: Number() , parseInt(), parseFloat():
// these are global js methods not number methods (can be used on all js data types)


// Number() => return a number converted from it's argument

console.log(Number(true)) 
console.log(Number(false)) 
console.log(Number("10"))  // 10
console.log(Number(" 10")) 
console.log(Number(" 10 20 ")) 
console.log(Number("10 ")) 
console.log(Number("10.33")) 
console.log(Number("10.33")) 
console.log(Number("10,20")) 
console.log(Number("10_50")) 
console.log(Number("Divyansh")) 

console.log(Number(new Date('2021-06-08')))  // from '1.1.1970'


// parseInt(): parse a string and return a whole number, space are allowed, only the first char is returned

console.log(parseInt("true"))
console.log(parseInt("10")) // 10
console.log(parseInt("10.685")) // 10
console.log(parseInt("10 20 30")) // 10
console.log(parseInt("20 years")) // 20
console.log(parseInt("years 20")) // nan
console.log(parseInt("10, 20")) // 10
console.log(parseInt("10_20")) // 10

console.log('***********************');
//  parseFloat() =>  parse a string and return a number, spaces are allowed, only the first char is returned

console.log(parseFloat("true"))
console.log(parseFloat("10")) // 10
console.log(parseFloat("10.5675").toFixed(2)) // 10
// convert a string data type to number data type
console.log(Number(parseFloat("10.5675").toFixed(2))) // 10
console.log(parseFloat("10 20 30")) // 10
console.log(parseFloat("20 years")) // 20
console.log(parseFloat("years 20")) // nan
console.log(parseFloat("10, 20")) // 10
console.log(parseFloat("10_20")) // 10


// Number Properties:

// Number prop can't used on variables else it'll return undefined.

// MAX_VALUE 
// MIN_VALUE
// POSITIVE_INFINITY
// NEGATIVE_INFINITY


var x = Number.POSITIVE_INFINITY;
var x = Number.MAX_VALUE;
console.log(x)

// Number prop can't used on variables else it'll return undefined.

var a = [1,2,3];
console.log(a.MAX_VALUE) // undefined


// isInteger() => check whether a value is interger or not , if it is integer return true, or false

var checkNo = 10.33;

console.log(Number.isInteger(checkNo)) // false


// prototype:

// syntax for using prototype:

// DataType.prototype.methodName = function(){
//     return '';
// }

Number.prototype.myOwnMethod = function(){
    return this.valueOf()/2; // convert object value to primitive value
} 

var n = 60;
console.log(n.myOwnMethod());


// prototype for string:

String.prototype.newStringMethod = function(){
    return 'my own method';
}

var str = 'asdas';

console.log(str.newStringMethod())