import React from 'react';
import { renderRoutes } from 'react-router-config';

import Helmet from 'react-helmet';

class App extends React.Component {
    render() {
        const { route } = this.props;
        return (
            <main>
                <Helmet titleTemplate="Pinnacle - %s" />
                {renderRoutes(route.routes)}
            </main>
        )

    }
}
export default App;