import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
    GraphQLID as ID,
} from 'graphql';

import { getProjection } from '<server/graphql>';
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
        const projection = getProjection(options.fieldASTs[0]);

        return new Promise((resolve, reject) => {
            PortfolioModel.findByIdAndRemove(params._id, {  // eslint-disable-line no-underscore-dangle,max-len
                select: projection,
            }).exec((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    },
};
