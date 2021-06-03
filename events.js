// Events that happen to html elements
// js can react to those events

// events done by the user or browser

// For ex:

// html load finish
// input field changed 
// button clicked

// some code gets excuted when events gets fired

// event handler => function

// <button onclick="alert('hello')"> Click me </button>

{/* <button onclick="myfunction()"> Click Me </button>

function myfunction(){
    alert()
} */}

// onchange
// onclick
// onkeydown
// onkeyup
// onload
// onmouseover
// onmouseout

function changeContent(){
    document.getElementById('div1').innerHTML = "Clicked";
}

function changeColor(){
    document.getElementById('div1').style.color = "blue";
}

function reverseColor(){
    document.getElementById('div1').style.color = "black";
}

var changeValue = () => {
    console.log(document.getElementById('div1').innerHTML);
}

var changeInput = () => {
    console.log(document.getElementById('input_field').value)
}