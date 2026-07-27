let prompt =require("prompt-sync")()
//question first deside the lenght of the array and put the number on each index of the array acc to the given lenght

// let n=Number(prompt("enter the lenght of array"))
// let arr=new Array(n)

// for(i=0;i<arr.length;i++){
//     arr[i] =Number(prompt("enter the number"))
// }
// console.log(arr)


//question
// let arr=[10,20,30,40,50]
// let sum=0
// for(let i=0;i<=arr.length-1;i++){
// sum+=arr[i]
// }
// console.log(sum)


//question find the maximum number from the array
//let arr=[4,7,3,9,8,6,1,10,10]
// let greaternum=[0]
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]>greaternum[0]){
//         greaternum[0]=arr[i]
//     }
// }
// let secondgreater=[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>secondgreater[0] && arr[i]!==greaternum[0]){
//     secondgreater[0]=arr[i]
//     }
// }
// console.log(greaternum)
// console.log(secondgreater)

//method 2
// let max=[0]
// let smax=[0]
// if(arr[0]>arr[1]){
//     max[0]=arr[0]
// }
// else smax[0]=arr[0]

// if(arr[0]<arr[1]){
// max[0]=arr[1]
// }
// for(let i=2;i<arr.length;i++){
//     if(arr[i]>max[0]){
//         smax[0]=max[0]
//         max[0]=arr[i]
        
//     }
//     else if(arr[i]>smax[0] && arr[i]!=max[0]){
//         smax[0]=arr[i]
//     }
// }
// console.log(max)
// console.log(smax)


//question reverse the array

// let arr=[1,2,3,4,5,6]
// let reverse=[]
// let j=arr.length-1
// for(let i=0;i<=arr.length-1;i++){
//     reverse[i]=arr[j]
//     j--
// }
// console.log(arr)
// console.log(reverse)
// console.log("hello")

//another method
// let arr=[1,2,3,4,5]
// i=0
// j=arr.length-1

// while(i!=j){
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
//     i++
//     j--
//     console.log(arr)
// }
// console.log("final",arr)


//All zeroes to left and all ones to right
// let arr=[1,1,0,1,0,1,1,0]
// let i=0
// let j=0
// while(i<=arr.length-1){
//     if(arr[i]===0){
        
//         temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         j++
//     }
//     i++
// }
// console.log(arr)


//question
// write a program that accepts an integer n from the user,create an array of size n,takes n integer inputs to fill the array and then calculate and return the sum and mean of the array elements.

// let n=5
// let arr=new Array(n)
// let j=arr.length-1
// let sum=0
// let mean=null
// for(let i=0;i<=arr.length-1;i++){
// let user=Number(prompt("enter the number "))
// arr[i]=user
// sum+=user

// }
// mean=sum/n
// console.log(arr)
// console.log(sum)
// console.log(mean)




// write a program to find theb greatest element in an array and print its value along with its index.The index should be zero-based
// let arr=[6,4,24,57,23,14,56]
// let max=[0]
// let smax=[0]
// if(arr[0]>=arr[1] &&arr[1]<=arr[0]){
//     max[0]=arr[0]
//     smax[0]=arr[1]
// }
// if(arr[1]>=arr[0]&&arr[0]<=arr[1]){
//     smax[0]=arr[0]
//     max[0]=arr[1]
// }
// for(let i=2;i<=arr.length-1;i++){
//     if(arr[i]>=max[0]){
//         smax[0]=max[0]
//         max[0]=arr[i]
//     }
//     else if (arr[i]>=smax[0]&&arr[i]!=max[0]){
//         smax[0]=arr[i]
//     }
// }
// console.log(max)
// console.log(smax)



//question Array left rotation by 1
// let arr=[1,2,3,4,5,6]

// let temp=arr[0]
// for(let i=1;i<=arr.length-1;i++){
//   arr[i-1]=arr[i]
// }
// arr[arr.length-1]=temp
   

// console.log(arr)

//question right rotation
// let arr=[1,2,3,4,5,6]
// let temp=arr[arr.length-1]
// for(let i=arr.length-2;i>=0;i--){
// arr[i+1]=arr[i]
// }
// arr[0]=temp
// console.log(arr)


// left rotation by k time

// let arr=[1,2,3,4,5]
// let k=6
// if(k>=arr.length) k=k%arr.length

// for(j=1;j<=k;j++){
//     let temp=arr[0]
//     for(let i=1;i<=arr.length-1;i++){
//         arr[i-1]=arr[i]
//     }
//     arr[arr.length-1]=temp
// }
// console.log(arr)


//question
// let arr=[1,2,3,7,5]
// let target=12
// let count=0
// for(i=0;i<=arr.length-1;i++){
//     let sum=0
//     for(let j=i;j<=arr.length-1;j++){
//         sum=sum+arr[j]
//         if(sum===12) count++
//     }
// }
// console.log(count)


//question you are given of size n.Your task is to create a new array that contains the sanem elements but in reverse order.finally,print the reversed array

// let arr=[1,2,3,4,5]
// let reverce=[]
// let j=arr.length-1
// for(let i=0;i<=arr.length-1;i++){
//     reverce[i]=arr[j]
//     j--
// }
// console.log(reverce)

// let arr=[1,2,3,4,5,6]
// let i=0
// let j=arr.length-1
// while(i<j){
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
//     i++
//     j--
// }

// console.log(arr)

//question left roation by 1
// let arr=[1,2,3,4,5,6]
// let temp=arr[0]
// for(let i=1;i<=arr.length-1;i++){
//     arr[i-1]=arr[i]
// }
// arr[arr.length-1]=temp

// console.log(arr)


// // move zeroes

// let arr=[0,1,0,1,1,1,0,1,0]
// let i=0
// let j=0
// while(i<=arr.length-1){
//     if(arr[i]===0){
//         let temp=arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         j++
//     }
//     i++
// }
// console.log(arr)


//question calculate the difference for every pair
let arr=[1,2,3,4,5]
let sum=0
let i=0
let j=1
while(i<arr.length-1){
    for(let k=j;k<arr.length;k++){
        let val=arr[i]-arr[k]
        if(val<0){
            val=-val
        }
        sum=sum+val
    }
    i++
    j++
}
console.log(sum)
