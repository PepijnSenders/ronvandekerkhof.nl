import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
    GraphQLID as ID,
} from 'graphql';
import merge from 'lodash/merge';

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
            AboutModel.findById(params._id, (err, about) => { // eslint-disable-line no-underscore-dangle,max-len
                if (err) {
                    reject(err);
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
