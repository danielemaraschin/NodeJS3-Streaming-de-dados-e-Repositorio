const fs = require('fs')

module.exports = (caminho, nomeDoArquivo,callbackImagemCriada) => {
    fs.createReadStream(caminho) //leitura da imagem
    .pipe(fs.createWriteStream(`./assets/imagens/${nomeDoArquivo}`))//escrita da imagem
    .on('finish', () => callbackImagemCriada()) //chama evento e avisa que foi feito
}

    