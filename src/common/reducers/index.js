import { combineReducers } from 'redux-immutable';
import { routerReducer } from '<common/reducers>/router';
import { responseReducer } from '<common/reducers>/response';
import { datesReducer } from '<common/reducers>/dates';
import { publicitiesReducer } from '<common/reducers>/publicities';
import { publicityReducer } from '<common/reducers>/publicity';

const rootReducer = combineReducers({
    routing: routerReducer,
    response: responseReducer,
    dates: datesReducer,
    publicities: publicitiesReducer,
    publicity: publicityReducer,
});

export default rootReducer;
