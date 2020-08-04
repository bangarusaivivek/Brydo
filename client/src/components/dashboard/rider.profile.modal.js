import React,{useState,useEffect} from 'react';
import {PermIdentity, AccountCircle, AccountBalanceWallet } from '@material-ui/icons'

function RiderProfileModal() {
    const [isLogin, setLogin] = useState(false);
    const [isHover, setHover] = useState(false)

    const show = isLogin ? "show" : ""
    const symbol = isLogin ? "X" : "=";
    const hover = isHover ? "show hover": "";

    const menuBlockStyles = {
        height: "50%",
        width: "100%",
        display:"flex",
        flexDirection: "row"
    }
    const iconStyles = {
        height:"100%",
        width:"20%",
        maxWidth:"40px",
        display: "flex",
        justifyContent:"center",
        alignItems: "center"
    }
    return (
        <>
        <div className="rider-profile-modal" 
                onClick={() => setLogin(prevState => !prevState)} 
                style={{minHeight:"100%",minWidth:"50%"}}
        >
            <AccountCircle  className={`${show}`}/>
            {/* <span className="navbar-toggler-icon"></span> */}
            {/* {symbol} */}
            <div className={`dropdown-menu pl-lg-5 pl-md-4 pl-sm-3 pr-lg-5 pr-md-4 pr-sm-3 ${show} `}  
                style={{height: "calc(100vh - 64px)"}}
            >
                <div className="menu-modal">
                    
                        <a href="/riderdashboard/mybookings" className="menu-container">
                            <div style={menuBlockStyles}>
                                <div style={iconStyles}>
                                    <AccountBalanceWallet style={{height:"80%",width:"80%"}} />
                                </div>
                                <div style={{paddingLeft:"5px"}}>
                                    My Bookings
                                </div>
                            </div>
                        </a>
                        <a href="/riderdashboard/mywallet" className="menu-container">
                            <div style={menuBlockStyles}>
                                <div style={iconStyles}>
                                    <AccountBalanceWallet style={{height:"80%",width:"80%"}} />
                                </div>
                                <div style={{paddingLeft:"5px"}}>My Wallet</div>
                            </div>
                        </a>
                        <a href="/riderdashboard/profile" className="menu-container">
                            <div style={menuBlockStyles}>
                                <div style={iconStyles}>
                                    <AccountBalanceWallet style={{height:"80%",width:"80%"}} />
                                </div>
                                <div style={{paddingLeft:"5px"}}>Profile</div>
                            </div>
                        </a>
                        <a href="/riderdashboard/support" className="menu-container">
                            <div style={menuBlockStyles}>
                                <div style={iconStyles}>
                                    <AccountBalanceWallet style={{height:"80%",width:"80%"}} />
                                </div>
                                <div style={{paddingLeft:"5px"}}>Support</div>
                            </div>
                        </a>
                        <a href="/riderdashboard/logout" className="menu-container">
                            <div style={menuBlockStyles}>
                                <div style={iconStyles}>
                                    <AccountBalanceWallet style={{height:"80%",width:"80%"}} />
                                </div>
                                <div style={{paddingLeft:"5px"}}>Logout</div>
                            </div>
                        </a>
                    
                </div>   
            </div>
        </div>
        <div className="rider-profile-modal-hover" 
                onMouseEnter={() => setHover(true)}
                // onMouseLeave={()=> setHover(false)}
                 style={{minHeight:"100%",minWidth:"50%"}}>
        profile
        {/* <span className="navbar-toggler-icon"></span> */}
        {/* {symbol} */}
        <div className={`dropdown-menu dropdown-menu-right 
                        
                        mr-lg-5 mr-md-4 mr-sm-3 ${hover} `}  
                        onMouseEnter={()=> setHover(true)}
                        onMouseLeave={()=> setHover(false)}
                        
        >
            <div className="menu-modal-hover" >
                <a href="/riderdashboard/mybookings" className="menu-container-hover">
                    <div style={menuBlockStyles}>
                        <div style={iconStyles}>
                            <AccountBalanceWallet style={{height:"25px",width:"80%"}} />
                        </div>
                        <div style={{paddingLeft:"5px"}}>
                            My Bookings
                        </div>
                    </div>
                </a>
                <a href="/riderdashboard/mywallet" className="menu-container-hover">
                    <div style={menuBlockStyles}>
                        <div style={iconStyles}>
                            <AccountBalanceWallet style={{height:"25px",width:"80%"}} />
                        </div>
                        <div style={{paddingLeft:"5px"}}>My Wallet</div>
                    </div>
                </a>
                <a href="/riderdashboard/profile" className="menu-container-hover">
                    <div style={menuBlockStyles}>
                        <div style={iconStyles}>
                            <AccountBalanceWallet style={{height:"25px",width:"80%"}} />
                        </div>
                        <div style={{paddingLeft:"5px"}}>Profile</div>
                    </div>
                </a>
                <a href="/riderdashboard/support" className="menu-container-hover">
                    <div style={menuBlockStyles}>
                        <div style={iconStyles}>
                            <AccountBalanceWallet style={{height:"25px",width:"80%"}} />
                        </div>
                        <div style={{paddingLeft:"5px"}}>Support</div>
                    </div>
                </a>
                <a href="/riderdashboard/logout" className="menu-container-hover">
                    <div style={menuBlockStyles}>
                        <div style={iconStyles}>
                            <AccountBalanceWallet style={{height:"25px",width:"80%"}} />
                        </div>
                        <div style={{paddingLeft:"5px"}}>Logout</div>
                    </div>
                </a>
                    
                
            </div>   
        </div>
    </div>
    </>
    )
}

export default RiderProfileModal
