window.addEventListener('resize', () =>{
    console.log('redimention')
    if (window.matchMedia("(max-width: 450px)").matches) {
        document.querySelector('h1').style.color = "blue"
    }
})

document.querySelector('h1').addEventListener('click', function(e) {
    console.log('this avec fonction classique', this)

})

document.querySelector('h1').addEventListener('click', (e) => {
    console.log('this avec fonction flêchée', this)
})