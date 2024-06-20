/**
 * Condition d'entrée et de sortie 
 * condition vraie = entrée dans la boucle
 * condition fausse = sorti de la boucle
 * 
 * Condition vérifiée dès le début
 */
let cond = true
while(cond) {
    console.log('ok')
    cond = false
}

const numbers = [1,25,238]
let i = 0
while(i > numbers.length) {
    console.log(i, numbers[i])
    i++
}