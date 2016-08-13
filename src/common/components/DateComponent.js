import { PropTypes } from 'react';
import moment from 'moment';

function DateComponent({ date }) {
    return (
        <a href={date.get('link')}>
            {moment(date.get('date')).format('DD.MM.YYYY')}
            -
            {date.get('name')}
        </a>
    );
}

DateComponent.propTypes = {
    date: PropTypes.object.isRequired,
};

export default DateComponent;
