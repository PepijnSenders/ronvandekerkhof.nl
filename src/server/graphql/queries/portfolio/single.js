import {
    GraphQLID as ID,
    GraphQLNonNull as NonNull,
} from 'graphql';

import portfolioType from '<server/graphql>/types/portfolioType';
import PortfolioModel from '<server/models>/Portfolio';

export default {
    type: portfolioType,
    args: {
        _id: {
            name: '_id',
            type: new NonNull(ID),
        },
    },
    resolve(root, params) {
        return PortfolioModel
            .findById(params._id) // eslint-disable-line no-underscore-dangle
            .exec();
    },
};
