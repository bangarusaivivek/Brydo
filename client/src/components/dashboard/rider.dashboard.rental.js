import React from 'react'
import RiderNavbar from './rider.navbar';
import RiderBottomNavbar from './rider.bottomnavbar'
import RentalContainer from './rider.dashboard.rentalcontainer';
import RiderRentalSearch from './rider.dashboard.rental.search';

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
            <div className="rider-search" style={searchStyles}>
                <RiderRentalSearch />

            </div>
            <div className="rider-filter" style={filterStyles}>filter</div>
        </div>
        
        
        <div className="rider-rental-container ml-lg-5 ml-md-4 ml-sm-3 mr-lg-5 mr-md-4 mr-sm-3" >
            <RentalContainer />
        </div>
            
        
         <RiderBottomNavbar />
         </>
    )
}

export default RiderDashboardRental
