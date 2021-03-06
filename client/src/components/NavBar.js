import React,{ useEffect } from 'react';
import SigninModal from './signin/Signin.modal';
import SignUpModal from './signup/signup.modal';
import MenuModal from './menu.modal';

function NavBar() {
    
    return (
        <div className="main-navbar sticky-top">
        <nav className="navbar navbar-expand-md navbar-dark">
            <a className="navbar-brand ml-lg-5 ml-md-4 ml-sm-3" href="/">
                <h4 className="brand-name">Brydo </h4>
                <p className = 'tagline'>A bangarus product</p>
            </a>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto" style={{maxHeight:"40px",height:"40px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <li className="nav-item active" style={{minWidth:"60px",maxHeight:"40px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
                        <a className="nav-link" style={{padding:"0px"}} href="/ride">Ride <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item" style={{minWidth:"70px",maxHeight:"40px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
                        <a className="nav-link" style={{padding:"0px"}} href="/drive">Drive</a>
                    </li>
                    <li className="nav-item" style={{minWidth:"80px",maxHeight:"40px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
                        <a className="nav-link" style={{padding:"0px"}} href="/partner">Partner</a>
                    </li>
                </ul>
                
            </div>
            <div className="login-options mr-lg-5 mr-md-4 mr-sm-3 navbar-right">
                
                <SigninModal />
                <SignUpModal />
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#hello" aria-controls="navbarText"    
                    aria-expanded="false"   aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <MenuModal />
            </div>
            
            
        </nav>
        </div>
    )
}

export default NavBar
