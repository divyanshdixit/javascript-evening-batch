// JS json:

// json => javascript object notation

// data get from server is in json format

// format for storing and tranforming data
// used when data is sent from server to web pages 

// json => string 

// json syntax:

// json => js opbject

// {
//     "employees" : [
//         {"fname":"divyansh", "lname":"dixit"},
//         {"fname":"divyansh", "lname":"dixit"},
//         {"fname":"divyansh", "lname":"dixit"},
//         {"fname":"divyansh", "lname":"dixit"},
//         {"fname":"divyansh", "lname":"dixit"}
//     ]
// }

// data get as in json, convert to js object (Converting json text to JS object)

// JSON.parse()  // => string to object 

// js object => json 

// data send to server , js object then it converted to json  (Converting js object to JSON )

// JSON.stringify() // => object to string

var obj = {
    employees: [
        {fname:"Divyansh", lname:"Dixit"},
        {fname:"Div", lname:"Di"},
        {fname:"DivD", lname:"Dii"}
    ]
}

console.log(JSON.stringify(obj))

var json2  = {
    "employees": [
      {
        "fname": "Divyansh",
        "lname": "Dixit"
      },
      {
        "fname": "Div",
        "lname": "Di"
      },
      {
        "fname": "DivD",
        "lname": "Dii"
      }
    ]
  };
console.log(JSON.parse(json2));
