function addition() {
    var num1 = parseInt(document.getElementById("n1").value);
    var num2 = parseInt(document.getElementById("n2").value);
    var sum = num1 + num2;
    document.getElementById("sum").value=sum;
}



function Avg(){
    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let num3 = parseInt(document.getElementById("n3").value);
    
    let sum = num1+num2+num3;

    let average = sum/3;
    document.getElementById("avg").value=average;

}


function Sum() {
  let n = parseInt(document.getElementById("n1").value);
  let sum = (n * (n + 1)) / 2;
  let avg = sum/n;

  document.getElementById("sum").value = avg;
}


function SumN() {
  let n = parseInt(document.getElementById("n1").value);
  let sum = (n * (n + 1)) / 2;
  document.getElementById("sum").value = sum;
}


function profit(){
    let cop = parseInt(document.getElementById("cp").value);
    let sep = parseInt(document.getElementById("sp").value);

    let pr = sep - cop
    let prp = (pr/cop)*100

    document.getElementById("p").value=prp;
}


function Ang() {
  let num1 = parseInt(document.getElementById("n1").value);
  let num2 = parseInt(document.getElementById("n2").value);
  let sum = num1+num2;
  let ang = 180-sum;
  
  document.getElementById("ang").value = ang;
}


function Si(){
    let p = parseInt(document.getElementById("p").value)
    let t = parseInt(document.getElementById("t").value)
    let r = parseInt(document.getElementById("r").value)

    let si = (p*t*r)/100;

    document.getElementById("si").value=si;

}


function Gs(){
    let sal = parseInt(document.getElementById("sal").value);
    let bp = parseInt(document.getElementById("bp").value);
    let ip = parseInt(document.getElementById("ip").value);

    let bonus = sal*(bp/100);
    let incentive = sal*(ip/100);

    let GrossSal = sal + bonus + incentive;

    document.getElementById("gs").value=GrossSal;
}



