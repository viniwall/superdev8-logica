function solicitarString(){
    let nome = prompt("Digite seu nome")
    let sobrenome = prompt("Digite seu sobrenome")

    let nomeSobrenome = nome + sobrenome;
    alert("Nome completo" + " " + nomeSobrenome);
}

function solicitarInt(){
    let numeroCartao = parseInt(prompt("Digite o número do cartão"));
    let codigoSeguranca = parseInt(prompt("Digite o código de segurança"));

    alert("Número: " + numeroCartao + "\nCVV: " + codigoSeguranca);

}

function solicitarFloat(){
    let saldoBancario = parseFloat(prompt("Digite o saldo bancário"));
    const saque = parseFloat(prompt("Digite o valor do saque"));
    
    saldoBancario = saldoBancario - saque;

    alert("Saque realizado: " + saque + "\nSaldo atual: " + saldoBancario);

}

function solicitarBoolean(){
    let vencido = confirm("Produto vencido?");

    alert("Produto vencido: " + vencido)

}

function paciente(){
    let nome = prompt("Digite o nome do paciente");
    const idade = parseInt(prompt("Digite a idade"));
    const peso = parseFloat(prompt("Digite o peso"));
    const possuiRg = confirm("Possui rg?");
    const possuiPlanoSaude = confirm("Possui plano de saúde?");
    const cpf = prompt("Digite seu CPF");

    let planoSaude = "";
    // se possui plano de saude for igual a verdadeiro
    if (possuiPlanoSaude === true) {
        planoSaude = prompt("Digite o nome do plano de saúde");
    }

    const tipoSanguineo = prompt("Digite o tipo sanguíneo");
    const altura = parseFloat(prompt("Digite sua altura"));
    const possuiAlergia = confirm("Possuí alergia?");

    const escalaDaDor = parseInt(prompt("Escala de dor: [0...10]"))

    const urgencia = prompt("Escolha o nível de Urgência [Migué, Atestado, Dorzinha, Dengue, Dor Extrema]")

    let tempoEspera = 0;
    if (urgencia === "Migué"){
        tempoEspera = 180;
    } else if (urgencia === "Atestado"){
        tempoEspera = 150;
    } else if (urgencia === "Dorzinha"){
        tempoEspera = 120;
    } else if (urgencia === "Dengue") {
        tempoEspera = 60;
    } else if (urgencia === "Dor Extrema") {
        tempoEspera = 30;
    } else {
        alert("Nível de urgência inexistente");
        return;
    }

    alert(
        "Nome: " + nome +
        "\nIdade: " + idade +
        "\nPeso: " + peso + 
        "\nPossui RG: " +    possuiRg +
        "\nCPF: " + cpf +
        "\nPossui plano de saúde: " + (possuiPlanoSaude ? "Sim" : "Não") +
        (possuiPlanoSaude ? "\nPlano de Saúde: " + planoSaude + "" : "") +
        "\nTipo sanguíneo: " + tipoSanguineo +
        "\nAltura: " + altura + "m" +
        "\nNível de urgência: " + urgencia + 
        "\n Nível de urgência: " + tempoEspera +
        "\nTempo de espera: " + tempoEspera
    );

}