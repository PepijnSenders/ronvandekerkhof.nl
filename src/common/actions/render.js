import {
    RENDER_REQUEST,
    RENDER_FINISHED,
    RENDER_FAILED,
} from '<common/constants>/types';

export function renderRequest(url = '/') {
    return {
        type: RENDER_REQUEST,
        payload: {
            url,
            fetching: true,
        },
    };
}

export function renderFinished() {
    return {
        type: RENDER_FINISHED,
        payload: {
            fetching: false,
        },
    };
}

export function renderFailed(url = '/', status = 500, message = '') {
    return {
        type: RENDER_FAILED,
        payload: {
            url,
            status,
            message,
            fetching: false,
        },
    };
}
