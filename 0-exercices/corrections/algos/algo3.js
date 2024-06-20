
function calcTTC(ht, rate) {
  // idem que ht + ht * (rate/100) : factorisation
  return ht * (1 + rate / 100);
}
