import {
    GraphQLInputObjectType as InputObjectType,
    GraphQLString as String,
} from 'graphql';
import sizeInputType from '<server/graphql>/types/input/sizeInputType';

export default new InputObjectType({
    name: 'imageInputType',
    fields: {
        link: {
            type: String,
        },
        size: {
            type: sizeInputType,
        },
    },
});
