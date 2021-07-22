// Object accessors: (getters and setters)

// ES5 2009 introduce it.
// they allow to define object accessors (computed prop).

// use and call oibject method as a property

// simple syntax
// secure data quality
// they acces js function as a prop

// getter (get keyword):

const p = {
    name:"Divyanh",
    city:"",
    lname:"Dixit",

    get fullName(){ // work as a prop
        return this.name;
    },

    get cityName(){
        return this.city;
    },

    set setCity(cityname){
        this.city = cityname;
    },

    get UserDetails(){
        return this.name + ' ' + this.lname + ' ' + this.city
    },

    set ChangeLname(newLname){
        this.lname = newLname;
    }

}

var arr = ['dixit', 'dixit2', 'dixit3'];

// console.log(p.getName());
console.log(p.fullName);
console.log(p.cityName); // ''
p.setCity = "new city";
console.log(p.cityName);
console.log(p.UserDetails);
p.ChangeLname = "ddd"

/*

const a = "a";
const b = "b";
const c = "c";

// create a set and add existing variables and litterals

const letters = new Set([a,b,c,"d"]);

// letters.add(a)
// letters.add(b)
// letters.add(c)

console.log(letters);
letters.delete(c);
console.log(letters.entries());
console.log(letters.keys());
letters.clear()
console.log(letters.values());


const x = function (a, b) {return a * b};


var g = "some";
console.log(g, window.g);

*/