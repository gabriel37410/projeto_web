var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');

/* GET home page. */

//Mostra posts pagina inicial
router.get('/', function(req, res, next) {
  var xposts = postsService.getPosts().slice(0, 3);  //slice para limitar a exibir apenas 3 posts

  res.render('index', { title: 'Blog', posts: xposts });  //primeiro posts refere-se ao nome que sera passado como parametro, ja o segundo refere-se a variavel em si
});

//Abra cada post espeficido
router.get('/posts/:postId', function(req, res, next){
  var postId = req.params.postId;
  var posts = postsService.getPosts();
  var post = posts.filter((post) => post.id == postId)[0];
  res.render('post', { title: post.title, post: post });
});

//Mostra lista de posts no menu Post
router.get('/posts', function(req, res, next) {
  var lposts = postsService.getPosts()

  res.render('posts', { title: 'Blog', lista_post: lposts }); 
});



module.exports = router;
