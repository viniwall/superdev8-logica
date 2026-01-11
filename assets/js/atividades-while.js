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
    let indice = 0;
    
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
    let indice = 0;
    // soma zerada fora da função para poder ser puxada posteriormente
    let soma = 0;

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
    let indice = 0;

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

function exercicio06() {
    // Solicitar 5 números utilizando enquanto
    let indice = 0;
    let soma = 0;

    while (indice < 5) {
        let numero = parseInt(prompt("Digite um número"));

        soma = soma + numero;
        
        indice = indice + 1;
    }
    // Apresentar a soma e a média dos números
    alert("A soma dos números é: " + soma + "\nE a média dos números é: " + soma/indice);
}

function exercicio07() {
    //- Solicitar o valor de 6 vendas
    let indice =  0;
    let valorTotal = 0;

    while (indice < 6) {
        let venda = parseFloat(prompt("Insira o valor da venda"));
        //- Apresentar o total das vendas
        valorTotal = valorTotal + venda;
        
        indice = indice + 1;
        
    }
    //- Calcular e apresentar 5% de comissão sobre total das vendas.
    alert("Total de vendas realizadas: "+ indice +
        "\nValor total de vendas: "+ valorTotal +
        "\nValor da comissão: "+ valorTotal * 0.05)
}

function exercicio08() {
    //- Solicitar 10 números
    let indice = 0;

    while (indice < 10) {
        indice = indice + 1;
        let numero = parseInt(prompt("Digite o número"));
        //- Apresentar se o número é par, usando o % para conferir o módulo (resto) da divisão
        if (numero % 2 == 0) {
            alert("O número: " + numero + " é par");
        } else {
            // se o módulo for 1 o número é ímpar
            alert("O número: " + numero + " é ímpar");
        }
    }
}

function exercicio09() {
    let indice = 1;
    //- Solicitar um número para o usuário
    let numero = parseInt(prompt("Insira um número"));
    //- Apresentar a tabuada desse número utilizando while
    while (indice<=10) {
        alert(numero + " x " + indice + " = " + numero * indice);

        indice = indice + 1;
    }
}

function exercicio10() {
    indice = 0;
    numeroParQuant = 0;
    numeroImparQuant = 0;

    //- Solicitar 10 números
    let numero1 = parseInt(prompt("Digite o 1° número"))
    if (numero1 % 2 == 1) {
        numeroParQuant = numeroParQuant + 1;
    } else if (numero1 % 2 == 0) {
        numeroImparQuant = numeroImparQuant + 1;
    }
    
    let numero2 = parseInt(prompt("Digite o 2° número"))
    if (numero2 % 2 == 1) {
        numeroParQuant = numeroParQuant + 1;
    } else if (numero2 % 2 == 0) {
        numeroImparQuant = numeroImparQuant + 1;
    }

    let numero3 = parseInt(prompt("Digite o 3° número"))
    if (numero3 % 2 == 1) {
        numeroParQuant = numeroParQuant + 1;
    } else if (numero3 % 2 == 0) {
        numeroImparQuant = numeroImparQuant + 1;
    }

    let numero4 = parseInt(prompt("Digite o 4° número"))
    if (numero4 % 2 == 1) {
        numeroParQuant = numeroParQuant + 1;
    } else if (numero4 % 2 == 0) {
        numeroImparQuant = numeroImparQuant + 1;
    }

    let numero5 = parseInt(prompt("Digite o 5° número"))
    if (numero5 % 2 == 1) {
        numeroParQuant = numeroParQuant + 1;
    } else if (numero5 % 2 == 0) {
        numeroImparQuant = numeroImparQuant + 1;
    }

    let numero6 = parseInt(prompt("Digite o 6° número"))
    if (numero6 % 2 == 1) {
        numeroParQuant = numeroParQuant + 1;
    } else if (numero6 % 2 == 0) {
        numeroImparQuant = numeroImparQuant + 1;
    }

    let numero7 = parseInt(prompt("Digite o 7° número"))
    if (numero7 % 2 == 1) {
        numeroParQuant = numeroParQuant + 1;
    } else if (numero7 % 2 == 0) {
        numeroImparQuant = numeroImparQuant + 1;
    }

    let numero8 = parseInt(prompt("Digite o 8° número"))
    if (numero8 % 2 == 1) {
        numeroParQuant = numeroParQuant + 1;
    } else if (numero8 % 2 == 0) {
        numeroImparQuant = numeroImparQuant + 1;
    }

    let numero9 = parseInt(prompt("Digite o 9° número"))
    if (numero9 % 2 == 1) {
        numeroParQuant = numeroParQuant + 1;
    } else if (numero9 % 2 == 0) {
        numeroImparQuant = numeroImparQuant + 1;
    }

    let numero10 = parseInt(prompt("Digite o 10° número"))
    if (numero10 % 2 == 1) {
        numeroParQuant = numeroParQuant + 1;
    } else if (numero10 % 2 == 0) {
        numeroImparQuant = numeroImparQuant + 1;
    }

    //- Apresentar a quantidade de números pares e ímpares
    alert("Quantidade de números pares: "+numeroParQuant+"\nQuantidade de números ímpares: "+numeroImparQuant);
}

