import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
    GraphQLID as ID,
} from 'graphql';
import merge from 'lodash/merge';

import dateInput from '<server/graphql>/types/input/dateInput';
import DateModel from '<server/models>/Date';

export default {
    type: Boolean,
    args: {
        _id: {
            name: '_id',
            type: new NonNull(ID),
        },
        data: {
            name: 'data',
            type: new NonNull(dateInput),
        },
    },
    resolve(root, params) {
        return new Promise((resolve, reject) => {
            DateModel.findById(params._id, (err, date) => { // eslint-disable-line no-underscore-dangle,max-len
                if (err) {
                    reject(err);
                } else {
                    const mergedDate = merge(date, params.data);

                    DateModel.save(mergedDate, (saveErr) => {
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
