//O principal objetivo desClaro, aqui está o códiconst participantes = []let participantes = [];
let participantes = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value; // Alterado para "amigo"
    if (nomeAmigo) {
        participantes.push(nomeAmigo);
        document.getElementById("amigo").value = ""; // Alterado para "amigo"

        // Atualiza a lista de participantes na tela
        atualizarListaParticipantes();
    } else {
        alert("Por favor, insira um nome válido!");
    }
}

function atualizarListaParticipantes() {
    const listaParticipantes = document.getElementById("listaAmigos"); // Alterado para "listaAmigos"
    listaParticipantes.innerHTML = ""; // Limpa a lista atual

    for (const participante of participantes) {
        const novoItem = document.createElement("li");
        novoItem.textContent = participante;
        listaParticipantes.appendChild(novoItem);
    }
}

function sortearAmigo() { // Manteve o nome da função para corresponder ao HTML
    if (participantes.length < 2) {
        alert("Adicione pelo menos dois participantes para sortear.");
        return;
    }

    const embaralhado = embaralhar(participantes);
    const atribuicoes = {};
    for (let i = 0; i < embaralhado.length; i++) {
        atribuicoes[embaralhado[i]] = embaralhado[(i + 1) % embaralhado.length];
    }

    exibirResultados(atribuicoes);
}

function embaralhar(array) {
    const novoArray = [...array];
    for (let i = novoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [novoArray[i], novoArray[j]] = [novoArray[j], novoArray[i]];
    }
    return novoArray;
}

function exibirResultados(resultados) {
    const listaResultado = document.getElementById("resultado"); // Alterado para "resultado"
    listaResultado.innerHTML = ""; // Limpa resultados anteriores

    for (const participante in resultados) {
        const novoItem = document.createElement("li");
        novoItem.textContent = `${participante} -> ${resultados[participante]}`;
        listaResultado.appendChild(novoItem);
    }
}