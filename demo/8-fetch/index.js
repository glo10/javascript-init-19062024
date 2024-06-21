/**
 * Fetch retourne une promesse
 * Une promesse qui aboutit, on peut récupérer le résultat dans la méthode .then()
 * Une promesse qui échoue, on peut récupérer l'erreur dans la méthode .catch()
 * 
 * Attention, avant d'exploiter le résultat, il faut transformer le résultat en JSON (lorsque vous avez reçu des données en JSON) ou en texte (lorsque vous avez des données textuelles par exemple du html)
 * Pour transformer le résultat en JSON, on utilise la méthode .json() sur le résultat de la promesse
 * Pour transformer le résultat en texte, on utilise la méthode .text() sur le résultat
 * 
 */
// Chargement d'un contenu en json exterieur
fetch('https://jsonplaceholder.typicode.com/photos')
.then((res) => res.json())
.then(photos => {
    const article = document.createElement('article')
    for(let i = 0; i < 10; i++) {
        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        h2.innerHTML = photos[i].title
        const img = document.createElement('img')
        img.src = photos[i].thumbnailUrl
        div.append(h2)
        div.append(img)
        article.append(div)
    }
    setTimeout(() => { // à ne pas faire en prod, ici, c'est uniquement pour éviter de voir immédiatement le résultat
        document.querySelector('body').append(article)
    }, 3000)
})
.catch((error) => console.error('error', error))

// Chargement d'un fichier textuelle local
fetch('./header.html')
.then(res => res.text())
.then(res => {
    document.querySelector('body').insertAdjacentHTML('afterbegin', res)   
})
.catch((error) => console.error('error', error))