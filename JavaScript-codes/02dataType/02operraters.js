// Arithemetic

// addition

let a =5;
let b =15;
let addition = a=+b;
console.log(addition);

// sub
var c=8;
var d=10;
var result=c-d;
console.log(result);


// multiply
var c=8;
var d=10;
var result=c*d;
console.log(result);


// divide

var c=8;
var d=10;
var result=c/d;
console.log(result);

//modulo

var c=8;
var d=10;
var result=c%d;
console.log(result);




// Increment

var data = 5;
data++;
console.log(data);

data +=2;
console.log(data);


//Decrement

var num = 54
num--
console.log(num);


num-=4
console.log(num);





// Assignment operater (=)

let name = "anshul"
console.log(name);

// Comperation operater / only check data not dataType  (==)

var num1= 10
var num2= 10
var result = num1==num2
console.log(result); //True 

var num1= 10
var num2= "10"
var result = num1==num2
console.log(result); // true




// Strict Comperation operater /  check data & dataType also  (===)


var num1= 10
var num2= 10
var result = num1===num2
console.log(result);  // true

var num1= 10
var num2= "10"
var result = num1===num2
console.log(result);   //true


// Greater then less then =

var num1= 10
var num2= 1
var result = num1>num2
console.log(result);

//less then 
var num1= 10
var num2= 100
var result = num1<num2
console.log(result); 


//
var num1= 10
var num2= 100
var result = num1<=num2
console.log(result); 


//
var num1= 10
var num2= 100
var result = num1>=num2
console.log(result); 





// Conditions if else

let age = 18

if(age<18){
    console.log("your are adult");

}
else{
    console.log("minner");
}



// if else if else


let collegeId = 55

if(collegeId>=100){
    console.log('you are in red team');

}else if(collegeId>50){
    console.log('you are in blue team');


    // if there is any if then it will start again 

    if(collegeId<60){
        console.log("hey bro");

    }

}else if (collegeId>30){
    console.log('you are in winnng team');
}else{
    console.log("you are in my team");
}


/* 
1. We can have nested else if statement ,
2. if the condition is true in else if then that particular block of code will be exicuted
3. the other else if conditionn will not be check
example:
check upside

*/


 