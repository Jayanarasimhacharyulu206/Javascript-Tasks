//Even NUmbers logic
// n = 10;
// for (i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//fibonacci
// let n = 10;
// let n1 = 0;
// let n2 = 1;
// for (let i = 1; i <= n; i++) {
//   console.log(n1);
//   n2 = n1 + n2;
//   n1 = n2 - n1;
// }

//10 to 15 divisible by 5
// for(i=10;i<=15;i++){
//   if(i%5==0){
//     console.log(i);

//   }
// }

//without % even or Odd
// n = 7
// r = parseInt(n/2)
// if((r * 2) == n){
//   console.log("Even");
// }
// else{
//   console.log("Odd");
// }

//sum of factors
// let n = 6
// sum = 0
// for(i=1;i<=6;i++){
//   if(n%i==0){
//     sum += i
//   }
// }
// console.log(sum);

//perfect Number
// let n = 496;
// sum = 0;
// for (i = 1; i < n; i++) {
//   if (n % i == 0) {
//     sum += i;
//   }
// }
// if (sum == n) {
//   console.log("Perfect");
// } else {
//   console.log("Not Perfect");
// }
// console.log(sum);

// let n = 120;
// while (n >= 60) {
//   console.log(n);
//   n -= 20
// }

//display the digits in given number in n reverse order
// let n = 345
// while(n!=0){
//   let d = n % 10
//   console.log("digit:",d);
//   n =parseInt(n/10)
//   console.log("n:",n);
// }

//count the digits in given number
// let n = 124
// let rev = 0
// console.log("n:",n);

// while(n!=0){
//   let ld = n % 10
//   rev = (rev*10) + ld
//   n = parseInt(n/10)
// }
// console.log("rev:",rev);

//pallindrome or not
// let n = 2002
// let t = n
// let rev = 0
// console.log("n:",n);
// while(t!=0){
//   let ld = t % 10
//   rev = (rev*10) + ld
//   t = parseInt(t/10)
// }
// if(n === rev){
//   console.log(n,"is Pallindrome");

// }else{
//   console.log(n,"is Not Pallindrome");

// }

//display even digits from the number
// let n = 32547359
// let c = 0
// while(n!=0){
//   let r = n % 10
//   if(r % 2 === 1){
//     c += 1
//   }
//   n = parseInt(n/10)
// }
// console.log(c);

//display the largest digit from the given Number
// n = 43253
// max = 0
// while(n!=0){
//   let ld = n % 10
//   if(ld > max){
//     max = ld
//   }
//   n = parseInt(n/10)
// }
// console.log("Max digit is:",max);

// n = 43253
// small = 9
// while(n!=0){
//   let ld = n % 10
//   if(ld < small){
//     small = ld
//   }
//   n = parseInt(n/10)
// }
// console.log("small digit is:",small);

// let n = 5
// for(i=21;i<32;i++){
//     if(i % n == 0){
//         console.log(i);
//         break;

//     }
// }

// let n = 20
// let n2 = 30
// for(let i=n;i<=n2;i++){
//     let t = n+3
//     if(i<t){
//         console.log(i);
//     }
//     else{
//         break;
//     }
// }

// let n = 1924016
// while(n!=0){
//     let ld = n % 10
//     if(ld < 3){
//         console.log(ld);
//         break
//     }
//     n = parseInt(n/10)
// }

function fact() {
  let n = 5;
  let f = 1;
  for (let i = n; i >= 1; i--) {
    f *= i;
  }
  return f;
}
let factof = fact();
console.log(factof);