function exercicio11() {
        let indice = 0;
        let notas = 0;

    //- Solicitar 4 notas de um aluno utilizando enquanto
    while (indice < 4) {
        indice = indice + 1;
        let notasValor = parseFloat(prompt("Digite as nota do aluno"));
        notas = notas + notasValor; 
    }

    //- Calcular a média das notas
    let media = notas / indice;

    //- Apresentar a média
    if (media >= 7){
        //- Se a média for maior ou igual a 7 apresentar Aprovado
        alert("Aluno aprovado!")
    } else {
        //- Senão apresentar Reprovado
        alert("Aluno reprovado!")
    }
    
}

function exercicio12() {
    let indice = 0;
    let produtos = 0;
    //- Solicitar o valor de 5 produtos utilizando enquanto
    while (indice < 4) {
        indice = indice + 1;
        let produtosValor = parseFloat(prompt("Insira o valor de 5 produtos"));
        //- Calcular o total da compra
        produtos = produtos + produtosValor;
    }
    
    //- Se o total for maior que 200 aplicar 10% de desconto
    if (produtos<=200) {
        //- Apresentar o valor total com e sem desconto
        alert("valor total do produto (sem desconto): "+ produtos+ "\nvalor total da compra (com desconto)" + (produtos + (produtos*0.1)))

    }

}

function exercicio13() {
    let indice = 0;
    let idades = 0;
    //- Solicitar 6 idades utilizando enquanto
    while (indice < 6) {
        indice = indice + 1;
        let idadesValor = parseInt(prompt("Digite 6 idades"));
        idades = idades + idadesValor;
    }

    //- Calcular a média das idades
    let media = idades / 6;

    //- Apresentar a média das idades, se a média for maior ou igual a 18 apresentar Maior de idade 
    // senão apresentar Menor de idade
    if (media >= 18) {
        alert("Maior de idade!");
    } else if (media < 18) {
        alert("Menor de idade!");
    } else {
        alert("Media inválida! (insira valores a partir de 0)")
    }

}

function exercicio14() {
    let indice = 0;
    let salarios = 0;
    let menorSalario = 999999999;
    let maiorSalario = 0;

    //- Solicitar 5 salários utilizando enquanto
    while (indice < 5) {
        indice = indice + 1;
        let salariosValor = parseFloat(prompt("Digite 5 salarios"));
        salarios = salarios + salariosValor;
        //- Calcular o maior salário informado
        if (salariosValor > maiorSalario) {
            maiorSalario = salariosValor;
        } 
        //- Calcular o menor salário informado
        if (salariosValor < menorSalario) {
            menorSalario = salariosValor;
        }
    }
    //- Calcular a média dos salários
    let media = salarios / 5;
    //- Se a média for maior que 3000 apresentar mensagem Salários acima da média
    if (media > 3000) {
        alert("Salarios acima da média! \nMaior salário digitado: " + maiorSalario + "\nmenor salário digitado: " + menorSalario)
    } 
    else if (media <= 3000) {
        // senão apresentar mensagem Salários dentro da média
        alert("Salarios dentro da média! \nMaior salário digitado: " + maiorSalario + "\nmenor salário digitado: " + menorSalario)
    } else {
        alert("Valores inválidos (insira valores a partir de 0)")
    }

}

