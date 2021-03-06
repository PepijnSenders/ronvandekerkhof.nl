import {
    GraphQLObjectType as ObjectType,
    GraphQLID as ID,
} from 'graphql';
import GraphQLDate from 'graphql-date';

export default new ObjectType({
    name: 'PortfolioType',
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
    },
});
