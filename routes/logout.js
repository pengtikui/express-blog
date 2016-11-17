var express = require('express');
var router = express.Router();

// 判断是否登录中间件
var checkLogin = require('../middlewares/check').checkLogin;

router.get('/',  checkLogin, function(req, res, next) {
    req.session.user = null;
    req.flash('success', '已退出登录！');
    res.redirect('/posts');
})

module.exports = router;