function exercicio15 () {
    let indice = 0;
    let contas = 0;
    let contasValor = 0;
    //- Solicitar 4 valores de contas (água, luz, internet, aluguel) utilizando enquanto
    while (indice < 4) {
        indice = indice + 1;

        if (indice == 1) {
            contasValor = parseFloat(prompt("Insira sua conta de água"));
            //- Calcular o total das contas
            contas = contas + contasValor;
        } else if (indice == 2) {
            contasValor = parseFloat(prompt("Insira sua conta de luz"));
            contas = contas + contasValor;
        } else if (indice == 3) {
            contasValor = parseFloat(prompt("Insira sua conta de internet"));
            contas = contas + contasValor;
        } else if (indice == 4) {
            contasValor = parseFloat(prompt("Insira seu aluguel"));
            contas = contas + contasValor;
        }
    }
    //- Solicitar a renda mensal do usuário
    let rendaMensal = parseFloat(prompt("Insira sua renda mensal"));
    //- Se o total das contas for maior que 50% da renda apresentar mensagem Orçamento comprometido
    if (contas > (rendaMensal/2)) {
        alert("Orçamento comprometido")
    }
    //- Senão apresentar mensagem Orçamento saudável
    else {
        alert("Orçamento saudável")
    }
    //- Apresentar o total das contas e o percentual que representa da renda
    alert("O total das contas mensais foi de: " + contas + " que representa %" + ((contas * 100) / rendaMensal))
}

function exercicio16() {
    let maiorAltura = 0;

    //- Solicitar a altura de 5 pessoas
    altura1 = parseFloat(prompt("Insira a altura da primeira pessoa:"))    
    // até este momento, altura1 é o maior valor digitado, pois os outros não existem
    maiorAltura = altura1;
    let altura2 = parseFloat(prompt("Insira a altura da segunda pessoa:"))
    let altura3 = parseFloat(prompt("Insira a altura da terceira pessoa:"))
    let altura4 = parseFloat(prompt("Insira a altura da quarta pessoa:"))
    let altura5 = parseFloat(prompt("Insira a altura da quinta pessoa:"))
    
    //- Descobrir e armazenar a maior altura utilizando while
    while (maiorAltura == altura1) {
        // comparação da altura inicial com as outras para mudança da maior altura
        if (maiorAltura < altura2) {
            maiorAltura = altura2;
        }  
        
        if (maiorAltura < altura3) {
            maiorAltura = altura3;
        }  
        
        if (maiorAltura < altura4) {
            maiorAltura = altura4;
        }  
        
        if (maiorAltura < altura5) {
            maiorAltura = altura5;
        } 
        
        else {
            break;
        }
    }
    //- Apresentar a maior altura informada
    alert("A maior altura inserida é: " + maiorAltura)

}

//17. Criar uma função exercicio17()
//- Solicitar o peso de 4 pessoas
//- Descobrir e armazenar o menor peso utilizando while
//- Apresentar o menor peso informado

//18. Criar uma função exercicio18()
//- Solicitar o nome e a idade de 5 pessoas
//- Descobrir quem possui a maior idade utilizando while
//- Apresentar o nome da pessoa e a idade dela

//19. Criar uma função exercicio19()
//- Solicitar o preço de 6 produtos
//- Descobrir o maior preço utilizando while
//- Descobrir o menor preço utilizando while
//- Apresentar o maior e o menor preço informados

//20. Criar uma função exercicio20()
//- Solicitar o nome e o valor do salário de 4 colaboradores
//- Descobrir qual colaborador tem o maior salário utilizando while
//- Apresentar o nome do colaborador e o salário dele

