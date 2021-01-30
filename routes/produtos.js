const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).send({
        message:'Recupera Produto'
    })
});

router.post('/',(req, res,next) =>{
    res.status(201).send({
        message: 'Criar novo produto'
    })
})

router.get('/:id_produto',(req, res, next)=>{
    const id = req.params.id_produto;
    res.status(200).send({
        message:'Recuperado produto por ID',
        id: id
    })
});

module.exports = router;