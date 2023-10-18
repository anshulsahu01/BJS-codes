// 10.	Write a program to find the sum of all even numbers in an array.

let arr=[12,4,5,47,8,5,,7,2,5,88,652,5]

let sum=0

for(let i=0;i<=arr.length-1;i++){
    if(arr[i]%2==0){
        sum=sum+arr[i]
    }

}
console.log(sum);
