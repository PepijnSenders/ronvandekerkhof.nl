import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
    GraphQLID as ID,
} from 'graphql';
import merge from 'lodash/merge';

import portfolioInput from '<server/graphql>/types/input/portfolioInput';
import PortfolioModel from '<server/models>/Portfolio';

export default {
    type: Boolean,
    args: {
        _id: {
            name: '_id',
            type: new NonNull(ID),
        },
        data: {
            name: 'data',
            type: new NonNull(portfolioInput),
        },
    },
    resolve(root, params) {
        return new Promise((resolve, reject) => {
            PortfolioModel.findById(params._id, (err, portfolio) => { // eslint-disable-line no-underscore-dangle,max-len
                if (err) {
                    reject(err);
                } else {
                    const mergedPortfolio = merge(portfolio, params.data);

                    PortfolioModel.save(mergedPortfolio, (saveErr) => {
                        if (saveErr) {
                            reject(saveErr);
                        } else {
                            resolve();
                        }
                    });
                }
            });
        });
    },
};