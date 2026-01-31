function exercicio01() {
    alert("arbe o console");

    let frutas = [];

    frutas.push("Maca");
    frutas.push("Pera");
    frutas.push("Tatame");

    frutas[2] = "Tomate";

    frutas.splice(3, 1); //3 é a posição da rúcula, que queremos remover do vetor

    console.log("Tamanho do vetor: " + frutas.length);

    console.log("Fruta 1: " + [frutas[0]]);
    console.log("Fruta 2: " + [frutas[1]]);
    console.log("Fruta 3: " + [frutas[3]]);

}

function exercicio01jogos() {
    let jogos = [] 

    jogos.push("Tíbia");
    console.log(frutas.length);

    jogos.push("Battlefield");
    console.log(frutas);

    jogos.push("League of Legends");
    jogos.push("Medal of honor");
    jogos.push("GTA 6");
    
    jogos.splice(2, 1);

    console.log(jogos.length);

    console.log(jogos);

    jogos[4] = "GTA VI";

    console.log(jogos.length);
    console.log(jogos)

}

function exercicio02() {
    let pratos = [];
    
    pratos.push("Strogonoff");
    pratos.push("Panqueca");
    pratos.push("Salada");

    console.log(pratos);

    pratos.splice(2,1);

    console.log(pratos.length);

    pratos.push("Risotto");
    pratos.push("Sopa");
    console.log(pratos);

    pratos[1] = "panqueca de carne";
    console.log(pratos.length);
    console.log(pratos);
}