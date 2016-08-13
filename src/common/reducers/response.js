import {
    RENDER_REQUEST,
    RENDER_FINISHED,
    RENDER_FAILED,
} from '<common/constants>/types';
import { Map } from 'immutable';

export function responseReducer(state = new Map(), action) {
    switch (action.type) {
        case RENDER_REQUEST:
            return state.merge({
                render: action.payload,
            });

        case RENDER_FINISHED:
            return state.merge({
                render: action.payload,
            });

        case RENDER_FAILED:
            return state.merge({
                render: action.payload,
            });

        default:
            return state;
    }
}