//21. Criar uma função exercicio21()
//- Solicitar a temperatura de 7 dias
//- Descobrir a maior temperatura utilizando while
//- Descobrir a menor temperatura utilizando while
//- Apresentar a maior e a menor temperatura informadas

//22. Criar uma função exercicio22()
//- Solicitar o nome e o preço de 5 produtos
//- Descobrir qual produto tem o menor preço utilizando while
//- Apresentar o nome do produto e o preço dele

//23. Criar uma função exercicio23()
//- Solicitar a idade de 8 pessoas
//- Contar quantas são crianças (idade < 12)
//- Contar quantas são adolescentes (12 a 17)
//- Contar quantas são adultos (18 a 59)
//- Contar quantas são idosos (60 ou mais)
//- Apresentar a quantidade em cada categoria

//24. Criar uma função exercicio24()
//- Solicitar a nota de 10 alunos
//- Contar quantos alunos estão Reprovados (nota < 5)
//- Contar quantos alunos estão em Recuperação (nota >= 5 e < 7)
//- Contar quantos alunos estão Aprovados (nota >= 7)
//- Apresentar a quantidade de Reprovados, Recuperação e Aprovados

//25. Criar uma função exercicio25()
//- Solicitar o salário de 7 colaboradores
//- Contar quantos ganham até 2000
//- Contar quantos ganham entre 2001 e 5000
//- Contar quantos ganham acima de 5000
//- Apresentar a quantidade de colaboradores em cada faixa salarial

//26. Criar uma função exercicio26()
//- Solicitar a temperatura de 6 dias
//- Contar quantos dias foram Frios (temperatura < 15)
//- Contar quantos dias foram Agradáveis (temperatura entre 15 e 25)
//- Contar quantos dias foram Quentes (temperatura > 25)
//- Apresentar a quantidade de dias Frios, Agradáveis e Quentes

//27. Criar uma função exercicio27()
//- Solicitar a avaliação de 10 clientes (1 a 5)
//- Contar quantas avaliações foram Ruim (1 ou 2)
//- Contar quantas avaliações foram Regular (3)
//- Contar quantas avaliações foram Bom (4 ou 5)
//- Apresentar a quantidade de respostas Ruim, Regular e Bom

//28. Criar uma função exercicio28()
//- Solicitar 8 números inteiros
//- Contar quantos números são negativos
//- Contar quantos números são iguais a zero
//- Contar quantos números são positivos
//- Apresentar a quantidade de números negativos, iguais a zero e positivos

//29. Criar uma função exercicio29()
//- Solicitar o peso de 5 encomendas
//- Contar quantas são Leves (peso < 2 kg)
//- Contar quantas são Médias (peso entre 2 e 10 kg)
//- Contar quantas são Pesadas (peso > 10 kg)
//- Apresentar a quantidade de encomendas Leves, Médias e Pesadas

//30. Criar uma função exercicio30()
//- Solicitar a quantidade de pelúcias da Disney que deseja cadastrar
//- Para cada pelúcia, solicitar o personagem [MICKEY/MINNIE/DONALD]
//- Contar quantas pelúcias são do Mickey
//- Contar quantas pelúcias são da Minnie
//- Contar quantas pelúcias são do Donald
//- Apresentar o resumo das pelúcias cadastradas por personagem

//31. Criar uma função exercicio31()
//- Solicitar a quantidade de clientes que irão responder a pesquisa
//- Para cada cliente, solicitar a forma de pagamento utilizada [CRÉDITO/DÉBITO/DINHEIRO]
//- Contar quantos pagaram no crédito
//- Contar quantos pagaram no débito
//- Contar quantos pagaram em dinheiro
//- Apresentar o total de clientes em cada forma de pagamento

//32. Criar uma função exercicio32()
//- Solicitar a quantidade de ingressos vendidos
//- Para cada ingresso, solicitar o tipo [INTEIRA/MEIA/CORTESIA]
//- Contar quantos ingressos são INTEIRA
//- Contar quantos ingressos são MEIA
//- Contar quantos ingressos são CORTESIA
//- Apresentar o total de ingressos por tipo

