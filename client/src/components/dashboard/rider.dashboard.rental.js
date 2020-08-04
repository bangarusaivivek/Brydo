import React from 'react'
import RiderNavbar from './rider.navbar';
import RiderBottomNavbar from './rider.bottomnavbar'
import RentalContainer from './rider.dashboard.rentalcontainer';

function RiderDashboardRental() {

    
    const searchStyles = {
        height: "40px",
        backgroundColor: "green",
        
    }
    const filterStyles = {
        height: "40px",
        backgroundColor:"red"
    }
   

    return (
        <>
        <RiderNavbar />
        <div className="rider-search-filter">
            <div className="" style={searchStyles}>Search</div>
            <div className="" style={filterStyles}>filter</div>
        </div>
        
        
        <div className="rider-rental-container ml-lg-5 ml-md-4 ml-sm-3 mr-lg-5 mr-md-4 mr-sm-3" >
            <RentalContainer />
        </div>
            
        
         <RiderBottomNavbar />
         </>
    )
}

export default RiderDashboardRental
