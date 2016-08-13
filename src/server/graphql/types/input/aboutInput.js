import {
    GraphQLInputObjectType as InputObjectType,
    GraphQLString as String,
    GraphQLID as ID,
} from 'graphql';

export default new InputObjectType({
    name: 'aboutInput',
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
    },
});
