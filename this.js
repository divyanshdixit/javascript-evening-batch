// js this keyword:

// this refers to the object it belongs to.

// 1- Method - this refers to owner of the method which is object

var p = {
    fname:"Divyansh",
    fullName: function(){
        return this.fname;
    }
}


// 2 - Alone (use without any other datatypes) - refers to global window object
// for the strict mode when used alone this refers to global window object
"use strict";
var t = this;
console.log(t);


// 3- function-> this refers to global window object (default binding for this)
// here the owner of the function is global window object

function myfun(){
    var t = this;
    return t;
}
console.log(myfun());

// in strict mode , Js doesn't allow defalut binding 
// so here this is undefined

function fun(){
    "use strict";
    return this;
}
console.log(fun());

// 4-  this is event handler:
// this refers to html element that recives event

// onclick, handler(function);

<button id="btn" onclick="this.innerHTML = 'REMOVED'"> REMOVED </button>


// 5- explicit function binding:

// call(), apply()
// used to call an object method with another object passed as an argument:

const p1 = {
    fullName:function(){
        return this.fname + ' ' + this.lname;
    }
}

const p2 = {
    fname:"Divyansh",
    lname:"Dixit"
}

console.log(p1.fullName.call(p2));