import {
    GraphQLInputObjectType as InputObjectType,
    GraphQLID as ID,
} from 'graphql';

export default new InputObjectType({
    name: 'portfolioInput',
    fields: {
        _id: {
            type: ID,
        },
    },
});
