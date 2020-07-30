import React,{ useState } from 'react'
import { Link } from 'react-router-dom';

function SigninModal() {
    const [isLogin, setLogin] = useState(false);
    const show = isLogin ? "show" : ""
    return (
        <div className="login-options-child" onClick={() => setLogin(prevState => !prevState)} >
            signin
            <div className={`dropdown-menu pl-lg-5 pl-md-4 pl-sm-3 pr-lg-5 pr-md-4 pr-sm-3 ${show} `}  style={{height: window.innerHeight - 64}}>
                <div className="dropdown-modal">
                    <div className="dropdown-modal-button">
                        <span >cancel</span>
                    </div>
                    <div className="dropdown-modal-container">
                        <div className="login-container"><Link to="/riderlogin">Rider Login</Link></div>
                        <div className="login-container"><Link to="/driverlogin"> Driver Login</Link></div>
                        
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default SigninModal
