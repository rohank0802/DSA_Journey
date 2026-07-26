let prompt=require('prompt-sync')()


// question 1
// let n= Number(prompt("enter your number"))

// if(n%2 === 0){
//     console.log("this is even number")
// }
// else{
//     console.log("this is od number")
// }


//question2
// let a=7
// let b=5
// let c=4
// if(a>b &&a>c)console.log(`${a} a is greater`)
//     else if(b>a && b>c)console.log(`${b} b is greater`)
// else console.log('c is greater')

//question 3
// let year= Number(prompt("enter your number"))
// if(year%4===0 && year%100 !==0)console.log("leap year")
//     else if(year%400 ===0)console.log("leapyear")
// else console.log("not leap")
    

//question4
//  let amount= Number(prompt("enter your number"))
//  if(amount<=5000){
//     let p=0
//     console.log(`your amount is ${amount} this is less than or equal to so there is not discount`)
//  }
//  else if(amount>5000 && amount<=7000){
//     let p=5
//    let dis= (p*amount)/100
//    console.log(`your paying amount is ${amount-dis}`)
//  }
//   else if(amount>7000 && amount<=9000){
//     let p=10
//    let dis= (p*amount)/100
//    console.log(`your paying amount is ${amount-dis}`)}
// else{
//     let p=20
//     let dis=(p*amount)/100
//     console.log(`your paying amount is ${amount-dis}`)
// }



//question5
// let unit= Number(prompt("enter your number"))
// let sum=0
// if(unit>400){
//    let remaig= unit-400
//    sum+=remaig*13
//    unit=400
// }
// if(unit>200 && unit<=400){
//     let rema=unit-200
//     sum+=rema*8
//     unit=200
// }
// if(unit>100 &&unit<=200){
//     let rema=unit-100
//     sum+=rema*6
//     unit=100
// }
//     sum+=unit*4.2
// console.log(`the total elctricity bill is ${sum}`)




//question6
// let month= Number(prompt("enter your month in number"))
// let year= Number(prompt("enter your year"))

// if(month===2){
//     if(year%400===0 || (year%4===0 && year%100 !==0)){
//         console.log(`in this ${year} your entered month days will be ${29}`)
//     }
//     else{
//         console.log(`in this ${year} your entered month days will be ${28}`)
//     }

// }
// else if(month===4 || month===6 || month===9 || month===11 ){
//     console.log(`in this ${year} your entered month days will be ${30}`)
// }
// else{
//     console.log(`in this ${year} your entered month days will be ${31}`)
// }


//question 7
// let num1=Number(prompt());
// let num2=Number(prompt())
// let num3=Number(prompt())
//  if(num1>=num2 && num1>=num3){
//   console.log(num1)
//  }
//  else if(num2>=num1 &num2>=num3){
//     console.log(num2)
//  }
//  else{
//     console.log(num3)
//  }

//question 8
// let day=Number(prompt())
// const days=["sunday","monday","tuesday","wednesday","thrusday","friday",'saturday']

// if(day>=1&&day<=7){
//     console.log(days[day-1])
// }
// else{
//     console.log("invalid number")
// }


//question 9
// let rating=Number(prompt("pease hit rating between 0 to 5 "))
// if(rating<=2){
//     console.log("Flop")
// }
// else if(rating>=2.1 && rating<=3.4){
//     console.log("semit-hit")
// }
// else if(rating>=3.5 &&rating<=4.5){
//     console.log("hit")
// }
// else{
//     console.log("super hit")
// }


//question10
// let check=prompt("enter any letter to check it is voivle or consonent ")
// if(check==="a" ||check==="e" || check==="i" || check==="o" ||check==="u"){
//     console.log("vovel")
// }
// else{
//     console.log("consonent")
// }