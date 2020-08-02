import React,{useState} from 'react'

function MenuModal() {
    const [isLogin, setLogin] = useState(false);
    const show = isLogin ? "show" : ""
    const symbol = isLogin ? "X" : "=";
    return (
        <div className="navbar-toggler-icon" onClick={() => setLogin(prevState => !prevState)} style={{minHeight:30,minWidth:30}}>
            {/* <span className="navbar-toggler-icon"></span> */}
            {/* {symbol} */}
            <div className={`dropdown-menu pl-lg-5 pl-md-4 pl-sm-3 pr-lg-5 pr-md-4 pr-sm-3 ${show} `}  style={{height: "calc(100vh - 64px)"}}>
                <div className="menu-modal">
                    
                        <a href="" className="menu-container">Ride</a>
                        <a href="" className="menu-container">Drive</a>
                        <a href="" className="menu-container">Partner</a>
                        <a href="" className="menu-container">About Us</a>
                        <a href="" className="menu-container">Help</a>
                    
                </div>   
            </div>
        </div>
    )
    
        // <div className="navbar-toggler" >
        //             <a className="navbar-toggle-icon" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    
        //             </a>

        //             <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{height: window.innerHeight - 64}}>
        //                 <ul className="navbar-nav mr-auto">
        //                     <li className="nav-item active">
        //                         <a className="nav-link" href="/ride">Ride <span className="sr-only">(current)</span></a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="/drive">Drive</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="/partner">Partner</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
    
}

export default MenuModal
