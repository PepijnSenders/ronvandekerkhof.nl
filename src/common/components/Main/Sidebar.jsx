import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import {
    ABOUT_PATH,
    DATES_PATH,
    PORTFOLIO_PATH,
    PUBLICITY_PATH,
} from '../../routes';
import chroma from 'chroma-js';

const RadiumLink = Radium(Link);

class Sidebar extends Component {
    render() {
        return (
            <nav style={[
                styles.nav,
            ]}>
                <RadiumLink style={[
                    styles.link,
                ]} to={ABOUT_PATH}>About</RadiumLink>
                <RadiumLink style={[
                    styles.link,
                ]} to={DATES_PATH}>Dates</RadiumLink>
                <RadiumLink style={[
                    styles.link,
                ]} to={PORTFOLIO_PATH}>Portfolio</RadiumLink>
                <RadiumLink style={[
                    styles.link,
                ]} to={PUBLICITY_PATH}>Publicity</RadiumLink>
            </nav>
        );
    }
}

export const styles = {
    nav: {
        paddingRight: '2rem',
    },
    link: {
        display: 'block',
        textDecoration: 'none',
        color: 'black',
        fontSize: '1.1rem',
        ':hover': {
            color: chroma('black').brighten(2),
        },
    },
};

export default Radium(Sidebar);
