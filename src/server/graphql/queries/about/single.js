import aboutType from '<server/graphql>/types/aboutType';
import AboutModel from '<server/models>/About';

export default {
    type: aboutType,
    resolve(root, params, options) {
        return AboutModel
            .findOne({}, {}, { sort: { createdAt: -1 } })
            .exec();
    },
};
