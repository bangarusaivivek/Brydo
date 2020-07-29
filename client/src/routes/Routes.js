import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Ride from '../components/Ride';
import NotFound from '../components/NotFound';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ride" exact component={Ride} />
            <Route path="*" exact component = {NotFound} />
        </Switch>
    )
}

export default Routes