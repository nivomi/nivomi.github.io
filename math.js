function doMath(){
  //Get the datums
  var num1 = document.getElementsByName('numone')[0].value;
  var num2 = document.getElementsByName('numtwo')[0].value;
  var oper = document.getElementsByName('oper')[0].value;

  num1 = wordToNumber(num1);
  num2 = wordToNumber(num2);
  //Crunch the operator and do the math to achieve greatness
  var solve;
  switch (oper) {
    case "plus":
      solve = num1 + num2;
      document.getElementsByName('output')[0].innerHTML = solve;
      break;
    case "minus":
      solve = num1 - num2;
      document.getElementsByName('output')[0].innerHTML = solve;
      break;
    case "div":
      solve = num1 / num2;
      document.getElementsByName('output')[0].innerHTML = solve;
      break;
    case "multi":
      solve = num1 * num2;
      document.getElementsByName('output')[0].innerHTML = solve;
      break;
    default:
      document.getElementsByName('output')[0].innerHTML = "Error!";
  }
}

function wordToNumber(word) {
  word = word.toLowerCase();
  switch (word) {
    case "one":
      return 1;
    break;
    case "two":
      return 2;
    break;
    case "three":
      return 3;
    break;
    case "four":
      return 4;
    break;
    case "five":
      return 5;
    break;
    case "six":
      return 6;
    break;
    case "seven":
      return 7;
    break;
    case "eight":
      return 8;
    break;
    case "nine":
      return 9;
    break;
    default:
      alert("Please enter only words representing numbers between one and nine, thank ye kindly");
      return 0;
  }

}
