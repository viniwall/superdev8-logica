function exemploVariaveisTexto(){
    const produto1 = "Xbox";
    const produto2 = "Gameboy Color";

    const produtos = produto1 + " " + produto2;
    alert("Produto: " + produtos);
}

function exemploVariaveisInteiro(){
    const numero1 = 18;
    const numero2 = 147;


    // + da linha de baixo está fazendo uma soma
    const soma = numero1 + numero2;

    // + da linha de baixo esta fazendo uma concatenação
    alert("Soma: " + soma);
}

function exemploVariaveisFloat(){
    const quantidadeHoras = 10;
    const valorHora = 2.30;

    const salarioBruto = quantidadeHoras * valorHora;

alert("Salário bruto: " + salarioBruto);
}

function exemploVariaveisBoolean(){
    let lorenzoFechouAba = false;
    
    lorenzoFechouAba = true;

    alert("Lorenzo fechou a aba: " + lorenzoFechouAba);
}

function exemploVariaveis(){
    const destino = "Maceió";
    const quantidadeDias = 20;
    const precoDiaria = 1300.1;
    let finalizadaCompra = false

    let valorTotal = quantidadeDias * precoDiaria;

    finalizadaCompra = true;

    alert(
        "Destino " + destino +
        "\nQuantidade de dias: " + precoDiaria +
        "\nFinalizar compra: " + finalizadaCompra +
        "\nValor total: R$ " + valorTotal
    );
}

/* Criar uma função exercicioPokemon
Nome 
Número
Descrição 
Altura 
Peso
Categoria 
Habilidades

Calcular o IMC do pokemon: peso / altura²
Apresentar todos os dados do pokemon e seu IMC 

*/

function exercicioPokemon(){
    const nome = "Mewtwo";
    const numero = 150;
    const descricao = "Mewtwo é um Pokémon lendário artificial, extremamente poderoso, com habilidades psíquicas avançadas e personalidade séria."
    const altura = 200;
    const peso = 122;
    const categoria = "Genetic";
    const habilidades = "Pressure";
    const imc = peso / (altura*altura);

    alert("Nome do pokemon: " + nome +
        "Número do pokemon: " + numero +
        "Descrição do pokemon: " + descricao +
        "Altura do pokemon: " + altura + 
        "Peso do pokemon: " + peso + 
        "Categoria do pokemon: " + categoria + 
        "Habilidades do pokemon: " + habilidades + 
        "IMC do pokemon: " + imc 
    );
}
function exercicioPokemon(){
    const nome = "Mewtwo";
    const numero = 150;
    const descricao = "Mewtwo é um Pokémon lendário artificial, extremamente poderoso, com habilidades psíquicas avançadas e personalidade séria."
    const altura = 2.00;
    const peso = 122;
    const categoria = "Genetic";
    const habilidades = "Pressure";
    const imc = peso / (altura*altura);

    alert("Nome do pokemon: " + nome +
        "\nNúmero do pokemon: " + numero +
        "\nDescrição do pokemon: " + descricao +
        "\nAltura do pokemon: " + altura + 
        "\nPeso do pokemon: " + peso + 
        "\nCategoria do pokemon: " + categoria + 
        "\nHabilidades do pokemon: " + habilidades + 
        "\nIMC do pokemon: " + imc 
    );
}

function exercicioPokemon2(){
    const nome = "Mewtwo";
    const numero = 111;
    const descricao = "Rhyhorn é um Pokémon do tipo Terra/Pedra, forte e resistente, conhecido por sua força bruta e investidas poderosas, capaz de atravessar obstáculos com facilidade."
    const altura = 1.00;
    const peso = 115;
    const categoria = "Spikes";
    const habilidades = "Rock Head, Lightning Rod";
    const imc = peso / (altura*altura);

    alert("Nome do pokemon: " + nome +
        "\nNúmero do pokemon: " + numero +
        "\nDescrição do pokemon: " + descricao +
        "\nAltura do pokemon: " + altura + 
        "\nPeso do pokemon: " + peso + 
        "\nCategoria do pokemon: " + categoria + 
        "\nHabilidades do pokemon: " + habilidades + 
        "\nIMC do pokemon: " + imc 
    );
}