import {
    GraphQLList as List,
} from 'graphql';

import publicityType from '<server/graphql>/types/publicityType';
import { getProjection } from '<server/graphql>';
import PublicityModel from '<server/models>/Publicity';

export default {
    type: new List(publicityType),
    args: {},
    resolve(root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);

        return PublicityModel
            .find()
            .select(projection)
            .exec();
    },
};
