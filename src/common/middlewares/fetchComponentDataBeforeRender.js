export default function fetchComponentDataBeforeRender(dispatch, components) {
    const needs = components.reduce(
        (prev, current) =>
            (current.need || [])
                .concat((current.WrappedComponent ? current.WrappedComponent.need : []) || [])
                .concat(prev),
    []);

    const promises = needs.map(need => dispatch(need()));

    return Promise.all(promises);
}
