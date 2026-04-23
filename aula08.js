//OPERADORES BITWISE
let n1=10 //1010 em binario
let n2=11 //1011 em binario

//no operador & ele so vai retornar 1 se os dois forem 1, somente 1, bit a bit
//let res = n1 & n2

//onde tiver o bit 1, independete de equivalência, vai retornar 1
//let res = n1 | n2

//ou exclusivo, só retorna 1, onde não tiver equivalência
//let res = n1 ^ n2

//DESLOCAMENTO DE BIT
let n3=22
//desloca para esquerda, posso afirmar que quando eu desloco em 1 pra esquerda, eu dobro o número
//let res = n3 << 1

//desloca pra direita, dobra
let res = n3 >> 1
console.log(res)