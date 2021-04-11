const conexao = require('./conexao')

//parametros vazio pq nem todas as funcoes recebem parametros
const executaQuery = (query, parametros = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, (erros, resultados, campos) => {
            if (erros) {
                reject(erros)
            } else {
                resolve(resultados)
            }
        })
    })
}

module.exports = executaQuery