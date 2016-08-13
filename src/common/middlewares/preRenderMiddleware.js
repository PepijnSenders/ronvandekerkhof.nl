export default function preRenderMiddleware(dispatch, components, params, req) {
    return Promise.all(
        components
        .filter(component => !!component)
        .reduce((previous, { needs }) => {
            if (typeof needs === 'function') {
                return (needs() || []).concat(previous);
            }

            return previous;
        }, [])
        .map(need => {
            if (typeof need === 'function') {
                if (req) {
                    return dispatch(need(params, req));
                }

                return dispatch(need(params));
            }

            return Promise.resolve();
        })
    );
}
