import { PropTypes } from 'react';
import moment from 'moment';

function DateComponent({ date }) {
    return (
        <p>
            {moment(date.date).format('DD.MM.YYYY')}
        </p>
    );
}

DateComponent.propTypes = {
    date: PropTypes.object.isRequired,
};

export default DateComponent;
