import React from 'react';
import ScrollImages from './mainpage.carousel';
import MainpageRide from './mainpage.ride';
import MainpageDrive from './mainpage.drive';
import MainpagePartner from './mainpage.partner';


function MainPageContainer() {
    return (
        <div className="main-page-container ml-lg-5 ml-md-4 ml-sm-3 mr-lg-5 mr-md-4 mr-sm-3">
            <ScrollImages />
            <MainpageRide />
            <MainpageDrive />
            <MainpagePartner />
        </div>
    )
}

export default MainPageContainer
