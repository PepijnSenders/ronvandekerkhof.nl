import {
    GraphQLID as ID,
    GraphQLNonNull as NonNull,
} from 'graphql';

import publicityType from '<server/graphql>/types/publicityType';
import { getProjection } from '<server/graphql>';
import PublicityModel from '<server/models>/Publicity';

export default {
    type: publicityType,
    args: {
        _id: {
            name: '_id',
            type: new NonNull(ID),
        },
    },
    resolve(root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);

        return PublicityModel
            .findById(params._id) // eslint-disable-line no-underscore-dangle
            .select(projection)
            .exec();
    },
};
