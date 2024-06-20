// Un utilisateur saisi un département
const dpt = parseInt(prompt('Saisissez un département ?'))
let min = dpt * 1000
const max = min + 1000
const postalCodes = [] // tableau vide
// D'utiliser la boucle while
while(min < max) {
    postalCodes.push(min)  // idem que postalCodes[] = min
    min++
}
// Affichez un tableau avec les codes postaux
console.dir(postalCodes)