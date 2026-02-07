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

function exemploCorTintas() {
    let tintas = [];

    for (let i = 0; i < 5; i += 1) {
        let nomeTinta = prompt("Insira o nome da tinta");
        tintas.push(nomeTinta);
    }

    for (let i = 0; i < 5; i += 1){
        texto += tintas[i] + "\n";
    }
    alert("Tintas:\n" + texto);
}

function alunos() {
    let alunos = [];
    
    for(let i = 0;i < 13;i += 1){
        let nomeAluno = prompt("Digite o nome do aluno");
        alunos.push(nomeAluno);

    }
    
    alert("Qtd de alunos: " + alunos.length);

    let resultado = "";

    for(let i = 0;i < 13;i += 1){
        resultado += alunos[i] + "\n";
    }
    alert(resultado);

    let menorNomeAluno = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

    for(let i = 0;i < 13;i += 1){
        let nomeAlunoPercorrido = alunos[i];
        if(nomeAlunoPercorrido.length < menorNomeAluno.length) {
            menorNomeAluno = nomeAlunoPercorrido;
        }
    }5

    alert("Aluno com menor nome: " + menorNomeAluno);
}

function exercicio1() {
    
    let smartphones = [];
    let quantidadeEstoque = [];
    let estoqueEstado = [];
    let precoUnitario = [];
    let menorQuantidade = 999999999999999999999999999;
    let maiorQuantidade = 0;
    let nomeDoMaior = "";

    debugger
    for(let i = 0;i < 5;i += 1) {
        let nomeSmartphones = prompt("Digite o nome dos smartphones");
        let estoque = prompt("insira o estoque");
        let precos = prompt("Insira o preço do produto");
        if (estoque > 7) {
            estoqueEstado.push("(Elevado)");
        } else if (estoque <= 7 && estoque > 4) {
            estoqueEstado.push("(Estável)");
        } else if (estoque <= 4 && estoque > 1) {
            estoqueEstado.push("(Preocupante)");
        } else if (estoque <= 1) {
            estoqueEstado.push("(Urgente)");
        } 
        if(estoque < menorQuantidade) {
            menorQuantidade = estoque;
        } 
        if(estoque > maiorQuantidade) {
            maiorQuantidade = estoque
            nomeDoMaior = nomeSmartphones
        }
        quantidadeEstoque.push(estoque);
        smartphones.push(nomeSmartphones);
        precoUnitario.push(precos);
    }

    let resultado = "";
    // precoUnitario.padStart((precoUnitario.length + 2), "R$");
    
    for(let i = 0;i < 5;i += 1) {
        resultado += smartphones[i] + ", " + quantidadeEstoque[i] + estoqueEstado[i] + ", " + precoUnitario[i] + "\n";
    }

    alert("O nome dos smartphones com seu estoque são: \n" + resultado + "\nMenor quantidade no estoque: " + menorQuantidade + "\nNome do smartphone de maior estoque: " + nomeDoMaior);
}

function vetorEFor2() {
    let produtos = [];
    let categoria = [];
    let preco = [];
    let desconto = [];
    let precoFinal = [];
    let maiorPreco = 0;
    let menorPreco = 9999999999;
    let menorPrecoNome = "";

    for(let i = 1;i < 6;i += 1){
        let nomeProdutos = parseFloat(prompt("insira o nome do " + i + "°" + " produto"));
        let categoriaProdutos = parseFloat(prompt("insira a categoria do " + i + "°" + " produto"));
        let precoProdutos = parseFloat(prompt("insira o preço do " + i + "°" + " produto"));
        let produtosDesconto = parseFloat(prompt("insira o desconto do " + i + "°" + " produto (se houver)"));
        preco.push(precoProdutos);
        produtos.push(nomeProdutos);
        categoria.push(categoriaProdutos);
        
        if (produtosDesconto != null || produtosDesconto != 0) {
            precoProdutosFinal = precoProdutos - (preco * desconto / 100);
            precoFinal.push(precoProdutos)
        }
        if (precoProdutos > maiorPreco) {
            maiorPreco = precoProdutos;
        }
        if (precoProdutos < menorPreco) {
            menorPreco = precoProdutos;
            menorPrecoNome = nomeProdutos;
        }
    }

    let textoFinal = "";

    for(let i = 0;i < 5;i += 1){
        textoFinal = "Nome do produto: " + produtos[i] + " | " + "preco: " + preco[i] + " | " + "Classificação: " + categoria[i] + "\n";
    }

    alert(textoFinal + "\nMaior preço: " + maiorPreco + "\nNome do produto de menor preço" + menorPrecoNome);
}

function fibonacci() {
    let a = 1;
    let b = 1;
    let c = 0;
    for(let i = 0;i < 5;i += 1){
        c = a + b;
        alert(a + " + " + b + " = " + c);
        if (c > b) {
            a = b
            b = c;
        }
    }
}
