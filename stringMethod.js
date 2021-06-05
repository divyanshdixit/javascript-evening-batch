var str = "something good has good to happen";

// strings are immutable(not change)

// 1 - find the length > str.length

// ********
// 2 - find string within a string:
// *********

// Both indexOf() and lastIndexOf() return the position(index).

// indexOf('what to search', position(index)-optional) => position is optional , if omiited it'll start form beginning

console.log(str.indexOf("good"))

// if substring is not found then it'll return -1 always
console.log(str.indexOf("divyansh"))


// lastIndexOf('what to search', position(index)-optional') => position start from end of the string
// search from the end 
console.log(str.lastIndexOf("good")) // => string postion start frkm 10th postion to beginning 


// Search for string within a string:

// 3- search("what to search") => no second parameter

// diff in indexOf() and search() => 
// indexOf("good"), search(/G?ood/) => search() can take regular expression but indexOf() can't

console.log(str.search("good"));


// ******
// 4-  Extract string part :

/*
    slice(start, end) 
    substring(start, end) => -ve values are not accpeted in substring() like slice()
    substr(start, lenth) => similar to slice but second param specifies the length of extracted part
*/


// slice(start, end )  => extract the part of string as new string, 

// ending index will not count
// if ending index is omiited then full string will extracted including end

console.log(str.slice(0)); // last letter is included
console.log(str.slice(5, 10));
console.log(str.slice(0, str.length-1)); // last letter will excluded

// if parameter is -ve , postion wil count form end of string

// "something good has good to happen"

console.log(str.slice(-10, -4));

var str1 = "My name is Divyansh";
console.log(str1.slice(-12, -6));
console.log(str1.slice(-16)); // if second param is omiited then it take to end of the string


// substr() 

// second param is length of extracted part u want
// if second param is omitted the it'll slice out the rest of string
// if first param is -ve count start from end of the string

console.log(str1.substr(3, 7)) 
console.log(str1.substr(-12, 7)) 


// *****
// Replace string content:

// replace("what to replace", "replace with")
//  it doesn't change the original string , retunr new string
// case senstive , replace only first match by default

var str2 = "something Good has good to happen";

console.log(str2.replace("good", "bad"))

// for case senstivie replace and for all replace use regualr expression

// i for check case senstive
console.log(str2.replace(/good/i, "fff"))

// to replace all - use g for global match
console.log(str2.replace(/good/g, "fff"))


// ******
// covert in upper case and lower case

// toUpperCase() 
console.log(str2.toUpperCase())

// toLowerCase()
console.log(str2.toLowerCase())


// concat() => use to concat two or more strings
var fname = "Divyansh Dixit";

console.log(fname.concat(" Dixit" , " ", " is ", ))


// trim() => remove the white spaces from the both end of the string:
var str = "               adhasjds         "
console.log(str);
console.log(str.trim());


// *****
// extracting string char:

// charAt(position) => return char at given position
// if index not found the return empty string

// charCodeAt() => return unicode of char at speicifed index
// if index not found then return NaN 

console.log(fname.charAt(5)) 

// if index is not found the it reutrn undefined
console.log(fname[10]) // => read only purpose

console.log(fname.charCodeAt(5))
console.log(fname.charCodeAt(10)) // NaN


// **** 
// Convert string into Array: using split("seprator")

var random = "a b,c ,d, e"
console.log(fname.split(",")) 

console.log(fname.split("")) 
// if seperator is missing then it'll treat whole string as a single element in array
console.log(fname.split()) 


// Prototype Property => to add new property or method to all objects of given types:


function employee(names, citys, ids){
    this.name = names;
    this.city = citys;
    this.id = ids;
}

var emp1 = new employee('div', 'kanpur', 1)

employee.prototype.salary = 2000;


