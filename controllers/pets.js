const Pet = require('../models/pets')

module.exports = app => {
    app.post('/pet', (req, res) => {    //funcao de callback com o q vai acontecer quando usar essa rota req: o pedido res: resposta
       const pet = req.body //BODY vai ser o 'pet'

       Pet.adiciona(pet, res)
    })
}

