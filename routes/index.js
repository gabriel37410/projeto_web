var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsService.getPosts().slice(0, 3);  //slice para limitar a exibir apenas 3 posts

  res.render('index', { title: 'Blog', posts: posts });
});

router.get('/posts/:postId', function(req, res, next){
  var postId = req.params.postId;
  var posts = postsService.getPosts();
  var post = posts.filter((post) => post.id == postId)[0];
  res.render('post', { title: post.title, post: post });
});

module.exports = router;
