import {
    GraphQLList as List,
} from 'graphql';

import aboutType from '<server/graphql>/types/aboutType';
import AboutModel from '<server/models>/About';

export default {
    type: new List(aboutType),
    args: {},
    resolve() {
        return AboutModel
            .find()
            .exec();
    },
};
