import views from '<server/views>/admin';
import { graphql } from 'graphql';

export default function createAdminRoutes(app, passport, schema) {
    app.get('/admin', isLoggedIn, function(req, res) {
        res.redirect('/admin/dates');
    });

    app.get('/admin/:model', isLoggedIn, function(req, res) {
        const model = req.params.model;

        const fields = ['_id', 'updatedAt'];

        if (model === 'abouts') {
            fields.push('title');
        }

        if (model === 'dates') {
            fields.concat([
                'date',
                'name',
            ]);
        }

        console.log(views[model], views);

        graphql(schema, `
            query {
                ${model} { ${fields.join(' ')} }
            }
        `).then(function(result) {
            res.send(views.layout(views[model]({
                [model]: result.data[model],
            })));
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/');
    }
}
