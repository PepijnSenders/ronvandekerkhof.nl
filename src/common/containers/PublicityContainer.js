import { Component } from 'react';
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

export default
    connect(mapStateToProps, mapDispatchToProps)(
        PublicityContainer
    );
