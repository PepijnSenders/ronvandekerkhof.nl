import { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Title extends Component {
    render() {
        return (
            <h1 className={css(styles.title)}>
                Ron van de Kerkhof
            </h1>
        );
    }
}

export const styles = StyleSheet.create({
    title: {
        float: 'left',
        width: `${100 / 6}%`,
        margin: 0,
        fontSize: 27,
    },
});

export default Title;
