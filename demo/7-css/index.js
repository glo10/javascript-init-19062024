// Manipulation du CSS avec JS
document.querySelector('h1').style.backgroundColor = 'green'

// Avec l'attribut style depuis la propriété style sur l'élément

// Avec l'attribut style depuis la méthode setAttribute()
document.querySelector('h1').setAttribute('style', 'text-align:center')

// Avec les classes CSS qu'on rajoute à l'élément
// ne supprime les classes déjà existantes
// document.querySelector('h1')
//     .classList
//     .add('title')
// supprime les autres classes déja existantes
document.querySelector('h1').setAttribute('class', 'title')
