import { Map } from 'immutable';
import {
    REQUEST,
    RESPONSE,
    FAILED_REQUEST,
} from '<common/constants>/types';
import {
    request,
    response,
    failedRequest,
} from '<common/reducers>/request';

export function datesReducer(state = new Map(), action) {
    if (
        action.payload &&
        'storeName' in action.payload &&
        action.payload.storeName !== 'dates'
    ) {
        return state;
    }

    switch (action.type) {
        case REQUEST:
            return request(state, action);

        case RESPONSE:
            return response(state, action);

        case FAILED_REQUEST:
            return failedRequest(state, action);

        default:
            return state;
    }
}
