// html collection object:

document.getElementsByClassName(), document.getElementsByTagName()
// html collection object 


// it looks like an array-ist but its not array 


const nodelist = document.getElementsByName('paraName');
console.log(nodelist.length)

nodelist.forEach((val) => {
    console.log(val);
} )
// Node list : it looks like an array-ist but its not array , it also has length property 


// in html collection we can't use array.forEach() function but in node list we can use foreach() 
// only node list contains attibuteNode , textNode, element node 

const collection = document.getElementsByClassName('para');
console.log(collection[0], collection.length)

for(let i=0; i<collection.length; i++){
    console.log(collection[i])
}