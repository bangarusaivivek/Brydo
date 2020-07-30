import React,{ useState } from 'react'

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
                        <a href="" className="login-container">Rider Login</a>
                        <a href="" className="login-container">Driver Login</a>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default SigninModal
