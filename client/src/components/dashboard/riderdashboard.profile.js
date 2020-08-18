import React,{ useState } from 'react'
import RiderNavbar from './rider.navbar'

function RiderDashboardProfile() {

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [newpassword,setPassword] = useState("");
    const [confirmpwd,setConfirmpwd] = useState("");
    const [color,setColor] = useState("white");
    const [error,setError] = useState("");

    const confirmpwdHandler = (e) => {
        const value = e.target.value;
        if(value === ""){
            setColor("white")
        }
        else if (value === newpassword){
            setColor("green")
        }
        else{
            setColor("red")
        }
        setConfirmpwd(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(confirmpwd !== newpassword){
            setError("password doesn't match");
        }
        else{
            setError("");
        }
    }
    
    return (
        <>
        <RiderNavbar />
        <div className = "rider-profile-container ml-lg-5 ml-md-4 ml-sm-3 mr-lg-5 mr-md-4 mr-sm-3">
            <div className = "rider-profile-data-container">
                <div className="rider-profile-pic-container">
                    <div style={{height:100,width:100,border:"1px solid black"}}>
                        <div style={{height:50,width:50,borderRadius:"50%",backgroundColor:"black"}}></div>
                    </div>
                    <div style={{height:50,border:"1px solid black"}}>user id</div>
                </div>
                
                <div className="rider-profile-data-block">
                    <div style={
                        {
                            minWidth:"30%",
                            maxWidth:"30%",
                            minHeight: 40,
                            maxHeight: 40,
                            fontSize: "1.3rem",
                            display:"flex",
                            alignItems:'center'
                        }
                    }>
                        Mobile
                    </div>
                    <div style={
                        {
                            minWidth:"70%",
                            maxWidth:"70%",
                            minHeight: 40,
                            maxHeight: 40,
                            border: "1px solid black",
                            fontSize: "1.3rem",
                            backgroundColor:"white",
                            display:"flex",
                            alignItems:'center',
                            cursor:"not allowed"
                        }
                    }>
                         +91 9855116159
                    </div>
                </div>
                <div className="rider-profile-data-block">
                    <div style={
                        {
                            minWidth:"30%",
                            maxWidth:"30%",
                            minHeight: 40,
                            maxHeight: 40,
                            fontSize: "1.3rem",
                            display:"flex",
                            alignItems:'center'
                        }
                    }>
                        Email
                    </div>
                    <div style={
                        {
                            minWidth:"70%",
                            maxWidth:"70%",
                            minHeight: 40,
                            maxHeight: 40,
                            border: "1px solid black",
                            fontSize: "1.0rem",
                            backgroundColor:"white",
                            display:"flex",
                            alignItems:'center',
                            cursor:"not allowed"
                        }
                    }>
                          bangarusaivivek@gmail.com
                    </div>
                </div>
                
                <form className="rider-profile-form-block" onSubmit = {handleSubmit}>
                    <div className="rider-profile-data-block">
                        <label  
                            style={
                                {
                                    minWidth:"30%",
                                    maxWidth:"30%",
                                    minHeight: 40,
                                    maxHeight: 40,
                                    fontSize: "1.3rem",
                                    display:"flex",
                                    alignItems:'center'
                                }
                            }
                            for="fname"
                        >First Name</label>
                        <div style={
                            {
                                minWidth:"70%",
                                maxWidth:"70%",
                                minHeight: 40,
                                maxHeight: 40,
                                fontSize: "1.0rem",
                                backgroundColor:"white",
                                display:"flex",
                                alignItems:'center',
                                cursor:"not allowed"
                            }
                        }>
                            <input
                                style={{
                                    width:"100%",
                                    height:"40px",
                                }}
                                name="fname"
                                placeholder = "First Name"
                                value = {fname}
                                onChange = {e => setFname(e.target.value)}
                                required
                                
                            />
                        </div>
                    </div>
                    <div className="rider-profile-data-block">
                        <label  
                            style={
                                {
                                    minWidth:"30%",
                                    maxWidth:"30%",
                                    minHeight: 40,
                                    maxHeight: 40,
                                    fontSize: "1.3rem",
                                    display:"flex",
                                    alignItems:'center'
                                }
                            }
                            for="lname"
                        >Last Name</label>
                        <div style={
                            {
                                minWidth:"70%",
                                maxWidth:"70%",
                                minHeight: 40,
                                maxHeight: 40,
                                fontSize: "1.0rem",
                                backgroundColor:"white",
                                display:"flex",
                                alignItems:'center',
                                cursor:"not allowed"
                            }
                        }>
                            <input
                                style={{
                                    width:"100%",
                                    height:"40px",
                                }}
                                name="lname"
                                placeholder = "Last Name"
                                value = {lname}
                                onChange = {e => setLname(e.target.value)}
                                required
                                
                            />
                        </div>
                    </div>
                    <div className="rider-profile-data-block">
                        <label  
                            style={
                                {
                                    minWidth:"30%",
                                    maxWidth:"30%",
                                    minHeight: 40,
                                    maxHeight: 40,
                                    fontSize: "1.3rem",
                                    display:"flex",
                                    alignItems:'center'
                                }
                            }
                            for="newpassword"
                        >New Password</label>
                        <div style={
                            {
                                minWidth:"70%",
                                maxWidth:"70%",
                                minHeight: 40,
                                maxHeight: 40,
                                fontSize: "1.0rem",
                                backgroundColor:"white",
                                display:"flex",
                                alignItems:'center',
                                cursor:"not allowed"
                            }
                        }>
                            <input
                                style={{
                                    width:"100%",
                                    height:"40px",
                                }}
                                name="newpassword"
                                placeholder = "create password"
                                pattern = "(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}"
                                value = {newpassword}
                                onChange = {e => setPassword(e.target.value)}
                                required
                                
                            />
                        </div>
                    </div>
                    <div className = "signup-form-block">
                        <div className="rider-profile-cpwd-block">
                            <label  
                                style={
                                        {
                                            minWidth:"30%",
                                            maxWidth:"30%",
                                            minHeight: 40,
                                            maxHeight: 40,
                                            fontSize: "1rem",
                                            display:"flex",
                                            alignItems:'center',
                                        }
                                    }
                                    for="newpassword"
                            >Confirm Password</label>
                            <div style={
                                {
                                    minWidth:"70%",
                                    maxWidth:"70%",
                                    minHeight: 40,
                                    maxHeight: 40,
                                    fontSize: "1.0rem",
                                    backgroundColor:"white",
                                    display:"flex",
                                    alignItems:'center',
                                    cursor:"not allowed"
                                }
                            }>
                                <input
                                    style={{
                                        width:"100%",
                                        height:"40px",
                                    }}
                                    name="newpassword"
                                    placeholder = "confirm password"
                                    value = {confirmpwd}
                                    onChange = {confirmpwdHandler}
                                    required
                                    
                                />
                            </div>
                        </div>
                        <div style={
                                {
                                    minHeight:2,
                                    maxHeight:2,
                                    maxWidth:"350px",
                                    margin: "0px 15px",
                                    position:"relative",
                                }
                        }>
                            <div style={
                                {
                                    width:"210px",
                                    minHeight:2,
                                    position:"absolute",
                                    right: 0,

                                }

                            } className = {color}>
                            </div>   
                        </div>
                        <div className="signup-form-error" style={{paddingLeft:"105px"}} >
                            {error}
                        </div>
                    
                    </div>
                    <div className="signup-form-button">
                        <button style={{width:"150px",height:40}} type="submit">Update </button>
                    </div>
                </form>
                <div style={{minHeight:100}}>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default RiderDashboardProfile
