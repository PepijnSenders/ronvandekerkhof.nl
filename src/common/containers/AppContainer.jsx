import React, { Component } from 'react';
import Radium, { StyleRoot, Style } from 'radium';
import { connect } from 'react-redux';
import Main from '../components/Main';

class AppContainer extends Component {
    render() {
        return (
            <div>
                <Main children={this.props.children} />

                <Style
                    scopeSelector="html"
                    rules={styles.html}
                />
                <Style
                    scopeSelector="body"
                    rules={styles.body}
                />
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

export default Radium(
    connect(mapStateToProps, mapDispatchToProps)(
        AppContainer
    )
);
