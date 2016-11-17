module.exports = {
    checkLogin: function checkLogin(req, res, next) {
        if(!req.session.user) {
            req.flash('error', '请先登录！');
            return res.redirect('/login');  // 跳转至登录页面
        }
        next();
    },
    checkNotLogin: function checkNotLogin(req, res, next) {
        if(req.session.user) {
            req.flash('error', '您已登录！');
            return res.redirect('back');    // 返回上一个页面
        }
        next();
    }
};