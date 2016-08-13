import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import compression from 'compression';
import { PUBLIC_PATH } from '<server/config>/paths';
import { ENV } from '<common/config>/app';
import { PORT } from '<server/config>/app';
import { isProduction } from '<common/utilities>/environment';

function logServerStart(app) {
    console.log('--------------------------');
    console.log('===> 😊  Starting Server . . .');
    console.log(`===>  Environment: ${ENV}`);
    console.log(`===>  Listening on port: ${app.get('port')}`);
    console.log('--------------------------');
}

export default (app) => {
    app.set('port', PORT);
    app.disable('x-powered-by');

    if (isProduction()) {
        app.use(compression());
    }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true,
    }));
    app.use(methodOverride());
    app.use(express.static(PUBLIC_PATH));

    logServerStart(app);
};
