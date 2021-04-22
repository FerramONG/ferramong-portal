import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Login from '../pages/Login'
import Creditools from '../pages/Creditools'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/creditools" component={Creditools} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/forgotpassword" component={ForgotPassword} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;