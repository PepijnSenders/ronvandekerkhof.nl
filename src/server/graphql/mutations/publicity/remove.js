import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
    GraphQLID as ID,
} from 'graphql';
import mongoose from 'mongoose';

import PublicityModel from '<server/models>/Publicity';

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
            PublicityModel.findByIdAndRemove(new mongoose.Types.ObjectId(params._id)) // eslint-disable-line no-underscore-dangle,max-len
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
