const listaPalavras = [
    "ELEFANTE",
    "LARANJA", 
    "FRANKENSTEIN", 
    "BOMBEIRO", 
    "ESCARAVELHO", 
    "VAMPIRO", 
    "CUSCUZ", 
    "BODE", 
    "BOLA", 
    "BONECA",
]

const palavraSorteada = listaPalavras[
    Math.floor(Math.random()*listaPalavras.length)
]

console.log(palavraSorteada)
console.log(palavraSorteada.length)

var WordInScreen = document.getElementById('palavra')

console.log(WordInScreen)


esconderPalavra()

function esconderPalavra(){
    for(var i = 0; i<palavraSorteada.length; ++i){
       WordInScreen.innerHTML = WordInScreen.innerHTML + "*"
       //console.log(palavraSorteada.charAt(i))
    }
}

function getLetter(){
    var letter = document.querySelector("input")
    var letra = letter.value
    console.log(letra)
    return letra;
}

var letra = getLetter();

substituirLetras()

function substituirLetras(){
    for(var i = 0; i < palavraSorteada.length; ++i){
        if(palavraSorteada.charAt(i) === letra){
            WordInScreen.innerHTML = WordInScreen.innerHTML + letra
            console.log('acertou!')
        }
    }
}