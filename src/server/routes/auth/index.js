import login from '<server/views>/auth/login';

export default function createAuthRoutes(app, passport) {
    app.get('/auth/login', function(req, res) {
        res.send(login());
    });

    app.get('/auth', passport.authenticate('facebook'));

    app.get('/auth/callback', function(req, res, next) {
        passport.authenticate('facebook', function(err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.redirect('/auth/login');
            }

            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }

                return res.redirect('/admin');
            });
        })(req, res, next);
    });

    app.get('/auth/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
}
