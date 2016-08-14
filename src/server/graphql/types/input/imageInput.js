import {
    GraphQLInputObjectType as InputObjectType,
    GraphQLString as String,
} from 'graphql';
import sizeInput from '<server/graphql>/types/input/sizeInput';

export default new InputObjectType({
    name: 'imageInput',
    fields: {
        link: {
            type: String,
        },
        size: {
            type: sizeInput,
        },
    },
});
