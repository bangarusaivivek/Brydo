import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


export function RiderLoginFormValidator({history}){
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
        history.push("/signinRiderAuth")
    }
    const errMessage = ""
    return (

        <form className="rider-form-data" onSubmit={handleSubmit(onSubmit)}>
            <div style={{height: "40%"}}>Enter your phone number</div>
            <div style={{
                height:"40%",
                width:"100%",
                display: "flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
            <div className="rider-login-number">

                <div className="country-code">+91</div>
                <input
                name="mobilenumber"
                placeholder = "Enter mobile number"
                required
                ref={register({
                    pattern: {
                    value: /^[6-9][0-9]{9}$/,
                    message: "invalid mobile number"
                    }
                })}
                />
            </div>
            <div style={{color:"red",minHeight:"20%",fontSize:15}}>{errors.mobilenumber && errors.mobilenumber.message}{errMessage && "Hello"}</div>
            </div>
            <button style={{width:"20%",margin:2}} type="submit">Next </button>
       
        </form>
    );
};

export function DriverLoginFormValidator({history}){
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        console.log(values);
        history.push("/signinDriverAuth")
    }
    const errMessage = ""
    return (

        <form className="rider-form-data" onSubmit={handleSubmit(onSubmit)}>
            <div style={{height: "40%"}}>Enter your phone number</div>
            <div style={{
                height:"40%",
                width:"100%",
                display: "flex",
                flexDirection:"column",
                alignItems:"center"
            }}>
            <div className="rider-login-number">

                <div className="country-code">+91</div>
                <input
                name="mobilenumber"
                placeholder = "Enter mobile number"
                required
                ref={register({
                    pattern: {
                    value: /^[6-9][0-9]{9}$/,
                    message: "invalid mobile number"
                    }
                })}
                />
            </div>
            <div style={{color:"red",minHeight:"20%",fontSize:15}}>{errors.mobilenumber && errors.mobilenumber.message}{errMessage && "Hello"}</div>
            </div>
            <button style={{width:"20%",margin:2}} type="submit">Next </button>
       
        </form>
    );
};