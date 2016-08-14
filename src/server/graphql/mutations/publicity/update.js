import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
    GraphQLID as ID,
} from 'graphql';
import merge from 'lodash/merge';
import mongoose from 'mongoose';

import publicityInput from '<server/graphql>/types/input/publicityInput';
import PublicityModel from '<server/models>/Publicity';

export default {
    type: Boolean,
    args: {
        _id: {
            name: '_id',
            type: new NonNull(ID),
        },
        data: {
            name: 'data',
            type: new NonNull(publicityInput),
        },
    },
    resolve(root, params) {
        return new Promise((resolve, reject) => {
            PublicityModel.findById(new mongoose.Types.ObjectId(params._id), (err, publicity) => { // eslint-disable-line no-underscore-dangle,max-len
                if (err) {
                    reject(err);
                } else if (!publicity) {
                    reject(new Error(`Object not found for: ${params._id}`));
                } else {
                    publicity.title = params.data.title;
                    publicity.description = params.data.description;
                    publicity.link = params.data.link;
                    publicity.images = (publicity.images || []).concat((params.data.images || []));

                    publicity.save((saveErr) => {
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
