//MÉTODO MAP: itera toda a coleção, opera por completo os elementos de uma coleção

/*const cursos=['HTML', 'CSS', 'JAVA SCRIPT', 'PHP', 'REACT']
let c=cursos.map((el,i)=>{
return el
})

console.log(c)
*/

/*let el=document.getElementsByTagName("div")
el=[...el]
console.log(el)
el.map((e,i)=>{
    e.innerHTML="CFB Cursos"
    //console.log(e.innerHTML)
})
*/

/*const el=document.getElementsByTagName("div")
const val=Array.prototype.map.call(el,({innerHTML})=>innerHTML)
console.log(val)
*/

const converterInt=(e)=>parseInt(e)
const dobrarInt=(e)=>e*2
let num=['1','2', '3', '4', '5'].map(dobrarInt)
console.log(num)
