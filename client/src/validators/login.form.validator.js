import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function RiderLoginFormValidator({history}){
    
    const { handleSubmit, register, errors } = useForm();
    const [success,setSuccess] = useState();
    const [error,setError] = useState();
    const [show,setShow] = useState("");
    const [mobile,setMobile] = useState();
    const onSubmit = values => {
        console.log(values.mobile)
        checkRider();
        // console.log(values);
    }
    console.log(mobile)
    const checkRider = async () => {
        try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
        console.log(mobile)
        const obj = {
            mobile: +mobile
        }
        console.log(obj)
        const res = await axios.post('http://localhost:5000/ridersignin',obj,config);
        console.log(res.data)
        setSuccess(res.data.success);
        authCheck();
        }
        catch(err){
            console.log(err.response.data);
            setSuccess(err.response.data.success);
            console.log("set succes")
            setError(err.response.data.error);
            authCheck();
        }
    }
    // console.log(success)
    // console.log(error)
    // useEffect(()=>{
    //     checkRider();
    // },[mobile])
    const authCheck = () => {
        
            if(error === "rider"){
                toast.error("User doesn't exist", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setShow("show");
            }
            else if(error === "server"){
                toast.error("Server error, Please try again", {
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
    useEffect(()=> {
        console.log("effect")
        if(success){
            history.push(`/signinRiderAuth?mobile=${mobile}`);
        }
        else{
            console.log(typeof error)
            if(error === "rider"){
                toast.error("User doesn't exist", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setShow("show");
            }
            else if(error === "server"){
                toast.error("Server error, Please try again", {
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
    },[success,error])

    // console.log(show)
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

        <form className="rider-form-data" onSubmit={handleSubmit(onSubmit)}>
            <div className="signup-form-block" style={{minHeight:125}}>
                <label className="signup-form-label" style={{minHeight:50,fontSize:15,fontWeight:500,fontStretch:"expanded"}}  for="mobilenumber">Enter your Mobile Number(required)</label>
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
                        value = {mobile}
                        onChange = {e => setMobile(e.target.value)}
                        ref={register({
                            pattern: {
                                value: /^[6-9][0-9]{9}$/,
                                message: "invalid mobile number"
                            }
                        })}
                    />
                </div>
                <div className="signup-form-error" >{errors.mobile && errors.mobile.message}</div>
            </div>
            <button style={{width:"75px",margin:2}} type="submit">Next </button>
            {/* <div style={{minHeight:50,minWidth:"100%",padding:"5px 15px",fontSize:25,fontWeight:600,display:"flex",justifyContent:"center",alignItems:"center"}}>
                {show && "User doesn't exist"}
            </div> */}
        </form>
        <div className = {`${show} signup-toggle`}>
            <div style={{minHeight:50,minWidth:"100%",fontSize:20,fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                click below to signup 
            </div>
            <div style={{minHeight:50,minWidth:"100%",fontSize:20,fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                <button onClick = {() => history.push("/ridersignup")}>Signup</button>
            </div>
        </div>
        </>
    );
};

export function DriverLoginFormValidator({history}){
    const { handleSubmit, register, errors } = useForm();
    const [success,setSuccess] = useState();
    const [error,setError] = useState();
    const [show,setShow] = useState("");
    const [mobile,setMobile] = useState();
    const onSubmit = values => {
        console.log(values.mobile)
        checkDriver();
        // console.log(values);
    }
    console.log(mobile)
    const checkDriver = async () => {
        try{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        }
        console.log(mobile)
        const obj = {
            mobile: +mobile
        }
        console.log(obj)
        const res = await axios.post('http://localhost:5000/driversignin',obj,config);
        console.log(res.data)
        setSuccess(res.data.success);
        authCheck();
        }
        catch(err){
            console.log(err.response.data);
            setSuccess(err.response.data.success);
            setError(err.response.data.error);
            authCheck();
        }
    }
    // console.log(success)
    // console.log(error)
    // useEffect(()=>{
    //     checkRider();
    // },[mobile])
    const authCheck = () => {
        
        if(error === "rider"){
            toast.error("User doesn't exist", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setShow("show");
        }
        else if(error === "server"){
            toast.error("Server error, Please try again", {
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
    useEffect(()=> {
        console.log("effect")
        if(success){
            history.push(`/signinDriverAuth?mobile=${mobile}`);
        }
        else{
            console.log(typeof error)
            if(error === "rider"){
                toast.error("User doesn't exist", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setShow("show");
            }
            else if(error === "server"){
                toast.error("Server error, Please try again", {
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
    },[success,error])

    // console.log(show)
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

        <form className="rider-form-data" onSubmit={handleSubmit(onSubmit)}>
            <div className="signup-form-block" style={{minHeight:125}}>
                <label className="signup-form-label" style={{minHeight:50,fontSize:15,fontWeight:500,fontStretch:"expanded"}}  for="mobilenumber">Enter your Mobile Number(required)</label>
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
                        value = {mobile}
                        onChange = {e => setMobile(e.target.value)}
                        ref={register({
                            pattern: {
                                value: /^[6-9][0-9]{9}$/,
                                message: "invalid mobile number"
                            }
                        })}
                    />
                </div>
                <div className="signup-form-error" >{errors.mobile && errors.mobile.message}</div>
            </div>
            <button style={{width:"75px",margin:2}} type="submit">Next </button>
            {/* <div style={{minHeight:50,minWidth:"100%",padding:"5px 15px",fontSize:25,fontWeight:600,display:"flex",justifyContent:"center",alignItems:"center"}}>
                {show && "User doesn't exist"}
            </div> */}
        </form>
        <div className = {`${show} signup-toggle`}>
            <div style={{minHeight:50,minWidth:"100%",fontSize:20,fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                click below to signup 
            </div>
            <div style={{minHeight:50,minWidth:"100%",fontSize:20,fontWeight:500,display:"flex",justifyContent:"center",alignItems:"center"}}>
                <button onClick = {() => history.push("/driversignup")}>Signup</button>
            </div>
        </div>
        </>
    );
};