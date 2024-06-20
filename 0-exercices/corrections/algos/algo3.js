function calcAvgArray(numbers) {
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum / numbers.length;
}

function calcTTC(ht, rate) {
  return ht * (1 + rate / 100);
}
