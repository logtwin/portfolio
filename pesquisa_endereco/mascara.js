console.log('teste')
function mascara() {
    var input_cep = document.getElementById('cep')

    if(input_cep.value.length == 5) {
        input_cep.value += '-'
    }
}
