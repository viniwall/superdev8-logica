function exercicio01() {
    //começa o nome sem nada para inserção posteriormente
    let nome = "";
    let indice = 0;

    while (indice < 5) {
        // loop que pede nome dos alunos e confirma seu cadastro
        nome = prompt("Insira o nome do aluno");
        alert("Aluno " + nome + " cadastrado!");
        //incremento no índice
        indice = indice + 1;
    }

    alert("Cadastro finalizado")
}

function exercicio02() {
    let indice = 0; 

    while (indice < 4) {
        // loop que pede 4 cores e imprime seu nome 
        let cor = prompt("Digite uma cor");
        alert("Cor escolhida: " + cor)

        // incremento no índice
        indice = indice + 1;
    }

    alert("Obrigado por informar suas cores favoritas!");
}

function exercicio03() {
    indice = 0;
    
    while (indice < 3) {
        // loop que pega nome de cidades e cadastra para planejamento de viagem
        let nomeCidade = prompt("Digite o nome da cidade que você quer visitar");

        // utiliza o índice como contador para as cidades
        alert("Destino " + (indice + 1) + ": " + nomeCidade);

        indice = indice + 1;
    }

    alert("planejamento de viajem concluído")
}

function exercicio04() {
    indice = 0;
    // soma zerada fora da função para poder ser puxada posteriormente
    soma = 0;

    while (indice < 5) {
        // loop que pega 5 números inteiros e soma eles 
        let numeros = parseInt(prompt("Digite 5 números inteiros"));
        soma = soma + numeros;

        // novamente uso do índice como contador
        alert("Número " + (indice + 1) + ": " + numeros)

        indice = indice + 1;
    }

    // impressão da soma
    alert("Soma total: " + soma)
}

function exercicio05() {
    indice = 0;

    while (indice < 3) {
        // loop que pega o nome e ano dos filmes
        let filmeNome = prompt("Digite o nome do filme");
        let filmeAno = parseInt(prompt("Digite o ano de lançamento do filme"));

        // impressão do nome e ano dos filmes
        alert("Filme: " + filmeNome + "\nAno: " + filmeAno);

        indice = indice + 1;
    }

    alert("Lista de filmes cadastrada com sucesso");
}