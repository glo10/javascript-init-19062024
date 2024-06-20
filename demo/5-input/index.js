document.querySelector('input').addEventListener('keypress', (e) => {
    document.querySelector('p').innerHTML += e.key
})

document.querySelector('input').addEventListener('input', (e) => {
    const p = document.querySelector('div:last-of-type p')
    if(e.data === null) {
        p.innerHTML = p.innerHTML.slice(0, p.innerHTML.length -1 )
    } else {
        p.innerHTML += e.data
    }
})