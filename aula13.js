//IF ELSE
let num1=40

if(num1 > 10){
    console.log("Numero maior que 10")
    if(num1>50){
        console.log("Numeral maior que 100")
    }
} else if(num1 > 5) {
    console.log("Numero esta entre 6 e 10")
} else {
    console.log("Numeral menor ou igual a 5")
}


let clima="chuva"
let energia=100

if(energia>70 && clima=="sol"){
    console.log("\nVou a praia")
} else{
    console.log("Vou ao cinena")
}