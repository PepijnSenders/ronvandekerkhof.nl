import { graphql } from 'graphql';
import { layout } from '<server/views>/admin';
import { list as aboutList, create as aboutCreate } from '<server/views>/admin/about';

export default function createAboutAdminRoutes(app, schema, isLoggedIn) {
    app.get('/admin/about', isLoggedIn, function(req, res) {
        graphql(schema, `
            query FetchAbout {
                abouts { _id title updatedAt }
            }
        `).then(function(result) {
            res.send(layout(aboutList({
                data: result.data.abouts,
            })));
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.get('/admin/about/edit/:id', isLoggedIn, function(req, res) {
        graphql(schema, `
            query FetchDate($id: ID!) {
                about(_id: $id) { title _id }
            }
        `, null, null, {
            id: req.params.id,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.send(layout(aboutCreate({
                data: result.data.about,
            })));
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.get('/admin/about/create', isLoggedIn, function(req, res) {
        res.send(layout(aboutCreate()));
    });

    app.post('/admin/about', isLoggedIn, function(req, res) {
        graphql(schema, `
            mutation aboutAdd($input: aboutInput!) {
                addAbout(data: $input)
            }
        `, null, null, {
            input: req.body,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/about');
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.post('/admin/about/:id', isLoggedIn, function(req, res) {
        graphql(schema, `
            mutation idUpdate($id: ID!, $input: aboutInput!) {
                updateAbout(_id: $id, data: $input)
            }
        `, null, null, {
            id: req.params.id,
            input: req.body,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/about');
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.delete('/admin/about/:id', isLoggedIn, function(req, res) {
        graphql(schema, `
            mutation idDelete($id: ID!) {
                removeAbout(_id: $id)
            }
        `, null, null, {
            id: req.params.id,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/about');
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });
}
