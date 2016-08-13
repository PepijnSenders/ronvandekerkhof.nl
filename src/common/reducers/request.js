import { Map } from 'immutable';
import {
    REQUEST,
    RESPONSE,
    FAILED_REQUEST,
} from '<common/constants>/types';

export function request(state = new Map(), action) {
    switch (action.type) {
        case REQUEST:
            return state.merge({
                message: action.type,
                isFetching: true,
                error: null,
                requestedAt: action.payload.requestedAt,
            });

        default:
            return state;
    }
}

export function response(state = new Map(), action) {
    switch (action.type) {
        case RESPONSE:
            return state.merge({
                message: action.type,
                isFetching: false,
                error: null,
                receivedAt: action.payload.receivedAt,
            }, action.payload.result);
        default:
            return state;
    }
}

export function failedRequest(state = new Map(), action) {
    switch (action.type) {
        case FAILED_REQUEST:
            return state.merge({
                message: action.type,
                isFetching: false,
                error: action.payload.error,
                failedAt: action.payload.failedAt,
            });
        default:
            return state;
    }
}
