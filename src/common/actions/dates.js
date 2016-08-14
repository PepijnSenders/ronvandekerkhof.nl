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
        `, null, req ? `${req.protocol}://${req.get('host')}` : '').then(result => {
            return dispatch(response('dates', {
                data: result.data.data,
            }));
        }).catch(err => {
            const sendErr = new Error(err.response.data.errors.join('\n'));

            dispatch(failedRequest('dates', sendErr));

            return Promise.reject(sendErr);
        });
    };
}
