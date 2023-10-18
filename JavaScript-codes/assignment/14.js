// 14.	Write a program to find the product of all even numbers in a array.
let arr =[1,4,5,78,9,42,51,45,225,22]

let sum = 1;

for(let i=0;i<=arr.length-1;i++){
    if(i%2==0){
        sum =sum*arr[i]
        

    }
}console.log(sum);