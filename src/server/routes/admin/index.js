export default function createAdminRoutes(app) {
    app.get('/admin', isLoggedIn, function(req, res) {
        res.send('hello world');
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
}

function isLoggedIn(req, res, next) {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/');
}
