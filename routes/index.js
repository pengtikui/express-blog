module.exports = function(app) {
    app.get('/', function(req, res) {
        res.redirect('/posts');
    });
    app.use('/login', require('./login'));
    app.use('/register', require('./register'));
    app.use('/logout', require('./logout'));
    app.use('/posts', require('./posts'));
};