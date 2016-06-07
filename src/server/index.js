import express from 'express';
import { PORT } from './config/app';
import expressConfig from './config/express';
import { react } from './render';

export function boot() {
    const app = express();

    expressConfig(app);

    app.get('/*', react);

    app.listen(PORT);
}

boot();
