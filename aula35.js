//prática addEventListener

const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btnCopiar=document.querySelector("#btn_copiar")
const todosCursos=[...document.querySelectorAll(".curso")]
const btnVoltar=document.querySelector("#btn_voltar")

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso=evt.target
        curso.classList.toggle("selecionado")
        //se tem o elemento -> remove
        //se nao tem -> adiciona
    })
})

btnCopiar.addEventListener("click", ()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    //console.log(cursosSelecionados)
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
        //anexar filho
    })
})

btnVoltar.addEventListener("click", ()=>{
    const cursosNaoSelecionados=[...caixa2.querySelectorAll('.curso.c1:not(.selecionado)')]
    //console.log(cursosNaoSelecionados)
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})
