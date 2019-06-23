import { createStores, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import middlewares from './middlewares';

const stores = createStores(
    reducers,
    applyMiddleware(thunk)
);

export default stores;