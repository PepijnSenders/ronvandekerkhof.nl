import {
    GraphQLObjectType as ObjectType,
    GraphQLNonNull as NonNull,
    GraphQLString as String,
    GraphQLID as ID
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new ObjectType({
    name: 'Portfolio',
    fields: {
        _id: {
            type: ID,
        },
        createdAt: {
            type: GraphQLDate,
        },
        updatedAt: {
            type: GraphQLDate,
        },
    }
});
