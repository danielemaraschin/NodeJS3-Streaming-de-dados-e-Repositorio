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



/** */
conexao.query(sql, [valores, id], (erro, resultados) => {
    if (erro) {
        res.status(400).json(erro)
    } else {
        res.status(200).json({ ...valores, id })
    }
})
}