function Digit(){
    let num=parseInt(document.getElementById("n").value)
    if(num>=100 && num<=999){
        document.getElementById("result").value="3-digit number"
    }
    else{
        document.getElementById("result").value="Not a 3-digit number"
    }
}

function Divisible(){
    let num1=parseInt(document.getElementById("n1").value)
    if(num1%3==0&&num1%5==0){
        document.getElementById("result1").value="Divisible"
    }
    else{
        document.getElementById("result1").value="Not Divisible"
    }
}

function Triangle(){
    let s1=parseInt(document.getElementById("side1").value)
    let s2=parseInt(document.getElementById("side2").value)
    let s3=parseInt(document.getElementById("side3").value)
    if(s1+s2>s3&&s2+s3>s1&&s1+s3>s2){
        document.getElementById("result2").value="Valid Triangle"
    }
    else{
        document.getElementById("result2").value="Not a Valid Triangle"
    }
}

function Multiple(){
    let num2=parseInt(document.getElementById("num").value)
    if(num2%10==0){
        document.getElementById("result3").value="Multiple of 10"
    }
    else{
        document.getElementById("result3").value="Not a Multiple of 10"
    }
}

function ElectricityBill(){
    let units=parseInt(document.getElementById("num1").value)
    if(units>=0&&units<=100){
        bill=units*2
        document.getElementById("result4").value=bill
    }
    else if(units<=101 && units<=200){
        bill=units*3
        document.getElementById("result4").value=bill
    }
    else if(units<=201 && units<300){
        bill=units*5
        document.getElementById("result4").value=bill
    }
    else {
        bill=units*7
        document.getElementById("result4").value=bill
    }
}

function Age(){
    let age=parseInt(document.getElementById("num2").value)
    if(age<13){
        document.getElementById("result5").value="Child"
    }
    else if(age>=13&&age<=19){
        document.getElementById("result5").value="Teenager"
    }
    else if(age>=20&&age<=60){
        document.getElementById("result5").value="Adult"
    }
    else{
        document.getElementById("result5").value="Senior Citizen"
    }
}

function Discount(){
    let amt=parseInt(document.getElementById("num3").value)
    if(amt<1000){
        document.getElementById("result6").value=amt
    }
    else if(amt>=1000&&amt<5000){
        discount=amt*(10/100)
       document.getElementById("result6").value=discount
    }
    else if(amt>=5000&&amt<10000){
        discount=amt*(20/100)
       document.getElementById("result6").value=discount
    }
    else{
          discount=amt*(30/100)
       document.getElementById("result6").value=discount
    }
}

function Season(){
    let month=parseInt(document.getElementById("num4").value)
    if(month==1||month==2||month==12){
        document.getElementById("result7").value="winter"
    }
    else if(month>=3&&month<=5){
        document.getElementById("result7").value="Spring"
    }
     else if(month>=6&&month<=8){
        document.getElementById("result7").value="Summer"
    }
     else if(month>=9&&month<=11){
        document.getElementById("result7").value="Autumn"
    }
     else {
        document.getElementById("result7").value="Enter from 1 to 12"
    }
}

function Leapyear(){
    let year=parseInt(document.getElementById("num5").value)
   if(year%400==0){
    document.getElementById("result8").value="Leap Year"
    }
   else if(year%4==0&&year%100!=0){
     document.getElementById("result8").value="Leap Year"
    }
  else{
     document.getElementById("result8").value="Not a  Leap Year"
  }
}

function Triangletype(){
    let s4=parseInt(document.getElementById("side4").value)
    let s5=parseInt(document.getElementById("side5").value)
    let s6=parseInt(document.getElementById("side6").value)
    if(s4==s5&&s5==s6){
        document.getElementById("result9").value="Equilateral Triangle"
    }
    else if(s4==s5||s5==s6||s6==s4){
        document.getElementById("result9").value="Iscosceles Triangle"
    }
    else{
        document.getElementById("result9").value="Scalene Triangle"
    }
}

function Donate(){
    let age=parseInt(document.getElementById("ag").value)
    let weight=parseInt(document.getElementById("we").value)
    if(age>=18&&age<=60){
       if(weight>50){
       document.getElementById("result10").value=("Eligible to donate blood");
        }
       else{
        document.getElementById("result10").value=("Candidate is underweight."); 
       }
    }   
    else{
     document.getElementById("result10").value=("Candidate is underage.");
    } 
}

function Grade(){
    let m1=parseInt(document.getElementById("mark1").value)
    let m2=parseInt(document.getElementById("mark2").value)
    let m3=parseInt(document.getElementById("mark3").value)
    let m4=parseInt(document.getElementById("mark4").value)
    if(m1>21&&m2>21&&m3>21&&m4>21){
    avg=(m1+m2+m3+m4)/4
    if(avg>90){
        document.getElementById("result11").value=("Grade:O");
       }
    else if(avg>70&&avg<=90){
       document.getElementById("result11").value=("Grade:A");
    }
     else if(avg>50&&avg<=70){
        document.getElementById("result11").value=("Grade:B");
    }
     else if(avg>40&&avg<=50){
        document.getElementById("result11").value=("Grade:C");
    }
     else if(avg>36&&avg<=40){
        document.getElementById("result11").value=("Grade:D");
    }
    else{
        document.getElementById("result11").value=("Fail");
    }
}
else{
    document.getElementById("result11").value=("The candidate is fail in subjects"); 
}
}

function Scholarship(){
    let Age1=parseInt(document.getElementById("age1").value)
    let score=parseInt(document.getElementById("sc").value)
if(Age1>=18){
    if(score>86){
        document.getElementById("result12").value=("Eligible for scholarship");
    }
    else{
      document.getElementById("result12").value=("Insufficient score");
    }
}
else{
    document.getElementById("result12").value=("Insufficient Age");
    
}
}