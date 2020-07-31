import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function SignInRiderAuthPage() {
    const [password,setPassword] = useState("");
    function handleClick(e){
        e.preventDefault()
        console.log(password)
    }
    return (
        <div className="signin-auth-container">
                <div className="signin-auth-header">
                    <Link to="/">Homepage</Link>
                    <Link to="/riderlogin">Return to Login</Link>
                </div>
                <form className="signin-auth-form-container" onSubmit = {handleClick}>
                    <div className="rider-form-logo">logo</div>
                    <div className="signin-auth-form-block">
                        <input type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                        <div className="forgetlink"><Link to="">forgot password?</Link></div>
                    </div>
                    <div className="" style={{textAlign:"center"}}>
                        <button style={{ width:100}}>Login</button>
                    </div>
                    <div className="signin-auth-form-block">
                        <input type="tel" placeholder="otp"></input>
                        <div className="forgetlink"><Link to="">Resend otp</Link></div>
                    </div>
                    
                </form>
            
        </div>
    )
}

export default SignInRiderAuthPage
