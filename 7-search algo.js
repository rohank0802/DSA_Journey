let prompt=require("prompt-sync")()
//1 linear search 
//in this search goes to line by line 
// example
//find 67 from the givven array
// let arr=[23,56,78,45,67,34,58,9,34,]
// index=-1
// let i=0
// while(i<=arr.length-1){
//     if(arr[i]===67){
//         index=i
//         break;
//     }
//     i++
// }
// console.log(index===-1?"not found":`found ${i}`)


//binary search
// remember binary search algo always apply on sorted data ,weather that data is partition sorted ,range sorted or array sorted
//example
// let arr=[2,5,8,19,45,67,78,88,94]
// let t=Number(prompt("enter a number  "))
// let st=0
// let end=arr.length-1
// let index=-1
// while(st<=end){
//     let mid=Math.floor((st+end)/2)
//     if(arr[mid]===t){
//         index=mid
//         break
//     }
//     else if(arr[mid]<t){
//         st=mid+1
//     }
//     else end=mid-1
// }
// if(index==-1)console.log("not found")
// else console.log(`element found at :${index}`)




//question 1  Find the index of the target. target is 23
// let arr=[2,5,8,12,16,23,38,56,72,91]
// let t=23
// let st=0
// let end=arr.length-1

// let index=-1
// while(st<=end){
//     let mid=Math.floor((st+end)/2)
    
   
//     if(arr[mid]===t){
//         index=mid
//         break;
//     }
//     else if(arr[mid]<t){
//         st=mid+1
//     }
//     else end=mid-1
// }
// let result =index===-1?"not found ":`index of 23 is: ${index}`
// console.log(result)


//question 2 target is 20, return -1 it not found
// let arr=[3,7,11,18,25,31,42]
// let t=20
// let st=0
// let end=arr.length-1
// let index=-1
// while(st<=end){
//     let mid=Math.floor((st+end)/2)
//     if(arr[mid]===t){
//     index=mid
//     break
//     }
//     else if(arr[mid]<t){
//         st=mid+1
//     }
//     else end=mid-1
// }
// let result=index===-1?`not found: ${index}`:`index of tr=arget 20 is :${index}`
// console.log(result)


//question 3 find the index where the target should be inserted
//target=2
// let arr=[1,3,5,6]
// let t=2
// let strt=0;
// let end=arr.length-1
// let index=-1
// while(strt<=end){
//     let mid=Math.floor((strt+end)/2)
//     if(arr[mid]===t){
//         return mid
//     }
//     else if(arr[mid]<t){
//         strt=mid+1
//     }
//     else end=mid-1

// index=strt
// }
// console.log(` the target should be inserted at ${index} index place`)


// question 4 find the first occurance. target 2
// let arr=[1,2,2,2,3,4,5]
// let t=2
// let st=0
// let end=arr.length-1
// let index=-1
// while(st<=end){
//     let mid=Math.floor((st+end)/2)
//     if(arr[mid]===t){
//         index=mid
//         end=mid-1
//     }
//     else if(arr[mid]<t){
//         st=mid+1
//     }
//     else end=mid-1
// }
// console.log("first occurance in target2 is index",index)


// question 5 find the last occurance .target 2
// let arr=[1,2,2,2,3,4,5]
// t=2
// let st=0
// let end=arr.length-1
// let index=-1
// while(st<=end){
//     let mid=Math.floor((st+end)/2)
//     if(arr[mid]===t){
//         index=mid
//         st=mid+1
//     }
//     else if (arr[mid]<t) st=mid+1
//     else end=mid-1
// }
// console.log(` last occurance of trget 2 is index :${index}`)




 //question6: Count how many times the target appears.target=5

 //first finding first occurance
// let arr=[2,2,2,3,4,4,5,5,5,5]
// let t=5
// let st=0
// let end=arr.length-1
// let index1=-1
// while(st<=end){
//     let mid=Math.floor((st+end)/2)
//     if(arr[mid]===t){
//         index1=mid
//         end=mid-1
//     }
//     else if(arr[mid]<t) st=mid+1
//     else end=mid-1
// }
// //finding last occurance
// let st2=0
// let end2=arr.length-1
// let index2=-1
// while(st2<=end2){
//     let mid=Math.floor((st2+end2)/2)
//     if(arr[mid]===t){
//         index2=mid
//         st2=mid+1
//     }
//     else if(arr[mid]<t) st2=mid+1
//     else end2=mid-1
// }
// console.log(`number of times 5 counted in array is: ${(index2-index1)+1}`)



// question 7: Find the first index where the value is greater than or equal to the target
//target = 5
// let arr=[2,4,4,6,8,10]
// let t=5
// let st=0
// let end=arr.length-1
// let index=-1
// while(st<=end){
//     let mid= Math.floor((st+end)/2)
//      if(arr[mid]>=t){
//         index=mid
//         end=mid-1
//     }
//     else st=mid+1
// }
// console.log(`the index where the value is greater and equal to the target is: ${index}`)



//question 8: firnd the first index where the value is greater than the target
//target=4
// let arr=[2,4,4,6,8,10]
//  let t=4
//  let st=0
//  let end=arr.length-1
//  let index =-1
// while(st<=end){
//   let mid=Math.floor((st+end)/2)
//  if(arr[mid]>t){
//         index=mid
//        end=mid-1
//     }
//     else st=mid+1 
// }
// console.log(index)


//question 9: find the floor value .target=6
//let arr=[1,3,5,7,9]

//  let t=6
//  let st=0
//  let end=arr.length-1
//  let value =0
// while(st<=end){
//   let mid=Math.floor((st+end)/2)
//  if(arr[mid]<=t){
//         value=arr[mid]
//        st=mid+1
//     }
//     else end=mid-1
// }
// console.log(value)
// console.log(`the floor value of target 6 is :${value}`)



//question 10: find the ceil value .target =6

let arr=[1,3,5,7,9]

 let t=6
 let st=0
 let end=arr.length-1
 let value =0
while(st<=end){
  let mid=Math.floor((st+end)/2)
 if(arr[mid]>=t){
        value=arr[mid]
       end=mid-1
    }
    else st=mid+1
}
console.log(value)
console.log(`the ceil value of target 6 is :${value}`)