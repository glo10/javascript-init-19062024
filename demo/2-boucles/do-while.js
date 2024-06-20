/**
 * Do while, similaire à while mais la condition est vérifiée à la fin
 */
const numbers = [1,25,238]
let i = 0
do {
    console.log(i, numbers[i])
    i++
} while(i > numbers.length)