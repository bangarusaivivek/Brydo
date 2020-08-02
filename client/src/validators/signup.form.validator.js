import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


export function RiderSignupFormValidator({history}){
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => {
        
        console.log(values);
    }
    const errMessage = ""
    
    return (

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
                        name="mobilenumber"
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
                            // pattern: {
                            //     value:  /^[a-zA-Z ]{0,30}$/,
                            //     message: "invalid last name"
                            // }
                    })}
                />
                </div>
                <div className="signup-form-error"></div>
            </div>
            <div className="signup-form-button">
                <button style={{width:"150px",height:40}} type="submit">Signup </button>
            </div>
       
        </form>
    );
};

export function DriverSignupFormValidator(){
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = values => console.log(values);
    const errMessage = ""
    
    return (

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
                        name="mobilenumber"
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
                            // pattern: {
                            //     value:  /^[a-zA-Z ]{0,30}$/,
                            //     message: "invalid last name"
                            // }
                    })}
                />
                </div>
                <div className="signup-form-error"></div>
            </div>
            <div className="signup-form-button">
                <button style={{width:"150px",height:40}} type="submit">Signup </button>
            </div>
       
        </form>
    );
};