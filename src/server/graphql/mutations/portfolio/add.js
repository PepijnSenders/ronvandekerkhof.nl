import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
} from 'graphql';

import portfolioInput from '<server/graphql>/types/input/portfolioInput';
import PortfolioModel from '<server/models>/Portfolio';

export default {
    type: Boolean,
    args: {
        data: {
            name: 'data',
            type: new NonNull(portfolioInput),
        },
    },
    resolve(root, params) {
        return new Promise((resolve, reject) => {
            const portfolio = new PortfolioModel(params.data);

            portfolio.save((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    },
};
