// Js array are spscial variable that holds more than one value at a time in single var

// creating an array:

// using array literal

var array_name = ['item1', "item1"];

// using a new keyword

var array_name = new Array("val1", "val2");


// accessing the array elements:

// by referring to the index number
//  index will start from 0

var arr = [4,3, 2, 1];
// [1,2,3,4]

console.log(arr[1])

// changing an element of an array 

arr[2] = 40;

console.log(arr[2])

// accessing the full array: By referring the name of array

console.log(arr);
console.log(typeof arr);


// Array are objects:

// typeof array is object 
// arrays use "Numbers" to access it's elements but object use "Names" to access it's elements

// arrays can have different types of datatypes

var person = [
    "Divyansh",
    "Dixit",
    25, 
    {
        name:"Dicaynsh",
        getName:function(){
            return "asdasdas";
        }
    },
    // function(){
    //     return "adasdasdsadsadasdasdasdas";
    // }
]

console.log(person)
// console.log(person[4])
console.log(person[3].name)
console.log(person[3].getName())

// Arrays props and methods:

// find the length of an array
var x = person.length;
console.log(x)


// sort()
// revers the element of given array

var arr2 = [5,3,4, 3,4,5,6, 10] // [3,5,4]

// accessing last array element:

console.log(arr2[arr2.length - 1])

var sortedArr = arr2.sort();
console.log(sortedArr);

// [3,4,5]
function sort(arr){
    var givenArr = arr;
    for(var i =0; i<arr.length; i++){ // i = 1
        if(arr[i] < arr[i+1]){ // 5 < 3 // 3 < 4
            continue;
        }else{
            var temp = arr[i]; // temp = 5
            arr[i] = arr[i+1]; // arr[i] = 3
            arr[i+1] = temp; // arr[j] = 5
        }
    }
    return arr;

}

sort([3,2,1]);