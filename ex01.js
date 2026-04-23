let num1=4
let num2=5
let res=0
let op=1

switch(op){
    case 1:
        res = num1+num2
        console.log("soma: " + res)
        break
    case 2:
        res = num1-num2
        console.log("Subtração:" + res)
        break
    case 3:
        res = num1*num2
        console.log(res)
        break
    case 4:
        res = num1/num2
        console.log(res)
        break

}

let idade=19
let flag = false

if(idade>=18){
    console.log("\nMaior de idade")
} else {
    console.log("Menor de idade")
}

console.log(typeof(idade))
console.log(typeof(flag))

function soma(n1, n2){
    return n1+n2
}

console.log(soma(num1, num2))

const mult=(n1, n2)=> {
    return n1*n2
}

console.log(mult(num1, num2))

function somar(...numeros){
    let total=0
    let tam=numeros.length
    for(let i=0; i<tam; i++){
        total=total+numeros[i]
    }
    return total
}

console.log(somar(2,3,5,6,20,4))

let a=[1,2,3,4]
let b=[5,6,7,8]
let c=[...a,...b]
console.log(c)

let dobro = a.map((el)=> {
    return el*2
})

console.log(dobro)

