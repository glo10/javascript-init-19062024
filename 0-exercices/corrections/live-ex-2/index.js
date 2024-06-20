/**
 * 1. Séléctionner tous les inputs sauf le dernier sur les technos
 * 2. Parcourir chaque input et ajouter un event de type "input"
 * 3. Dans la callback (fonction de retour = fonction exécuté lorsque l'event a lieu)
 *  Récupérer le contenu saisi et l'afficher dans le span dédiée
 */

const inputs = document.querySelectorAll('input:not([data-show-id="technos"])') // tableau des inputs
inputs.forEach(input => {
    input.addEventListener('input', (e) => {
        const idSpan = e.target.getAttribute('data-show-id');
        const span = document.querySelector(`#${idSpan} span`)
        span.innerHTML = e.target.value === '' ? 'NC': e.target.value
    })
})