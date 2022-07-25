function calcular() {
    var idade = document.getElementById('idade').value
    var altura = document.getElementById('altura').value/100
    var peso = document.getElementById('peso').value

    if(idade == '' || altura == '' || peso == '') {
        alert('Preencha todos os campos')
    } else {
        var abaixo_do_peso = document.getElementById('abaixo-do-peso')
        var normal = document.getElementById('normal')
        var sobrepeso = document.getElementById('sobrepeso')
        var obeso = document.getElementById('obeso')

        var resultado = (peso/(altura * altura))
        resultado = Math.round(resultado * 10)/10

        document.getElementById('p').innerHTML = 'Seu IMC é: ' + resultado 
        document.getElementById('div-resultado').style.display = 'block'
        document.getElementById('table').style.width = '100%'
        if(window. screen. width <= 576) {
            document.querySelector(".box").style.marginTop = '180px'
        }

        if(resultado < 18.5) {
            abaixo_do_peso.style.background = 'rgb(185, 238, 189)'
        } else if(resultado >= 18.5 && resultado < 25) {
            normal.style.background = 'rgb(185, 238, 189)'
        } else if(resultado >= 25 && resultado < 30) {
            sobrepeso.style.background = 'rgb(185, 238, 189)'
        } else if(resultado >= 30) {
            obeso.style.background = 'rgb(185, 238, 189)'
        }
    }
}

function recarregar() {
    document.location.reload(true)
}