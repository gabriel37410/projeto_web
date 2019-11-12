var express = require('express');
var router = express.Router();
var tempsService = require('../../services/tempsService');
var upload = require('../../middlewares/uploaderMiddleware');

router.get('/', function(req, res, next){
    var temps = tempsService.getTemps();

var data = {
    temps: temps
};
    res.render('admin/temps/index', data);
});

router.get('/create', function(req, res, next) {
    


    res.render('admin/temps/create');
});

router.post('/create', upload.single('image'), function(req, res, next){
    var temps = tempsService.getTemps();

    var newId = temps.length + 1;

    var newTemp = {};
    newTemp.id = newId;
    newTemp.nome = req.body.nome;

    newTemp.data1 = req.body.data1;
    newTemp.valor1 = req.body.valor1;
    newTemp.tipo1 = "Temperatura";

    newTemp.data2 = req.body.data2;
    newTemp.valor2 = req.body.valor2;
    newTemp.tipo2 = "Umidade";
    
    tempsService.saveTemp(newTemp);

    res.redirect('/admin/temps');

});

module.exports = router;