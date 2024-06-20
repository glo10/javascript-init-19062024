/**
 * 
 * @param {number} hour 
 * @returns string
 */
function getMoment(hour) {
  if (hour > 6 && hour < 12) {
    return "Matin";
  } else if (hour >= 12 && hour < 18) {
    return "Après-midi";
  } else if (hour >= 18) {
    return "Soirée";
  }
  return "Nuit";
}
