import {
    request,
    response,
    failedRequest,
} from '<common/actions>/request';

export function getDates(params = {}, req) {
    return (dispatch, getState, { graphqlFetch }) => {
        if (getState().get('dates') && getState().get('dates').size) {
            return getState().get('dates');
        }

        dispatch(request('dates'));

        return graphqlFetch('FetchDates', `
            query FetchDates {
                dates { _id name date link location updatedAt }
            }
        `, null, `${req.protocol}://${req.get('host')}`).then(result => {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            return dispatch(response('dates', {
                data: result.data.data,
            }));
        }).catch(err => {
            dispatch(failedRequest('dates', err));

            return Promise.reject(err);
        });
    };
}
