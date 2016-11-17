var path = require('path');
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var config = require('config-lite');
var routes = require('./routes');

// 定义 Express 实例
var app = express();

// 设置模板文件目录
// app.set() 文档：http://expressjs.com/en/4x/api.html#app.set
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎为 ejs
app.set('view engine', 'ejs');

// 设置静态文件目录
// express.static() 文档：http://expressjs.com/en/4x/api.html#express.static
app.use(express.static(path.join(__dirname, 'public')));

// session 中间件
app.use(session({
    name: config.session.key,
    secret: config.session.secret,
    cookie: {
        maxAge: config.session.maxAge
    },
    store: new MongoStore({
        url: config.mongodb
    })
}));

// flash 中间件
app.use(flash());

// 表单处理
app.use(require('express-formidable')());

// 设置模板全局变量
app.locals.blog = {
    title: 'Express Blog'
};

// 添加模板所必需的变量
app.use(function(req, res, next) {
    res.locals.user = req.session.user;
    res.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    next();
});

// 路由
routes(app);

// 监听端口，启动程序
app.listen(config.port, function() {
    console.log(`app listening on port ${config.port}`);
});