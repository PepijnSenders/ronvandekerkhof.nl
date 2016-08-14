import createAboutAdminRoutes from '<server/routes>/admin/about';
import createDateAdminRoutes from '<server/routes>/admin/date';
import createPortfolioAdminRoutes from '<server/routes>/admin/portfolio';
import createPublicityAdminRoutes from '<server/routes>/admin/publicity';
import { isDebug } from '<common/utilities>/environment';

export default function createAdminRoutes(app, passport, schema) {
    app.get('/admin', isLoggedIn, function(req, res) {
        res.redirect('/admin/date');
    });

    createAboutAdminRoutes(app, schema, isLoggedIn);
    createDateAdminRoutes(app, schema, isLoggedIn);
    createPortfolioAdminRoutes(app, schema, isLoggedIn);
    createPublicityAdminRoutes(app, schema, isLoggedIn);

    function isLoggedIn(req, res, next) {
        if (isDebug()) {
            return next();
        }

        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/auth/login');
    }
}
