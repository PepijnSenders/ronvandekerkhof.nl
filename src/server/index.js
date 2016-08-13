import passport from 'passport';
import express from 'express';
import { PORT } from '<server/config>/app';
import mongooseConfig from '<server/config>/mongoose';
import expressConfig from '<server/config>/express';
import passportConfig from '<server/config>/passport';
import { redux } from '<server/render>';
import createAuthRoutes from '<server/routes>/auth';
import createAdminRoutes from '<server/routes>/admin';

export function boot() {
    const app = express();

    mongooseConfig();

    expressConfig(app);
    passportConfig(passport);

    createAuthRoutes(app, passport);
    createAdminRoutes(app);

    app.get('/*', redux);

    app.listen(PORT);
}

boot();
