import {
    GraphQLObjectType as ObjectType,
    GraphQLString as String,
    GraphQLList as List,
    GraphQLID as ID,
} from 'graphql';
import GraphQLDate from 'graphql-date';
import imageType from '<server/graphql>/types/imageType';

export default new ObjectType({
    name: 'PublicityType',
    fields: {
        _id: {
            type: ID,
        },
        images: {
            type: new List(imageType),
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
        createdAt: {
            type: GraphQLDate,
        },
        updatedAt: {
            type: GraphQLDate,
        },
    },
});
