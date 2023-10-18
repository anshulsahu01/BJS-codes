// 18.	Write a program to find the average of the elements present in an array.
// average = sum/ total

let arr =[1,4,5,78,9,42,51,45,225,22]
console.log(arr.length);

let sum = 0;
let average;

for(let i=0;i<=arr.length-1;i++){
   
        sum =sum+arr[i]
        
}console.log(sum);

average= sum/arr.length
console.log(average);