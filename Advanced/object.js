// Object literal
// new keyword
// object constructor
// Object.create(object)

const p = {
    name:'divyansh',
    age:25
}

delete p.name
const x = p; // 

// const keyword address variable by reference not by value.

// x is not the copy of p object , it;s the same object
// any chnages in x will reflect in p also 

x.name = "abhishek";

console.log(x.name, p.name);


// deleting object property:

// it's only for JS object
// delete value and key both

// delete doesn't delete inherited props

delete p.age; 
console.log(p);


// object.prop
// object['prop']

const obj = {
    name:'Srishti',
    age:24,
    hobbies:[
        {
            name:"sleeping", categories:['full day', 'half day'],
        },
        {
            name:"drawing", categories:['sketches', 'caligraphy']
        }
    ]
}

// print the categories using for in loop


// Properties attributes:

// enumerable => true
// configurable => true
// value 
// writable => true

const f = {
    name:'Divyansh',
    age:25,
}

// js object inherit props and methods from their prototype.

console.log(Object.getOwnPropertyDescriptor(f, 'name'))
Object.defineProperty(f, 'name', {writable:false})

f.name = "abhi" // this property can't be overwrite bcz writable property attribute is false.
console.log(f);

// adding method:

f.getName =  function(){
    return this.name + this.age;
}

f.getName()


// Displaying object properties:

// Object.values() => 
// any js object can be converted to array using Object.values()
// get the values of all props and return as an array 

console.log(Object.values(f))

// JSON.stringify() => any js object can be converted to string

// it will not stringify functions
// in order to do that first convert function using toString()  and then stringify

f.getName = f.getName.toString();

console.log(JSON.stringify(f));

// we can also stringify js array (array to json)

const arr = ['divy', 'dixit', 24]
console.log(arr);
console.log(JSON.stringify(arr))

for(let i in obj.hobbies){
    console.log(obj.hobbies[i].name)
    for(let x in obj.hobbies[i].categories){
        console.log(obj.hobbies[i].categories[x]);
    }
}
/*

const person = {
    fname:"Divyansh",
    name: function(){
        console.log(`${this.fname} ${this.lname}`);
    }
}

// creating an object
const newObj = Object.create(person);

newObj.lname = "Dixit";
newObj.fname = "Abhishek";

console.log(person.lname);
newObj.name()

// adding or changing object property:

Object.defineProperty(person, 'fname', {value:"Changed"})
console.log(person.fname);

// adds or modifies one or more props direclty on an object
Object.defineProperties(person,{
    fname:{
        value:'Changed again',
        writable:true
        // get and set also we can write here
    },
    city:{
        value:"kanpur",
        writable:true,
        enumerable:false
    }
})
console.log(person.fname, person.city);


// 
console.log(Object.getOwnPropertyDescriptor(person, 'city'))


// get all the properties as an array :

console.log(Object.getOwnPropertyNames(person));


// get the prototype of specified object:

console.log(Object.getPrototypeOf(newObj))
console.log(Object.getPrototypeOf(newObj) == person)


// get all enumerable properties as an array => (it'll get all the property for enumerable property is true)
console.log(Object.keys(person));

*/