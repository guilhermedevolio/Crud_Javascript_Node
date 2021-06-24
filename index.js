const express = require('express');
const app = express();
const router = require('./routes/routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', router);

app.listen(3000, function() {
    return 'Ó o javascript iniciando KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK';
})

module.exports = app;