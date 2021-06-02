function getV(num){
    return num;
   
}

// console.log(fname) // undefined

// var name = (fname, lname) => {
//  return fname
// }

var res = getV(100);
console.log(res) // 1
// console.log(result);


// argument, parameter

// function parameter are listed inside the () of function definition

// arguments are values received by the function at the time of called

// fullName("Div", "Dixit")

var add = addition(1,2)

 function addition(n1, n2){
     var n3 = n1 + n2; // local variable 
    // var arr = [n3,n2,n1];
    
     return n3;
 }


//  returned value will go back to function call.
 console.log(add);