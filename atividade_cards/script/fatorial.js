function fatorial() {
    let i, num, f

    num = parseInt(document.getElementById("fatorial").value)

    if (document.getElementById("fatorial").value != "") {


        if (num == 0) {
            resultado = "Fatorial de 0 é 0"
        }

        else {
            f = 1;
            i = 1;

            while (i <= num) {
                f *= i
                i++
            }
            resultado = `Fatorial de ${num} é ${f}`
        }
    }

    else{
        resultado = "Preencha o campo vazio"
    }
    
    document.getElementById("res_fatorial").textContent = resultado
}