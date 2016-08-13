import login from '<server/views>/auth/login';

export default function createAuthRoutes(app, passport) {
    app.get('/auth/login', function(req, res) {
        res.send(login());
    });

    app.get('/auth', passport.authenticate('facebook'));

    app.get('/auth/callback',
        passport.authenticate('facebook', {
            successRedirect : '/admin',
            failureRedirect : '/',
        }));
}
