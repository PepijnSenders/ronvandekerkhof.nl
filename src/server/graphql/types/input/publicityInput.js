import {
    GraphQLInputObjectType as InputObjectType,
    GraphQLID as ID,
} from 'graphql';

export default new InputObjectType({
    name: 'publicityInput',
    fields: {
        _id: {
            type: ID,
        },
    },
});
