import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
    GraphQLID as ID,
} from 'graphql';

import PortfolioModel from '<server/models>/Portfolio';

export default {
    type: Boolean,
    args: {
        _id: {
            name: '_id',
            type: new NonNull(ID),
        },
    },
    resolve(root, params, options) {
        return new Promise((resolve, reject) => {
            PortfolioModel.findByIdAndRemove(params._id)  // eslint-disable-line no-underscore-dangle,max-len
            .exec((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    },
};
