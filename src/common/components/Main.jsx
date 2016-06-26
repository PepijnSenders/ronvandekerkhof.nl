import React, { Component } from 'react';
import Radium from 'radium';
import Title from './Main/Title';
import Sidebar from './Main/Sidebar';

class Main extends Component {
    render() {
        return (
            <div style={[
                styles.main,
            ]}>
                <Sidebar />
                <div style={[
                    styles.container,
                ]}>
                    <Title />

                    {this.props.children}
                </div>
            </div>
        );
    }
}

export const styles = {
    main: {
        display: 'flex',
    },
    sidebar: {},
    container: {
    },
};

export default Radium(Main);
