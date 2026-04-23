//PARÂMETRO REST: criar uma função onde não determino a quantidade de paramêtros
/*function soma(...valores){
    let tam=valores.length
    let res=0

    for(let i=0; i<tam; i++){
        res=res+valores[i]
    }
    return res
}*/

function soma(...valores){
    let res=0
    for(let v of valores){
        res+=v
    }
    return res
}

console.log(soma(10,5,2,15,8))