import {
    GraphQLObjectType as ObjectType,
    GraphQLSchema as Schema,
} from 'graphql';

import mutations from '<server/graphql>/mutations';
import queries from '<server/graphql>/queries';

export const schema = new Schema({
    query: new ObjectType({
        name: 'Query',
        fields: queries,
    }),
    mutation: new ObjectType({
        name: 'Mutation',
        fields: mutations,
    }),
});
