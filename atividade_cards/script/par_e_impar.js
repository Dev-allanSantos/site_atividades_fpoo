function par_e_impar(){
    let num = parseInt(document.getElementById("par&impar").value)
    let resultado

    

    
    if (document.getElementById("par&impar").value != "") {
        
        
        if (num % 2 == 0) {
            resultado = "Este número é par"
        }
        
        else   {    
            resultado = "Este número é ímpar"
        }
        
    }

    else{
        resultado = "Por favor, digite um número"
    }
       
    
        
        
    document.getElementById("res_par_e_impar").textContent = resultado
}