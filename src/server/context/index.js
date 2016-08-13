import { Map } from 'immutable';
import index from '<common/templates>';
import helmetConfig from '<common/config>/helmet';

export function createContext(store, routes, req) {
    return new Map({
        store,
        routes,
        helmetConfig,
        req,
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
