import React from 'react'

function BottomNavbar() {
    return (
        <div className="Bottom-Navbar">
            <div style={{minHeight:100,backgroundColor:"gray"}}></div>
            <div className = "Bottom-Navbar-body">
                <div className="Bottom-Navbar-body-main">
                    <div className="Bottom-Navbar-body-main-block">
                        <div className = "Bottom-Navbar-body-main-block-heading">Company</div>
                        <div className = "Bottom-Navbar-body-main-block-part">About us</div>
                        <div className = "Bottom-Navbar-body-main-block-part">Blog</div>
                        <div className = "Bottom-Navbar-body-main-block-part">Help center</div>
                        <div className = "Bottom-Navbar-body-main-block-part">Careers</div>
                    </div>
                    <div className="Bottom-Navbar-body-main-block">
                        <div className = "Bottom-Navbar-body-main-block-heading">Products</div>
                        <div className = "Bottom-Navbar-body-main-block-part">Ride</div>
                        <div className = "Bottom-Navbar-body-main-block-part">Drive</div>
                        <div className = "Bottom-Navbar-body-main-block-part">Rentals</div>
                        <div className = "Bottom-Navbar-body-main-block-part">Careers</div>
                    </div>
                </div>
                <div className="Bottom-Navbar-body-footer"></div>
            </div>
            <div style={{minHeight:50,backgroundColor:"gray"}}></div>
        </div>
    )
}

export default BottomNavbar
