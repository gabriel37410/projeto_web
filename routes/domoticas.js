var express = require('express');
var router = express.Router();
var luzsService = require('../services/luzsService');
var tempsService = require('../services/tempsService');

router.get('/', function(req, res, next){
    var luzs = luzsService.getLuzs();
    var temps = tempsService.getTemps();

    var viewData = {
        title: 'Domotica',
        luzs: luzs,
        temps: temps
    };

    res.render('domotica', viewData);
});

module.exports = router;