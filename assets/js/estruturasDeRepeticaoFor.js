function relogio() {
    for (let hora = 0; hora < 24; hora = hora + 1) {
        for (let minuto = 0; minuto < 60; minuto = minuto + 1) {
            for (let segundo = 0; segundo < 60; segundo = segundo + 1){
                alert(hora + ";" + minuto + ";" + segundo + ";");
            }
        }
    }
}

function exemploContagemRegressiva() {
    for(indice = 10; indice >= 0; indice = indice + 1) {
        alert(indice);
    }
    alert("Feliz ano novo!")
}

function solicitarDadosPacientes() {
    let quantidadePacientes = parseInt(prompt("Digite a quantidade"));

    for (let indice = 0; indice < quantidadePacientes; indice = indice + 1){
        let nome = prompt ("Digite o nome do paciente");
        let idade = parseInt(prompt("Digite o nome do paciente"));
        let peso = parseFloat(prompt("Digite o nome do paciente")); 
        let altura = parseFloat(prompt("Digite o altura do paciente"));
    }
}