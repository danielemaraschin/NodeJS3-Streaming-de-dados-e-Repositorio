const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista()
            .then(resultados => res.status(200).json(resultados))
            .catch(erros => res.status(400).json(erros))
                    //status 200 é o padrao, pode nao colocar que o codigo vai ler 200 igual
                    // .then(resultados => res.json(resultados))  <= igual ao codigo que cita status 200

    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
       const atendimento = req.body

        Atendimento.adiciona(atendimento)        //manda o atendimento criado p frente
            .then(atendimentoCadastrado => 
                res.status(201).json(atendimentoCadastrado)
            ) //é mais semantico passar o erro no .catch ao inves de ser nos 2 parametros do .then
            .catch(erro => res.status(400).json(erro))
    }) 

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}