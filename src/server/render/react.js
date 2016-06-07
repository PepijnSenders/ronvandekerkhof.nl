import { createMemoryHistory } from 'react-router';
import { configureStore } from '../../common/store';
import { renderRequest, renderFailed } from '../../common/actions';
import { Map, fromJS } from 'immutable';
import { createContext } from '../context';
import createRoutes from '../../common/routes';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import HttpError from '../http/errors/HttpError';
import { send, sendError, redirect } from '../http/response';
import Meta from '../../common/components/Meta';
import helmetConfig from '../../common/config/helmet';
import fetchComponentDataBeforeRender from
    '../../common/middlewares/fetchComponentDataBeforeRender';

export default function render(req, res) {
    const history = createMemoryHistory();
    const store = configureStore(fromJS({}), history);

    const context = createContext(store, createRoutes());

    store.dispatch(renderRequest(req.url));

    renderer(context, req.url)
        .then((response) => {
            res.status(response.status)
                .send(response.body);
        })
        .catch((err) => {
            const status = 500;

            store.dispatch(renderFailed(req.url, status, err.message));

            res.status(status)
                .send(err.message);
        });
}

export function renderer(context = new Map, location) {
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

function renderHTML(renderProps, context) {
    const store = context.get('store');

    return fetchComponentDataBeforeRender(
        store.dispatch,
        renderProps.components,
        renderProps.params
    ).then(() => {
        const header = renderHeader(context.get('helmetConfig'));
        const renderFunction = context.get('renderIndex');
        const initialState = store.getState();
        const containedHTML = renderComponent(store, renderProps);

        return renderFunction(header, initialState, containedHTML);
    }).then((compiled) => {
        return send(200, compiled);
    });
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
    return renderToString(
        <Provider store={store}>
            <RouterContext {...renderProps} />
        </Provider>
    );
}
