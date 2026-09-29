// sum of Prime number
// let sum_prime=0
// for(let i=20;i<=150;i++){
//     flag=true
//     for(let k=2;k<=i-1;k++){
//     if (i%k==0){
//        flag=false
//        break
//     }
//     }
//     if (flag){
//       sum_prime+=i
//     }
// }
// console.log(sum_prime)

// Average of Perfect Numbers
// let i=1
// let sum_perfect=0
// let count=0
// while(i<=1000){
//      let j=1
//     fact=0
//     while(j<i){
//         if (i%j==0){
//             fact+=j 
//          }
//          j=j+1
//     }
    
// if (fact==i){
//     count+=1
//     sum_perfect+=i
// }
// i=i+1
// }
// console.log(sum_perfect/count)

// Leap Years in a Range
// let i=1900
// while(i<=2026){
// if ((i%4==0 && i%100!=0) | i%400==0){
// console.log(i,"Leaap year")
//      }
// i=i+1
// }  

// Palindrome Numbers
// let i=100
// while(i<=500){
//       rev=0
//       k=i
//       while(k>0){
//          rev=rev*10+(k%10)
//          k=parseInt(k/10)  
//       }
//     if (rev==i){
//      console.log(rev,"palidrome")
//  }
//  i=i+1
// }


// Digit Sum = 10
// let i=1
// while(i<=850){
//     o=i
//     sum=0
//     while(o>0){
//         sum+=(o%10)
//         o=parseInt(o/10)
//     }
//     if (sum==10){
//         console.log(i)
//     }
//     i++
// }

// Pairs with Target Sum
// let i=1
// last=0
// while(i<=50){
//     sum=0
//     let j=i
//     while(j<=50){
//         sum=i+j        
//     if (sum==30){
//         console.log(i,j)
//     }
//      j++
//     }
//     i++
// }



// Exactly 3 Factors
// Print all numbers between 10 and 300 that have exactly 3 factors
// let i=10
// while(i<=300){
//     let j=1
//     count=0
//     while(j<=i){
//         if (i%j==0){
//            count+=1
//         }
//           j++
//     }
//     if (count==3){
//         console.log(i)
//     }
//     i++
// }


// Prime Factors
// let i=20
// while(i<=50){
//     let j=2
//     flag=true
//     while(j<i){
//        if (i%j==0){
//            flag=false
//        }
//        j++
//     }
//     if (flag){
//         console.log(1,i)
//     }
//     i++
// }


// Armstrong Numbers
// let i=100
// while(i<=999){
//     let l=i
//     let temp=i
//     count=0
//     while(l>0){
//         count+=1
//         l=parseInt(l/10)
//     }
//     let k=0
//     let sum=0
//     while(k<count){
//         sum+=(temp%10)**count
//         temp=parseInt(temp/10)
//         k+=1
//     }
//     if (sum==i){
//         console.log(i)
//     }
//     i++
// }


// Maximum Factors
// let e=50
// let max=0
// let x=0
// while(e<150){
//     let p=1
//     let count=0
//     while(p<=e){
//         if (e%p==0){
//             count+=1
//         }
//         p++
//     }
//     if (max<count){
//         max=count
//         x=e
//     }
//        e++
// }
// console.log(x,max)