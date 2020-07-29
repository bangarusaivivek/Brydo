import React,{ useState } from 'react'

function SigninModal() {
    const [isLogin, setLogin] = useState(false);
    const show = isLogin ? "dropdown-menu show" : "dropdown-menu"
    return (
        <div className="login-options-child" onClick={() => setLogin(prevState => !prevState)} >
            {/* <div className="navbar-toggler" > */}
                    {/* <a className="navbar-toggle-icon" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> */}
                    signin
                    {/* </a> */}

                    <div className={show} aria-labelledby="dropdownMenuLink" style={{height: window.innerHeight - 64}}>
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
            {/* </div> */}
        </div>
    )
}

export default SigninModal
