function temperatura(){

    let f 
    let celsius
    
    let valor = parseFloat(document.getElementById("temperatura").value)
    let opcao = document.getElementById("temp").value
    let resultado 

    if (document.getElementById("temperatura").value != "") {
        
        
        if (opcao == "celsius para fahrenheit") {
            
            f = (9 * valor + 160) / 5
            resultado = `temperatura em fahrenheit: ${f.toFixed(2)}°F`
        }
        
        else{
            celsius = (5 * valor -160) / 9
            resultado = `temperatura em celsius: ${celsius.toFixed(2)}°C`
        }
        
    }

    else{
        resultado = "Insira a temperatura"
    }
    

   



    
    document.getElementById("res_temperatura").textContent = resultado
}