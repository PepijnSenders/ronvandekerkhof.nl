import {
    request,
    response,
    failedRequest,
} from '<common/actions>/request';

export function getPublicity(params = {}, req) {
    return (dispatch, getState, { graphqlFetch }) => {
        if (getState().get('publicity') && getState().get('publicity').size) {
            return getState().get('publicity');
        }

        dispatch(request('publicity'));

        return graphqlFetch('FetchDates', `
            query FetchPublicity($id: ID!) {
                publicity(_id: $id) { _id title description link images {
                    size {
                        width height
                    } link
                } }
            }
        `, {
            id: params.id,
        }, req ? `${req.protocol}://${req.get('host')}` : '').then(result => {
            return dispatch(response('publicity', {
                data: result.data.data,
            }));
        }).catch(err => {
            const sendErr = new Error(err.response.data.errors.join('\n'));

            dispatch(failedRequest('publicity', sendErr));

            return Promise.reject(sendErr);
        });
    };
}
