import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

// // ***
// import loginReducer from './modules/login/duck';
// import mainPageReducer from './modules/main/duck';

const appReducer = combineReducers({

    form,
    routing: routerReducer,
});

const rootReducer = (state, action) => {
    if (action.type === 'APP_USER_LOGOUT') {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;