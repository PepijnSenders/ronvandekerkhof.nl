import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
    GraphQLID as ID,
} from 'graphql';

import DateModel from '<server/models>/Date';

export default {
    type: Boolean,
    args: {
        _id: {
            name: '_id',
            type: new NonNull(ID),
        },
    },
    resolve(root, params) {
        return new Promise((resolve, reject) => {
            DateModel.findByIdAndRemove(params._id) // eslint-disable-line no-underscore-dangle,max-len
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
