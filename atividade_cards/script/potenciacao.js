function potenciacao() {
    let denominador = parseInt(document.getElementById("base").value)
    let expoente = parseInt(document.getElementById("expoente").value)
    let resultado

    if (document.getElementById("base").value != "" && document.getElementById("expoente").value != "") {
        
        
        resultado = Math.pow(denominador, expoente);
    }

    else{
        resultado = "Preencha o campo vazio"
    }

    document.getElementById("res_potenciacao").textContent = resultado
}
