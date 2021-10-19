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
import RiderDashboard from '../components/dashboard/rider.dashboard';
import RiderDashboardBookings from '../components/dashboard/riderdashboard.mybookings';
import RiderDashboardWallet from '../components/dashboard/riderdashboard.mywallet';
import RiderDashboardProfile from '../components/dashboard/riderdashboard.profile';
import RiderDashboardSupport from '../components/dashboard/riderdashboard.support';
import RiderDashboardRental from '../components/dashboard/rider.dashboard.rental';
import RentalBooking from '../components/dashboard/rider.dashboard.rentalcontainer.booking';
import UserStateProvider from '../contexts/UserState';
import RiderActivate from '../components/rider/activate';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ride" exact component={Ride} />
            <Route path = "/riderlogin" exact component={RiderLogin} />
            <Route path = "/ridersignup" exact component={RiderSignup} />
            <Route path = "/driversignup" exact component={DriverSignup } />
            <Route path = "/driverlogin" exact component={DriverLogin} />
            <Route path = "/signinRiderAuth" exact  component={SignInRiderAuthPage} />
            <Route path = "/signinDriverAuth" exact component={SignInDriverAuthPage} />
            <Route path = "/riderdashboard" exact component={RiderDashboard} />
            <Route path = "/riderdashboard/mybookings" exact component={RiderDashboardBookings} />
            <Route path = "/riderdashboard/mywallet" exact component={RiderDashboardWallet} />
            <Route path = "/riderdashboard/profile" exact component={RiderDashboardProfile} />
            <Route path = "/riderdashboard/support" exact component={RiderDashboardSupport} />
            <Route path = "/riderdashboard/rentals" exact component={RiderDashboardRental} />
            <Route path = "/riderdashboard/rentals/booking" exact component={RentalBooking} />
            <Route path = "/auth/rider/activate/:token" exact component={RiderActivate} />
            <Route path = "/hello" exact component={Example} />
            <Route path="*" exact component = {NotFound} />
        </Switch>
    )
}

export default Routes