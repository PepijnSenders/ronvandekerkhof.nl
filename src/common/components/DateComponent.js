import { PropTypes } from 'react';
import moment from 'moment';
import { StyleSheet, css } from 'aphrodite';
import chroma from 'chroma-js';

function DateComponent({ date }) {
    return (
        <p className={css(styles.base)}>
            <a className={css(styles.link)} target="_blank" href={date.get('link')}>
                <span className={css(styles.date)}>
                    {moment(date.get('date')).format('DD.MM.YY')}
                    <span className={css(styles.spacer)}>-</span>
                </span>
                <span className={css(styles.text)}>
                    {date.get('name')} / {date.get('location')}
                </span>
            </a>
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
    date: {
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
    date: PropTypes.object.isRequired,
};

export default DateComponent;
