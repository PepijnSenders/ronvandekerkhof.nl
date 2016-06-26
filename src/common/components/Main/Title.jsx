import React, { Component } from 'react';
import Radium from 'radium';

class Title extends Component {
    render() {
        return (
            <h1 style={[
                styles.title,
            ]}>Ron van de Kerkhof</h1>
        );
    }
}

export const styles = {
    title: {
        margin: 0,
    },
};

export default Radium(Title);
