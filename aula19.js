//BREAK - interrompe a execução, para o loop, encerra imediatamente
//CONTINUE - para somente aquela iteração, pula pra pŕoxima e continua a execução do loop

let n=0 
let max=1000
let pares=0

/*while(n<max){
    console.log("CBF Cursos - " + n)
    if(n>10){
        
    }
    n++
}
*/

for(let i=n; i<max; i++){
    if(i%2!=0){
        continue
    }
    pares++
}
console.log("quantidade de pares: " + pares)
console.log("fim do programa")