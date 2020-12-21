function moedas() {
    let valor_select = parseInt(document.getElementById("tipo_moeda").value)
    let valor_input = parseFloat(document.getElementById("moeda").value)
    let real
    let dolar
    let euro
    let resultado

    if (document.getElementById("moeda").value != "") {


        switch (valor_select) {
            case 1:
                real = valor_input * 5.10
                resultado = `Valor em real: R$${real.toFixed(2)}`
                break;

            case 2:
                dolar = valor_input / 5.10
                resultado = `Valor em dólar: $${dolar.toFixed(2)}`
                break;

            case 3:
                real = valor_input * 6.23
                resultado = `Valor em real: R$${real.toFixed(2)}`
                break;

            case 4:
                euro = valor_input / 6.23
                resultado = `Valor em euro: €${euro.toFixed(2)}`
                break;
        }


    }

    else{
        resultado = "Insira um valor no campo vazio"
    }


    document.getElementById("res_conversao").textContent = resultado
}