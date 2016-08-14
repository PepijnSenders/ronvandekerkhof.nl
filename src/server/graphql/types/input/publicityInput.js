import {
    GraphQLInputObjectType as InputObjectType,
    GraphQLID as ID,
    GraphQLList as List,
    GraphQLString as String,
} from 'graphql';
import imageInput from '<server/graphql>/types/input/imageInput';

export default new InputObjectType({
    name: 'publicityInput',
    fields: {
        _id: {
            type: ID,
        },
        images: {
            type: new List(imageInput),
        },
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        link: {
            type: String,
        },
    },
});
