import React from 'react'
import RiderProfileModal from './rider.profile.modal'

function RiderNavbar() {
    return (
        
        <nav className="navbar navbar-expand-md navbar-dark sticky-top">
            <a className="navbar-brand ml-lg-5 ml-md-4 ml-sm-3" href="/">
                <h4 className="brand-name">Brydo </h4>
                <p className = 'tagline'>A bangarus product</p>
            </a>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/ride">Ride <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/drive">Self Drive</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/partner">Scheduled Ride</a>
                    </li>
                </ul>
                
            </div>
            <div className="rider-navbar-right mr-lg-5 mr-md-4 mr-sm-3 navbar-right" >
                <div>Help</div>
                <RiderProfileModal />
            </div>
        </nav>
        
    )
}

export default RiderNavbar
