import {
    GraphQLObjectType as ObjectType,
    GraphQLInt as Int,
} from 'graphql';

export default new ObjectType({
    name: 'sizeType',
    fields: {
        width: {
            type: Int,
        },
        height: {
            type: Int,
        },
    },
});
