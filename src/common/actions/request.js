import {
    REQUEST,
    RESPONSE,
    FAILED_REQUEST,
} from '<common/constants>/types';

export function request(storeName, json) {
    return {
        type: REQUEST,
        payload: {
            params: Object.assign({}, json),
            requestedAt: Date.now(),
            storeName,
        },
    };
}

export function response(storeName, json) {
    return {
        type: RESPONSE,
        payload: {
            result: Object.assign({}, json),
            receivedAt: Date.now(),
            storeName,
        },
    };
}

export function failedRequest(storeName, json) {
    return {
        type: FAILED_REQUEST,
        payload: {
            error: Object.assign({}, json),
            failedAt: Date.now(),
            storeName,
        },
    };
}
