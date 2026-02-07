function inverterVariaveis() {
    //inverter o valor das variaveis antes de imprimir o código
    let x = 4;
    let y = 2;
    let z = 0;

    alert("x: " + x + " y: " + y);

    z = x;
    x = y;
    y = z;

    alert("x: " + x + " y: " + y);
}