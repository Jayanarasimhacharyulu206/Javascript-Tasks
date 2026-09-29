// /Break 
// First even digit from left
// let num=753914286
// let n=0
// while(num>0){
//     if ((num%10)%2==0){
//         n=num%10

//     }
//     num=parseInt(num/10)
// }
// console.log("the first Even digit from Left is "+n)
// console.log();


// //First prime number between 50 to 100
// for(let i=50;i<=100;i++){
//    let count=0
//     for(let j=1;j<=i;j++){
//      if(i%j==0){
//         count+=1
//      }
//     }
//     if(count==2){
//         console.log("The first prime number between 50 and 100 is "+i);
//         break
//     } 
// }
// console.log();


// //3.First number whose digit sum is 10
// for(let i=10;i<=50;i++){
//     n=i
//    let sum=0
//     for(let j=1;j<=i;j++){
//         digit=n%10
//         sum+=digit
        
//         n=parseInt(n/10)
//     }
//     if(sum==10){
//             console.log("The first number whose digit sum is 10 is "+i);
//             break
//         }
// }
// console.log();


// //4.First number with exactly 3 divisors between 1 and 100
// for(let i=1;i<=100;i++){
//     n=i
//    let count=0
//     for(j=1;j<=i;j++){
//         if(i%j==0){
//             count+=1
//         }
//     }
//     if(count==3){
//         console.log("The first number exactly have 3 divisors from 1 to 100 is "+i);
//         break
//     }
// }
// console.log();


// //5.First 3 consecutive odd numbers occur from 1 to 50
// count=0
//  console.log("The first 3 conecutive odd numbers are ");
// for(let i=1;i<=50;i++){
// if(i%2!=0){
//     count+=1
//     process.stdout.write(i+" ")
// }
// if(count==3){
//     break
// }
// }
// console.log();
// console.log();


// //6.First palindrome between 10 and 500
// for(let i=10;i<=500;i++){
//  let n1=i
//   temp=n1
//   rev=0
//   while(n1>0){
//     digit=n1%10
//     rev=rev*10+digit
//     n1=parseInt(n1/10)
//   }
//   if(rev==temp){
//     console.log("The first palindrome from 10 to 500 is "+i);  
//     break 
//   }
// } 
// console.log();

 
// //7.First perfect number from 1 to 1000
// for(let j=1;j<=1000;j++){
//     n=j
// sum=0
// for(let i=1;i<n;i++){
//     if(n%i==0){
//       sum+=i
//     }   
// }
//  if(sum==n){
//         console.log("The first perfect number is "+j);
//         break
//     }
// } 
// console.log();

// 8 Print the first 5 even numbers.

// let i=1
// while(i<=10){
//     let count=0
//     if(i%2==0){
//         count+=1
//         console.log(i);
        
//     }
//     if(count==5){

//         break
//     }
//     i+=1
// }
// console.log();

// 9 Print the first 5 prime numbers.

// let i=2
// let count=0
// while(i<100){
//     flag=true
//     let n=i
//     let j=2
//     while(j<n){
//         if(n%j==0){
//             flag=false
//         }
//         j+=1
//     }
//     if(flag){
//         console.log(i);
//         count+=1
        
//     }
//     if(count==5){
//         break
//     }
//     i+=1

// }
// console.log();

//10  Print the first 3 numbers divisible by 7.
// let n=7
// let i=1
// let count=0
// while(i<100){
//     if(i%n==0){
//         console.log(i);
//         count+=1
        
//     }
//     if(count==3){
//         break
//     }
//     i+=1
    
// }

// console.log();
//continue
// Extract 5832461, printing only even digits.
// let num=5832461

// while(num>0){
//     if((num%10)%2==0){
//         num=parseInt(num/10)
//         continue

//     }
//     else{
//         console.log(num%10);
        
//     }
//     num=parseInt(num/10)
// }

// console.log();

// Extract 1432578, skipping odd digits.
// let num=1432578

// while(num>0){
//     if((num%10)%2!=0){
//         num=parseInt(num/10)
//         continue

//     }
//     else{
//         console.log(num%10);
        
//     }
//     num=parseInt(num/10)
// }
// console.log();
// Print 1–200, skipping multiples of 3 or 5.

// let i=1
// while(i<200){
//     if(i%3==0 || i%5==0){
//         i+=1
//         continue}
//     console.log(i);
           
//     i+=1
//     }


    
// console.log();

// Print 1–500, skipping numbers with odd digit sum.

// let j=1
// while(j<=500){
// let i=j
// let num=i
// let sum=0
// while(i>0){
//     sum+=i%10
//     i=parseInt(i/10)
//     }
//     if(sum%2==0){
//         console.log(num);
        
// }

//     j+=1
// }
// console.log();

// Print 1–500, skipping numbers containing digit 0.

// let i=1
// while(i<=500){
//     if(i%10!=0){
//         console.log(i);
        
//     }
//     i+=1
// }
// console.log();
// Extract , skip odd digits, stop at 0.
// let n=5830421
// while(n>0){
//     if((n%10)%2!=0){
//         n=parseInt(n/10)
//         continue
//     }
//     console.log(n%10);
//     if(n%10==0){
//         break
//     }
//     n=parseInt(n/10)
// }
// console.log();
// Extract 8325147, print digits until 5.

// let n=8325147
// while(n>0){
//     console.log(n%10);
//     if(n%10==5){
//         break
//     }
//     n=parseInt(n/10)
// }
// console.log();


// Search from 51, skip non-multiples of 9, stop at the first multiple of 9.

// let i=51
// while(i<100){
//     if(i%9==0){
//         console.log(i);
//         break
        
//     }
//     i+=1
// }