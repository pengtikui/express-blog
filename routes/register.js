var path = require('path');
var sha1 = require('sha1');
var express = require('express');
var router = express.Router();

// User Model
var UserModel = require('../models/users');
// 判断是否登录中间件
var checkNotLogin = require('../middlewares/check').checkNotLogin;

router.get('/', checkNotLogin, function(req, res, next) {
    res.render('register');
});

router.post('/', checkNotLogin, function(req, res, next) {
    var name = req.fields.name;
    var password = req.fields.password;
    var repassword = req.fields.repassword;
    try {
        if(!(name.length >= 3 && name.length <= 10)) {
            throw new Error('用户名长度应为 3-10 个字符！');
        }
        if(password.length < 6) {
            throw new Error('密码至少为 6 个字符！');
        }
        if(password !== repassword) {
            throw new Error('两次密码输入不一致！');
        }
    } catch(e) {
        req.flash('error', e.message);
        return res.redirect('/register');
    }
    password = sha1(password);
    var user = {
        name: name,
        password: password
    };
    UserModel.create(user).then(function(result) {
        user = result.ops[0];
        delete user.password;
        req.session.user = user;
        req.flash('success', '注册成功！');
        res.redirect('/posts');
    }).catch(function(e) {
        if(e.message.match('E11000 duplicate key')) {
            req.flash('error', '用户名已被占用！');
            return res.redirect('/register');
        }
        next(e);
    });
});

module.exports = router;