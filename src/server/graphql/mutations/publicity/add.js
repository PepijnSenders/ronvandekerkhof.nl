import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
} from 'graphql';

import publicityInput from '<server/graphql>/types/input/publicityInput';
import PublicityModel from '<server/models>/Publicity';

export default {
    type: Boolean,
    args: {
        data: {
            name: 'data',
            type: new NonNull(publicityInput),
        },
    },
    resolve(root, params) {
        return new Promise((resolve, reject) => {
            const publicity = new PublicityModel(params.data);

            publicity.save((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    },
};
