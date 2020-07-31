import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export function Example(){
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);
  
    return (

        <form className="rider-form-data" onSubmit={handleSubmit(onSubmit)}>
            <div style={{height: 100}}>Enter your phone number</div>
            <div className="rider-login-number">
                <div className="country-code">+91</div>
                <input
                name="mobilenumber"
                placeholder = "Enter mobile number"
                required
                ref={register({
                    required: "Required",
                    pattern: {
                    value: /^[6-9][0-9]{9}$/,
                    message: "invalid mobile number"
                    }
                })}
                />
            </div>
            <div>{errors.mobilenumber && errors.mobilenumber.message}</div>
    
            <button style={{width:100}} type="submit"><Link to="/signinRiderAuth">Next</Link> </button>
       
        </form>
    );
};