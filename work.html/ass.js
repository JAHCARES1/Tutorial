function factorial(num = 6) {
  let total = 1;
  for (let i = num; i >= 0; i--) {
    num = 1;
    total *= num;
    num--
  }
  console.log(total)
  return total
}
factorial()