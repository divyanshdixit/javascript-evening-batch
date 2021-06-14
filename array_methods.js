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
