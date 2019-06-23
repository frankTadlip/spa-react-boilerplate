import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from '../components/main';

import * as duck from '../duck';

@connect(
    (state) => state.mainPageReducer,
    (dispatch) => ({ actions: bindActionCreators(duck, dispatch) })
)

class MainContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Main />
            </main>
        );
    }
}
export default MainContainer;