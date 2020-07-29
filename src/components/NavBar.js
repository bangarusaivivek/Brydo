import React from 'react';

function NavBar() {
    return (
        <nav className="navbar sticky-top navbar-expand-md navbar-dark">
            <a className="navbar-brand ml-lg-5 ml-md-4 ml-sm-3" href="/home">
                <h4 className="brand-name">Brydo </h4>
                <p className = 'tagline'>A bangarus product</p>
            </a>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/ride">Ride <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/drive">Drive</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/partner">Partner</a>
                    </li>
                </ul>
                
            </div>
            <div className="login-options mr-lg-5 mr-md-4 mr-sm-3 navbar-right">
                
                <a className="login-options-child" href="/signin">signin</a>
                <a className="login-options-child" href="/signup">signup</a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#hello" aria-controls="navbarText"    
                    aria-expanded="false"   aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div class="navbar-toggler">
                    <a class="navbar-toggle-icon" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                    </a>

                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/ride">Ride <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/drive">Drive</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/partner">Partner</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            
        </nav>
    )
}

export default NavBar
