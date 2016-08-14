import { StyleSheet, css } from 'aphrodite';

function SubTitleComponent({ children }) {
    return (
        <h2 className={css(styles.subtitle)}>
            {children}
        </h2>
    );
}

export const styles = StyleSheet.create({
    subtitle: {
        fontSize: 16,
    },
});

export default SubTitleComponent;
