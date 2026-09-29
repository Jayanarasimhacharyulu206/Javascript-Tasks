// class Student{
//     color="black";
//     static talk(){
//         console.log("Student is always talking");
//     }
// }
// Student.talk()

// class Greet{
//     static sayHello(){
//         console.log("Hello Good Morning....");

//     }
// }
// Greet.sayHello();

//static method with input without return
// class Institute{
//     static instituteName(name){
//         console.log("Institute Name is:",name);

//     }
// }
// Institute.instituteName("Fullstack Experts Academy");

//static method without input with return
// class Test{
//     static add(){
//         return 10+20;
//     }
// }
// console.log("Sum is:",Test.add());

//static method with input with return
// class MyName{
//     static myName(name){
//         return name;
//     }
// }
// console.log(MyName.myName("Narasimha"));

// class Mo{
//     static add(){
//         console.log("Sum is:",x+y);
//     }
//     static sub(a,b){
//         console.log(a - b);
//     }
//     static mul(){
//         return x*y;
//     }
//     static div(a,b){
//         return a/b;
//     }
// }
// let x = 50;
// let y = 20;
// Mo.add();
// Mo.sub(x,y);
// console.log(Mo.mul());
// console.log(Mo.div(x,y));


//with input without return
// class palindrome{
//     static num(n){
//         let t=n
//         let  rev=0
//         while(t>0){
//             rev=rev*10+t%10
//             t=parseInt(t/10)
//         }
//         if(rev==n){
//             console.log(n,"is palindrome");
            
//         }
//         else{
//             console.log(n,"is not palindrome");
            
//         }
        
//     }
// }
// palindrome.num(1221)

//check num is perfect or not
//with input and with return

 class perfect{
    static num(number){
        let l=number
        let i=1
       let sum=0
        while(i<l){
            if(number%i==0){
                sum+=i

            }
            i+=1
        }
        if(sum==number)
            {
                return number+" is perfect number"
            
        }
        else{
            return number+" is not a perfetct Number"
            
        }

    } 
 } 
 console.log(perfect.num(20));