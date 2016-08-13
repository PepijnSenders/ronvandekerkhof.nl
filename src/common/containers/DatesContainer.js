import { Component } from 'react';
import { connect } from 'react-redux';

class DatesContainer extends Component {
    render() {
        return (
            <h2>Dates</h2>
        );
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default
    connect(mapStateToProps, mapDispatchToProps)(
        DatesContainer
    );
