import { combineReducers } from 'redux-immutable';
import { routerReducer } from '<common/reducers>/router';
import { responseReducer } from '<common/reducers>/response';

const rootReducer = combineReducers({
    routing: routerReducer,
    response: responseReducer,
});

export default rootReducer;
