import { Component } from 'react';
import { Link } from 'react-router';
import {
    ABOUT_PATH,
    DATES_PATH,
    PORTFOLIO_PATH,
    PUBLICITY_PATH,
} from '<common/routes>';
import chroma from 'chroma-js';
import { StyleSheet, css } from 'aphrodite';

class Sidebar extends Component {
    isActive(path) {
        return window.location.pathname.match(path);
    }

    render() {
        return (
            <nav className={css(styles.sidebar)}>
                <Link className={css(this.isActive(ABOUT_PATH) ? styles.activeLink : styles.link)} to={ABOUT_PATH}>
                    About
                </Link>
                <Link className={css(this.isActive(DATES_PATH) ? styles.activeLink : styles.link)} to={DATES_PATH}>
                    Dates
                </Link>
                <Link className={css(this.isActive(PORTFOLIO_PATH) ? styles.activeLink : styles.link)} to={PORTFOLIO_PATH}>
                    Portfolio
                </Link>
                <Link className={css(this.isActive(PUBLICITY_PATH) ? styles.activeLink : styles.link)} to={PUBLICITY_PATH}>
                    Publicity
                </Link>
            </nav>
        );
    }
}

export const styles = StyleSheet.create({
    sidebar: {
        float: 'left',
        width: `${100 / 6}%`,
        marginTop: 3,
        textAlign: 'right',
    },
    link: {
        color: 'black',
        display: 'block',
        textDecoration: 'none',
        cursor: 'pointer',
        ':hover': {
            color: chroma('black').brighten(2),
            textDecoration: 'underline',
        },
    },
    activeLink: {
        color: 'black',
        display: 'block',
        textDecoration: 'underline',
        fontWeight: 'bold',
        cursor: 'none',
    },
});

export default Sidebar;
