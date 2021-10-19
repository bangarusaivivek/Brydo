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
        <>
        <div className = "sticky-top"  style={{minHeight:64,backgroundColor:"orange"}}></div>
        <div className="rider-login-page ml-lg-5 ml-md-4 ml-sm-3 mr-lg-5 mr-md-4 mr-sm-3"  >
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
            <div className="rider-login-container">
                <img src = "/loginpageimage.jpg" height="100%" width="100%" />
            </div>
        </div>
        </>
       
    )
}

export default RiderLogin
