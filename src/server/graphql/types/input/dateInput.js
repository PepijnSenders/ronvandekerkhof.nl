import {
    GraphQLInputObjectType as InputObjectType,
    GraphQLString as String,
    GraphQLID as ID,
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new InputObjectType({
    name: 'dateInput',
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
    },
});
