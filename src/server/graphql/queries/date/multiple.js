import {
    GraphQLList as List,
} from 'graphql';

import dateType from '<server/graphql>/types/dateType';
import DateModel from '<server/models>/Date';

export default {
    type: new List(dateType),
    args: {},
    resolve() {
        return new Promise((resolve, reject) => {
            DateModel
                .find()
                .sort({ date: -1 })
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
