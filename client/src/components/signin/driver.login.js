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
        <>
        <div className = "sticky-top"  style={{minHeight:64,backgroundColor:"orange"}}></div>
        <div className="rider-login-page ml-lg-5 ml-md-4 ml-sm-3 mr-lg-5 mr-md-4 mr-sm-3"  >
            <div className="rider-login-form-container">
                <div className="rider-login-form-header">
                    <Link to="/">Homepage</Link>
                    <Link to="/riderlogin">Login as Rider</Link>
                </div>
                <div className= "rider-login-form-body">
                    <div className="rider-login-form-bodyContainer">

                        <div className="rider-form-logo">logo</div>
                        <DriverLoginFormValidator history={history}/>
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

export default DriverLogin
