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

function details(firstName ){
console.log(`${firstName  } is a Cricketer `); //is ka use hum string mai value dene ke liye krte hai
}
details("virat")
details("dhoni")

//passing two argument 
function details(firstName , lastName){
    console.log(`${firstName  } is a Cricketer ${lastName}`); //is ka use hum string mai value dene ke liye krte hai
    }
    details("virat", "k")
    details("dhoni")

    function details2(firstName , lastName){
    console.log(`${firstName} ${lastName } is a Cricketer `);
       }
        details2("virat", "k")
        details2("dhoni") // If we pass one argument then the city parameter will be undefined
        details2("anshul",'mp',2001)//2001 is extra argument which does not have any parameter to store
    
        details2()//undefine


        //Write  a js code to get the square of a number

        function square(a){
            var result=a*a
            console.log(`squae of this${a} is =${result} `);

            return'hello'


        }
        square(2)
        console.log(square(2));

        //write the js code for cude of a number

        function cude(n1){
            let result =n1*n1*n1
            console.log(`the cude of ${n1} is =${result}`);
            return result 
        }
        cude(2)

        console.log(cude);

        console.log(cude(2));