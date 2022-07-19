function mudaCorFundo() {
    const menu = document.querySelector("#seletorCores");
    const color = menu.value;
    document.body.style.background = color;
    const texto = document.querySelector('#texto')
    texto.innerHTML = 'Ótima escolha! tente novamente!'
}

