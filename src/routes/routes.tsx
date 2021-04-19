import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
//import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Creditools from '../pages/Creditools'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                 {/* <Route exact path="/" component={Home} /> */}
                 <Route exact path="/" component={Search} />
                 <Route exact path="/login" component={Login} />
                 <Route exact path="/creditools" component={Creditools} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;