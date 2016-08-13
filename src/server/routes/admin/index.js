import { layout } from '<server/views>/admin';
import { list as dateList, create as dateCreate } from '<server/views>/admin/date';
import { list as aboutList, create as aboutCreate } from '<server/views>/admin/about';
import { list as publicityList, create as publicityCreate } from '<server/views>/admin/publicity';
import { list as portfolioList, create as portfolioCreate } from '<server/views>/admin/portfolio';
import { graphql } from 'graphql';

export default function createAdminRoutes(app, passport, schema) {
    app.get('/admin', isLoggedIn, function(req, res) {
        res.redirect('/admin/date');
    });

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

    app.get('/admin/porfolio', isLoggedIn, function(req, res) {
        graphql(schema, `
            query FetchDates {
                porfolios { _id updatedAt }
            }
        `).then(function(result) {
            res.send(layout(porfolioList({
                data: result.data.porfolios,
            })));
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.get('/admin/about', isLoggedIn, function(req, res) {
        graphql(schema, `
            query FetchDates {
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

    app.get('/admin/publicity', isLoggedIn, function(req, res) {
        graphql(schema, `
            query FetchDates {
                publicities { _id updatedAt }
            }
        `).then(function(result) {
            res.send(layout(publicityList({
                data: result.data.publicities,
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

    app.get('/admin/portfolio/edit/:id', isLoggedIn, function(req, res) {
        graphql(schema, `
            query FetchDate($id: ID!) {
                portfolio(_id: $id) { _id }
            }
        `, null, null, {
            id: req.params.id,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.send(layout(portfolioCreate({
                data: result.data.portfolio,
            })));
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.get('/admin/publicity/edit/:id', isLoggedIn, function(req, res) {
        graphql(schema, `
            query FetchDate($id: ID!) {
                publicity(_id: $id) { _id }
            }
        `, null, null, {
            id: req.params.id,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.send(layout(publicityCreate({
                data: result.data.publicity,
            })));
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.get('/admin/date/create', isLoggedIn, function(req, res) {
        res.send(layout(dateCreate()));
    });

    app.get('/admin/about/create', isLoggedIn, function(req, res) {
        res.send(layout(aboutCreate()));
    });

    app.get('/admin/portfolio/create', isLoggedIn, function(req, res) {
        res.send(layout(portfolioCreate()));
    });

    app.get('/admin/publicity/create', isLoggedIn, function(req, res) {
        res.send(layout(publicityCreate()));
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

    app.post('/admin/portfolio', isLoggedIn, function(req, res) {
        graphql(schema, `
            mutation portfolioAdd($input: portfolioInput!) {
                addPortfolio(data: $input)
            }
        `, null, null, {
            input: req.body,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/portfolio');
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.post('/admin/publicity', isLoggedIn, function(req, res) {
        graphql(schema, `
            mutation publicityAdd($input: publicityInput!) {
                addPublicity(data: $input)
            }
        `, null, null, {
            input: req.body,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/publicity');
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

    app.post('/admin/portfolio/:id', isLoggedIn, function(req, res) {
        graphql(schema, `
            mutation portfolioUpdate($id: ID!, $input: portfolioInput!) {
                updatePortfolio(_id: $id, data: $input)
            }
        `, null, null, {
            id: req.params.id,
            input: req.body,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/portfolio');
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.post('/admin/publicity/:id', isLoggedIn, function(req, res) {
        graphql(schema, `
            mutation publicityUpdate($id: ID!, $input: publicityInput!) {
                updatePublicity(_id: $id, data: $input)
            }
        `, null, null, {
            id: req.params.id,
            input: req.body,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/publicity');
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

    app.delete('/admin/portfolio/:id', isLoggedIn, function(req, res) {
        graphql(schema, `
            mutation portfolioDelete($id: ID!) {
                removePortfolio(_id: $id)
            }
        `, null, null, {
            id: req.params.id,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/portfolio');
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.delete('/admin/publicity/:id', isLoggedIn, function(req, res) {
        graphql(schema, `
            mutation publicityDelete($id: ID!) {
                removePublicity(_id: $id)
            }
        `, null, null, {
            id: req.params.id,
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/publicity');
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/auth/login');
    }

    function getFields(model) {
        let fields = ['_id', 'updatedAt'];

        if (model === 'abouts') {
            fields.push('title');
        }

        if (model === 'dates') {
            fields = fields.concat([
                'date',
                'name',
            ]);
        }

        return fields;
    }
}
