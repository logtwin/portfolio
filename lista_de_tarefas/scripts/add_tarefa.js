class AddTarefa {
    constructor() {
        let id = localStorage.getItem("Id_tarefa")

        if(id == null) {
            localStorage.setItem('Id_tarefa', 0)
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('Id_tarefa')

        return parseInt(proximoId) + 1
    }

    addTarefa(tarefa) {
        let id = this.getProximoId()

        localStorage.setItem('Tarefa ' + id, JSON.stringify(tarefa))

        localStorage.setItem('Id_tarefa', id)
        console.log(tarefa)
    }
}


function add_tarefa() {
    console.log('chegou')
    var titulo = document.getElementById('titulo').value
    var descricao = document.getElementById('descricao').value

    var addTarefa = new AddTarefa

    var tarefa = Array(titulo, descricao)

    addTarefa.addTarefa(tarefa)

    //Colocar aviso
    document.getElementById('alerta').innerHTML = '<div class="alert alert-info mt-2 mb-0" role="alert">Tarefa adicionada com sucesso, <a href="consultar_tarefa.html" class="alert-link">clique aqui para ve-lo</a></div>'
}