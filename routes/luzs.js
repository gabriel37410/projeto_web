var express = require('express');
var router = express.Router();
var luzsService = require('../services/luzsService');

router.get('/', function(req, res, next){
    var luzs = luzsService.getLuzs();

    var viewData = {
        title: 'Luz',
        luzs: luzs
    };

    res.render('luzs', viewData);
});

module.exports = router;