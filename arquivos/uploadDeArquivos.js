const fs = require('fs')

module.exports = (caminho, nomeDoArquivo,callbackImagemCriada) => {
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}`
    fs.createReadStream(caminho) //leitura da imagem
    .pipe(fs.createWriteStream(novoCaminho))//escrita da imagem
    .on('finish', () => callbackImagemCriada(novoCaminho)) //chama evento e avisa que foi feito
}

    