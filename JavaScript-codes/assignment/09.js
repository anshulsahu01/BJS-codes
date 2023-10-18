// 9.	Write a program to find the maximum element in the array.

let arr=[454,41,5,25,4888,95,254,78,22,66,88,120004]

let max=arr[0]

for(let i=0;i<=arr.length-1;i++){
    if(arr[i]>max){
        max=arr[i]

    }
}
console.log(max);