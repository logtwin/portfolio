//----Variáveis---\\
var altura = 0
var largura = 0
var vida = 1
var tempo = 5
var moscas_mortas = 0
var tempo_mosca = 1500

//----Ajustando tamanho da tela---\\ 
function ajustartamanho() {
    altura = window.innerHeight
    largura = window.innerWidth
} ajustartamanho()

//----Definindo dificuldade---\\ 
var nivelJogo = localStorage.getItem('nivel')

if(nivelJogo == 'facil') {
    tempo_mosca = 1500
    tempo = 30
} else if(nivelJogo == 'medio') {
    tempo_mosca = 1000
    tempo = 45
} else if(nivelJogo == 'hardcore') {
    tempo_mosca = 750
    tempo = 60
} else if(nivelJogo == 'arcade') {
    tempo_mosca = 1000
    tempo = 0
}

//----Iniciar jogo---\\
function iniciar() {
    var nivel = document.getElementById('nivel').value

    if(nivel == '') {
        alert('Selecione um nivel')
        return false
    } else {
        localStorage.setItem('nivel', nivel)
        window.location.href = 'jogo.html'
    }
}

//----Começar a aparecer as moscas---\\
if(document.getElementById('jogo')) {
    setInterval(posicaoaleatoria, tempo_mosca)

    //----Criando o lemento html---\\
    function posicaoaleatoria() {
        //----Gerando posição aleatoria---\\
        var posicaox = Math.floor(Math.random() * largura - 90)
        var posicaoy = Math.floor(Math.random() * altura - 90)

        posicaox = posicaox < 0 ? 0 : posicaox
        posicaoy = posicaoy < 0 ? 0 : posicaoy

        //----Gerando elemento---\\
        var mosca = document.createElement('img')
        mosca.src = 'img/mosca.png'
        mosca.className = tamanhoaleatorio() + ' ' + ladoaleatorio()
        mosca.style.left = posicaox + 'px'
        mosca.style.top = posicaoy + 'px'
        mosca.style.position = 'absolute'
        mosca.id = 'mosca'
        mosca.onclick = function() {
            this.remove()
            moscas_mortas++
            document.getElementById('contador').innerHTML = moscas_mortas

            //----Local storage---\\
            localStorage.setItem('moscas-mortas', moscas_mortas);
        }
        mosca.draggable = false

        //----Removendo elemento anterior---\\
        if(document.getElementById('mosca')) {
            document.getElementById('mosca').remove()

            //Game over
            if(vida >3) {
                window.location.href = 'game_over.html'
            } else {
                document.getElementById('v' + vida).src = 'img/coracao_vazio.png'
                vida++
            }
        } 

        //----Gerando elemento de fato---\\
        document.body.appendChild(mosca)
    }

    //----Tamanho aleatorio---\\
    function tamanhoaleatorio() {
        var classe = Math.floor(Math.random() * 3)
        
        switch(classe) {
            case 0:
                return 'mosca1'
            case 1:
                return 'mosca2'
            case 2 :
                return 'mosca3'
        }
    } tamanhoaleatorio()

    //----Lado aleatorio---\\
    function ladoaleatorio() {
        var classe = Math.floor(Math.random() * 2)
        
        switch(classe) {
            case 0:
                return 'ladoA'
            case 1:
                return 'ladoB'
        } 
    } ladoaleatorio()

    //----Cronometro---\\
    var cronometro = setInterval(function() {
        if(tempo < 0) {
            clearInterval(cronometro)
            clearInterval(posicaoaleatoria())
            
            //Direcionar para página da vitoria
            window.location.href = 'vitoria.html'
        } else {
            document.getElementById('tempo').innerHTML = tempo
        }

        if(nivelJogo == 'facil' || nivelJogo == 'medio' || nivelJogo == 'hardcore') {
            tempo--
        } else if(nivelJogo == 'arcade') {
            document.getElementById('time').innerHTML = 'de jogo:'
            tempo++
        }
        
    }, 1000)

}

//----Botão para reiniciar para o mesmo nível---\\
function reiniciar() {
    window.location.href = 'jogo.html'
}

//-----Local Storage---\\
document.getElementById('moscas-mortas').innerHTML = localStorage.getItem('moscas-mortas')


