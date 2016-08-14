import {
    GraphQLInputObjectType as InputObjectType,
    GraphQLInt as Int,
} from 'graphql';

export default new InputObjectType({
    name: 'indexInput',
    fields: {
        index: {
            type: Int,
        },
    },
});
