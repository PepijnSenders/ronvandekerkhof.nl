import { Component, PropTypes } from 'react';
import Title from '<common/components>/Main/Title';
import Sidebar from '<common/components>/Main/Sidebar';
import { StyleSheet, css } from 'aphrodite';

class Main extends Component {
    render() {
        return (
            <section className={css(styles.container)}>
                <header className={css(styles.header)}>
                    <Title />
                    <Sidebar />
                </header>
                <section className={css(styles.content)}>
                    {this.props.children}
                </section>
            </section>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        fontSize: 13,
    },
    header: {
        width: '100%',
        position: 'fixed',
        height: 88,
        padding: 16,
        top: 0,
        left: 0,
        zIndex: 99,
        borderBottom: '8px solid black',
        paddingBottom: 84,
    },
    content: {
        width: '100%',
        height: '100%',
        paddingTop: 116,
        paddingLeft: 16,
        paddingRight: 16,
    },
});

Main.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Main;
