import React, { Component } from 'react';
import Radium from 'radium';
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

export default Radium(
    connect(mapStateToProps, mapDispatchToProps)(
        DatesContainer
    )
);
