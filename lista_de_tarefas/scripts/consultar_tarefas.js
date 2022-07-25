class AddTarefa {
    constructor() {
        let id = localStorage.getItem("Id_tarefa")

        if(id == null) {
            localStorage.setItem('Id_tarefa', 0)
        }
    }

    getProximId() {
        let proximoId = localStorage.getItem('Id_tarefa')

        return parseInt(proximoId) + 1
    }

    dellTarefa(id_dell) {
      let id = id_dell

      localStorage.removeItem('Tarefa ' + id)
    }
}

//Mostrando tarefas
function carregar_tarefas() {
  var addTarefa = new AddTarefa
  var proximoId = addTarefa.getProximId()

  for(let i = 1; i < proximoId; i++) {
    var tarefa = JSON.parse(localStorage.getItem('Tarefa ' + i))

    if(tarefa != null) {
      var tarefahtml = '<div class="card mb-3 bg-light"><div class="card-body"><h5 class="card-title">' + tarefa[0] + '</h5><p class="card-text">' + tarefa[1] + '</p></div><button class="btn btn-primary botao" onclick="dell_tarefa(' + i + ')">Tarefa concluida</button></div>'
      var div = document.getElementById('tarefas').innerHTML
      div_final = div + tarefahtml

      document.getElementById('tarefas').innerHTML = div_final
    } else {
      continue
    }
    
  }
}  

//Excluindo tarefa
function dell_tarefa(id) {
  var addTarefa = new AddTarefa
  addTarefa.dellTarefa(id)
  location.reload()
}