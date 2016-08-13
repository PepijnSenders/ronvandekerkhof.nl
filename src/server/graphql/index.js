import {
    GraphQLObjectType as ObjectType,
    GraphQLSchema as Schema,
} from 'graphql';

import mutations from '<server/graphql>/mutations';
import queries from '<server/graphql>/queries';

export function getProjection(fieldASTs) {
    return fieldASTs.selectionSet.selections.reduce((projections, selection) => {
        projections[selection.name.value] = 1; // eslint-disable-line no-param-reassign

        return projections;
    }, {});
}

export default new Schema({
    query: new ObjectType({
        name: 'Query',
        fields: queries,
    }),
    mutation: new ObjectType({
        name: 'Mutation',
        fields: mutations,
    }),
});
