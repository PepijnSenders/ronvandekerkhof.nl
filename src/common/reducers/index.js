import { combineReducers } from 'redux-immutable';
import { routerReducer } from '<common/reducers>/router';
import { responseReducer } from '<common/reducers>/response';
import { datesReducer } from '<common/reducers>/dates';

const rootReducer = combineReducers({
    routing: routerReducer,
    response: responseReducer,
    dates: datesReducer,
});

export default rootReducer;
