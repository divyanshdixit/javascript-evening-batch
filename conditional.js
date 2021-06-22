// conditional statements are used to to perform action beased on different conditions

// if 
// if else
// else if
// switch case

// if(condition){

// }

// if(cond){

// }else{

// }

// if(cond1){
// code
// }else if(cond2){
// code
// }else{
// code
// }

// if(cond1){
//     if(cond2){

//     }
// }

// if(name == "Divyansh")
//     console.log('object')
//     console.log('object1')

// ternary operator:

// (cond) ? '//code' : '//code2'

// (cond1) ? ( (cond2) ? 'second if run' : 'second else run' ) : ((cond3) ? 'first if else run' : 'first else else run')


//  switch to specify many alternative blocks of code to be excuted


// if statement example:

var age=19, enter, money=110;
// 18, 21, 17

if(age < 18){
    enter = "you can't enter this website";
}else if(age > 18){
    enter = "you can enter this website"
}else{
    enter = "Bro! grow up some balls";
}

console.log(enter);

// 17, 18 19
// 90 , 100, 110
if(age > 18){
    if(money < 100){
        enter = 'you can enter and but not buy anything!'
    }else{
        enter = 'you can enter and buy anything!'
    }
}else if(age == 18){
    enter = "Bro! grow up some balls";
}else{
    enter = "you can't enter this website and f off!"
}

console.log(enter);

(age > 18) ? ( (money > 100) ?  'you can enter this website and buy anything!' : "you can't buy anything!") : "you can't enter this website and f off!";
