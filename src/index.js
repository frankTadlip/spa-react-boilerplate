import React from 'react';
import { renderRoutes } from 'react-router-config';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import stores from './stores';
import routes from './routes';
import history from './history';

render(
    <Provider store={stores}>
        <ConnectedRouter history={history}>
            {renderRoutes(routes)}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);