import { match, RouterContext } from 'react-router';
import { Map, fromJS } from 'immutable';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import { StyleSheetServer } from 'aphrodite';
import { default as createMemoryHistory } from 'history/lib/createMemoryHistory';

import { createHistory } from '<common/utilities>/history';
import { configureStore } from '<common/store>';
import { renderRequest, renderFailed } from '<common/actions>';
import { createContext } from '<server/context>';
import createRoutes from '<common/routes>';
import HttpError from '<server/http>/errors/HttpError';
import { send, sendError, redirect } from '<server/http>/response';
import Meta from '<common/components>/Meta';
import preRenderMiddleware from
    '<common/middlewares>/preRenderMiddleware';

export default function redux(req, res) {
    const routes = createRoutes();

    const history = createHistory(routes, createMemoryHistory);
    const store = configureStore(fromJS({}), history);

    const context = createContext(store, createRoutes(), req);

    store.dispatch(renderRequest(req.url));

    renderer(context, req.url)
        .then(({ status, body }) => {
            if (status >= 200 && status < 300) {
                res.status(status)
                    .send(body);
            } else {
                res.redirect(status, body);
            }
        })
        .catch((err) => {
            const status = 500;

            store.dispatch(renderFailed(req.url, status, err.message));

            res.status(status)
                .send(err.message);
        });
}

export function renderer(context = new Map(), location) {
    return resolveMatch({
        routes: context.get('routes'),
        location,
    }).then(({ redirectLocation, renderProps }) => {
        if (redirectLocation) {
            return Promise.resolve(redirect(redirectLocation));
        }

        if (renderProps) {
            return renderHTML(renderProps, context);
        }

        return Promise.reject();
    }).catch((err) => {
        if (err) {
            sendError(err);

            return Promise.resolve(sendError(err));
        }

        const httpError = HttpError.createFromStatus(404);

        return Promise.resolve(
            sendError(httpError)
        );
    });
}

function renderHTML(renderProps, context, req) {
    const store = context.get('store');

    return preRenderMiddleware(
        store.dispatch,
        renderProps.components,
        renderProps.params,
        context.get('req')
    ).then(() => {
        const header = renderHeader(context.get('helmetConfig'));
        const renderFunction = context.get('renderIndex');
        const initialState = store.getState();
        const radiumConfig = context.get('radiumConfig');
        const { css, html } = renderComponent(store, renderProps, radiumConfig);

        return renderFunction(header, initialState, html, css);
    }).then((compiled) => send(200, compiled));
}

function renderHeader(config) {
    renderToString( // Needs to be here for helmet to know what to rewind
        <Meta config={config} />
    );

    return Helmet.rewind();
}

function resolveMatch({ routes, location }) {
    return new Promise((resolve, reject) => {
        match({
            routes,
            location,
        }, (err, redirectLocation, renderProps) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    redirectLocation,
                    renderProps,
                });
            }
        });
    });
}

function renderComponent(store, renderProps) {
    return StyleSheetServer.renderStatic(() =>
        renderToString(
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        )
    );
}
