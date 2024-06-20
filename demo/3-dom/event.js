// Ajout d'un événement de type survol sur l'image
// 1. Séléctionner l'élément
// 2. Greffer un événement
// 3. Ecrire les opérations à effectuer lorsque l'événement aura lieu (fonction de callback)
const imgElt = document.querySelector('img')
// callback avec une fonction anonyme pour les opérations uniques
imgElt.addEventListener('mouseenter', function(event) {
    console.log('event mouseenter', event) // objet qui caractérise l'événement qui a lieu
    const h1 = document.querySelector('h1')
    h1.innerHTML = 'Survol de l\'image'
})

// callback avec une fonction nommée pour des opérations communes ou utilisées dans d'autres événements
imgElt.addEventListener('mouseleave', mouseLeaveEvent)

function mouseLeaveEvent(e) {
    console.log('event mouseleave', e)
    const h1 = document.querySelector('h1')
    h1.innerHTML = 'Fin survol de de l\'image'
}