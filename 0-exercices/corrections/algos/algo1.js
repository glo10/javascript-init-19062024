function getGeneration(age) {
  if (age <= 10) {
    return "Enfant";
  } else if (age > 10 && age < 18) {
    return "Adolescent";
  } else if (age < 50) {
    return "Majeur";
  } else {
    return "Senior";
  }
}

console.log(getGeneration(5))
console.log(getGeneration(10))
console.log(getGeneration(17))
console.log(getGeneration(18))
console.log(getGeneration(50))
console.log(getGeneration(51))