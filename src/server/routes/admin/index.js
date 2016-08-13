import dates from '<server/views>/admin/dates';
import abouts from '<server/views>/admin/abouts';
import portfolios from '<server/views>/admin/portfolios';
import publicities from '<server/views>/admin/publicities';
import layout from '<server/views>/admin/layout';
import { graphql } from 'graphql';

export default function createAdminRoutes(app, passport, schema) {
    app.get('/admin', isLoggedIn, function(req, res) {
        res.redirect('/admin/dates');
    });

    app.get('/admin/dates', isLoggedIn, function(req, res) {
        graphql(schema, `
            query {
                dates {
                    _id
                    date
                    name
                    updatedAt
                }
            }
        `).then(function(result) {
            res.send(layout(dates({
                dates: result.data.dates,
            })));
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.get('/admin/abouts', isLoggedIn, function(req, res) {
        graphql(schema, `
            query {
                abouts {
                    _id
                    title
                    updatedAt
                }
            }
        `).then(function(result) {
            res.send(layout(abouts({
                abouts: result.data.abouts,
            })));
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.get('/admin/publicities', isLoggedIn, function(req, res) {
        graphql(schema, `
            query {
                publicities {
                    _id
                    updatedAt
                }
            }
        `).then(function(result) {
            res.send(layout(publicities({
                publicities: result.data.publicities,
            })));
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.get('/admin/portfolios', isLoggedIn, function(req, res) {
        graphql(schema, `
            query {
                portfolios {
                    _id
                    updatedAt
                }
            }
        `).then(function(result) {
            res.send(layout(portfolios({
                portfolios: result.data.portfolios,
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
