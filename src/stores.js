import { createStores, compose } from 'redux';
import reducers from './reducers.js';

const stores = createStores(
    reducers
);

export default stores;