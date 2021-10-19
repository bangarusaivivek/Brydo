import React,{ useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserState } from '../contexts/UserState';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function RiderSignupFormValidator({history}){
    const val = useContext(UserState);

    const { handleSubmit, register, errors } = useForm();
    const [confirmpassword,setconfirmpassword] = useState();
    const [cpwdColor,setCpwdColor] = useState();
    const [pwd,setPwd] = useState();
    const [cpwdError,setCpwdError] = useState("");
    const [isTrue,setIsTrue] = useState(false);

    const onSubmit = values => {
        setPwd(values.password);
        if (values.password !== confirmpassword){
            setCpwdError("passwords doesn't match");
        }
        else{
            saveRider(values);
            setCpwdError("");
        }
        
        
    }
    const saveRider = async (data) => {
        console.log("i am signing up")
        try{
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const res = await axios.post('http://localhost:5000/ridersignup',data,config);
            // console.log(res)
            const resData = res.data;
            displayMessage(resData);
        }
        catch(err){
            return err;
        }
        
    }
    const displayMessage = (resData) => {
        const {success,message} = resData;
        if(success){
            toast.success(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else{
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const confirmpwdHandler = (e) => {
        const value = e.target.value;
        console.log(value)
        if(value === ""){
            setCpwdColor()
        }
        else if (value === pwd){
            setCpwdColor("green")
        }
        else{
            setCpwdColor("red")
        }
        setconfirmpassword(e.target.value);
    }
    const errMessage = ""

    
    return (
        <>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <form className="signup-form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="signup-form-block">
                <label className="signup-form-label" for="mobilenumber">Enter your Mobile Number(required)</label>
                <div className="signup-form-input" >
                    <div className="country-code" 
                        style={
                            {
                                width:"15%",height:"40px",
                                display:"flex",
                                flexDirection:"row",
                                justifyContent:"center",
                                alignItems:"center",
                                backgroundColor:"gray",
                                marginRight: "1px"
                            }
                        }
                    >
                    +91
                    </div>
                    <input
                        style={{
                                    width:"90%",
                                    height:"40px",
                                    marginLeft: 1,
                                }}
                        name="mobile"
                        placeholder = "Mobile number"
                        required
                        autoComplete = "off"
                        ref={register({
                            pattern: {
                                value: /^[6-9][0-9]{9}$/,
                                message: "invalid mobile number"
                            }
                        })}
                    />
                </div>
                <div className="signup-form-error" >{errors.mobilenumber && errors.mobilenumber.message}</div>
            </div>
            
            <div className="signup-form-block">
                <label className="signup-form-label" for="password">create password(*required)</label>
                <div className="signup-form-input">
                    <input
                        style={{
                            width:"100%",
                            height:"40px",
                        }}
                        name="password"
                        placeholder = "create password"
                        value={pwd}
                        onChange = {e => setPwd(e.target.value)}
                        required
                        autoComplete = "off"
                        ref={register({
                            pattern: {
                                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                message: "please create a password with given requirements"
                            }
                        })}
                    />
                </div>
                <div className="signup-form-error" >{errors.password && errors.password.message}</div>
            </div>
            <div className="signup-form-block">
                <label className="signup-form-label" for="password">confirm password(*required)</label>
                <div className="signup-form-input" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} >
                    <input
                        style={{
                            width:"100%",
                            height:"40px",
                        }}
                        name="confirmpassword"
                        placeholder = "confirm password"
                        required
                        autoComplete = "off"
                        value = {confirmpassword}
                        onChange = {confirmpwdHandler}
                        ref={register({
                            // pattern: {
                            //     value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                            //     message: "please create a password with given requirements"
                            // }
                        })}
                    />
                    <div className = {cpwdColor} style={{minHeight:2,maxHeight:2,minWidth:"100%",maxWidth:"100%",margin: "0px 10px",}}>
                    </div>
                </div>
                <div className="signup-form-error" >{cpwdError}</div>
            </div>
            <div className="signup-form-block" style={{flexDirection:"row"}}>
                <div style={{width:"50%",marginRight:"5px"}}>
                    <label className="signup-form-label" for="fname">First Name(required)</label>
                    <div className="signup-form-input">
                    <input
                        style={{
                            width:"100%",
                            height:"40px",
                            
                        }}
                        name="fname"
                        placeholder = "First Name"
                        required
                        autoComplete = "off"
                        ref={register({
                            pattern: {
                                value:  /^[a-zA-Z ]{2,30}$/,
                                message: "invalid first name"
                            }
                        })}
                    />
                    </div>
                    <div className="signup-form-error">{errors.fname && errors.fname.message}</div>
                </div>
                <div style={{width:"50%",marginLeft:"5px"}}>
                    <label className="signup-form-label" for="lname">Last Name(optional)</label>
                    <div className="signup-form-input">
                    <input
                        style={{
                            width:"100%",
                            height:"40px",
                            
                        }}
                        name="lname"
                        placeholder = "Last Name"
                            
                        ref={register({
                            pattern: {
                                value:  /^[a-zA-Z ]{0,30}$/,
                                message: "invalid last name"
                            }
                        })}
                    />
                    </div>
                    <div className="signup-form-error">{errors.lname && errors.lname.message}</div>
                </div>
            </div>
            <div className="signup-form-block">
                <label className="signup-form-label" for="email">Enter your email(*required)</label>
                <div className="signup-form-input">
                <input
                    style={{
                        width:"100%",
                        height:"40px",
                    }}
                    name="email"
                    placeholder = "Email"
                    required
                    autoComplete = "off"
                    ref={register({
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                </div>
                <div className="signup-form-error">{errors.email && errors.email.message}</div>
            </div>
            <div className="signup-form-block">
                <label className="signup-form-label" for="city">City(optional)</label>
                <div className="signup-form-input">
                <input
                    style={{
                        width:"100%",
                        height:"40px",
                    }}
                    name="city"
                    placeholder = "enter your city"
                    autoComplete = "off"
                    ref={register({
                    })}
                />
                </div>
                <div className="signup-form-error"></div>
            </div>
            <div className="signup-form-block">
                <label className="signup-form-label" for="promocode">Enter Promo Code(optional)</label>
                <div className="signup-form-input">
                <input
                    style={{
                        width:"100%",
                        height:"40px",
                    }}
                    name="promocode"
                    placeholder = "promo code"
                    autoComplete = "off"
                    ref={register({
                    })}
                />
                </div>
                <div className="signup-form-error"></div>
            </div>
            <div className="signup-form-button">
                <button style={{width:"150px",height:40}} type="submit">Signup </button>
            </div>
            <div style={{minHeight:150}}>
                    <div style={{minHeight:75,display:"flex",justifyContent:"center",alignItems:"center",fontSize:18,fontWeight:500}}>click below to Login as rider</div>
                    <div style={{display:"flex",justifyContent:"center"}}>
                        <button style={{minWidth:100}} onClick = {e => history.push('/riderlogin')}>Login</button>
                    </div>
                    
                    
            </div>
       
        </form>
        </>
    );
};

export function DriverSignupFormValidator({history}){
    const val = useContext(UserState);

    const { handleSubmit, register, errors } = useForm();
    const [confirmpassword,setconfirmpassword] = useState();
    const [cpwdColor,setCpwdColor] = useState();
    const [pwd,setPwd] = useState();
    const [cpwdError,setCpwdError] = useState("");
    const [isTrue,setIsTrue] = useState(false);

    const onSubmit = values => {
        setPwd(values.password);
        if (values.password !== confirmpassword){
            setCpwdError("passwords doesn't match");
        }
        else{
            saveDriver(values);
            setCpwdError("");
        }
        
        
    }
    const saveDriver = async (data) => {
        console.log("i am signing up")
        try{
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const res = await axios.post('http://localhost:5000/driversignup',data,config);
            // console.log(res)
            const resData = res.data;
            displayMessage(resData);
        }
        catch(err){
            return err;
        }
        
    }
    const displayMessage = (resData) => {
        const {success,message} = resData;
        if(success){
            toast.success(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else{
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const confirmpwdHandler = (e) => {
        const value = e.target.value;
        console.log(value)
        if(value === ""){
            setCpwdColor()
        }
        else if (value === pwd){
            setCpwdColor("green")
        }
        else{
            setCpwdColor("red")
        }
        setconfirmpassword(e.target.value);
    }
    const errMessage = ""
    
    return (
        <>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />

        <form className="signup-form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="signup-form-block">
                <label className="signup-form-label" for="mobilenumber">Enter your Mobile Number(required)</label>
                <div className="signup-form-input" >
                    <div className="country-code" 
                        style={
                            {
                                width:"15%",height:"40px",
                                display:"flex",
                                flexDirection:"row",
                                justifyContent:"center",
                                alignItems:"center",
                                backgroundColor:"gray",
                                marginRight: "1px"
                            }
                        }
                    >
                    +91
                    </div>
                    <input
                        style={{
                                    width:"90%",
                                    height:"40px",
                                    marginLeft: 1,
                                }}
                        name="mobile"
                        placeholder = "Mobile number"
                        required
                        ref={register({
                            pattern: {
                                value: /^[6-9][0-9]{9}$/,
                                message: "invalid mobile number"
                            }
                        })}
                    />
                </div>
                <div className="signup-form-error" >{errors.mobilenumber && errors.mobilenumber.message}</div>
            </div>
            
            <div className="signup-form-block">
                <label className="signup-form-label" for="password">create password(*required)</label>
                <div className="signup-form-input">
                    <input
                        style={{
                            width:"100%",
                            height:"40px",
                        }}
                        name="password"
                        placeholder = "create password"
                        value = {pwd}
                        onChange = {e => setPwd(e.target.value)}
                        required
                        ref={register({
                            pattern: {
                                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                message: "please create a password with given requirements"
                            }
                        })}
                    />
                </div>
                <div className="signup-form-error" >{errors.password && errors.password.message}</div>
            </div>
            <div className="signup-form-block">
                <label className="signup-form-label" for="password">confirm password(*required)</label>
                <div className="signup-form-input" style={{display:"flex",flexDirection:"column",justifyContent:"center"}} >
                    <input
                        style={{
                            width:"100%",
                            height:"40px",
                        }}
                        name="confirmpassword"
                        placeholder = "confirm password"
                        value = {confirmpassword}
                        onChange = {confirmpwdHandler}
                        required
                        ref={register({
                            // pattern: {
                            //     value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                            //     message: "please create a password with given requirements"
                            // }
                        })}
                    />
                    <div className = {cpwdColor} style={{minHeight:2,maxHeight:2,minWidth:"100%",maxWidth:"100%",margin: "0px 10px"}}>
                                    
                        <div></div>
                    </div>
                </div>
                <div className="signup-form-error" >{cpwdError}</div>
            </div>
            <div className="signup-form-block" style={{flexDirection:"row"}}>
                <div style={{width:"50%",marginRight:"5px"}}>
                    <label className="signup-form-label" for="fname">First Name(required)</label>
                    <div className="signup-form-input">
                    <input
                        style={{
                            width:"100%",
                            height:"40px",
                            
                        }}
                        name="fname"
                        placeholder = "First Name"
                        required
                        ref={register({
                            pattern: {
                                value:  /^[a-zA-Z ]{2,30}$/,
                                message: "invalid first name"
                            }
                        })}
                    />
                    </div>
                    <div className="signup-form-error">{errors.fname && errors.fname.message}</div>
                </div>
                <div style={{width:"50%",marginLeft:"5px"}}>
                    <label className="signup-form-label" for="lname">Last Name(optional)</label>
                    <div className="signup-form-input">
                    <input
                        style={{
                            width:"100%",
                            height:"40px",
                            
                        }}
                        name="lname"
                        placeholder = "Last Name"
                            
                        ref={register({
                            pattern: {
                                value:  /^[a-zA-Z ]{0,30}$/,
                                message: "invalid last name"
                            }
                        })}
                    />
                    </div>
                    <div className="signup-form-error">{errors.lname && errors.lname.message}</div>
                </div>
            </div>
            <div className="signup-form-block">
                <label className="signup-form-label" for="email">Enter your email(*required)</label>
                <div className="signup-form-input">
                <input
                    style={{
                        width:"100%",
                        height:"40px",
                    }}
                    name="email"
                    placeholder = "Email"
                    required
                    ref={register({
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                </div>
                <div className="signup-form-error">{errors.email && errors.email.message}</div>
            </div>
            <div className="signup-form-block">
                <label className="signup-form-label" for="city">City(optional)</label>
                <div className="signup-form-input">
                <input
                    style={{
                        width:"100%",
                        height:"40px",
                    }}
                    name="city"
                    placeholder = "enter your city"
                        
                    ref={register({
                    })}
                />
                </div>
                <div className="signup-form-error"></div>
            </div>
            <div className="signup-form-block">
                <label className="signup-form-label" for="promocode">Enter Promo Code(optional)</label>
                <div className="signup-form-input">
                <input
                    style={{
                        width:"100%",
                        height:"40px",
                    }}
                    name="promocode"
                    placeholder = "promo code"
                        
                    ref={register({
                    })}
                />
                </div>
                <div className="signup-form-error"></div>
            </div>
            <div className="signup-form-button">
                <button style={{width:"150px",height:40}} type="submit">Signup </button>
            </div>
            <div style={{minHeight:150}}>
                <div style={{minHeight:75,display:"flex",justifyContent:"center",alignItems:"center",fontSize:18,fontWeight:500}}>click below to Login as driver</div>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <button style={{minWidth:100}} onClick = {e => history.push('/driverlogin')}>Login</button>
                </div>
                    
            </div>
        </form>
        </>
    );
};