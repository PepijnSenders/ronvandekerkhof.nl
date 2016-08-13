import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
    GraphQLID as ID,
} from 'graphql';

import { getProjection } from '<server/graphql>';
import DateModel from '<server/models>/Date';

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
            DateModel.findByIdAndRemove(params._id, { // eslint-disable-line no-underscore-dangle,max-len
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
