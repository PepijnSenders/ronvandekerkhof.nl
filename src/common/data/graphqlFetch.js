import axios from 'axios';

export default function graphqlFetch(operationName, query, variables = {}, baseUrl = '') {
    return axios({
        method: 'POST',
        url: `${baseUrl}/graphql`,
        data: {
            query,
            variables: JSON.stringify(variables),
        },
    });
}
