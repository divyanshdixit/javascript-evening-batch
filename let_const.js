ES6 (2015)

var f = 10; => global scope
let f = 10 ; => block scope
const f = 10; => block scope , make a constant value

var x = 10;

// window object => global 

console.log(x) // 10
console.log(window.x)// 10


{
    let y = 20;
    y = 0
    console.log(y);// 20
}

{
    var z = 30;
    z =10
    console.log(z) // 30
}

{
    const x =9;
    // x = 10;

}
console.log(z) // 30
console.log(y)=> undefined


// let , const