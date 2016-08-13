import {
    GraphQLID as ID,
    GraphQLNonNull as NonNull,
} from 'graphql';

import dateType from '<server/graphql>/types/dateType';
import DateModel from '<server/models>/Date';

export default {
    type: dateType,
    args: {
        _id: {
            name: '_id',
            type: new NonNull(ID),
        },
    },
    resolve(root, params) {
        return DateModel
            .findById(params._id) // eslint-disable-line no-underscore-dangle
            .exec();
    },
};
