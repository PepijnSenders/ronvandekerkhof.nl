import {
    GraphQLObjectType as ObjectType,
    GraphQLString as String,
} from 'graphql';
import sizeType from '<server/graphql>/types/sizeType';

export default new ObjectType({
    name: 'imageType',
    fields: {
        link: {
            type: String,
        },
        size: {
            type: sizeType,
        },
    },
});
