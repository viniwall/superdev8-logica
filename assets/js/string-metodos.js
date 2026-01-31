function converterParaMaiusculo() {
    let texto = "Abacate";
    let textoMaiusculo = texto.toUpperCase();

    alert(`texto original: ${texto}
        texto maiusculo ${textoMaiusculo}`);
}

function converterParaMinusculo() {
    let texto = "ABACATE";
    let textoMinusculo = texto.toLowerCase();

    alert(`Texto original ${texto}
        texto minusculo ${textoMinusculo}`)
}

function removerEspacoComeco() {
    let texto = ' uma frase bem leagal ';
    let textoSemEspacoComeco = texto.trimStart();

    alert(`texto original ${texto}
        texto sem espaço no comeco ${textoSemEspacoComeco}`);
}

function removeEspacoFinal() {
    let texto = " uma frase bem legal ";
    let textoSemEspacoFinal = texto.trimEnd();

    alert(`texto original ${texto}
        texto sem espaco no final ${textoSemEspacoFinal}`);
}

function removerTodosEspacos() {
    let texto = " uma frase bem legal ";
    let textoSemEspaco = texto.trim();

    alert(`texto original ${texto}
        texto sem espaco ${textoSemEspaco}`);
}

function substituir() {
    let texto = " Lorezzo faltou";
    let novoTexto = texto.replace("Lorezzo", "Lorenzo");

    alert(`texto errado: ${texto}\ntexto corigido: ${novoTexto}`);
}

function substituirCaminho() {
    let valorString = "R$ 1.932.183,94";
    let valorSubstituido = valorString.replace("R$", "").replaceAll(".", "").replace(",", ".");

    let valor = parseFloat(valorSubstituido);

    alert(`valor original ${valorString}
        valor substituído: ${valor}`);
}

function substring() {
    let data = "31/01/2026";
    let dia = data.substring(0, 2);
    let mes = data.substring(3, 5);
    let ano = data.substring(6, 10);

    alert(`Blumenau, ${dia} de ${mes} de ${ano}`);
}

function substringHorario() {
    let horarioAmericano = prompt("Digite o horário no formato Americano");

    let hora = parseInt(horarioAmericano.substring(0, 2));
    let minuto = parseInt(horarioAmericano.substring(3, 5));
    let periodo = horarioAmericano.substring(6, 8);

    let horaBrasil = 0;

    if (periodo === "am") {
        horaBrasil = hora;
    } else {
        horaBrasil = 12 + hora;
    }

    let horarioBrasil = `${horaBrasil}:${minuto}`;

    alert(`
    Horário no USA: ${horarioAmericano}
    horário no Brasil: ${horarioBrasil}`);

}

function exemploLength() {
    let texto = "Vingadores guerra infinita";
    let quantidadeCaracteres = texto.length;

    alert(`texto ${texto} contem ${quantidadeCaracteres} caracteres`);
}

function comecaCom() {
    let nomeEmpresa = "Blusoft";

    let empresaBlumenau = false;
    if(nomeEmpresa.toLowerCase().startsWith("blu") === true) {
        alert(`nome da empresa ${nomeEmpresa}
        empresa de blumenau: ${empresaBlumenau}`);
    }
}

function terminaCom() {
    let nomeCompleto = "Ana da Silva Souza"

    if (nomeCompleto.toUpperCase().endsWith() || nomeCompleto.toUpperCase().endsWith("SOUZA")) {
        alert("Sobrenome comum");
    } else {
        alert("Não é um sobrenome comum");
    }
}

function contem() {
    let refeicao = "Purê de feijão com frango";
    
    if (refeicao.toLowerCase().includes("feijão") || refeicao.toLowerCase().includes("feijão")) {
    alert("tipicamente brasil");
    } else {
    alert("Outra comida");
    }
}

function indiceDoCaracter() {
    let hora = "23:59";

    let indiceDoisPontos = hora.indexOf("49");
    alert(`hora ${hora}
indice do ${indiceDoisPontos}`);
}

function quebraString() {
    let data = "31/01/2026";
    let partes = data.split("/"); 
    let dia = partes[0];
    let mes = partes[1];
    let ano = partes[2];
    alert(`Blumenau, ${dia} de ${mes} de ${ano}`);
}

function quebraStringDataHora() {
    let dataHora = "31/01/2026 23:49:10"
    let partesDataHora = dataHora.split(" ");
    let partesData = partesDataHora[0].split("/");
    let partesHora = partesDataHora[1].split(":");

    let dia = partesData[0];
    let mes = partesData[1];
    let ano = partesData[2];

    let hora = partesHora[0];
    let minuto = partesHora[1];
    let segundo = partesHora[2];

    alert(`
    Blumenau, dia ${dia} de ${mes} de ${ano}, ${hora} ${minuto} ${segundo}
        `);
}

function padStart() {
    let numeroCartao = "5230 9713 6338 5801";
    let ultimoNumeros = numeroCartao.substring(15, 19);
    alert(ultimoNumeros.padStart(16, "*"));
}

function padEnd() {
    let nome = "Matheus";
    let idade = 25;
    let salario = 5930.24;

    let linha = nome.padEnd(30, " ") + idade.toString().padEnd(3, " ") + salario.toString().padEnd(10, " ");
    alert(`Linha do CSV: '${linha}'`);
}