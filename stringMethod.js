var str = "something good has good to happen";

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
    substr(start, lenth)
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

