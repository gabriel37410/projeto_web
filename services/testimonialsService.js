var fs = require('fs');

var testimonialsFilePatch = 'db/testimonials.json';

var loadFileTestimonials = function() {
    var fileData = fs.readFileSync(testimonialsFilePatch, 'utf8');
    var testimonials = JSON.parse(fileData);
    return testimonials;
}

var saveFileTestimonials = function(testimonials) {
    var data = JSON.stringify(testimonials);
    fs.writeFileSync(testimonialsFilePatch, data, 'utf8');
}

var getTestimonials = function() {
    var testimonials = loadFileTestimonials();
    return testimonials;
}

var saveTestimonial = function(newTestimonial) {
    var testimonials = loadFileTestimonials();
    testimonials.push(newTestimonial);
    saveFileTestimonials(testimonials);
}


module.exports = {
    getTestimonials: getTestimonials,
    saveTestimonial: saveTestimonial
}