import { Component, PropTypes } from 'react';
import Title from '<common/components>/Main/Title';
import Sidebar from '<common/components>/Main/Sidebar';

class Main extends Component {
    render() {
        return (
            <div
                style={[
                    styles.main,
                ]}
            >
                <Sidebar />
                <div
                    style={[
                        styles.container,
                    ]}
                >
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

Main.propTypes = {
    children: PropTypes.isRequired,
};

export default Main;
