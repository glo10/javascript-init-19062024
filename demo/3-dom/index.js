/**
 * 1. Sélectionner un élément à partir de l'objet document 
 * avec les méthodes querySelector() et querySelectorAll()
 */

// A partir des tags (balises HTML)
const h1 = document.querySelector('h1')
console.dir('h1', h1)
console.dir('header depuis h1', h1.parentElement)
const paragraphs = document.querySelectorAll('p') // Tous les paragraphes
console.dir('paragraphs', paragraphs)
const paragraph = document.querySelector('p') // Tout premier paragraphe du document
const footer = document.querySelector('footer')
const h2 = footer.querySelector('h2') // h2 à l'intérieur du footer
console.log('h2 footer', h2)

// A partir de l'ID, sélécteur prefixé par un #
const p = document.querySelector('#p1')
console.log('p', p)
// A partir de la classe, sélecteur prefixé par .
const h1Class = document.querySelector('.header-1')
console.log('h1 à parti de la classe', h1Class)