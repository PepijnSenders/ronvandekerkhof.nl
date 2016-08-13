import about from '<server/graphql>/queries/about';
import date from '<server/graphql>/queries/date';
import portfolio from '<server/graphql>/queries/portfolio';
import publicity from '<server/graphql>/queries/publicity';

export default {
    ...about,
    ...date,
    ...portfolio,
    ...publicity,
};
