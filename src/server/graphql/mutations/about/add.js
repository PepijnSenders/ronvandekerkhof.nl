import {
    GraphQLNonNull as NonNull,
    GraphQLBoolean as Boolean,
} from 'graphql';

import aboutInput from '<server/graphql>/types/input/aboutInput';
import AboutModel from '<server/models>/About';

export default {
    type: Boolean,
    args: {
        data: {
            name: 'data',
            type: new NonNull(aboutInput),
        },
    },
    resolve(root, params) {
        return new Promise((resolve, reject) => {
            const about = new AboutModel(params.data);

            about.save((err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    },
};
