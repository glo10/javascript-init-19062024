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
