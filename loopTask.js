function divisible() {
  let num = parseInt(document.getElementById("n1").value);
  for (let i = 10; i <= 50; i++) {
    if (num % 3 == 0 && num % 5 == 0) {
      document.getElementById("res").value = "divisible by both";
    } else {
      document.getElementById("res").value = "Not divisible by both";
    }
  }
}

function countDiv() {
  let c = 0;
  for (let i = 200; i >= 50; i--) {
    if (i % 7 == 0) {
      c += 1;
    }
  }
  document.getElementById("res1").value = c;
}

function printDiv() {
  let res = 0;
  for (let i = 120; i >= 20; i--) {
    if (i % 5 == 0) {
      res += i + ", ";
    }
  }
  document.getElementById("res2").value = res;
}

function avgEven() {
  let sum = 0;
  let c = 0;
  let avg = 0;
  for (let i = 10; i <= 100; i++) {
    if (i % 2 == 0) {
      c += 1;
      sum += i;
      avg = sum / c;
    }
  }
  document.getElementById("res3").value = avg;
}

function avgFact() {
  let number = parseInt(document.getElementById("num").value);
  let avg = 0;
  let c = 0;
  let res = 0;
  let sum = 0;
  for (i = 1; i <= number; i++) {
    if (number % i === 0) {
      res += i + ", ";
      sum += i;
      c += 1;
    }
    avg = sum / c
  }
  document.getElementById("factors").value = res;
  document.getElementById("res4").value = avg;
}
