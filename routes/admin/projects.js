var express = require('express');
var router = express.Router();
var projectsService = require('../../services/projectsService');

router.get('/', function(req, res, next){
    var projects = projectsService.getProjects();

var data = {
    projects: projects
};
    res.render('admin/projects/index', data);
});

router.get('/create', function(req, res, next) {
    


    res.render('admin/projects/create');
});

////////////////////////////
router.post('/create', function(req, res, next){
    var projects = projectsService.getProjects();

    var newId = projects.length + 1;

    var newProject = {};
    newProject.id = newId;
    newProject.name = req.body.name;
    newProject.image = req.body.image;
    newProject.subject = req.body.subject
    newProject.description = req.body.description;
    

    projectsService.saveProject(newProject);

    res.redirect('/admin/projects');

});//////////////////


module.exports = router;