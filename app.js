//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = document.getElementById('amigo')
let lista = document.getElementById('flista')
let res = document.getElementById('reslist')
let dados = []

function valor(v){
    if(v != 0){
        return true
    }else{
        return false
    }
}

function notname(n,d){
    if((d.indexOf(String(n))) !=-1){
        return false
    } else{
        return true
    }
}

function adicionarAmigo(){
    if(valor(nomes.value)){
        if(notname(nomes.value, dados)){
            dados.push(String(nomes.value))
            let item = document.createElement('option')
            item.text = `${nomes.value} foi adicionado(a)` 
            lista.appendChild(item)
            res.innerHTML = ''
        } else{
            alert('Nome já encontrado na lista')
        }
    } else{
        window.alert('Por favor, insira um nome')
    }
    nomes.value = ''
    nomes.focus()
}

function sortearAmigo(){
    let sorteio = Math.floor(Math.random() * dados.length);
    s = dados[sorteio]
    res.innerHTML = `Parabéns ao(a) ${s}, você foi o(a) ganhador(a) do nosso amigo secreto!`
}