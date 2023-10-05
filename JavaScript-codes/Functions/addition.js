/* Function 
1) in js fun are used to perform certain operation

Advantageges of fun
'code re-useablity'

1)(you can call the fun n number of time)
2)less coding 
3) we can re-use the same line of code multiple time to perform the common 
4) fun in js will be return using the funtion keyword 
5) the fun call =ing always include the ()
you can call the fun before fun defination or after fun defination

Ex:- function funtion_name(){

body

}
*/
//Write the code to perform the addition operation 


function add(){
    let a =5;
    let b =15;
    let result =a+b;

    console.log(result);
}


function sub(){
    let a =5;
    let b =15;
    let result =a-b;

    console.log(result);
}


function multi(){
    let a =5;
    let b =15;
    let result =a*b;

    console.log(result);
}

function div(){
    let a =5;
    let b =15;
    let result =a/b;

    console.log(result);
}
add();
// write a program to perform the addtion operation 



//Passing an argument in fun

function details(firstName){
console.log(`${firstName} is a Cricketer`); //is ka use hum string mai value dene ke liye krte hai
}
details("virat")
details("dhoni")
