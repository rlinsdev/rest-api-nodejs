const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).send({
        message:'Recupera Pedido'
    })
});

router.post('/',(req, res,next) =>{

    const pedido = {
        id_pedido: req.body.id_pedido,
        quantidade: req.body.quantidade
    }

    res.status(201).send({
        message: 'Criar novo Pedido',
        pedidoCriado: pedido
    })
})

router.get('/:id_pedido',(req, res, next)=>{
    const id = req.params.id_pedido;
    res.status(200).send({
        message:'Recuperado pedido por ID',
        id: id
    })
});

module.exports = router;