import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from '../pages/Home'
import Search from '../pages/Search'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                 <Route exact path="/" component={Home} />
                 <Route exact path="/search" component={Search} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;