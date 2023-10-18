//22.	Write a program to find the sum of elements of an array which are multiple of 3 or 5.


let arr =[1,4,5,78,9,42,51,45,225,22]
console.log(arr.length);

for(let i=0;i<=arr.length-1;i++){
    if(arr[i]/3&&arr[i]/5){
        console.log(arr[i]);

    }
}