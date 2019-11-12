var express = require('express');
var router = express.Router();
var tempsService = require('../services/tempsService');

router.get('/', function(req, res, next){
    var temps = tempsService.getTemps();

    var viewData = {
        title: 'Temperatura',
        temps: temps
    };

    res.render('temps', viewData);
});

module.exports = router;