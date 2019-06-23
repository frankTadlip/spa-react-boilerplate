// react redux
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import * as duck from '../duck';

import LoginForm from '../components/login-form';

@connect(
    (state) => state.loginReducer,
    (dispatch) => ({ actions: bindActionCreators(duck, dispatch) })
)

class LoginContainer extends React.Component {
    componentWillMount() {
    }

    render() {
        return (
            <main>
                <Helmet title = "Login Page" />
                <LoginForm />
            </main>
        );
    }
}
export default LoginContainer;