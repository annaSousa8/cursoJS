//FUNÇÕES ANÔNIMAS: não possuem um nome associado ao seu conteúdo
//só vai ser criada no momento da execução

/*let f=function(...valores){
    let res=0

    for(v of valores){
        res+=v
    }
    return res
}*/

//FUNÇÃO CONSTRUTOR ANÕMINA
const f=new Function("v1","v2", "return v1+v2")

console.log(f(10,5))