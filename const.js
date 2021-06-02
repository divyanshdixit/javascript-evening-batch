
const person = {
    name:"Divyansh",
    city:"kanpur",
    age: 25,
    setName: function(){
        return person.name;
    }
}

person.name = "kishu";

person = null;

console.log(person.setName)