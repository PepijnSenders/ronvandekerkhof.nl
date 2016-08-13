import express from 'express';
import { PORT } from '<server/config>/app';
import expressConfig from '<server/config>/express';
import { react } from '<server/render>';

export function boot() {
    const app = express();

    expressConfig(app);

    app.get('/*', react);

    app.listen(PORT);
}

boot();
