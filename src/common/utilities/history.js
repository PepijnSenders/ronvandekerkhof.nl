import { useRouterHistory } from 'react-router';
import { default as createBrowserHistory } from 'history/lib/createBrowserHistory';

export const createHistory = (routes, historyCreator = createBrowserHistory) =>
    useRouterHistory(
        historyCreator
    )({
        routes,
    });
