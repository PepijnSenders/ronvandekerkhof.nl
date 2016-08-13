import aboutType from '<server/graphql>/types/aboutType';
import { getProjection } from '<server/graphql>';
import AboutModel from '<server/models>/About';

export default {
    type: aboutType,
    resolve(root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);

        return AboutModel
            .findOne({}, {}, { sort: { createdAt: -1 } })
            .select(projection)
            .exec();
    },
};
