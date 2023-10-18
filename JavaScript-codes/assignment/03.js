// 3.	Write a program to print all the elements present in the odd index of an array.

let arr=["anshul","aayushi",'geeta','durga','pawan','bijju','ramkumar'];

for(let i=0;i<=arr.length-1;i++){
    if(i%2!=0){
        console.log(arr[i]);

    }
}