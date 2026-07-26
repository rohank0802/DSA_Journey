let prompt=require('prompt-sync')()
// let n=589
// let rev=0
// while(n>0){
//    let rem= n%10
//     rev=(rev*10)+rem
//     n=Math.floor(n/10)
    
// }
// console.log(rev)

//sum of digit 589
// let n=589
// let sum=0
// while(n>0){

//     sum+=n%10
//     n=Math.floor(n/10)
// }
// console.log(sum)



//3
//check number is antrophic
// function  automorphc(n){
// let sqr=n*n
// let num=0
// while(sqr>0){
//     num=(num*10)+(sqr%10)
//     sqr=Math.floor(sqr/10)
//     if(n.toString().length===num.toString().length)break
// }
// console.log(num)
// let num1=0
// while(num>0){
//     num1=(num1*10)+(num%10)
//     num=Math.floor(num/10)
// }
// console.log(num1)
// if(num1===n)return("yes")
// else return("no")    
// }



// let res=automorphc(376)
// console.log(res)
// let n=76
// let square=n*n
// let temp=n
// while(temp>0){
//     if(temp%10!==square%10){
//         console.log("no")
//         break
//     }
       
//      temp=Math.floor(temp/10)   
//       square=Math.floor(square/10)  
//       if(temp===0){

//           console.log("yes")
//       }
// }


//questiion check number is isbn or not
// let isbn=8175257660
// let count=0
// while(isbn>0){
// count=count+1
// isbn=Math.floor(isbn/10)
// }
// console.log(count)
// if(count!=10)console.log("invalid isbn")
// else{

//     let num=isbn
   
//     let mod=0
//     while(num>0){
//     let dig=num%10
//     mod=mod+(dig*n)
//     count=count-1
//     num=Math.floor(num/10)
    
//     }
//     console.log(mod%11===0?"valid":"invalid")
// }



//question revernce the number
// let num=12345
// let rev=0
// while(num>0){
//   let rem=num%10
//   rev=(10*rev)+rem
//     num=Math.floor(num/10)
// }
// console.log(rev)


//question guess the correct random number
// let random=Math.floor((Math.random()*100)+1)
// let user
// let count=null
// do{
//   count=count+1
// user=Number(prompt("enter a number between 1 to 100 "))
// if(user>random)console.log("to big number")
//   else if(user<random)console.log("to small number")
// else if(user===random)console.log("congratulation you selected correct number")
//   else console.log("please sleect correct number")
// }while(user!==random)
//   console.log(count)



//question
//build a basic calculator
// let cont;
// do{

//   console.log("enter 1 for addition")
//   console.log("enter 2 for subtraction")
//   let n=Number(prompt("enter a number"))
//   switch(n){
//     case 1:{
//       let a=Number(prompt("enter first number"))
//       let b=Number(prompt("enter second number"))
//       console.log(`addition ${a+b}`)
//       break
//     }
//      case 2:{
//       let a=Number(prompt("enter first number"))
//       let b=Number(prompt("enter second number"))
//       console.log(`subtraction ${a-b}`)
//       break
//     }
//   }
//   cont=Number(prompt("enter 10 for continue"))
// }while(cont===10)



//question write a program to check whether a given number is a harshad number or not .a harshed number(or niven Number)is a number that is divisible by the sun of its digits.for example,18 is a harshad number becuase 1+8=9,and 19%9==0
// let again;
// do{
// let num=Number(prompt("enter a number"))
// let num1=num
// let add=0
// while(num>0){

//   let val=num%10
//   add=add+val
//   num=Math.floor(num/10)
// }
// console.log(add)
// if(num1%add===0)console.log("harshed number")
//   else console.log("no")
// again=Number(prompt("press 10 to start again loop"))
// }while(again===10)


//question
// let  num=60

// if(num===0||num===1){
//   console.log("no prime factors")
//   return
// }

// while(num%2===0){
//   process.stdout.write("2")
//   num/=2
// }
// for(let i=3;i<=Math.floor(Math.sqrt(num));i+=2){
//   while(num%i===0){
//     process.stdout.write(i+"")
//     num/=i
//   }
// }
// if(num>2){
//   process.stdout.write(num.toString())
// }



//question
// check the number is neon on not

// let num=10
// let sqr=num*num
// let sqrnum=sqr
// let sum=0

// while(sqrnum>0){
// let val=sqrnum%10
// sum=sum+val
// sqrnum=Math.floor(sqrnum/10)
// }
// if(num===sum)console.log("its a neon number")
//   else console.log("not neon number")



//question
//chekc wheather the given number is armstrong or not

// let num=9474
// let num1=num
// let sum=0
// let length=num.toString().length
// while(num>0){

// let val=num%10
// sum=sum+val**length
// num=Math.floor(num/10)
// }
// if(num1===sum)console.log("armstrong")
//   else console.log("no")


  