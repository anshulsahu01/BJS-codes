// 5.	Write a program to print all the elements present in the even index of an array in reverse order.

let arr =['one',1,2,3,4,5,6,7,8,9,0]

for(let i=arr.length;i>=0;i--){

   
    if (i%2==0) {
        console.log(arr[i-1]);
    }
}


//2nd method
