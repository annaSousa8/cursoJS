//FOR IN/ FOR OFF

const objs=document.getElementsByTagName("div")

let num=[10,20,30,40,50]

//quando eu quero pegar os elementos
for(o of objs){
    console.log(o.innerHTML="Curso")
}

//quando quero pegar as posições
for(o in objs){
    console.log(objs[o].innerHTML)
}

// for(let i=0; i<num.length; i++){
//     console.log(num[i])
// }


