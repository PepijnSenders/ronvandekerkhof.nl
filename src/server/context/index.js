import { Map } from 'immutable';
import index from '<common/templates>';

export function createContext(store, routes) {
    return new Map({
        store,
        routes,
        renderIndex: (header, initialState, html, css) =>
            Promise.resolve(
                index({
                    header,
                    initialState,
                    html,
                    css,
                    title: extractTitleFromHelmet(header),
                })
            ),
    });
}

export function extractTitleFromHelmet(header) {
    try {
        return header.title.toComponent()[0].props.children;
    } catch (e) {
        return '';
    }
}
