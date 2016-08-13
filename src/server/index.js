import passport from 'passport';
import express from 'express';
import { PORT } from '<server/config>/app';
import expressConfig from '<server/config>/express';
import passportConfig from '<server/config>/express';
import { react } from '<server/render>';
import createAuthRoutes from '<server/routes>/auth';
import createAdminRoutes from '<server/routes>/admin';

export function boot() {
    const app = express();

    expressConfig(app);
    passportConfig(passport);

    app.get('/*', react);

    createAuthRoutes(app, passport);
    createAdminRoutes(app);

    app.listen(PORT);
}

boot();
