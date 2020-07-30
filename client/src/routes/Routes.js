import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Ride from '../components/Ride';
import NotFound from '../components/NotFound';
import RiderLogin from '../components/signin/rider.login';
import DriverLogin from '../components/signin/driver.login';
import SignInAuthPage from '../components/signin/signin.auth';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ride" exact component={Ride} />
            <Route path = "/riderlogin" exact component={RiderLogin} />
            <Route path = "/driverlogin" exact component={DriverLogin} />
            <Route path = "/signinAuth" exact component={SignInAuthPage} />
            <Route path="*" exact component = {NotFound} />
        </Switch>
    )
}

export default Routes