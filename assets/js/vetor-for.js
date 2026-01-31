function exemploJogos() {
    let jogos = [];

    for(let i = 0; i < 5; i += 1){
        let nomeJogo = prompt("Digite o nome do jogo");

        jogos.push(nomeJogo);
    }

    let textoPraApresentar = "";
    for(let i = 0; i < 5; i += 1) {
        let nomeJogo = jogos[i];
        textoPraApresentar = textoPraApresentar + nomeJogo + "\n";
    }

    alert("Jogos: " + textoPraApresentar);

}

function calculadora() {
    let numeros = [];

    for (let i = 0; i < 4; i += 1){
        let numero = parseInt(prompt("Digite o número"));

        numeros.push(numero);
    }

    let somaManual = numeros[0] + numeros[1] + numeros[2] + numeros[3];
    alert("Soma manual: " + somaManual);

    let soma = 0;
    for(let i = 0; i < 4; i += 1){
        let numero = numeros[i];
        soma = soma + numero;
    }
    
    alert("soma: " + soma);
    
}

function calcularFolhasPagamento() {
    let colaboradores = [];
    let horasTrabalhadas = [];
    let valoresPorHora = [];
    let descontos = [];
    let auxilios = [];
    
    let quantidadeColaboradores = parseInt(prompt("Digite a quantidade de colaboradores que receberão a folha de pagamento"));

debugger

    for(let i = 0; i < quantidadeColaboradores; i += 1) {
        let nomeColaborador = prompt("insira o nome do colaborador");
        let quantidadeHorasTrabalhadas = parseInt(prompt("digite a quantidade de horas trabalhadas"));
        let valorPagoPorHora = parseFloat(prompt("Digite o valor pago por hora"));

    let temDesconto = confirm("tem desconto?");
    let valorDesconto = 0;
    if (temDesconto === true) {
        valorDesconto = parseFloat(prompt("Digite o valor do desconto"));
    }

    let temAuxilio = confirm("tem auxilio?");
    valorAuxilio = 0;
    if (temAuxilio === true) {
        valorAuxilio = parseFloat(prompt("Insira o valor do auxilio"));
    }
    
    colaboradores.push(nomeColaborador);
    horasTrabalhadas.push(quantidadeHorasTrabalhadas);
    valoresPorHora.push(valorPagoPorHora);
    descontos.push(valorDesconto);
    auxilios.push(valorAuxilio);
}
    for(let i = 0; i < quantidadeColaboradores; i += 1){
        const quantidadeHorasTrabalhadas = horasTrabalhadas[i];
        const valorPagoPorHora = valoresPorHora[i];

        let salarioBruto = quantidadeHorasTrabalhadas * valorPagoPorHora;
        salarioBruto.push(salarioBruto);
    }
    
    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        let salarioLiquido = salarioBruto[i] - descontos[i] + auxilios[i];
        salarioLiquido.push(salarioLiquido);
    }
    
    for (let i = 0; i < quantidadeColaboradores; i += 1){
        const nome = colaboradores[i];
        const horas = horasTrabalhadas[i];
        const valorHora = valoresPorHora[i];
        const bruto = salarioBruto[i];
        const desconto = descontos[i];
        const auxilio = auxilios[i];
        const liquido = salarioLiquido[i];
    }

    alert(`
        colaborador: ` + nome + `
        \nhoras trabalhadas: ` + horas + `
        \nvalor por hora: ` + valorHora +`
        \nsalário bruto: ` + bruto +`
        \ndescontos: ` + desconto +`
        \nauxilio: ` + auxilio +`
        \nsalário líquido: ` + liquido + `
        `)
        
}

function jogoPalavras() {
    let palavras = ["Roblox", "Free Fire", "GTA"];
    let nomeJogador = prompt("Digite seu nome");
    let quantidadeTentativas = 10;
    if (nomeJogador.toLowerCase().includes("lorenzo")){
        quantidadeTentativas = 3;
    }

    while(quantidadeTentativas >= 0) {
        let nomeJogo = prompt("Tente adivinhar o nome dos 3 jogos");

        if(palavras.includes(nomeJogo)) {
            quantidadeTentativas += 3;

            let indiceJogo = palavras.indexOf(nomeJogo);

            palavras.splice(indiceJogo, 1);
            console.log(palavras);
            alert(`Acertou ${nomeJogo}`);

            if(palavras.length === 0) {
                alert(`Ganhou o jogo`);
                break;
            }
        }else {
            quantidadeTentativas -= 1;
            alert(`Errou!\nvocê ainda tem ${quantidadeTentativas} tentativas`);
        }
        console.log("quantidade de tentativas ;" + quantidadeTentativas + "\nPalavras: " + palavras)
        if(quantidadeTentativas <= 0) {
            alert("perdeu o jogo");
            break;
        }
    }
}