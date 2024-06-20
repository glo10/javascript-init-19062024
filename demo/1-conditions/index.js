// similaire à if/elseif/else mais plus performant dans l'exécution
switch(true) {
    case age < 18 :
        console.log('age inf. 18')
    break
    default: // else
        console.log('age supérieur ou égale 18')
    break
}

if(age < 18 ) {
    console.log('age inf. 18')
} else {
    console.log('age supérieur ou égale 18')
}