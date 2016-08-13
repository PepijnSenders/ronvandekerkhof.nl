import {
    GraphQLObjectType as ObjectType,
    GraphQLString as String,
    GraphQLID as ID,
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new ObjectType({
    name: 'Date',
    fields: {
        _id: {
            type: ID,
        },
        name: {
            type: String,
        },
        link: {
            type: String,
        },
        location: {
            type: String,
        },
        date: {
            type: GraphQLDate,
        },
        createdAt: {
            type: GraphQLDate,
        },
        updatedAt: {
            type: GraphQLDate,
        },
    }
});
