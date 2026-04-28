//Relação dos elementos no DOM
//child, parent, siblings
//childNode: considera o text
//children: pega apenas os elementos
//firstChild != firstElementChild
//nextSibling != nextElementSibling

const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]

console.log(caixa1.lastElementChild)
console.log(caixa1.children)

console.log(btn_c[0].getRootNode())
console.log(btn_c[0].ownerDocument)//proprietário

//caixinha azul=propriedades: não precisa de ()
//caixinha roxa=métodos;
