import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                 <Route exact path="/" component={Home} />
                 <Route exact path="/search" component={Search} />
                 <Route exact path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;