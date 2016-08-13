import { Component } from 'react';
import { connect } from 'react-redux';

class AboutContainer extends Component {
    render() {
        return (
            <h2>About</h2>
        );
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default
    connect(mapStateToProps, mapDispatchToProps)(
        AboutContainer
    );
