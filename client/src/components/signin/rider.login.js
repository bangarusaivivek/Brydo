import React,{useState} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { RiderLoginFormValidator } from '../../validators/login.form.validator';

function RiderLogin({history}) {
    
    // const [number,setNumber] = useState("");
    // function handleClick(e){
    //     e.preventDefault()
    //     console.log(number)
    //     setNumber("")
    //     return
    // }

    // For email
    // value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    // message: "invalid email address"

    

    return (
        
        <div className="rider-login-page"  >
            <div className="rider-login-form-container">
                <div className="rider-login-form-header">
                    <Link to="/">Homepage</Link>
                    <Link to="/driverlogin">Login as Driver</Link>
                </div>
                <div className= "rider-login-form-body">
                    <div className="rider-login-form-bodyContainer">

                        <div className="rider-form-logo">logo</div>
                        <RiderLoginFormValidator history={history}/>
                    </div>
                </div>
            </div>
            <div className="rider-login-container"></div>
        </div>
       
    )
}

export default RiderLogin
