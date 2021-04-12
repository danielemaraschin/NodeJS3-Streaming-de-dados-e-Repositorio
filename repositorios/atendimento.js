//repositório : pega a query e usa ela
//query: quem conecta com o banco de dados

const query = require('../infraestrutura/database/queries')

class Atendimento {
    //o que precisamos adicionar é o atendimento então é o unico parametro q precisamos ter
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        return query( sql, atendimento) //return pq nao trabalharemos com ela aqui, quem chamar essa funcao q vai trabalhar com ela
    }

    listas(){
        const sql = 'SELECT * FROM Atendimentos'

        return query(sql)
    }
}

module.exports = new Atendimento()