// JS has dynamic types:

/*

Primitive Data types:
var x = "divyansh" // string literal (used= this)

var x = new String("divyansh")  // string object

var x = null; 
String => new String()
number => 10, 10.01
boolean
undefined => typeof undefined

null === undefined => false
null == undefined => true 

Complex data type:

null => typeof null => Object 
object
arrays => Arrays are special kind of object => typeof => object
iterating object


var arr = [];
// if(arr.instanceof "Array" )
*/

var x = undefined;
var y = null;
var z = "";

console.log(x,y,z, x==y, x==z, y==z,x===z, y===z)

// Diff b/w undefiend and null:

// Null (nothing)
// null === undefined (false)

// null == undefined (true)

var x = ""; // empty value , 

// var x = undefined/nulll (Any value can be emptied by these two)

var name = function(){
    console.log('object')
}

console.log(typeof name)