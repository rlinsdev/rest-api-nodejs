const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');
const bodyParser = require('body-parser');

// Responsável por registrar os logs das requisições em desenvolvimento
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false })); // apenas dados simples
app.use(bodyParser.json()); // Json na entrada das requisições

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Controll-Allow-Methods',
      'PUT, POST, PATCH, DELETE, GET'
    );
    return res.status(200).send({});
  }
  next();
});

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

app.use((req, res, next) => {
  const erro = new Error('não encontrado');
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: `Erro: ${error.mensagem}`,
    },
  });
});

module.exports = app;
