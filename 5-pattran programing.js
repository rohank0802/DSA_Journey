let prompt =require("prompt-sync")()


//question  find a factorial of 1 4 5 you have 145 fist you have to seprate the number then apply loop for faction on each number
// let n=Number(prompt("Enter a number"))
// let copy=n
// let ans=0

// while(n>0){
//     let dig=n%10
//     let fact=1
//     for(let i=dig;i>=1;i--){
//      fact=fact*i
     
//     }
//     ans=ans+fact
//     n=Math.floor(n/10)
// }
// console.log(ans)
// if(copy===ans)console.log("strong number")
//     else console.log("not strong number")


//question1
// Right Angle Triangle

let a=5
for(let i=1;i<=a;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write("* ")

    }
    console.log()
}

//question2 Inverted right angle tiangle
let b=5
for(let i=b;i>=1;i--){
 for(let j=1;j<=i;j++){
    process.stdout.write("* ")
 }
 console.log()
}

//question3 mirror right angle triangle
let c=5
for(let i=1;i<=c;i++){
    for(let j=1;j<=c-i;j++){
process.stdout.write(" ")
    }

    //rightangle
    for(let j=1;j<=i;j++){
        process.stdout.write("* ")
    }
    console.log()
}


// draw x
let d=5
for(let i=1;i<=d;i++){
    for(let j=1;j<=d;j++){
        if(i===j||i+j===d+1)process.stdout.write("*")
            else process.stdout.write(" ")
    }
    console.log()
}


//draw v
let e=5
for(let i=1;i<=e;i++){
   for(let j=1;j<=e+4;j++){
       if(i-j===0||i+j===e+e)process.stdout.write("*")
           else process.stdout.write(" ")
    }
   console.log()
 }


//draw z
let f=5
for(let i=1;i<=f;i++){
   for(let j=1;j<=f;j++){
       if(i===1||i+j===f+1||i===5)process.stdout.write("*")
           else process.stdout.write(" ")
    }
   console.log()
 }

//question
let g=5
for(let i=1;i<=g;i++){
for(let j=1;j<=g-i;j++){
    process.stdout.write("  ")
}
for(let k=1;k<=i;k++){
    process.stdout.write("* ")
}
console.log()
}
