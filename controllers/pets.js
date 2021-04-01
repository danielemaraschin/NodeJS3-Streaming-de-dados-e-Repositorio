module.exports = app => {
    app.post('/pet', (req, res) => {    //primeira rota é post pq eh add o pet por isso o endereco /pet
       res.send('ok') //funcao de callback com o q vai acontecer quando usar essa rota req: o pedido res: resposta
    })
}

