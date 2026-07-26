// let prompt=require('prompt-sync')()

//1
// let n=Number(prompt("anter any number "))
// for (i=1;i<=n;i++){
//     console.log(i)
// }


//2

// let n=Number(prompt())
// for (i=n;i>=1;i--){
//     console.log(i)
// }


//3
// let n=Number(prompt())
// let sum=null;
// for(let i=1;i<=n;i++){
// sum+=i
// }
// console.log(sum)


//4
// let n=Number(prompt())
// let ans=""
// for(let i=1;i<=n;i++){
//     if(n%i===0){
//         ans+=i+" "
//     }  
// }
// console.log(ans)


//5
// let start=Number(prompt())
// let end=Number(prompt())
// let odd=0
// let even=0
// for(let i=start;i<=end;i++){
//     if(i%2===0){
//         even +=i
//     }
//     else{
//         odd +=i
//     }
// }
// console.log(`sum of odd number is ${odd}`)
// console.log(`sum of even number is ${even}`)



//6
// let n=Number(prompt())
// for(let i=1 ;i<=10;i++){
//     console.log(`${n} * ${i} = ${n*i}`)
// }


//7
// let n=Number(prompt())
// let sum=0
// for(let i=1 ;i<=n;i++){
//     sum+=i
// }
// console.log(sum)


//8
// let n=Number(prompt())
// let fact=1
// for(let i=n;i>=1;i--){
//     fact =fact*i
// }
// console.log(fact)


//9
// let num1=Number(prompt())
// let num2=Number(prompt())
// let odd=0
// let even=0
// for(let i=num1;i<=num2;i++){
//     if(i%2===0){
//         even+=i
//     }
//     else{
//         odd+=i
//     }
// }
// console.log(` sum of odd number betteen 1 to 10 is:${odd}`)
// console.log(` sum of even number betteen 1 to 10 is:${even}`)



//10
// let num=Number(prompt())
// let arr=[]
// for (let i=1;i<=num/2;i++){
//     if(num%i===0){
//      arr.push(i)
//     }
// }
// arr.push(25)
// console.log(arr)



//11
// let num=Number(prompt())
// count=0
// for(let i=1;i<=num;i++){
//     if(num%i===0){
//         count++
//     }
   
// }
// if(count===2)console.log("prime")
// else console.log("not prime")


// 2nd method
// let count=0
// if(num<=1)console.log("not prime")
// else{

//     for(let i=2;i<=num/2;i++){
//         if(num%i===0){
//             count++
//         }
//     }
//     if(count===0)console.log("prime")
//     else console.log("not prime")
// }


//3rd method
// if(num<=1)console.log(console.log("not prime"))
//     else if(num===2)console.log("prime number")
// else if(num%2===0)console.log("not prime")
//     else{
// let isPrime=true
// for(let i=3;i<=Math.floor(Math.sqrt(num));i+=2)    {
//     if(num%2===0){
//         isPrime=false
//         break;
//     }
// }
// console.log(isPrime?"prime":"not prime")
// }




















let obj={
    title:"hello"
}
console.log(obj.title)


