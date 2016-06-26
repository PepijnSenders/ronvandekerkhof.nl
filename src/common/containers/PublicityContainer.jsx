import React, { Component } from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

class PublicityContainer extends Component {
    render() {
        return (
            <h2>Publicity</h2>
        );
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default Radium(
    connect(mapStateToProps, mapDispatchToProps)(
        PublicityContainer
    )
);
