import React, { Fragment } from 'react';
import {
    Route
} from 'react-router-dom';

import { connect } from 'react-redux';

import Login from './Login';

const Routes = ({ token }) => {
    console.log('token', token);
    if (token === null) {
        return (
            <Fragment>
                <Route path="/" exact component={Login} />
                <Route path="/codigo" exact component={() => <div> codigo</div>} />
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <Route path="/" exact component={() => <div> hola</div>} />
                <Route path="/codigo" exact component={() => <div> codigo</div>} />
            </Fragment>
        )
    }
} 

const mapStateToProps = (state) => ({
    token: state.token,
})

export default connect(mapStateToProps)(Routes);