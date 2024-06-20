// Création d'un élément img
const img = document.createElement('img')
img.src = 'https://sign.m2iformation.fr/images/logom2i-esign.png'
img.alt = 'Logo M2i formation'

const img2 = img
// Rajoutez l'image dans le DOM
const header = document.querySelector('header')

// Remplacement d'un élément par un autre

const ul = document.querySelector('ul')
const newP = document.createElement('p')
newP.innerHTML = '<span>New paragraph</span>'
setTimeout(() => {
    header.append(img)
    ul.replaceWith(newP)
}, 3000)