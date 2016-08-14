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

        console.log('test');

        return graphqlFetch('FetchDates', `
            query FetchDates {
                publicities { _id title description link images {
                    size {
                        width height
                    } link
                } }
            }
        `, null, req ? `${req.protocol}://${req.get('host')}` : '').then(result => {
            console.log(result);
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            return dispatch(response('publicities', {
                data: result.data.data,
            }));
        }).catch(err => {
            dispatch(failedRequest('publicities', err));

            return Promise.reject(err);
        });
    };
}
