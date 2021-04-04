const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1))
    //pergunta qual o index do tiposvalidos. O ponto final é o primeiro entao coloca tipo.substring
    // pra contar a partir do 1 e nao contar o ponto final antes da extensao
    //se o valor for -1 é que a extensao nao está dentro do array de tiposValidos

    if (tipoEhValido === -1) {
        console.log('Erro! Tipo de imagem inválida.')
    } else {
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`

        fs.createReadStream(caminho) //leitura da imagem
            .pipe(fs.createWriteStream(novoCaminho))//escrita da imagem
            .on('finish', () => callbackImagemCriada(novoCaminho)) //chama evento e avisa que foi feito
    }
}
