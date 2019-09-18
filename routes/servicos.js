var express = require('express');
var router = express.Router();
var servicosService = require('../services/servicosService');

//Abre lista de serviços
router.get('/', function(req, res, next){
    var servicos = servicosService.getServicos();

    res.render('servicos', { title: 'Serviços', servicos: servicos });
});

module.exports = router;