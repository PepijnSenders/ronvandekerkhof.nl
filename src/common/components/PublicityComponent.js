import { PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { StyleSheet, css } from 'aphrodite';
import chroma from 'chroma-js';

import { PUBLICITY_PATH } from '<common/routes>';

function DateComponent({ publicity }) {
    return (
        <p className={css(styles.base)}>
            <Link to={`${PUBLICITY_PATH}/${publicity.get('_id')}`} className={css(styles.link)}>
                <span className={css(styles.publicity)}>
                    {moment(publicity.get('createdAt')).format('DD.MM.YY')}
                    <span className={css(styles.spacer)}>-</span>
                </span>
                <span className={css(styles.text)}>
                    {publicity.get('title')}
                </span>
            </Link>
        </p>
    );
}

export const styles = StyleSheet.create({
    base: {
        width: `${100 / 3}%`,
    },
    link: {
        display: 'block',
        width: '100%',
        color: 'black',
        float: 'left',
        textDecoration: 'none',
        ':hover': {
            color: chroma('black').brighten(2),
        },
    },
    spacer: {
        float: 'right',
    },
    publicity: {
        width: '50%',
        display: 'block',
        float: 'left',
    },
    text: {
        width: '50%',
        display: 'block',
        float: 'left',
        textAlign: 'right',
    },
});

DateComponent.propTypes = {
    publicity: PropTypes.object.isRequired,
};

export default DateComponent;
