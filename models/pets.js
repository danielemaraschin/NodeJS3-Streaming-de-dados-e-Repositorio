const conexao = require('../infraestrutura/conexao')
const uploadDeArquivo = require('../arquivos/uploadDeArquivos')

class Pet {
    adiciona(pet, res) {
        const query = 'INSERT INTO Pets SET ?'
        //caminho da imagem, nome do pet = do arquivo, funcao callBack
        uploadDeArquivo(pet.imagem, pet.nome, (novoCaminho) => {
            const novoPet = { nome: pet.nome, imagem: novoCaminho}

            conexao.query(query, novoPet, erro => { 
                if(erro) {
                    res.status(400).json(erro)
                }else {
                res.status(200).json(pet)
                }
            })
        })
    }
}

module.exports = new Pet()