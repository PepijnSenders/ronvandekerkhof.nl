import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
    GraphQLID as ID,
} from 'graphql';
import merge from 'lodash/merge';

import publicityInput from '<server/graphql>/types/input/publicityInput';
import PortfolioModel from '<server/models>/Portfolio';

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
            PortfolioModel.findById(params._id, (err, publicity) => { // eslint-disable-line no-underscore-dangle,max-len
                if (err) {
                    reject(err);
                } else {
                    const mergedPublicity = merge(publicity, params.data);

                    PortfolioModel.save(mergedPublicity, (saveErr) => {
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
