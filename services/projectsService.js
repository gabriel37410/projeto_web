var fs = require('fs');

var projectsFilePatch = 'db/projects.json';

var loadFileProjects = function() {
    var fileData = fs.readFileSync(projectsFilePatch, 'utf8');
    var projects = JSON.parse(fileData);
    return projects;
}

var saveFileProjects = function(projects) {
    var data = JSON.stringify(projects);
    fs.writeFileSync(projectsFilePatch, data, 'utf8');
}

var getProjects = function() {
    var projects = loadFileProjects();
    return projects;
}

var saveProject = function(newProject) {
    var projects = loadFileProjects();
    projects.push(newProject);
    saveFileProjects(projects);
}


module.exports = {
    getProjects: getProjects,
    saveProject: saveProject
}
