//FUNÇÕES PARAMETRIZADAS
const VALOR_PADRAO=0

function soma(n1=VALOR_PADRAO,n2=VALOR_PADRAO){
    console.log(n1+n2)
    return n1+n2
}

soma(10)
console.log(soma(10,10) + "\n")


function add(v){
    return valor+v
}

let valor=0
console.log(valor)

valor=add(10)
console.log(valor)

valor=add(5)
console.log(valor)