//33. Criar uma função exercicio33()
//- Solicitar a quantidade de lanches vendidos em um dia
//- Para cada lanche, solicitar o tipo [HAMBURGUER/PIZZA/HOTDOG]
//- Contar quantos pedidos foram de hambúrguer
//- Contar quantos pedidos foram de pizza
//- Contar quantos pedidos foram de hotdog
//- Apresentar a quantidade de pedidos por tipo de lanche

//34. Criar uma função exercicio34()
//- Solicitar a quantidade de livros que deseja cadastrar
//- Para cada livro, solicitar a categoria [FICÇÃO/ESTUDO/INFANTIL]
//- Contar quantos livros são de Ficção
//- Contar quantos livros são de Estudo
//- Contar quantos livros são Infantis
//- Apresentar a quantidade de livros em cada categoria

//35. Criar uma função exercicio35()
//- Solicitar o nome de personagens de anime até o usuário digitar sair
//- Cada vez que um nome for digitado, exibir uma mensagem com o personagem cadastrado
//- Ao digitar sair, encerrar o cadastro
//- Apresentar a quantidade total de personagens cadastrados

//36. Criar uma função exercicio36()
//- Solicitar o nome de jogos favoritos até o usuário digitar sair
//- Contar quantos jogos foram cadastrados
//- Contar quantos jogos são do gênero RPG (quando o usuário digitar "RPG" em uma pergunta de gênero)
//- Ao final, apresentar a quantidade total de jogos e quantos são RPG

//37. Criar uma função exercicio37()
//- Solicitar o nome de heróis da Marvel até o usuário digitar sair
//- Para cada herói, solicitar também o nível de poder [BAIXO/MEDIO/ALTO]
//- Contar quantos heróis têm poder BAIXO, MEDIO e ALTO
//- Ao final, apresentar a quantidade em cada nível de poder

//38. Criar uma função exercicio38()
//- Solicitar o nome de séries geeks (ex: Star Wars, Star Trek, etc.) até o usuário digitar sair
//- Para cada série cadastrada, solicitar uma nota de 0 a 10
//- Calcular a média das notas das séries informadas
//- Ao final, apresentar a quantidade de séries cadastradas e a média das notas

//39. Criar uma função exercicio39()
//- Solicitar o nome de consoles/jogos retrô (ex: SNES, Mega Drive) até o usuário digitar sair
//- Contar quantos itens foram cadastrados
//- Solicitar para cada item se o usuário já jogou [SIM/NÃO]
//- Ao final, apresentar quantos itens foram cadastrados e quantos o usuário já jogou

//40. Criar uma função exercicio40()
//- Solicitar a distância percorrida em km e o consumo de combustível em litros
//- Apresentar um MENU com as opções:
    //1 - Calcular consumo médio (km/l)
    //2 - Calcular custo da viagem (solicitar o preço do litro de combustível)
    //3 - Alterar distância percorrida
    //4 - Alterar consumo em litros
    //10 - Sair
//- Enquanto a opção digitada for diferente de 10
//- Executar a opção escolhida e apresentar o resultado
//- Ao escolher 10 encerrar o programa

//41. Criar uma função exercicio41()
//- Solicitar o saldo inicial de uma conta bancária
//- Apresentar um MENU com as opções:
    //1 - Depositar
    //2 - Sacar
    //3 - Consultar saldo
    //10 - Sair
//- Enquanto a opção for diferente de 10
//- Executar a operação escolhida
//- No saque, não permitir sacar valor maior que o saldo
//- Ao final, apresentar o saldo final da conta

//42. Criar uma função exercicio42()
//- Apresentar um MENU de conversão de temperaturas:
    //1 - Celsius para Fahrenheit
    //2 - Fahrenheit para Celsius
    //10 - Sair
//- Enquanto a opção for diferente de 10
//- Solicitar a temperatura conforme a opção
//- Realizar a conversão e apresentar o resultado
//- Voltar ao MENU até o usuário escolher sair

