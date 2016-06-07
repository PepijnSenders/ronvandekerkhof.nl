import { STATUS_CODES } from 'http';

class HttpError extends Error {
    constructor(message, status = 500) {
        super(message);

        this.status = status;

        this.name = this.constructor.name;
        this.message = message;

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }
    }

    static getMessageForStatus(status) {
        return STATUS_CODES[status];
    }

    static createFromStatus(status = 500) {
        return new HttpError(
            HttpError.getMessageForStatus(status),
            status
        );
    }

    static createFromError(err) {
        const httpError = new HttpError(err.message);

        httpError.stack = err.stack;

        return httpError;
    }
}

export default HttpError;
