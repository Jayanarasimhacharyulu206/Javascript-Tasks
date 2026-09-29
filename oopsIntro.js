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

//Instance Variable
// class Test{
//     myName = "Narasimha";
//     m1(){
//         console.log("My Name is:",this.myName);
//     }
// }
// let t = new Test();
// t.m1();
// console.log(t.myName);

// class Test{
//     myName="Narasimha";
// }
// class Test2{
//     m2(){
//         let t1 = new Test();
//         console.log("I am m2() of Test2:",t1.myName);
//     }
// }
// let t2 = new Test2();
// t2.m2();

// class OopEx {
//   display() {
//     console.log("My Name is:", this.name);
//     console.log("My Age is:", this.age);
//     console.log("My Village is:", this.village);
//   }
// }
// let obj = new OopEx();
// //Creting Instance variable outside the class by using Object
// obj.name = "Narasimha";
// obj.age = 21;
// obj.village = "Mellacheruvu";

// obj.display();


// class Student {
//   displayDetails() {
//     console.log("My Name is:", this.name);
//     console.log("My Age is:", this.age);
//     console.log("My Village is:", this.village);
//   }
// }
// let s1 = new Student();
// s1.name = "Narasimha";
// s1.age = 21;
// s1.village = "Mellacheruvu";
// s1.displayDetails();
// console.log(".................");

// let s2 = new Student();
// s2.name = "Dileep";
// s2.age = 23;
// s2.village = "Mellacheruvu";
// s2.displayDetails();


// class Student{
//     setData(name,age,course){
//         this.myName = name;
//         this.myAge = age;
//         this.myCourse = course;
//     }
//     displayDetails(){
//         console.log("My Name is:",this.myName);
//         console.log("My Age is:",this.myAge);
//         console.log("My Course is:",this.myCourse);
//     }
// }
// let s1 = new Student();
// s1.setData("Narasimha",21,"Python");
// s1.displayDetails();




class Bank{
    static bankName = "DP Bank";
    setData(acNo,acHdName,acBal){
        this.myacNo = acNo;
        this.myacHdName = acHdName;
        this.myacBal = acBal;
    }
    displayAccDetails(){
        console.log("My Bank Name:",Bank.bankName);
        console.log("My Account Number is:",this.myacNo);
        console.log("My Account Holder Name:",this.myacHdName);
        console.log("My Account Balance is:",this.myacBal);
        
    }
}
console.log("..............User 1 Details...........");
let u1 = new Bank();
u1.setData(12232,"Narasimha",1000000);
u1.displayAccDetails();
console.log("..............User 2 Details...........");
let u2 = new Bank();
u2.setData(12233,"Dileep",5000000);
u2.displayAccDetails();
console.log("..............User 3 Details...........");

let u3 = new Bank();
u3.setData(12234,"Chanti",200000);
u3.displayAccDetails();



