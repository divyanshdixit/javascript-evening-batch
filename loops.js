// excute a block of code a specific number of times

// kinds of loop:

// for 
// for in 
// for of 
// while
// do while 

// for loop:

// for(state1; state2 ; state3){
//     // code block
// }

// state1: (initialization)

// excute for one time before excution of code block 


// init the variable used in loop:
// init many values in state1
// state1 is optional

// (let i=0, len=10, data='')

// for(let i=0, len=10, data=''; ;){

// }
// var i =0;

// for( ; i< 4;i++){

// }

// state2 : (conditonal)

// it's optional
// if true, loop will start again
// use break, continue

// for(var i=1; i<5; i++){
//     break;
//     continue;
// }

// state3: (increment or decrement)

// can be used inside the loop 

// let i =0;
// let names = ['div', 'div1', 'div2'];
// let len = names.length;


// for( ; i<len; ){
//     console.log(names[i]);
//     i++;
// }

// for(let i=0; i<len ; i++){
//     console.log(names[i])
// }


// loop scope:

var j = 5;

for(let j=0; j<3; j++){
    console.log('Object ' + j); // 0, 1,2
}
// for , for-of , forEach(), while
console.log(j);


// for-in loop:

// used for properties of an object

// for(key in object){

// }

var obj = {
    name:'Divyansh',
    lname:'Dixit'
}

console.log(obj);
var names = [45, 'div', 5,  'div1', 'div2', {}, []];

console.log(obj.name)

for (const key in obj) {
    console.log(obj[key])
}

// when index order is not important then only use for-in loop for arrays
// for(var key in names){
//     console.log(names[key]);
// }


// for-of loop: (

// loop through the vlaues of an iterable object
// strings, objects, arrays, maps

// get the value of property as varible

// for(var of iterableObject){ 

// }

// for of over the array:

const arr = ['one', 'two', 'three'];

for(let c of arr){
    console.log(c);
}

let lang = 'English';
for(let c of lang){
    console.log(c);
}

var num = 12345;
num = num.toString();

for(let c of num){
    console.log(c);
}


// while loop:

// excute a block of code as long as condition is true.
// when u know exact number of time to run the loop use for loop else while loop

// var i = 0; //(init)
// while(condition){
//     // code

//     // i++; (increment/decrement)
// }

// ex:
let k = true;
let count=0;
while(k){
    console.log(k);
    count++;
    console.log(count);
    if(count == 5){
        k = false;
    }

}
console.log('object')


// Break and continue:

// jumps out of the loop- Break

// jumps over one iteration in the loop - continue

for(let g = 0; g < arr.length; g++){

    if( g == 1 ){ // 1==1
        // break;
        continue;
    }
    console.log(arr[g])
}

// label reference => use break using label reference 

list:{
    console.log(arr[0]);
    console.log(arr[1]);
    break list;
    console.log(arr[3]);
}

null == undefined (true)
null === undefined (false)