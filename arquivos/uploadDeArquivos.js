const fs = require('fs')

fs.createReadStream('../assets/salsicha.jpg') //leitura da imagem
    .pipe(fs.createWriteStream('../assets/salsicha-stream.jpg'))//escrita da imagem
    .on('finish', () => console.log('imagem escrita com sucesso')) //chama evento e avisa que foi feito
    