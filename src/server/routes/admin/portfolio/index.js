import { graphql } from 'graphql';
import { layout } from '<server/views>/admin';
import { list as portfolioList, create as portfolioCreate } from '<server/views>/admin/portfolio';

export default function createPortfolioAdminRoutes(app, schema, isLoggedIn) {
    app.get('/admin/portfolio', isLoggedIn, function(req, res) {
        graphql(schema, `
            query FetchPortfolio {
                portfolios { _id updatedAt }
            }
        `).then(function(result) {
            res.send(layout(portfolioList({
                data: result.data.portfolios,
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

    app.get('/admin/portfolio/create', isLoggedIn, function(req, res) {
        res.send(layout(portfolioCreate()));
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
}
