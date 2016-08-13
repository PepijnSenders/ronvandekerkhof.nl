import {
    GraphQLObjectType as ObjectType,
    GraphQLString as String,
    GraphQLID as ID,
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new ObjectType({
    name: 'AboutType',
    fields: {
        _id: {
            type: ID,
        },
        title: {
            type: String,
        },
        text: {
            type: String,
        },
        createdAt: {
            type: GraphQLDate,
        },
        updatedAt: {
            type: GraphQLDate,
        },
    },
});
