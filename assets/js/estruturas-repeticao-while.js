function exemploWhile() {
    let indice = 0;
    // define a quantidade de repetições do while
    while (indice < 3) {
        let nome = prompt("Digite o nome");

        // calcula a quanntidade de vezes que o código foi rodado pelo computador
        // utilizando o indice
        indice = indice + 1;
    }

    alert("obrigado");
}

function exemploCalcularMedia() {
    let somaNotas = 0;
    let indice = 0;

    while (indice < 3) {
        let nota = parseFloat(prompt("Digite a nota"));

        somaNotas = somaNotas + nota;

        indice = indice + 1;
    }

    const media = somaNotas / 3;
    alert("Média: " + media);
}

function exemploVerificarAprovado() {
    let somaNotas = 0;
    let indice = 0;

    while (indice < 3) {
        let nota = parseFloat(prompt("Digite a nota"));

        somaNotas = somaNotas + nota;

        indice = indice + 1;
    }

    const media = somaNotas / 3;

    let status = "";

    if (media >= 7) {
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }

    alert("Média: " + media + "\nStatus: " + status);
}

function exemploMaiorValor() {
    let indice = 0;
    let maiorAltura = 0;

    while (indice < 5) {
        let altura = parseFloat(prompt("Insira a altura"));

        //substitui o valor de maiorAltura pelo maior valor digitado pelo usuário
        if (altura > maiorAltura) {
            maiorAltura = altura;
        }

        indice = indice + 1;
    }

    alert("Maior altura é: " + maiorAltura);
}

function exemploMenorValor() {
    let indice = 0;
    let menorNumero = 9999999999999;

    //leva o 0 em consideração, então tambem poderia ser: while (indice < 4)
    while (indice <= 3) {
        let numero = parseInt(prompt("Digite o número"));

        //substitui o valor da var menorNumero, pelo menor número digitado pelo usuário
        if (numero < menorNumero) {
            menorNumero = numero;
        }

        indice = indice + 1;
    }

    alert("Menor número: " + menorNumero);
}

function exemploDescobrirQuemMaiorValor() {
    let indice = 0;
    let maiorPreco = 0;
    let produtoMaiorPreco = "";

    while (indice < 3) {
        const produto = prompt("Insira o nome do produto");
        const preco = parseFloat(prompt("Digite o preço do produto"));

        if (preco > maiorPreco) {
            maiorPreco = preco;
            // armazenar o nome do produto pois ele até o momento tem o maior preço
            produtoMaiorPreco = produto;
        }

        indice = indice + 1;
    }

    alert("O produto " + produtoMaiorPreco + " tem o maior preço" + maiorPreco);
}

function exemploQuantidadePorCategoria() {
    let indice = 0;
    let quantidadeAdulto = 0, quantidadeIdosos = 0, quantidadeCrianca = 0;

    while (indice < 5) {
        let idade = parseInt(prompt("Digite a idade"));

        // soma 1 cada vez que a idade corresponde a faixa etária
        if (idade < 18) {
            quantidadeCrianca + quantidadeCrianca + 1;
        } else if (idade <= 64) {
            quantidadeAdulto = quantidadeAdulto + 1;
        } else {
            quantidadeIdosos = quantidadeIdosos + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Quantidade crianças: " + quantidadeCrianca +
        "\nQuantidade adultos: " + quantidadeCrianca +
        "\nQuantidade de idosos: " + quantidadeIdosos
    );
}

function exemploRepetirQuantidadeDoUsuario() {
    let indice = 0, quantidadeP = 0, quantidadeM = 0, quantidadeG = 0;

    let quantidadeDesejada = parseFloat(prompt("Digite a quantidade de calças que deseja cadastrar"));

    while (indice < quantidadeDesejada) {
        let tamanhoCalca = prompt("Digite o tamanho de calça [P/M/G]]")

        //validar se a informação está correta
        while (tamanhoCalca != "P" && tamanhoCalca != "M" && tamanhoCalca != "G") {
            tamanhoCalca = prompt("Tamanho de calça inexistente.\nDigite o tamanho da calça [P/M/G]");
        }

        if (tamanhoCalca === "P") {
            quantidadeP = quantidadeP + 1;
        } else if (tamanhoCalca === "M") {
            quantidadeM = quantidadeM + 1;
        } else if (tamanhoCalca === "G") {
            quantidadeG = quantidadeG + 1;
        }

        indice = indice + 1;
    }

    alert(
        "Resumo das calças cadastradas:\n\n" +
        "P: " + quantidadeP + "\n" +
        "M: " + quantidadeM + "\n" +
        "G: " + quantidadeG
    );
}

function exemploAteDigitarSair() {
    //Solicitar o nome até o usuário digitar sair
    let nome = "";

    alert("Digite o nome dos jogadores de um time de futebol");

    while (nome != "sair") {
        nome = prompt("Digite o nome ou 'sair' para encerrar");
    }
}

function exemploAteDigitarSairComQuantidade() {
    //Solicitar nome até o usuário digitar sair,
    //quero saber a quantidade de jogadores
    let nome = "";
    let quantidadeDeJogadores = 0;

    alert("Digite o nome dos jogadores do time de futebol");

    while(nome != "sair") {
        nome = prompt("Digite o nome ou 'sair' para encerrar");

        if (nome != "sair") {
            quantidadeJogadores = quantidadeJogadores + 1;
        }
    }

    alert("Quantidade de jogadores: " + quantidadeJogadores);
}

function exemploMenu() {
    let menu = undefined;

    let numero1 = parseInt(prompt("Digite o primeiro número"));
    let numero2 = parseInt(prompt("Digite o segundo número"));

    while (menu != 10) {
        menu = parseInt(prompt(`
MENU:
    1 - Somar
    2 - Subtrair
    3 - Multiplicar
    4 - Dividir
    5 - Alterar número 1
    6 - Alterar número 2]
    10 - sair`));

        if (menu === 1) {
            const soma = numero1 + numero2;
            alert("Soma: " + soma);
        } else if (menu === 2) {
            const subtracao = numero1 - numero2;
            alert("Subtração: " + subtracao)
        } else if (menu === 3) {
            const multiplicacao = numero1 * numero2;
        } else if (menu === 4) {
            if (numero2 === 0) {
                alert("Não é possível dividir um número por zero");
            } else {
                const divisao = numero1 / numero2;
                alert("Divisão: " + divisao);
            }
        } else if (menu === 5) {
            numero1 = parseInt(prompt("Digite o primeiro número", numero1));
        } else if (menu === 6) {
            numero2 = parseInt(prompt("Digite o segundo número", numero2))
        }

    }
}