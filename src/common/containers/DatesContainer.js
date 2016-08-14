import { Component } from 'react';
import { connect } from 'react-redux';
import { getDates } from '<common/actions>';
import DateComponent from '<common/components>/DateComponent';

class DatesContainer extends Component {
    static needs() {
        return [
            getDates,
        ];
    }

    render() {
        if (!this.props.dates || this.props.dates.size === 0) {
            return null;
        }

        return (
            <section>
                {
                    this.props.dates.map(date =>
                        <DateComponent key={date.get('_id')} date={date} />
                    )
                }
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    dates: state.getIn(['dates', 'data', 'dates']),
});

const mapDispatchToProps = () => ({});

export default
    connect(mapStateToProps, mapDispatchToProps)(
        DatesContainer
    );
