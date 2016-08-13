import graphqlHTTP from 'express-graphql';
import { schema } from '<server/graphql>';

export default function graphqlConfig(app) {
    app.use('/graphql', graphqlHTTP(req => ({
        schema,
        pretty: true
    })));
}
