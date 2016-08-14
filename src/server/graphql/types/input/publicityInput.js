import {
    GraphQLInputObjectType as InputObjectType,
    GraphQLID as ID,
    GraphQLList as List,
    GraphQLString as String,
} from 'graphql';
import imageInputType from '<server/graphql>/types/input/imageInputType';

export default new InputObjectType({
    name: 'publicityInput',
    fields: {
        _id: {
            type: ID,
        },
        images: {
            type: new List(imageInputType),
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
