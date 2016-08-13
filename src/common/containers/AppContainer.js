import { Component } from 'react';
import { connect } from 'react-redux';
import Main from '<common/components>/Main';

class AppContainer extends Component {
    render() {
        return (
            <div>
                <Main children={this.props.children} />
            </div>
        );
    }
}

export const styles = {
    html: {
        margin: 0,
        padding: 0,
        border: 0,
    },
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#EEE',
        fontFamily: '\'nitti-light\', helvetica, arial',
        fontSize: '10px',
    },
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default
    connect(mapStateToProps, mapDispatchToProps)(
        AppContainer
    );
