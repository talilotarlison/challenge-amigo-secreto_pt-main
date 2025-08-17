//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigosParaSoterio = [];

let listaAmigosVazia = document.getElementById("listaAmigos");
listaAmigosVazia.innerHTML = "<li>Lista de nomes vazia.</li>"

// coloca primeira letra maiuscula
function primeiraLetraMaiuscula(str) {
    if (str.length === 0) {
        return str; // Retorna a string vazia se for o caso
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo');
    let listaAmigos = document.getElementById("listaAmigos");

    if (nomeAmigo.value == "") {
        alert("Prencha com nome de um amigo!");
        return;
    }

    if (amigosParaSoterio.includes(nomeAmigo.value.toLowerCase())) {
        alert("Amigo ja adicionado!");
        return;
    }

    amigosParaSoterio.push(nomeAmigo.value.toLowerCase())

    if (amigosParaSoterio.length > 0) {
        listaAmigos.innerHTML = "";
        amigosParaSoterio.forEach(amigo => {
            listaAmigos.innerHTML += `<li>${primeiraLetraMaiuscula(amigo)}</li>`;
        });
        nomeAmigo.value = "";
    }
}


function sortearAmigo() {
    let amigoSorteado = document.getElementById('resultado');

    let numeroAleatorio = Math.floor(Math.random() * (amigosParaSoterio.length - 1)) + 1;
    amigoSorteado.innerHTML = amigosParaSoterio[numeroAleatorio];
}