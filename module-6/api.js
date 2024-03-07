const animais = $('#animais');

function obterImagem(){

    fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => response.blob())
    .then(blob => {
        const imageObjectURL = URL.createObjectURL(blob);
        const imagem = document.createElement('img')
        imagem.src = imageObjectURL
        animais.append(imagem);

    })
    .catch(error => console.log(error + "ao consultar a API"))
}