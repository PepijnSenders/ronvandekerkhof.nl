export default function preRenderMiddleware(dispatch, components, params) {
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
                return dispatch(need(params));
            }

            return Promise.resolve();
        })
    );
}
