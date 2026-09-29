//add 10 to sum
function sum(){
    let n3=parseInt(document.getElementById("n2").value)
    let result2=0
    for(let i=1;i<=n3;i=i+1){
        result2=result2+10;
    }
    document.getElementById("n1").value=result2
}

//add first 3 numbers
function addsum(){
    let n=parseInt(document.getElementById("mm").value)
    let sum=0
    for (let i=1;i<=n;i=i+1){
        sum=sum+i;
    }
document.getElementById("n").value=sum
}


//print 2 table
function table(){
    let n=parseInt(document.getElementById("nnn").value)
    let result=0;
    for(let i=1;i<=10;i=i+1){
        result= result + n +" x"+ i + "=" + (n*i)+ "\n" ;
    }
    document.getElementById("nn").value=result
}

//factorial of 3
function factorial(){
    let n=parseInt(document.getElementById("f1").value)
    let result1=1
    for(let i=n;i>=1;i=i-1){
        result1=result1*i
    }
    document.getElementById("f2").value=result1
}

//fabonacci series of any numbers
function feb(){
let n1=parseInt(document.getElementById("feb1").value)
let n2=parseInt(document.getElementById("feb2").value)
let result = ""
for(let i=1;i<=10;i=i+1){
let feb=n1+n2
result=result + feb + "\n"
    n1=n2
    n2=feb
}
document.getElementById("feb3").value=result
}

