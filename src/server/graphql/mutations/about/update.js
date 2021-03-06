import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
    GraphQLID as ID,
} from 'graphql';
import merge from 'lodash/merge';
import mongoose from 'mongoose';

import aboutInput from '<server/graphql>/types/input/aboutInput';
import AboutModel from '<server/models>/About';

export default {
    type: Boolean,
    args: {
        _id: {
            name: '_id',
            type: new NonNull(ID),
        },
        data: {
            name: 'data',
            type: new NonNull(aboutInput),
        },
    },
    resolve(root, params) {
        return new Promise((resolve, reject) => {
            AboutModel.findById(new mongoose.Types.ObjectId(params._id), (err, about) => { // eslint-disable-line no-underscore-dangle,max-len
                if (err) {
                    reject(err);
                } else if (!about) {
                    reject(new Error(`Object not found for: ${params._id}`));
                } else {
                    merge(about, params.data).save((saveErr) => {
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
