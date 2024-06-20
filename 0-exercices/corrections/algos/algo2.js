/**
 * 
 * @param  {...any} args plusieurs arguments séparées par des virgules, exemple calvAvg(10,15,20)
 * @returns number
 */
function calcAvg(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum / args.length;
}

/**
 * 
 * @param {Array} numbers tableau fixe des nombres
 * @returns number
 */
function calcAvgArray(numbers) {
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum / numbers.length;
}

console.log(calcAvg(10,15))
console.log(calcAvg(20,15, 17.5))
console.log(calcAvg(10))
console.log(calcAvg(1,2,3,4,5,6,7,8,9,10,11,12,13))