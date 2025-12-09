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
    let saldoBancario = parseFloat(prompt("Digite o saldo bancário"))

}

function solicitarBoolean(){

}

function paciente(){

}