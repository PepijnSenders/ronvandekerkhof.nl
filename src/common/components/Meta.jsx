import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

const Meta = ({ config }) => {
    return (
        <Helmet
            htmlAttributes={{
                lang: 'en',
                amp: undefined,
            }}
            title={config.title}
            meta={config.meta}
            link={config.link}
        />
    );
};

Meta.propTypes = {
    config: PropTypes.object.isRequired,
};

export default Meta;
