import React from 'react';
import Home from '../Pages/Main';
import Login from '../Pages/Login';
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";


function Routes () {
   
    return(
    <Router>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={Login} />
            

        </Switch>
    </Router>
    );
}
export default Routes;