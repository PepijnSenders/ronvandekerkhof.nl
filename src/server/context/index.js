import pug from 'pug';
import path from 'path';
import { Map } from 'immutable';
import helmetConfig from '../../common/config/helmet';
import fs from 'fs';

export function createContext(store, routes, radiumConfig) {
    return new Map({
        store,
        routes,
        helmetConfig,
        radiumConfig,
        renderIndex: (header, initialState, containedHTML) =>
            getTemplate(
                path.resolve(__dirname, '../../..', 'resources/views/index.pug')
            ).then(
                (template) =>
                    pug.compile(template)({
                        header,
                        initialState,
                        containedHTML,
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

export function getTemplate(templatePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(
            templatePath,
            (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data.toString());
                }
            }
        );
    });
}
