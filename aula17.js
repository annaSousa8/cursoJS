//WHILE - LOOP INDEFINIDO, não tenho certeza da quantidade de vezes que quero repetir o loop
let n=10
let fat=1

/*while(n<10){
    console.log(n)
    n++
}
*/

//fatoral: 5!= 5x4x3x2x1=120
while(n>=1){
    fat*=n
    n--
}

console.log(fat)