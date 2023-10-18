// 2.	Write a program in JavaScript to print all the elements present in the even index of an array.


let arr =['one',1,2,3,4,5,6,7,8,9,0]
console.log(arr[0]);

for(let i=0;i<=arr.length;i++){
    if(i%2==0){
        console.log(arr[i]);
    }

}