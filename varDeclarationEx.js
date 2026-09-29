
//1st
// var can be redeclared but let and const cannot be redeclared

// var n = 20;
// var n = 50;


// let n = 10;
// let n = 20;


// const n = 40;
// const n = 50;

// console.log(n);




//2nd

//modification possible
// var a = 10;
// console.log("before : ",a);

// a = 20;

// console.log("after : ",a);

//modification possible
// let a = 10;
// console.log("before : ",a);

// a = 20;

// console.log("after : ",a);

//modification not possible
// const a = 10;
// console.log("before : ",a);

// a = 20;

// console.log("after : ",a);




//3rd

//var and let can be supposed to initialize while const can be initialized when the variable is declared 

// var a;
// console.log("var:",a);

// let a;
// console.log("let:",a);

// const a;
// console.log("const:",a);


//4th var works within the function but let,const can work with in the block
// function varEx(){
//     if(true){
//         var n = 10;
//         console.log("Var:inside",n);   
//     }
//     console.log("Var:outside",n);
// }
// varEx();


// function letEx(){
//     if(true){
//         let n = 10;
//         console.log("let:inside",n);   
//     }
//     console.log("let:outside",n);
// }
// letEx();


// function constEx(){
//     if(true){
//         const n = 10;
//         console.log("const:inside",n);   
//     }
//     console.log("const:outside",n);
// }
// constEx();



//5th

//var n;   -- Hoisting:here the declaration is moved to top of the scope called hoisting
// console.log(n);   //undefined
// var n = 10;


//let n;   -- Variable is exist but cannot be access
// console.log(n);   
// let n = 10;

//var n;   -- Variable is exist but cannot be access
// console.log(n);   
// const n = 10;
