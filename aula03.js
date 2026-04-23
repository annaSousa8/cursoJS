"use strict"
//let cuida para que a variável só seja acessada nesse escopo

function teste(){
    let nome="Bruno"
    nome="Anna"
    nome=10
    if(true){
        console.log("dentro do if do teste: " + nome)
    }
    console.log("dentro do teste: " + nome)
}

teste()

//console.log("Fora do teste: " + nome)

//valor constante, não pode ser alterado
const pi=3.14
console.log(pi)

