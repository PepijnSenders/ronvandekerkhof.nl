import passport from 'passport';
import express from 'express';
import { PORT } from '<server/config>/app';
import mongooseConfig from '<server/config>/mongoose';
import expressConfig from '<server/config>/express';
import passportConfig from '<server/config>/passport';
import { redux } from '<server/render>';
import createAuthRoutes from '<server/routes>/auth';
import createAdminRoutes from '<server/routes>/admin';
import graphqlConfig from '<server/config>/graphql';
import { schema } from '<server/graphql>';

export function boot() {
    const app = express();

    mongooseConfig();

    passportConfig(passport);
    expressConfig(app, passport);

    graphqlConfig(app, schema);

    createAuthRoutes(app, passport);
    createAdminRoutes(app, passport, schema);

    app.get('/favicon.ico', function(req, res) {
        res.send('');
    });

    app.get('/*', redux);

    app.listen(PORT);
}

boot();
