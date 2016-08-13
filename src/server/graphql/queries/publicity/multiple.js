import {
    GraphQLList as List,
} from 'graphql';

import publicityType from '<server/graphql>/types/publicityType';
import PublicityModel from '<server/models>/Publicity';

export default {
    type: new List(publicityType),
    args: {},
    resolve() {
        return new Promise((resolve, reject) => {
            PublicityModel
                .find()
                .exec((err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data || []);
                    }
                });
        });
    },
};
