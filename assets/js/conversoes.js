function converterStringParaInt (){
    const numeroTexto1 = "19";
    const numero1 = parseInt(numeroTexto1);

    const numeroTexto2 = "81"
    const numero2 = parseInt(numeroTexto2);

    const soma = numero1 + numero2;
    
    alert("Soma: " + soma);

}

function converterStringParaFloat() {
    const numero1 = parseFloat("55.91");
    
    const numero2 = parseInt("200");
    
    const valorBruto = numero1 * numero2;

    alert("Valor bruto: " + valorBruto); 
}