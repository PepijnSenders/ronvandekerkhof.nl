import {
    request,
    response,
    failedRequest,
} from '<common/actions>/request';

export function getPublicities(params = {}, req) {
    return (dispatch, getState, { graphqlFetch }) => {
        if (getState().get('publicities') && getState().get('publicities').size) {
            return getState().get('publicities');
        }

        dispatch(request('publicities'));

        return graphqlFetch('FetchDates', `
            query FetchPublicities {
                publicities { _id title description link images {
                    size {
                        width height
                    } link
                } }
            }
        `, null, req ? `${req.protocol}://${req.get('host')}` : '').then(result => {
            return dispatch(response('publicities', {
                data: result.data.data,
            }));
        }).catch(err => {
            const sendErr = new Error(err.response.data.errors.join('\n'));

            dispatch(failedRequest('publicities', sendErr));

            return Promise.reject(sendErr);
        });
    };
}
