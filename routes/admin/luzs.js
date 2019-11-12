var express = require('express');
var router = express.Router();
var luzsService = require('../../services/luzsService');
var upload = require('../../middlewares/uploaderMiddleware');

router.get('/', function(req, res, next){
    var luzs = luzsService.getLuzs();

var data = {
    luzs: luzs
};
    res.render('admin/luzs/index', data);
});

router.get('/create', function(req, res, next) {
    


    res.render('admin/luzs/create');
});

router.post('/create', upload.single('image'), function(req, res, next){
    var luzs = luzsService.getLuzs();

    var newId = luzs.length + 1;

    var newLuz = {};
    newLuz.id = newId;
    newLuz.nome = req.body.nome;
    newLuz.status = req.body.status;    

    luzsService.saveLuz(newLuz);

    res.redirect('/admin/luzs');

});

module.exports = router;