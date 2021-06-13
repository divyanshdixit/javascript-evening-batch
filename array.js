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

// asscending , descending 

// var sortedArr = arr2.sort();
// console.log(sortedArr);

// [3,4,5]

var array1 = [10,1, 2, 7, 50, 6]; // [1,2,6,7,10,50]

var array2 = ['Aishu', 'Divyansh', 'abhi'];

console.log(array1.sort()); 
console.log(array2.sort()); 

// sort function sorted the array by unicode of element in accesnding order

// first solution 

/*
function sort(arr){
    var i,j;
    for(i=0; i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i] < arr[j]){
                continue;
            }else{
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
return arr ;
}

console.log(sort([3,2,1]));

// second solution 

function sortedArray(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
    return array;
  }

  console.log(sortedArray([3,2,1]))

  var arr4 = ["divyansh", "abhishek", "tulika"];
  console.log(arr4.sort());

  var arr5 = [10,1,0,40,5,4];
  console.log(arr5.sort())

//   -1 => a comes first
// 1 => b comes first
//  0 => no change

  arr5.sort(function(a,b){
      return -(a - b);
  })
  console.log(arr5);

//   sort in descending order:

arr4.sort((a,b) => {
    if(a>b){
        return -1;
    }
    if(b>a){
        return 1;
    }
    return 0;
})
console.log(arr4);

// sorting array with mixed cases

var arr6= ['Cat', 'dog', 'Elephant', 'bee', 'ant'];

arr6.sort(function (a, b) {
    let x = a.toLowerCase(),
        y = b.toLowerCase();
    if(x == y){
        return 0;
    }
    if( x > y){ // a> b
        return 1;
    }
    if(x < y){
        return -1;
    }

});

console.log(arr6)

*/

// *******
// Looping the array elements:

// use for loop
// Array.forEach()

var gh = ['item1', 'item2', 'item3'];

for(var f=0; f < gh.length ; f++){ // f = 0, 1
    console.log(gh[f]) // item1
}

// forEach() 
var items = ['item1', 'item2', 'item3', 'item4',];

// callback => that function which call inside other function

// Array_name.forEach(function(value){})

items.forEach( function(val, index, arr){
    console.log(val, index, arr);
});


// adding array elements:

// push() => add the element in the last 

// items[length] = 'newItem';

items[4] = 'item5';
items.push('item6');

// it'll create undefined holes

// items[10] = "item10";
// console.log(items[7]);
console.log(items);


// how do we know if a varaible is an array:

// isArray() => retunr true or false  => Array.isArray(items)
// customzied isArray()
// instanceof => return true if an object is created by a given constructor

// ES5
console.log(Array.isArray(items))

// 
console.log(items instanceof Array);

// *****

// JS Array const 
