var express = require('express');
var router = express.Router();

// Post Model
var PostModel = require('../models/posts');
// 判断是否登录中间件
var checkLogin = require('../middlewares/check').checkLogin;

router.get('/', function(req, res, next) {
    var author = req.query.author;
    PostModel.getPosts(author).then(function(posts) {
        res.render('index', { posts: posts });
    }).catch(next);
});

router.get('/create', checkLogin, function(req, res, next) {
    res.render('create');
});

router.post('/create', checkLogin, function(req, res, next) {
    var author = req.session.user._id;
    var title = req.fields.title;
    var content = req.fields.content;
    try {
        if(!title.length) {
            throw new Error('请填写标题！');
        }
        if(!content.length) {
            throw new Error('请填写内容！');
        }
    } catch(e) {
        req.flash('error', e.message);
        return res.redirect('back');
    }
    var post = {
        author: author,
        title: title,
        content: content
    };
    PostModel.create(post).then(function(result) {
        post = result.ops[0];
        req.flash('success', '发表成功！');
        res.redirect(`/posts/${post._id}`);
    }).catch(next);
});

router.get('/:postId', function(req, res, next) {
    var postId = req.params.postId;
    PostModel.getPostById(postId).then(function(post) {
        res.render('post', { post: post })
    }).catch(next);
});

router.get('/:postId/edit', checkLogin, function(req, res, next) {
    var postId = req.params.postId;
    var author = req.session.user._id;
    PostModel.getRawPostById(postId).then(function(post) {
        if(!post) {
            throw new Error('文章不存在！');
        }
        if(author.toString() !== post.author._id.toString()) {
            throw new Error('权限不足！');
        }
        res.render('edit', { post: post }).catch(next);
    })
});

router.post('/:postId/edit', checkLogin, function(req, res, next) {
    var postId = req.params.postId;
    var author = req.session.user._id;
    var title = req.fields.title;
    var content = req.fields.content;
    PostModel.updatePostById(postId, author, { title: title, content: content }).then(function() {
        req.flash('success', '文章更新成功！');
        res.redirect(`/posts/${postId}`);
    }).catch(next);
});

router.get('/:postId/remove', checkLogin, function(req, res, next) {
    var postId = req.params.postId;
    var author = req.session.user._id;
    PostModel.delPostById(postId, author).then(function() {
        req.flash('success', '文章删除成功！');
        res.redirect('/posts');
    }).catch(next);
});

module.exports = router;