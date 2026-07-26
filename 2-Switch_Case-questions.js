let prompt=require('prompt-sync')()

//question 1
// let wd= (prompt("enter your string"))
// let vovel=0
// let consonent=0
// for(let i=0;i<=wd.length ;i++){
// let ch=wd.charAt(i)
// switch(ch){
//     case "a":
//         case "e":
//             case "i":
//                 case "o":
//                     case "u": vovel+=1;
//                     break;
//                     default:consonent++

// }
// }
// console.log(`consonent ${consonent}`)
// console.log(`vovels ${vovel}`)


//question2
let int1= Number(prompt("enter your Number"))
let int2= Number(prompt("enter your Number"))
let int3= Number(prompt("enter your Number"))

if(int1===int2||int1===int3||int2===int3){
    console.log("both the nu arwe equal")
}

else if(int2>=int1 && int2>=int3){
    console.log(`int2 is grater ${int2}`)

}
else if(int1>=int2 && int1>=int3){
    console.log(`int 1 is grater ${int1}`)

}

else{
  console.log(`int3 is grater ${int3}`)
}