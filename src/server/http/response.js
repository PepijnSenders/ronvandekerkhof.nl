import { STATUS_CODES } from 'http';
import HttpError from '<server/http>/errors/HttpError';

function logResponse(log, status, message) {
    log(`SEND: ${status}/${message}`);
}

export function send(status, data) {
    logResponse(console.log, status, STATUS_CODES[status]);

    return {
        status,
        body: data,
    };
}

export function sendError(err) {
    let httpError = err;
    if (!(httpError instanceof HttpError)) {
        httpError = HttpError.createFromError(err);
    }

    logResponse(console.log, httpError.status, httpError.message);

    console.log(httpError.stack);

    return {
        status: httpError.status,
        body: httpError.message,
    };
}

export function redirect(location, status = 302) {
    const to = `${location.pathname}${location.search}`;

    logResponse(console.log, status, `Redirecting to: ${to}`);

    return {
        status,
        body: to,
    };
}
