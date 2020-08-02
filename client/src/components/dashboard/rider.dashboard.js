import React from 'react';
import RiderNavbar from './rider.navbar';


function RiderDashboard() {
    return (
        <div>
            <RiderNavbar />
            <div className="fixed-bottom rider-bottom-navbar"></div>
        </div>
    )
}

export default RiderDashboard
