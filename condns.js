//vowels :
function lowuper() {
  let ch = document.getElementById("n1").value;
  let result1;
  if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) {
    result1 = ch + " is a vowel";
  } else {
    result1 = ch + "is not a vowel";
  }
  document.getElementById("n2").value = result1;
}

//number b/w 1 to 10 :
function number() {
  let num = parseInt(document.getElementById("a1").value);
  let result2;
  if (num >= 1 && num <= 10) {
    result2 = num + "num is b/w 1 to 10";
  } else {
    result2 = num + "num is not blw 1 to 10";
  }
  document.getElementById("a2").value = result2;
}

//character is uppercase :
function uppercase() {
  let num1 = document.getElementById("b1").value;
  let result3;
  if (num1 >= "A" && num1 <= "Z") {
    result3 = num1 + "is a uppercase";
  } else {
    result3 = num1 + "is not a uppercase";
  }
  document.getElementById("b2").value = result3;
}

// character is lowercase:
function lowercase() {
  let num2 = document.getElementById("c1").value;
  let result4;
  if (num2 >= "a" && num2 <= "z") {
    result4 = num2 + "is a lowercase";
  } else {
    result4 = num2 + "is not a lowercase";
  }
  document.getElementById("c2").value = result4;
}

//vowel or not :
function vowel() {
  let ch = document.getElementById("d1").value;
  let result5;
  if (ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
    result5 = ch + "is a vowel";
  } else {
    result5 = ch + "is not a vowel";
  }
  document.getElementById("d2").value = result5;
}

//digit or not
function digit() {
  let n = parseInt(document.getElementById("e1").value);
  let res;
  if (n >= 0 && n <= 9) {
    res = n + " is a digit";
  } else {
    res = n + " is not a digit";
  }
  document.getElementById("e2").value = res;
}

//password and logic
function login() {
  let name = document.getElementById("g1").value;
  let password = document.getElementById("g2").value;
  let result6;
  if (name == "devi" && password == "devi@123") {
    result6 = "login successfully";
  } else {
    result6 = "invalid password";
  }
  document.getElementById("g3").value = result6;
}
