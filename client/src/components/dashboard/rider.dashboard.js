import React from 'react';
import RiderNavbar from './rider.navbar';
import RiderBottomNavbar from './rider.bottomnavbar';
import RiderDashbaordBookings from './riderdashboard.mybookings';
import { Route } from 'react-router-dom';

function RiderDashboard() {
    return (
        <div>
            
            <RiderNavbar />
            <RiderBottomNavbar />
        </div>
    )
}

export default RiderDashboard
