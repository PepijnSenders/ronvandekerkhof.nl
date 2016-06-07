import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import createRoutes from '../common/routes';
import { configureStore } from '../common/store';
import fetchComponentDataBeforeRender from
    '../common/middlewares/fetchComponentDataBeforeRender';
import { fromJS } from 'immutable';
import { renderFinished } from '../common/actions';

const initialState = fromJS(
    window.__INITIAL_STATE__ // eslint-disable-line no-underscore-dangle
);

const store = configureStore(initialState, browserHistory);

syncHistoryWithStore(browserHistory, store, {
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

    const {
        components,
        params,
    } = this.state;

    fetchComponentDataBeforeRender(store.dispatch, components, params);
}

const routes = createRoutes();

render(
    <Provider store={store}>
        <Router history={browserHistory} onUpdate={onUpdate}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);
