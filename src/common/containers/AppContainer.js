import { Component } from 'react';
import { connect } from 'react-redux';
import Main from '<common/components>/Main';

class AppContainer extends Component {
    render() {
        return (
            <Main children={this.props.children} />
        );
    }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default
    connect(mapStateToProps, mapDispatchToProps)(
        AppContainer
    );
