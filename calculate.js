function calculate(operator, num1, num2)
{
switch (operator) {
  case"+":
  console.log(num1 + num2)
    break;
  case"-":
  console.log(num1 - num2)
  break;
  case"*":
  console.log(num1 * num2)
  break;
  case"/":
  console.log(num1 / num2)
  break;
  default:
  console.log("invalid input")
    break;
}}
calculate("-", 40, 50)

