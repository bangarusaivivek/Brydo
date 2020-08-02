import React,{useState,useEffect} from 'react'

function RiderProfileModal() {
    const [isLogin, setLogin] = useState(false);
    const [isHover, setHover] = useState(false)

    const show = isLogin ? "show" : ""
    const symbol = isLogin ? "X" : "=";
    const hover = isHover ? "show hover": "";
    return (
        <>
        <div className="rider-profile-modal" 
                onClick={() => setLogin(prevState => !prevState)} 
                style={{minHeight:"100%",minWidth:"50%"}}
        >
            profile
            {/* <span className="navbar-toggler-icon"></span> */}
            {/* {symbol} */}
            <div className={`dropdown-menu pl-lg-5 pl-md-4 pl-sm-3 pr-lg-5 pr-md-4 pr-sm-3 ${show} `}  style={{height: "calc(100vh - 64px)"}}>
                <div className="menu-modal">
                    
                        <a href="" className="menu-container">My Bookings</a>
                        <a href="" className="menu-container">My Wallet</a>
                        <a href="" className="menu-container">Support</a>
                        <a href="" className="menu-container">Profile</a>
                        <a href="" className="menu-container">Logout</a>
                    
                </div>   
            </div>
        </div>
        <div className="rider-profile-modal-hover" 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={()=> setHover(false)}
                 style={{minHeight:"100%",minWidth:"50%"}}>
        profile1
        {/* <span className="navbar-toggler-icon"></span> */}
        {/* {symbol} */}
        <div className={`dropdown-menu dropdown-menu-right 
                        
                        mr-lg-5 mr-md-4 mr-sm-3 ${hover} `}  
                        onMouseEnter={()=> setHover(true)}
                        onMouseLeave={()=> setHover(false)}
                        
        >
            <div className="menu-modal-hover" >
                    <a href="" className="menu-container-hover">My Bookings</a>
                    <a href="" className="menu-container-hover">My Wallet</a>
                    <a href="" className="menu-container-hover">Support</a>
                    <a href="" className="menu-container-hover">Profile</a>
                    <a href="" className="menu-container-hover">Logout</a>
                
            </div>   
        </div>
    </div>
    </>
    )
}

export default RiderProfileModal
