import {
    GraphQLList as List,
} from 'graphql';

import aboutType from '<server/graphql>/types/aboutType';
import { getProjection } from '<server/graphql>';
import AboutModel from '<server/models>/About';

export default {
    type: new List(aboutType),
    args: {},
    resolve(root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);

        return AboutModel
            .find()
            .select(projection)
            .exec();
    },
};
