var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var projectsService = require('../services/projectsService')
var servicosService = require('../services/servicosService');

/* GET home page. */
//Mostra posts pagina inicial
router.get('/', function(req, res, next) {
  var xposts = postsService.getPosts().slice(0, 3);  //slice para limitar a exibir apenas 3 posts
  res.render('index', { title: 'Blog', posts: xposts });  //primeiro posts refere-se ao nome que sera passado como parametro, ja o segundo refere-se a variavel em si
});

//Abra cada post especifico
router.get('/posts/:postId', function(req, res, next){
  var postId = req.params.postId;
  var posts = postsService.getPosts();
  var post = posts.filter((post) => post.id == postId)[0];
  res.render('post', { title: post.title, post: post });
});

//Mostra lista de posts no menu Post
router.get('/posts', function(req, res, next) {
  var lposts = postsService.getPosts();
  res.render('posts', { title: 'Posts', lista_post: lposts }); 
});

//Mostra lista de projects no menu Projects
router.get('/projects', function(req, res, next) {
  var lprojects = projectsService.getProjects()
  res.render('projects', { title: 'Projects', lista_projects: lprojects});
});

//Mostrar cada project especifico
router.get('/projects/:projectId', function(req, res, next){
  var projectId = req.params.projectId;
  var projects = projectsService.getProjects();
  var project = projects.filter((project) => project.id == projectId)[0];
  res.render('project', {title: project.name, project: project });
});

//Abre cada serviço especifico
router.get('/servicos/:servicoId', function(req, res, next){
  var servicoId = req.params.servicoId;
  var servicos = servicosService.getServicos();
  var servico = servicos.filter((servico) => servico.id == servicoId)[0];
  res.render('servico', { title: servico.nome, servico: servico });
});

module.exports = router;
