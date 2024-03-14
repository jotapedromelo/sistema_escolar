// DOM - Elementos HTML

const nome = document.querySelector('#nome')
const unidade1 = document.querySelector('#unidade1')
const unidade2 = document.querySelector('#unidade2')
const uniadade3 = document.querySelector('#unidade3')
const mediaFinal= document.querySelector('#media')
const botao = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')
const alvo = document.querySelector('.alvo')


// aqui começa as coisas para valer !!

botao.addEventListener('click',calculoMedia)

function calculoMedia(){

    event.preventDefault()

    let mediaFinal= (Number(unidade1.value) + Number(unidade2.value) + Number(uniadade3.value))/3
    media.value = mediaFinal.toFixed(2)

    if(mediaFinal>=7){
        resultado.innerHTML = "Sr(a) " + nome.value +" Você está Aprovado!"
        alvo.src = "images/feliz.png"
    }else if(mediaFinal<7 && mediaFinal>5){
        resultado.innerHTML = "Sr(a) " + nome.value + " Você está na Recuperação"
        alvo.src = "images/procupado.png"
    }else if(mediaFinal<5){
        resultado.innerHTML = "Sr(a) " + nome.value + " Você está Reprovado"
        alvo.src = "images/entao.png"
    }
}