import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
} from 'graphql';

import dateInput from '<server/graphql>/types/input/dateInput';
import DateModel from '<server/models>/Date';

export default {
    type: Boolean,
    args: {
        data: {
            name: 'data',
            type: new NonNull(dateInput),
        },
    },
    resolve(root, params) {
        return new Promise((resolve, reject) => {
            const date = new DateModel(params.data);

            date.save((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    },
};
