import {
    GraphQLList as List,
} from 'graphql';

import portfolioType from '<server/graphql>/types/portfolioType';
import { getProjection } from '<server/graphql>';
import PortfolioModel from '<server/models>/Portfolio';

export default {
    type: new List(portfolioType),
    args: {},
    resolve(root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);

        return PortfolioModel
            .find()
            .select(projection)
            .exec();
    },
};
