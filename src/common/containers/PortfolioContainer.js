import { Component } from 'react';
import { connect } from 'react-redux';

class PortfolioContainer extends Component {
    render() {
        return (
            <h2>Portfolio</h2>
        );
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default
    connect(mapStateToProps, mapDispatchToProps)(
        PortfolioContainer
    );
