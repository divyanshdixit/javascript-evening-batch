
var arr = [40,4,3,7,1]; // ascending [1,3,4,7,40][4,40,3,7,1][4,3,40,7,1][3,4,40,7,1][3,4,7,40,1]
// ['divyansh', 'Dixit', 'abhish']
// sort via unicode

// console.log(arr.sort())

// to fix this prob: sort() recives a compare function as a aurgument, which compares two element of the array

// syntax:

arr.sort(function(a,b){ // a=3, b=7[1,2,3,0]
    if(a > b){
        return 1; // a-b //36
    }
    if(a < b){
        return -1;
    }
    return 0;
})

console.log(arr);

// ve => if return value is +ve "sort b to  lower index" [b comes first]

// -ve => if return value is -ve "sort a to lower index" [a comes first]

// 0 => position unchanged


// sort in descending order:
arr.sort(function(a,b){
    if(a>b){
        return -1;
    }
    if(a <b ){
        return 1;
    }
    return 0;
})

console.log(arr);


// sorting with mixed char: ascending order

var animals = ['Cat', 'dog','Elephant', 'bee','Ant'];
// CAT,DOG C>D
// console.log(animals.sort());

animals.sort(function(a,b){
    let x = a.toUpperCase();
    let y = b.toUpperCase();

    if(x>y){
        return 1;
    }
    if(x<y){
        return -1;
    }
    return 0;
})
console.log(animals);


// Sorting of array of object by specified property:

var emp = [

    {name:'Div', salary:50000},
    {name:'abhi', salary:5000},
    {name:'kish', salary:500},
    {name:'vivan', salary:50}

]

// sorting by numeric property: ascending

emp.sort(function(a,b){
    if(a.salary > b.salary){
        return 1;
    }
    if(a.salary < b.salary){
        return -1;
    }
    return 0
})

console.log(emp);


emp.sort(function(a,b){
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();

    if(x>y){
        return 1;
    }
    if(x<y){
        return -1;
    }
    return 0;
})

console.log(emp);