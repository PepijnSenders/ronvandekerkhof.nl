import about from '<server/graphql>/mutations/about';
import date from '<server/graphql>/mutations/date';
import portfolio from '<server/graphql>/mutations/portfolio';
import publicity from '<server/graphql>/mutations/publicity';

export default {
    ...about,
    ...date,
    ...portfolio,
    ...publicity,
};
