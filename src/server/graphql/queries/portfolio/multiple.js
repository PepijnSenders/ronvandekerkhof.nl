import {
    GraphQLList as List,
} from 'graphql';

import portfolioType from '<server/graphql>/types/portfolioType';
import PortfolioModel from '<server/models>/Portfolio';

export default {
    type: new List(portfolioType),
    args: {},
    resolve() {
        return new Promise((resolve, reject) => {
            PortfolioModel
                .find()
                .exec((err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data || []);
                    }
                });
        });
    },
};
