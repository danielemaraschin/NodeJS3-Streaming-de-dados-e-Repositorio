const fs = require('fs')
/*1ro parametro é o caminho e o 2do pode ser omitido, da algumas config, 3ro funcao callback
a funcao recebe 1ro o erro e 2do a imagem  (buffer de memoria que a gente salvou) como param*/
fs.readFile('../assets/salsicha.jpg', (erro, buffer) => {
    console.log("imagem bufferizada")
    
    fs.writeFile('./assets.salsicha2.jpg', buffer, erro => {
        console.log('imagem foi escrita')
    })
})