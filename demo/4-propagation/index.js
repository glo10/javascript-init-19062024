document.querySelector('main').addEventListener('click', () => {
    alert('main')
}, true)

document.querySelector('div').addEventListener('click', () => {
    alert('div')
}, true) // écoute (intercepte) dans la phase de capture (capture l'événement de l'enfant avant)

document.querySelector('p').addEventListener('click', (e) => {
    alert('p0')
}) // écoute dans la phase de bubble ()