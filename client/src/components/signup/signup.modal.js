import React,{ useState } from 'react'

function SignUpModal() {
    const [isLogin, setLogin] = useState(false);
    const show = isLogin ? "dropdown-menu show" : "dropdown-menu"
    return (
        <div className="login-options-child" onClick={() => setLogin(prevState => !prevState)} >
            signup
            <div className={`dropdown-menu pl-lg-5 pl-md-4 pl-sm-3 pr-lg-5 pr-md-4 pr-sm-3 ${show} `}  style={{height: window.innerHeight - 64}}>
                <div className="dropdown-modal">
                    <div className="dropdown-modal-button">
                        <span >cancel</span>
                    </div>
                    <div className="dropdown-modal-container">
                        <a href="/ridersignup" className="login-container">Rider Signup</a>
                        <a href="driversignup" className="login-container">Driver Signup</a>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default SignUpModal
