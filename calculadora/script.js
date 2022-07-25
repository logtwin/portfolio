function calcular(tipo, valor) {

    /*Mostrando valor*/
    if(tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }
    
    /*Limpar visor*/
    if (valor === 'c') {    
        document.getElementById('resultado').value = ''
    }

    /*Calculando*/
    if(valor === '=') {
        var valorfinal = document.getElementById('resultado').value
        document.getElementById('resultado').value = eval(valorfinal)
    }

}

/*-----Calculando com a tecla enter----*/
function enter(event) {
    var key = event.keyCode

    /*Negando letras*/
    if(key >= '65' && key <= '90') {
        document.getElementById('resultado').value = ''
    }

    /*Calcular*/
    if(key == '13') {
        var valorfinal = document.getElementById('resultado').value
        document.getElementById('resultado').value = eval(valorfinal)
    }
}