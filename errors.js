// 

// try => lets you test a block of code for errors
// catch => lets you handle the error
// throw => lets you create a custom error
// finally => lets you excute code after try and catch regardless of result.

try{
console('object');
}catch(err){ // js error object => name , message 
console.log(err.message);
}

// throw:
// js throw an excpetion or error:
// error can be js string, numbers, Boolean or object

// throw "something went wrong!"
// throw 500;

// Example:
// Divyansh


// finally : let' you excute the block of code after try and catch regardless of the result.

function errorGenerater(){
    let e = document.getElementById('error_demo').value;
    try{
        if(e == ""){
            throw "Please enter any value";
        }
        if(!isNaN(e)) throw "Please enter only string (ERR002)";

        if(e.length > 8) throw "Please enter less than 8 digits";

        if(e.length < 3) throw "Please enter greater than 2 digits";

        if(e.length < 8 && e.length > 2) throw "";

    }catch(error){
        // DOM
        document.getElementById('error_message').innerHTML = error;
    }
    finally{
        // document.getElementById('error_message').innerHTML  = '';
        document.getElementById('error_demo').value  = '';
    }

}

/*

TypeError: data type
ReferenceError: using a vairable with giving any reference
SyntaxError:
rangeError: out of range in number
uriError : error in decoding uri 

*/