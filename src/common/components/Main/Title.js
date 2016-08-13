import { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <h1
                style={[
                    styles.title,
                ]}
            >
                Ron van de Kerkhof
            </h1>
        );
    }
}

export const styles = {
    title: {
        margin: 0,
    },
};

export default Title;
