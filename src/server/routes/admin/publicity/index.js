import { graphql } from 'graphql';
import multer from 'multer';
import cloudinary from 'cloudinary';
import DataUri from 'datauri';
import path from 'path';
import { layout } from '<server/views>/admin';
import { list as publicityList, create as publicityCreate } from '<server/views>/admin/publicity';

export default function createPublicityAdminRoutes(app, schema, isLoggedIn) {
    const upload = multer({
        storage: multer.memoryStorage(),
    }).array('images');

    app.get('/admin/publicity', isLoggedIn, function(req, res) {
        graphql(schema, `
            query FetchPublicity {
                publicities { _id title description link images {
                    link
                } updatedAt }
            }
        `).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.send(layout(publicityList({
                data: result.data.publicities,
            })));
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.get('/admin/publicity/edit/:id', isLoggedIn, function(req, res) {
        graphql(schema, `
            query FetchDate($id: ID!) {
                publicity(_id: $id) { _id title description link images {
                    link
                } updatedAt }
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

    app.get('/admin/publicity/create', isLoggedIn, function(req, res) {
        res.send(layout(publicityCreate()));
    });

    app.post('/admin/publicity/:id', isLoggedIn, upload, function(req, res) {
        Promise.all(
            (req.files || []).map((file) => {
                return new Promise((resolve, reject) => {
                    const dataUri = new DataUri();

                    dataUri.format(
                        path.extname(file.originalname).toString(),
                        file.buffer
                    );

                    cloudinary.uploader.upload(dataUri.content, (result) => {
                        if ('error' in result) {
                            reject(result.error);
                        } else {
                            resolve(result);
                        }
                    });
                });
            })
        ).then((resolves) => {
            const input = req.body;

            input.images = (input.images || []).concat(resolves.map(image => ({
                link: image.url,
                size: {
                    width: image.width,
                    height: image.height,
                },
            })));

            return graphql(schema, `
                mutation publicityUpdate($id: ID!, $input: publicityInput!) {
                    updatePublicity(_id: $id, data: $input)
                }
            `, null, null, {
                id: req.params.id,
                input,
            });
        }).then((result) => {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/publicity');
        }).catch((err) => {
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

    app.post('/admin/publicity', isLoggedIn, upload, function(req, res) {
        Promise.all(
            (req.files || []).map((file) => {
                return new Promise((resolve, reject) => {
                    const dataUri = new DataUri();

                    dataUri.format(
                        path.extname(file.originalname).toString(),
                        file.buffer
                    );

                    cloudinary.uploader.upload(dataUri.content, (result) => {
                        if ('error' in result) {
                            reject(result.error);
                        } else {
                            resolve(result);
                        }
                    });
                });
            })
        ).then((resolves) => {
            const input = req.body;

            input.images = (input.images || []).concat(resolves.map(image => ({
                link: image.url,
                size: {
                    width: image.width,
                    height: image.height,
                },
            })));

            return graphql(schema, `
                mutation publicityAdd($input: publicityInput!) {
                    addPublicity(data: $input)
                }
            `, null, null, {
                input,
            });
        }).then((result) => {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect('/admin/publicity');
        }).catch((err) => {
            console.error(err.stack);

            res.send(err.message);
        });
    });

    app.get('/admin/publicity/:id/image/:index', isLoggedIn, function(req, res) {
        graphql(schema, `
            mutation removeImage($id: ID!, $input: indexInput!) {
                removePublicityImage(_id: $id, data: $input)
            }
        `, null, null, {
            id: req.params.id,
            input: {
                index: req.params.index,
            },
        }).then(function(result) {
            if (result.errors && result.errors.length) {
                return Promise.reject(new Error(result.errors.join('\n')));
            }

            res.redirect(`/admin/publicity/edit/${req.params.id}`);
        }).catch(err => {
            console.error(err.stack);

            res.send(err.message);
        });;
    });
}
