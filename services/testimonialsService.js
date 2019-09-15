var getTestimonials = function() {
    var testimonials = [
        {
            id: 1,
            name: 'José',
            company: 'Catolica SC',
            title: 'TI',
            testimony: 'Eu gosto muito de javascript'
        },
        {
            id: 2,
            name: 'João',
            company: 'Catolica SC',
            title: 'Secretaria',
            testimony: 'Eu tambem gosto muito de javascript'
        }
    ];
    return testimonials;
}

module.exports = {
    getTestimonials: getTestimonials
}