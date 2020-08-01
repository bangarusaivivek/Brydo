import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Ride from '../components/Ride';
import NotFound from '../components/NotFound';
import RiderLogin from '../components/signin/rider.login';
import DriverLogin from '../components/signin/driver.login';
import SignInRiderAuthPage from '../components/signin/signin.rider.auth';
import SignInDriverAuthPage from '../components/signin/signin.driver.auth';
import { Example } from '../components/signin/hello';
import RiderSignup from '../components/signup/signup.rider';
import DriverSignup from '../components/signup/signup.driver';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ride" exact component={Ride} />
            <Route path = "/riderlogin" exact component={RiderLogin} />
            <Route path = "/ridersignup" exact component={RiderSignup} />
            <Route path = "/driversignup" exact component={DriverSignup} />
            <Route path = "/driverlogin" exact component={DriverLogin} />
            <Route path = "/signinRiderAuth" exact component={SignInRiderAuthPage} />
            <Route path = "/signinDriverAuth" exact component={SignInDriverAuthPage} />
            <Route path = "/hello" exact component={Example} />
            <Route path="*" exact component = {NotFound} />
        </Switch>
    )
}

export default Routes