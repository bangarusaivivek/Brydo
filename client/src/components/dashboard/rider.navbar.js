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
                <ul className="navbar-nav mr-auto" style={{maxHeight:"40px",height:"40px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <li className="nav-item active" style={{minWidth:"60px",maxHeight:"40px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
                        <a className="nav-link" style={{padding:"0px"}} href="/ride">Ride <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item" style={{minWidth:"100px",maxHeight:"40px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
                        <a className="nav-link" style={{padding:"0px"}} href="/riderdashboard/rentals">Self Drive</a>
                    </li>
                    <li className="nav-item" style={{minWidth:"150px",maxHeight:"40px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
                        <a className="nav-link" style={{padding:"0px"}} href="/partner">Scheduled Ride</a>
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
