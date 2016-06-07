import { combineReducers } from 'redux-immutable';
import { routerReducer } from './router';
import { responseReducer } from './response';

const rootReducer = combineReducers({
    routing: routerReducer,
    response: responseReducer,
});

export default rootReducer;
