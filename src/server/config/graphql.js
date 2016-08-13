import graphqlHTTP from 'express-graphql';

export default function graphqlConfig(app, schema) {
    app.use('/graphql', graphqlHTTP(req => ({
        schema,
        pretty: true,
        graphiql: true,
    })));
}
