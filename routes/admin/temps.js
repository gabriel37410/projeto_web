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
    newTemp.data = req.body.data;
    newTemp.valor = req.body.valor;
    newTemp.tipo = req.body.tipo;
    

    tempsService.saveTemp(newTemp);

    res.redirect('/admin/temps');

});

module.exports = router;