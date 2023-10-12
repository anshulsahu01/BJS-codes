// var d = new Date()
// console.log(d);

// var current =d.getFullYear()
// console.log(current);

// console.log(d.getMinutes());
// console.log(d.getMonth());
// console.log(d.getDay());


// output
// 2023-10-11T03:33:06.008Z
// 2023
// 3
// 9
// 3



// write a js code to get the current day

 

var weekDay=['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday']

 

var d= new Date()

 

var w=d.getDay() //3

 

console.log(weekDay[w])

// Wednesday outPut


//for year




// write a js to get the current age using function expression

 

// var details= function(){

//     let firstName='Sachin'

//     let lastName='Tendulkar'

//     let dob=1973

//     console.log(`${firstName} ${lastName}  dob is ${dob}`)

//     let d= new Date()

//     return d.getFullYear()-dob

// }

// console.log('age '+details())



/// second way of creating an array using new key word Syntex 
//  var arr = new Array()

//  arr[0]='ansnul'
//  arr[1]='ansnu'
//  arr[2]='ansn'
//  arr[3]='ans'
//  arr[4]='an'

//  console.log(arr);











 //**object */

 var anshul={
 firstName:'anshul',
 lastName:'sahu',
 DOB:12/12/2001,
 Single:true,
}

//crud

//c
console.log(anshul);

//r
console.log(anshul.firstName);

//u
anshul.firstName="anshu"
console.log(anshul.firstName);



//d
delete anshul.Single
console.log(anshul);