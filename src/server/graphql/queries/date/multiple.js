import {
    GraphQLList as List,
} from 'graphql';

import dateType from '<server/graphql>/types/dateType';
import { getProjection } from '<server/graphql>';
import DateModel from '<server/models>/Date';

export default {
    type: new List(dateType),
    args: {},
    resolve(root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);

        return DateModel
            .find()
            .select(projection)
            .exec();
    },
};
