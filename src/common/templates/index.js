import keys from 'lodash/keys';

export default function index({ title, css, html, header, initialState }) {
    return html`
        <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                ${header.meta.toComponent().map(meta => html`
                    <meta
                        ${keys(meta.props).map(key => `${key}="${meta.props[key]}"`).join(' ')}
                    >
                `).join('\n')}
                ${header.link.toComponent().map(link => html`
                    <link
                        ${keys(link.props).map(key => `${key}="${link.props[key]}"`).join(' ')}
                    >
                `).join('\n')}
                <style type="text/css" data-aphrodite>${css.content}</style>
            </head>
            <body>
                <div id="app">${html}</div>
                <script type="text/javascript">
                    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                    window.__APHRODITE_CLASSNAMES__ = ${JSON.stringify(css.renderedClassNames)};
                </script>
                <script type="text/javascript" src="/dist/main.js"></script>
            </body>
        </html>
    `;
}
