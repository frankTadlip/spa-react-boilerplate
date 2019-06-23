import { createBrowserHistory } from 'history';

const baseUrl = '/';
const history = createBrowserHistory({ basename: baseUrl });

export default history;