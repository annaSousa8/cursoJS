//ARROW FUNCTION=FUNÇÕES LÂMBIDAS

//const soma=function(v1,v2){return v1+v2}

//posso emitir o return se for operação simples
const soma=(v1,v2)=>v1+v2
console.log(soma(10,5))

const mult=(v1, v2)=> {
    let res=v1*v2
    return res
}
console.log(mult(10,5))

//quando tenho somente um parâmetro, não preciso  de parenteses
const nome=n=>n
console.log(nome("Bruno"))

const add=n=>n+10
console.log(add(12))

