//***************************Reverse string ************************
function reversestr(str) {
  var revstr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    revstr += str[i];
  }
  return revstr;
}

//*****************************Count Characters:**********************
function countChar(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}
//********************Capitalize Words ***************/
function Capwords(str) {
  var phrase = str.split(" ");
  for (var i = 0; i < phrase.length; i++)
    phrase[i] = phrase[i][0].toUpperCase() + phrase[i].slice(1);
  return phrase.join(" ");
}
// ***********************min max tableau ***************************
function minMax(arr) {
  var min = arr[0];
  var max = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  return [min, max];
}
//***********************SumOfArray***************************************/
function Sumarray(arr) {
  var sum = 0;
  for (var el of arr) {
    sum += el;
  }
  return sum;
}
//*********************Conditionfunction************ */
function even(arr) {
  for (let el of arr) {
    if (el % 2 === 0) {
      console.log(el + " " + "is even");
    }
  }
}

//***********************factoriel**********/
function factorial(n) {
  if (n < 0) {
    return "choose a positiv number";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  var fact = 1;
  for (var i = n; i > 1; i--) {
    fact *= i;
  }
  return fact;
}
//*******************Prime Number************************ */
function prime(n) {
  if (n <= 1) {
    console.log(n + " n'est pas un nombre premier  ");
    return false;
  }
  for (let i = 2; i < n / 2; i++) {
    if (n % i === 0) {
      console.log(
        n + " est divisible par " + i + ", c'est pas un nombre premier"
      );
      return false;
    }
  }
  console.log(n + " est un nombre premier");
  return true;
}
//*******************Fibonacci************************ */
function fibonacci(n) {
  var fibo = [0, 1];
  for (var i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