//43. Criar uma função exercicio43()
//- Apresentar um MENU de calculadora de IMC:
    //1 - Calcular IMC
    //2 - Ver instruções de uso
    //10 - Sair
//- Enquanto a opção for diferente de 10
//- Na opção 1 solicitar peso e altura, calcular e apresentar o IMC
//- Na opção 2 apresentar uma breve explicação do que é IMC
//- Voltar ao MENU até o usuário escolher sair

//44. Criar uma função exercicio44()
//- Apresentar um MENU de controle de estoque:
    //1 - Adicionar itens ao estoque
    //2 - Remover itens do estoque
    //3 - Consultar quantidade em estoque
    //10 - Sair
//- Declarar uma variável estoque iniciando em 0
//- Enquanto a opção for diferente de 10
//- Executar a opção escolhida atualizando o estoque
//- Não permitir remover quantidade maior que o estoque
//- Ao sair, apresentar a quantidade final em estoque

//45. Criar uma função exercicio45()
//- Apresentar um MENU de lanche:
    //1 - Adicionar Hambúrguer (R$ 15,00)
    //2 - Adicionar Pizza (R$ 25,00)
    //3 - Adicionar Refrigerante (R$ 8,00)
    //4 - Ver total parcial
    //10 - Finalizar pedido
//- Declarar uma variável total começando em 0
//- Enquanto a opção for diferente de 10
//- Somar o valor do item escolhido ao total
//- Permitir consultar o total parcial
//- Ao finalizar o pedido, apresentar o valor total

//46. Criar uma função exercicio46()
//- Apresentar um MENU de notas de aluno:
    //1 - Cadastrar nota
    //2 - Ver média das notas
    //3 - Ver quantidade de notas cadastradas
    //10 - Sair
//- Utilizar while para repetir o MENU
//- Somar as notas cadastradas e contar quantas foram inseridas
//- Na opção 2 calcular e apresentar a média
//- Na opção 3 apresentar a quantidade de notas cadastradas

//47. Criar uma função exercicio47()
//- Apresentar um MENU de pesquisa de satisfação:
    //1 - Registrar resposta "Ruim"
    //2 - Registrar resposta "Regular"
    //3 - Registrar resposta "Bom"
    //4 - Ver resumo da pesquisa
    //10 - Encerrar pesquisa
//- Utilizar contadores para cada tipo de resposta
//- Enquanto a opção for diferente de 10
//- Registrar a opção escolhida
//- Na opção 4 apresentar a quantidade de respostas Ruim, Regular e Bom
//- Ao encerrar, mostrar o resumo final da pesquisa

//48. Criar uma função exercicio48()
//- Cadastrar quantas vendas desejar
//- Para cada venda solicitar:
    //- Nome do cliente
    //- Valor da compra
    //- Forma de pagamento [CRÉDITO/DÉBITO/PIX]
//- Calcular o maior valor de compra
//- Calcular o menor valor de compra
//- Calcular a média das compras
//- Contar quantas vendas foram em CRÉDITO, DÉBITO e PIX
//- Apresentar um resumo geral das vendas

//49. Criar uma função exercicio49()
//- Cadastrar quantos alunos desejar
//- Para cada aluno solicitar:
    //- Nome
    //- Idade
    //- Peso
    //- Altura
//- Calcular o IMC de cada aluno
//- Contar quantos alunos estão Abaixo do peso, Peso normal e Acima do peso
//- Descobrir qual aluno tem o maior IMC
//- Descobrir qual aluno tem o menor IMC
//- Calcular a média das idades
//- Apresentar um resumo geral dos alunos

//50. Criar uma função exercicio50()
//- Cadastrar quantos títulos desejar em uma maratona geek
//- Para cada título solicitar:
    //- Nome do título
    //- Tipo [FILME/SÉRIE/ANIME]
    //- Nota (0 a 10)
//- Calcular a maior nota atribuída
//- Calcular a menor nota atribuída
//- Calcular a média das notas
//- Contar quantos são FILME, quantos são SÉRIE e quantos são ANIME
//- Apresentar um resumo geral da maratona