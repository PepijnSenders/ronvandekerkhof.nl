import { graphql } from 'graphql';
import { layout } from '<server/views>/admin';
import { list as dateList, create as dateCreate } from '<server/views>/admin/date';

export default function createDateAdminRoutes(app, schema, isLoggedIn) {
    app.get('/admin/date', isLoggedIn, function(req, res) {
        graphql(schema, `
            query FetchDates {
                dates { _id name date link location updatedAt }
            }
        `).then(function(result) {
            res.send(layout(dateList({
                data: result.data.dates,
            })));
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.get('/admin/date/edit/:id', isLoggedIn, function(req, res) {
        graphql(schema, `
            query FetchDate($id: ID!) {
                date(_id: $id) { name date link location _id }
            }
        `, null, null, {
            id: req.params.id,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.send(layout(dateCreate({
                data: result.data.date,
            })));
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.get('/admin/date/create', isLoggedIn, function(req, res) {
        res.send(layout(dateCreate()));
    });

    app.post('/admin/date', isLoggedIn, function(req, res) {
        graphql(schema, `
            mutation dateAdd($input: dateInput!) {
                addDate(data: $input)
            }
        `, null, null, {
            input: req.body,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/date');
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.post('/admin/date/:id', isLoggedIn, function(req, res) {
        graphql(schema, `
            mutation dateUpdate($id: ID!, $input: dateInput!) {
                updateDate(_id: $id, data: $input)
            }
        `, null, null, {
            id: req.params.id,
            input: req.body,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/date');
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.delete('/admin/date/:id', isLoggedIn, function(req, res) {
        graphql(schema, `
            mutation dateDelete($id: ID!) {
                removeDate(_id: $id)
            }
        `, null, null, {
            id: req.params.id,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/date');
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });
}
