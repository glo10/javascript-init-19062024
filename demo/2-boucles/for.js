const numbers = [0,2,3,5,5]
/**
 * Première partie : compteur qu'on nomme généralement i
 * 2eme partie : condition pour éviter la boucle infinie 
 *  Tant que la condition est remplie on rentre dans la boucle
 *  Dès que la condition n'est plus remplie, on sort de la boucle
 * 3 eme partie : incrémentation ou décrémentation
 */
for(let i = 0; i < numbers.length; i++) { // début vers la fin
    console.log('Depuis le début', numbers[i])
}

for(let i = (numbers.length -1); i >= 0; i--) {// fin vers le début
    console.log('Depuis la fin', numbers[i])
}