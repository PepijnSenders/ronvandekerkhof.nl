import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import AppContainer from './containers/AppContainer';
import AboutContainer from './containers/AboutContainer';
import DatesContainer from './containers/DatesContainer';
import PortfolioContainer from './containers/PortfolioContainer';
import PublicityContainer from './containers/PublicityContainer';

export const ABOUT_PATH = '/about';
export const DATES_PATH = '/dates';
export const PORTFOLIO_PATH = '/portfolio';
export const PUBLICITY_PATH = '/publicity';

export default function createRoutes() {
    return (
        <Route path="/" component={AppContainer}>
            <IndexRedirect to={ABOUT_PATH} />

            <Route path={ABOUT_PATH} component={AboutContainer} />
            <Route path={DATES_PATH} component={DatesContainer} />
            <Route path={PORTFOLIO_PATH} component={PortfolioContainer} />
            <Route path={PUBLICITY_PATH} component={PublicityContainer} />
        </Route>
    );
}
