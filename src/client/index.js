import '<client/styles>';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { fromJS } from 'immutable';
import { StyleSheet } from 'aphrodite';

import createRoutes from '<common/routes>';
import { configureStore } from '<common/store>';
import { renderFinished } from '<common/actions>';
import { createHistory } from '<common/utilities>/history';

const initialState = fromJS(
    window.__INITIAL_STATE__ // eslint-disable-line no-underscore-dangle
);
StyleSheet.rehydrate(window.__APHRODITE_CLASSNAMES__); // eslint-disable-line no-underscore-dangle

const routes = createRoutes();

const history = createHistory(routes);
const store = configureStore(initialState, history);

syncHistoryWithStore(history, store, {
    selectLocationState(state) {
        return state.get('routing').toJS();
    },
});

store.dispatch(renderFinished());

export function onUpdate() {
    if (window.__INITIAL_STATE__ !== null) { // eslint-disable-line no-underscore-dangle,max-len
        window.__INITIAL_STATE__ = null; // eslint-disable-line no-underscore-dangle,max-len

        return;
    }
}

render(
    <Provider store={store}>
        <Router history={history} onUpdate={onUpdate}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);
