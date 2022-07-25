function getDadosEnderecoPorCep(cep) {
    console.log(cep)

    let url = 'https://viacep.com.br/ws/' + cep + '/json/'
    let xmlHttp = new XMLHttpRequest()
    xmlHttp.open('GET', url)
    xmlHttp.send()

    xmlHttp.onreadystatechange = () => {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            dadosJSONtext = xmlHttp.responseText
            dadosJSONobj = JSON.parse(dadosJSONtext)
            console.log(dadosJSONobj)

            //--Incluindo no input--\\
            document.getElementById('endereco').value = dadosJSONobj.logradouro
            document.getElementById('bairro').value = dadosJSONobj.bairro
            document.getElementById('cidade').value = dadosJSONobj.localidade
            document.getElementById('uf').value = dadosJSONobj.uf
            document.getElementById('ddd').value = dadosJSONobj.ddd
        }
    }
}