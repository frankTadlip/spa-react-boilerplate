import Loadable from 'react-loadable';
import App from './modules/app';

const LoadableComponent = (comp, isCore) => Loadable({
    loader: comp,
    loading: () => isCore ? "Please Wait ..." : "..."
});

const LoginContainer = LoadableComponent(() => import('./modules/login/container/login'), true);
const MainContainer = LoadableComponent(() => import('./modules/main/container/main'), true);

const routes = [
    {
        component: App,
        routes: [
            {
                path: '/login',
                component: LoginContainer
            },
            {
                path: '/',
                component: MainContainer,
                routes: [

                ]
            }
        ]
    }
];
export default routes;