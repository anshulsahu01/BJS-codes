// 6.	Write a program to print all the elements present in the odd index of an array in reverse order.

let arr =['one',1,2,3,4,5,6,7,8,9,0]
console.log(arr.length);

for(let i=arr.length;i>=0;i--){

    console.log("hey for check");
    if(i%2!=0){
        console.log(arr[i-1]);
        
    }
}