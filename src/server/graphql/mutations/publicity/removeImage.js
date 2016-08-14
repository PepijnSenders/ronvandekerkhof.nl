import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
    GraphQLID as ID,
} from 'graphql';
import mongoose from 'mongoose';

import PublicityModel from '<server/models>/Publicity';
import indexInput from '<server/graphql>/types/input/indexInput';

export default {
    type: Boolean,
    args: {
        _id: {
            name: '_id',
            type: new NonNull(ID),
        },
        data: {
            name: 'index',
            type: new NonNull(indexInput),
        },
    },
    resolve(root, params, options) {
        return new Promise((resolve, reject) => {
            PublicityModel.findById(new mongoose.Types.ObjectId(params._id), (err, publicity) => {
                if (err) {
                    reject(err);
                } else if (!publicity) {
                    reject(new Error(`Object not found for: ${params._id}`));
                } else {
                    publicity.images.splice(params.data.index, 1);

                    publicity.save((err) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve();
                        }
                    });
                }
            });
        });
    },
};
