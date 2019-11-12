var express = require('express');
var router = express.Router();
var testimonialsService = require('../../services/testimonialsService');
var upload = require('../../middlewares/uploaderMiddleware');

router.get('/', function(req, res, next){
    var testimonials = testimonialsService.getTestimonials();

var data = {
    testimonials: testimonials
};
    res.render('admin/testimonials/index', data);
});

router.get('/create', function(req, res, next) {
    


    res.render('admin/testimonials/create');
});

router.post('/create', upload.single('image'), function(req, res, next){
    var testimonials = testimonialsService.getTestimonials();

    var newId = testimonials.length + 1;

    var newTestimonial = {};
    newTestimonial.id = newId;
    newTestimonial.name = req.body.name;
    newTestimonial.company = req.body.company;
    newTestimonial.title = req.body.title
    newTestimonial.testimony = req.body.testimony;
    

    testimonialsService.saveTestimonial(newTestimonial);

    res.redirect('/admin/testimonials');

});

module.exports = router;