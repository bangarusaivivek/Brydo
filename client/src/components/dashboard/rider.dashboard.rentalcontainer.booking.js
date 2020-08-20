import React, { useState, useEffect, useRef } from 'react';
import RiderNavbar from './rider.navbar';
import { FormControl, InputLabel, Select, MenuItem  } from '@material-ui/core';


function RentalBooking() {
    const [select,setSelect] = useState();
    const [packages, setPackage] = useState("none");

    const handleClick = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        if(select){
            document.getElementById(select).classList.remove("tenureselect");
        }
            
        if(e.target.id === "1" || e.target.id === "2" || e.target.id === "3" || e.target.id === "4" ){
            
            document.getElementById(e.target.id).classList.add("tenureselect");
            setSelect(e.target.id);
            setPackage("none");
        }
      
        if(e.target.name === "packageselect"){
            setPackage(e.target.value)
        }

    }

    return (
        <>
            <RiderNavbar />
            <div className = "rider-rental-booking-container ml-lg-5 ml-md-4 ml-sm-3 mr-lg-5 mr-md-4 mr-sm-3">
                <div className="rider-rental-booking-data-container">
                    <div className="rental-booking-img">
                        <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/26742/swift-exterior-right-front-three-quarter-117655.gif" style={
                                {maxWidth:"100%",maxHeight:"100%",minWidth:"100%",minHeight:"100%"}} />
                    </div>
                    <div className="rental-booking-specifications">
                        <div className = "rental-booking-specifications-name">
                            Maruti Swift
                        </div>
                        <div className="rental-booking-specifications-top">
                            <div className = "rental-booking-specification-type" style={{minWidth:"30%",maxWidth:"30%",width:"30%"}}>
                                <div style={{fontSize:"9px",textAlign:"left"}}>vehicle reading</div>
                                <div style={{fontSize:"15px",textAlign:"left"}}>21,000km</div>
                            </div>
                            <div className = "rental-booking-specification-type" style={{minWidth:"30%",maxWidth:"30%",width:"30%"}}>
                                <div style={{fontSize:"9px",textAlign:"left"}}>Transmission type</div>
                                <div style={{fontSize:"15px",textAlign:"left"}}>manual</div>
                            </div>
                            <div className = "rental-booking-specification-type" style={{minWidth:"20%",maxWidth:"20%",width:"20%"}}>
                                <div style={{fontSize:"9px",textAlign:"left"}}>fuel type</div>
                                <div style={{fontSize:"15px",textAlign:"left"}}>petrol</div>
                            </div>
                            <div className = "rental-booking-specification-type" style={{minWidth:"20%",maxWidth:"20%",width:"20%"}}>
                                <div style={{fontSize:"9px",textAlign:"left"}}>mileage</div>
                                <div style={{fontSize:"15px",textAlign:"left"}}>21km</div>
                            </div>
                        </div>
                        <div className="rental-booking-specifications-bottom">
                            <div className = "rental-booking-specification-type" style={{minWidth:"40%",maxWidth:"40%",width:"40%"}}>
                                <div style={{fontSize:"9px",textAlign:"left"}}>variant/color</div>
                                <div style={{fontSize:"15px",textAlign:"left"}}>as per availability</div>
                            </div>
                            <div className = "rental-booking-specification-type" style={{minWidth:"20%",maxWidth:"20%",width:"20%"}}>
                                <div style={{fontSize:"9px",textAlign:"left"}}>seater</div>
                                <div style={{fontSize:"15px",textAlign:"left"}}>4</div>
                            </div>
                            <div className = "rental-booking-specification-type" style={{minWidth:"20%",maxWidth:"20%",width:"20%"}}>
                                <div style={{fontSize:"9px",textAlign:"left"}}>fuel type</div>
                                <div style={{fontSize:"15px",textAlign:"left"}}>petrol</div>
                            </div>
                        </div>
                    </div>
                    <div className = "rental-booking-package-small">
                        <div className = "rental-package-tenure">
                            <div className = "rental-package-tenure-name">tenure</div>
                            <div className = "rental-package-tenure-row">
                                <div className = "rental-package-tenure-row-block">
                                    <div className = "rental-package-tenure-row-inner-block" id="1" onClick={handleClick}>
                                        <div style={{fontSize:"18px",fontWeight:"700",pointerEvents:"none"}}>6</div>
                                        <div style={{fontSize:"10px",fontWeight:"500",pointerEvents:"none"}}>hrs</div>
                                    </div>
                                </div>
                                <div className = "rental-package-tenure-row-block">
                                    <div className = "rental-package-tenure-row-inner-block" id="2" onClick={handleClick}>
                                        <div style={{fontSize:"18px",fontWeight:"700",pointerEvents:"none"}}>12</div>
                                        <div style={{fontSize:"10px",fontWeight:"500",pointerEvents:"none"}}>hrs</div>
                                    </div>
                                </div>
                                <div className = "rental-package-tenure-row-block">
                                    <div className = "rental-package-tenure-row-inner-block" id="3" onClick={handleClick}>
                                        <div style={{fontSize:"18px",fontWeight:"700",pointerEvents:"none"}}>18</div>
                                        <div style={{fontSize:"10px",fontWeight:"500",pointerEvents:"none"}}>hrs</div>
                                    </div>
                                </div>
                                <div className = "rental-package-tenure-row-block">
                                    <div className = "rental-package-tenure-row-inner-block" id="4" onClick={handleClick}>
                                        <div style={{fontSize:"18px",fontWeight:"700",pointerEvents:"none"}}>24</div>
                                        <div style={{fontSize:"10px",fontWeight:"500",pointerEvents:"none"}}>hrs</div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className ="rental-booking-package-list">
                            <div style={{minWidth:"40%",maxWidth:"40%",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"18px",fontWeight:"600px"}}>select package</div>
                            <div className = "rental-booking-package-selectform">
                                <FormControl style={{minWidth:"140px",maxWidth:"140px"}}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name = "packageselect"
                                        value={packages}
                                        onChange={handleClick}
                                    >
                                        <MenuItem value={"none"}>none</MenuItem>
                                        <MenuItem value={"3 days"}>3 days</MenuItem>
                                        <MenuItem value={"7 days"}>7 days</MenuItem>
                                        <MenuItem value={"12 days"}>12 days</MenuItem>
                                        <MenuItem value={"1 month"}>1 month</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                    <div className = "rental-booking-pickup"></div>
                    <div className = "rental-booking-vehicle-related"></div>
                </div>

            </div>
        </>
    )
}

export default RentalBooking
