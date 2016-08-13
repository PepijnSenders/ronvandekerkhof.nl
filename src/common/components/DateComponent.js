import { PropTypes } from 'react';
import moment from 'moment';

function DateComponent({ date }) {
    return (
        <p>
            <a target="_blank" href={date.get('link')}>
                {moment(date.get('date')).format('DD.MM.YYYY')}
                -
                {date.get('name')}
            </a>
        </p>
    );
}

DateComponent.propTypes = {
    date: PropTypes.object.isRequired,
};

export default DateComponent;
