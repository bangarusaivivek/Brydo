import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { DriverLoginFormValidator } from '../../validators/login.form.validator';

function DriverLogin({history}) {
    // console.log(height)
    // const [number,setNumber] = useState("");
    // function handleClick(e){
    //     e.preventDefault()
    //     console.log(number)
    //     setNumber("")
    //     return
    // }

    return (
        <div className="rider-login-page"  >
            <div className="rider-login-form-container">
                <div className="rider-login-form-header">
                    <Link to="/"> Homepage</Link>
                    <Link to="/riderlogin">Login as Rider</Link>
                </div>
                <div className= "rider-login-form-body">
                    <div className="rider-login-form-bodyContainer">

                        <div className="rider-form-logo">logo</div>
                        <DriverLoginFormValidator history={history}/>
                    </div>
                </div>
            </div>
            <div className="rider-login-container"></div>
        </div>
    )
}

export default DriverLogin
