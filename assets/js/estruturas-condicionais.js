function exemploBasico() {
    let idade = 92;

    if(idade<18){
        alert("Menor de idade");
    } else if (idade < 65){
        alert("Adulto");
    } else {
        alert("Idoso");
    }
}

function exemploE() {
    let nivel = -8;

    if (nivel >= 0 && nivel <= 10) {
        alert("Elo bronze");
    }
}

function exemploOu() {
    let idade = 30;
    let estudante = false;

    if (idade < 18 || estudante === true) {
        alert("Pode comprar meio ingresso")
    } else {
        alert("Não pode comprar meio ingresso");
    }
}

function exemploIncremento() {

    let nome1 = prompt("insira o nome");
    let idade1 = parseInt(prompt("insira a idade"));
    let quantidadeAdulto = 0;
    let quantidadeIdoso = 0;

    if (idade1 < 65) {
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        quantidadeIdoso = quantidadeIdoso + 1;
    }
    
    let nome2 = prompt("insira o nome");
    let idade2 = parseInt(prompt("insira a idade"));

    if (idade2 < 65) {
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        quantidadeIdoso = quantidadeIdoso + 1;
    }
    
    let nome3 = prompt("insira o nome");
    let idade3 = parseInt(prompt("insira a idade"));

    if (idade3 < 65) {
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        quantidadeIdoso = quantidadeIdoso + 1;
    }
    
    alert(
        "pessoa 1: " + nome1 + " idade: " + idade1 + 
        "\npessoa 2: " + nome2 + " idade: " + idade2 +
        "\npessoa 3: " + nome3 + " idade: " + idade3 +
        "\nquantidade de adultos: " + quantidadeAdulto +
        "\nquantidade de idosos: " + quantidadeIdoso 
    );
}

function exemploFinalDoAno() {

    let contagemRegressiva = 10;

    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1;
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1;
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1;
    alert(contagemRegressiva);
    
    contagemRegressiva = contagemRegressiva - 1;
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1;
    alert(contagemRegressiva);
    
    contagemRegressiva = contagemRegressiva - 1;
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1;
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1;
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1;
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1;
    alert("Feliz ano novo 2026!");
}

function somarNumeros() {
    let soma = 0;

    const numero1 = parseInt(prompt("Digite o número 1: "));
    soma = soma + numero1;

    const numero2 = parseInt(prompt("Digite o número 2: "));
    soma = soma + numero2;

    const numero3 = parseInt(prompt("Digite o número 3: "));
    soma = soma + numero3;

    const numero4 = parseInt(prompt("Digite o número 4: "));
    soma = soma + numero4;

    const media = soma / 4;

    alert("Soma: " + soma + "\nMédia: " + media);
}

function exemploWhile() {
    let indice = 0;
    while (indice < 3) {
        let nome = prompt("Digite o nome");
        indice = indice + 1;
    }

    alert("obrigado");
}