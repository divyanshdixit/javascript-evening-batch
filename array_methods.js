// push(), pop(), sort(), length

// converting arrayss to string:

// toString(), join()

// toString() => return comma sperated string

var arr = ["Divyansh", 'dIXIT', 24];

console.log(arr.toString());

// join() => pass delimeter as an argument

console.log(arr.join(' '))


// Adding and removing element from array:

// pop => out from last 
// push => add in last 

// shift => it is equivalent to pop but used for first element instead of last (out from first)
// unshift  => add in first 

// shift => remove the first aarya element and shifts are other elements to lower index
//  => return that value which is shifted out

var arr1 = [2,3,4,5];
console.log(arr1.push(6)) // return the new length of array
console.log(arr1);

console.log(arr1.unshift(8)); // return the new length of array
console.log(arr1); // print the updated array
// console.log(arr1.pop())
// console.log(arr1.shift())


// Deleting the array element:

// delete may leave undefined holes in array (not recommend to use delete for array)

var arr2 = [2,3,4,5]; // [2,4,5]

delete arr2[1];

console.log(arr2[1]);

var obj = {
    name:'Divyansh',
    lname:'Dixit'
}

delete obj.lname
console.log(obj)


// splicing an array:

// can be used to add, delete element in array

var arr3 = [1,2,3,4,5,6] // [1,2,10,20,3,4,5,6]

// syntax: 
// array_name.splice('position where u want to add new elements', 'how many element should remove from that position', 'new element to be added')
// return removed elements

// use splice to add new elements 

console.log(arr3.splice(2, 0, 10))
console.log(arr3);

// use splice to remove the elements

arr3.splice(3,2);
console.log(arr3)


// concating (merging ) array:

// creates new array by merging in existing array

const arr4 = [1,2,3];
const arr5 = [4,5,6];

// []
const mergedArray = arr4.concat(arr5);
console.log(mergedArray) 

// concat can also take string as an argument

const arr6 = [7,8,9];
// console.log(arr6.concat(10))
const newArr = arr4.concat(arr5,arr6,10)
console.log(newArr);


// slicing the array:

// slice out a piece of an array into a new array
// start from give position

// ending index will not included

// if ending is missing then return the whole array from startin idnex

// arr.slice(start, end)

var arr7 = [1,2,3,4,5,6];

console.log(arr7.slice(2,4))// 3,4
console.log(arr7.slice(1))

// find Max and min from array

var arru = [1,5, 0, -1, 67, 55] // 5


var min = Infinity; //100 
var max = -Infinity; // -

for(var i=0;i<arru.length;i++){ // i =0
    if(arru[i] < min){ // 1 < 100, 5<1, 0<1, 67<-1 55<-1
        min = arru[i]; // 1
    }
    if(arru[i] > max){ //  
        max = arru[i];
    }
}

console.log(min, max);

// using inbuilt function (Math)
// spread operator

console.log(Math.min(...arru));
console.log(Math.max(...arru));


// Construtor property :-

// return an constur function.

// for array: function Array(){[native code]}

var arrb =[1,2,3];

console.log(arrb.constructor)
// for Number: function Number(){[native code]}

// we can use const property to check if a varible is an array.

function check(x){
    return x.constructor.toString().indexOf('Array') > -1;
}

console.log(check(arrb));


// Prototype property:- 

Array.prototype.customArrayFunction = (arr) => {
    return arr;
}

// console.log(Array.customArrayFunction(arrb));


// CopyWithin() => 
// copies array element to another position in same array , overwrite the existing element
// chnages the original array

var arrv= [1,2,17,24,21,0];

// copyWithin(target, start, end)
// target => index positions to copty the element to 
// start => start copying from
// end => array.length, stop copyin elements from

console.log(arrv.copyWithin(2,0,3))
console.log(arrv.copyWithin(2,0))


// entries: return Array iteretor object with key/vlaue pairs

var x = (arrv.entries())

for(i of x){
    console.log(i); // [index, value]
}


// every() =>
//  check if every element in array pass test.
// if any return vlaues is false then every() fun return false else true.

var res = arrv.every(function(val){
    return val>18;
})
console.log(res);


// filter() , map(), forEach()=> 

// filter => return an array filled with all array elements that passes test(condition).

var arrt = [1,2,34,23,17,18, 10];
console.log(arrt.filter(function(currentVal){
    return currentVal >= 18;
}))


// forEach() => call the function for each array elements

arrt.forEach(function(val, index, arr){
   console.log( val * 2);
});


// map()=> return an array with result of calling a function for each element of array.
console.log('**********************');

console.log(arrt.map(function(val, index, arr){
    return val*2;
}))

// find() => return the value of first element in array taht pass a test.

console.log(arrt.find( (val, index, arr) => {
    return val >=18
}))


// findIndex() => return the index of first element in array taht pass a test.

console.log(arrt.findIndex( (val, index, arr) => {
    return val >=18
}))

// includes(), keys(), reverse(), reduce()

// includes() => whether an array elements contains a specific element
// return true if elements exist else false
// case senstive 

// arr.includes(element, start=>optional)

console.log(arrt.includes(5))

console.log(arr.includes('divyansh'))

// keys() => return a array iterator object only containing keys of an array

var y = arrt.keys();
for(i of y){
    console.log(i);
}


// reverse() => given array will be reversed
// change the original array

console.log(arrt.reverse())


// Reduce():-

