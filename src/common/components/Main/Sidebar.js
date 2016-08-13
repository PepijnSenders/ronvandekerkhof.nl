import { Component } from 'react';
import { Link } from 'react-router';
import {
    ABOUT_PATH,
    DATES_PATH,
    PORTFOLIO_PATH,
    PUBLICITY_PATH,
} from '<common/routes>';

class Sidebar extends Component {
    render() {
        return (
            <nav
                style={[
                    styles.nav,
                ]}
            >
                <Link
                    style={[
                        styles.link,
                    ]}
                    to={ABOUT_PATH}
                >
                    About
                </Link>
                <Link
                    style={[
                        styles.link,
                    ]}
                    to={DATES_PATH}
                >
                    Dates
                </Link>
                <Link
                    style={[
                        styles.link,
                    ]}
                    to={PORTFOLIO_PATH}
                >
                    Portfolio
                </Link>
                <Link
                    style={[
                        styles.link,
                    ]}
                    to={PUBLICITY_PATH}
                >
                    Publicity
                </Link>
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
        },
    },
};

export default Sidebar;
