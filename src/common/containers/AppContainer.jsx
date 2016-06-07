import React from 'react';
import { connect } from 'react-redux';

const AppContainer = () =>
    (
        <h1>Ron van de Kerkhof</h1>
    );

const mapStateToProps = () => {};
const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
