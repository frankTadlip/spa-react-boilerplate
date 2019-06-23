import React from 'react';
import { renderRoutes } from 'react-router-config';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import stores from './stores';
import routes from './routes';

render(
    <Provider store={stores}>
        <ConnectedRouter>
            {renderRoutes(routes)}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);