var formulario = document.querySelector('form')

formulario.addEventListener('submit', function (e) {
    e.preventDefault()
    let urlForm = "https://pokeapi.co/api/v2/pokemon/"
    let Nome = document.getElementById("name")
    urlForm = urlForm + this.name.value
    let resposta = document.getElementById('result')
    let imagem = document.getElementById('imgPokemon')
    

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function (data) {
            console.log(data)

            html = 'Nome: ' + data.name + '<br>'
            html = html + 'Tipo: '+ data.types[0].type.name;
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.back_default + "'>"
        })
        .catch(function (err) {
            if (err == 'SyntaxError: Unexpected token N in JSON at position 0') {
                html = 'Pokémon não encontrado!'
            } else {
                html = err
            }
            resposta.innerHTML = html
        })




});