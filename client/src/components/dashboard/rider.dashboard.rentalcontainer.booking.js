import React, { useState, useEffect, useRef } from 'react';
import RiderNavbar from './rider.navbar';
import { FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, TextField  } from '@material-ui/core';
import paymentHandler from '../payments/payment';

function RentalBooking() {
    const [select,setSelect] = useState("1");
    const [packages, setPackage] = useState("none");
    const [pickup,setPickup] = useState(false);
    const [bookingButtonSM,setBookingButtomSM] = useState("show");

    const [promocodeValue,setPromocodeValue] = useState("");

    const [selectXL,setSelectXL] = useState();
    const [packagesXL, setPackageXL] = useState("none");
    const [pickupXL,setPickupXL] = useState(false);

    const handleClickSM = (e) =>{
        
        e.preventDefault();
        e.stopPropagation();
        if(select){
            document.getElementById(select).classList.remove("tenureselect");
        }
            
        if(e.target.id === "1" || e.target.id === "2" || e.target.id === "3" || e.target.id === "4" ){
            console.log(" inside target")
            document.getElementById(e.target.id).classList.add("tenureselect");
            setSelect(e.target.id);
            setPackage("none");
            setBookingButtomSM("show")
        }
      
        if(e.target.name === "packageselect"){

            setPackage(e.target.value)
            setSelect()
            setBookingButtomSM("show")
        }
    }
    const handleClickXL = (e) =>{
        console.log("XL")
        e.preventDefault();
        e.stopPropagation();
        if(selectXL){
            document.getElementById(selectXL).classList.remove("tenureselect");
        }
            
        if(e.target.id === "XL1" || e.target.id === "XL2" || e.target.id === "XL3" || e.target.id === "XL4" ){
            console.log(" inside target")
            document.getElementById(e.target.id).classList.add("tenureselect");
            setSelectXL(e.target.id);
            setPackageXL("none");
        }
      
        if(e.target.name === "packageselect"){

            setPackageXL(e.target.value);
            setSelectXL();
        }
    }

    const promoCodeSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        console.log(promocodeValue)
        setPromocodeValue("");
    }
    useEffect(() => {
        if(!select && packages === "none"){
            setBookingButtomSM("");
        }

    },[packages,select])
    console.log(bookingButtonSM,packages,select)
    console.log(!select)
    return (
        <>
            <RiderNavbar />
            <div className = "rider-rental-booking-container ml-lg-5 ml-md-4 ml-sm-3 mr-lg-5 mr-md-4 mr-sm-3">
                <div className="rider-rental-booking-data-container">
                    <div className = "rider-rental-booking-back-button"></div>
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
                                <div style={{minWidth:"30%",width:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img src="/003-medium.png" height="30px" width = "30px" />
                                </div>
                                <div style={{minWidth:"70%",width:"70%",display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:"5px"}}>
                                    <div style={{fontSize:"9px",textAlign:"left"}}>vehicle reading</div>
                                    <div style={{fontSize:"15px",textAlign:"left"}}>21,000km</div>
                                </div>
                            </div>
                            <div className = "rental-booking-specification-type" style={{minWidth:"20%",maxWidth:"20%",width:"20%"}}>
                                <div style={{minWidth:"30%",width:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img src="/001-safety-seat.png" height="30px" width = "30px" />
                                </div>
                                <div style={{minWidth:"70%",width:"70%",display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:"5px"}}>
                                    <div style={{fontSize:"9px",textAlign:"left"}}>seater</div>
                                    <div style={{fontSize:"15px",textAlign:"left"}}>4</div>
                                </div>
                            </div>
                            
                            <div className = "rental-booking-specification-type" style={{minWidth:"25%",maxWidth:"25%",width:"25%"}}>
                                <div style={{minWidth:"30%",width:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img src="/002-petrol.png" height="30px" width = "25px" />
                                </div>
                                <div style={{minWidth:"70%",width:"70%",display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:"5px"}}>
                                    <div style={{fontSize:"9px",textAlign:"left"}}>fuel type</div>
                                    <div style={{fontSize:"15px",textAlign:"left"}}>petrol</div>
                                </div>
                            </div>
                            <div className = "rental-booking-specification-type" style={{minWidth:"25%",maxWidth:"25%",width:"25%"}}>
                                <div style={{minWidth:"30%",width:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img src="/002-petrol.png" height="30px" width = "25px" />
                                </div>
                                <div style={{minWidth:"70%",width:"70%",display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:"5px"}}>
                                    <div style={{fontSize:"9px",textAlign:"left"}}>mileage</div>
                                    <div style={{fontSize:"15px",textAlign:"left"}}>21km</div>
                                </div>
                            </div>
                        </div>
                        <div className="rental-booking-specifications-bottom">
                            <div className = "rental-booking-specification-type" style={{minWidth:"50%",maxWidth:"50%",width:"50%"}}>
                                <div style={{maxWidth:"30px",width:"25%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img src="/002-insurance.png" height="30px" width = "30px" />
                                </div>
                                <div style={{minWidth:"75%",width:"75%",display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:"5px"}}>
                                    <div style={{fontSize:"9px",textAlign:"left"}}>variant/color</div>
                                    <div style={{fontSize:"15px",textAlign:"left"}}>as per availability</div>
                                </div>
                            </div>
                            <div className = "rental-booking-specification-type" style={{minWidth:"35%",maxWidth:"35%",width:"30%"}}>
                                <div style={{minWidth:"30%",width:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img src="/001-gearshift.png" height="20px" width = "30px" />
                                </div>
                                <div style={{minWidth:"70%",width:"70%",display:"flex",flexDirection:"column",justifyContent:"center",paddingLeft:"5px"}}>
                                    <div style={{fontSize:"9px",textAlign:"left"}}>Transmission type</div>
                                    <div style={{fontSize:"15px",textAlign:"left"}}>manual</div>
                                </div>
                            </div>
                            
                        </div>
                        <div className = "rental-booking-specifications-block">
                            <div className = "rental-booking-specifications-block-part" style={{minWidth:"100px",maxWidth:"100px",height:"100%"}}>
                                <div style={{height:"50%",minHeight:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img src="/003-medium.png" height="40px" width = "40px" />
                                </div>
                                <div style={{height:"15%",minHeight:"15%",paddingLeft:10}}>
                                    <div style={{fontSize:"9px",textAlign:"left",fontWeight:400}}>vehicle reading</div>
                                </div>
                                <div style={{height:"35%",minHeight:"35%"}}>
                                    <div style={{fontSize:"15px",textAlign:"left",paddingLeft:10,fontWeight:600}}>21,000km</div>
                                </div>
                            </div>
                            <div className = "rental-booking-specifications-block-part" style={{minWidth:"100px",maxWidth:"100px",height:"100%"}}>
                                <div style={{height:"50%",minHeight:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img src="/001-gearshift.png" height="35px" width = "40px" />
                                </div>
                                <div style={{height:"15%",minHeight:"15%",paddingLeft:10}}>
                                    <div style={{fontSize:"9px",textAlign:"left",fontWeight:400}}>Transmission type</div>
                                </div>
                                <div style={{height:"35%",minHeight:"35%"}}>
                                    <div style={{fontSize:"15px",textAlign:"left",paddingLeft:10,fontWeight:600}}>manual</div>
                                </div>
                            </div>
                            <div className = "rental-booking-specifications-block-part" style={{minWidth:"60px",maxWidth:"60px",height:"100%"}}>
                                <div style={{height:"50%",minHeight:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img src="/001-safety-seat.png" height="35px" width = "35px" />
                                </div>
                                <div style={{height:"15%",minHeight:"15%",paddingLeft:10}}>
                                    <div style={{fontSize:"9px",textAlign:"left",fontWeight:400}}>seater</div>
                                </div>
                                <div style={{height:"35%",minHeight:"35%"}}>
                                    <div style={{fontSize:"15px",textAlign:"left",paddingLeft:10,fontWeight:600}}>4</div>
                                </div>
                            </div>
                            <div className = "rental-booking-specifications-block-part" style={{minWidth:"70px",maxWidth:"70px",height:"100%"}}>
                                <div style={{height:"50%",minHeight:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img src="/002-petrol.png" height="40px" width = "30px" />
                                </div>
                                <div style={{height:"15%",minHeight:"15%",paddingLeft:10}}>
                                    <div style={{fontSize:"9px",textAlign:"left",fontWeight:400}}>Fuel Type</div>
                                </div>
                                <div style={{height:"35%",minHeight:"35%"}}>
                                    <div style={{fontSize:"15px",textAlign:"left",paddingLeft:10,fontWeight:600}}>petrol</div>
                                </div>
                            </div>
                            <div className = "rental-booking-specifications-block-part" style={{minWidth:"75px",maxWidth:"75px",height:"100%"}}>
                                <div style={{height:"50%",minHeight:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img src="/002-petrol.png" height="40px" width = "40px" />
                                </div>
                                <div style={{height:"15%",minHeight:"15%",paddingLeft:10}}>
                                    <div style={{fontSize:"9px",textAlign:"left",fontWeight:400}}>mileage</div>
                                </div>
                                <div style={{height:"35%",minHeight:"35%"}}>
                                    <div style={{fontSize:"15px",textAlign:"left",paddingLeft:10,fontWeight:600}}>21 km/l</div>
                                </div>
                            </div>
                            <div className = "rental-booking-specifications-block-part" style={{minWidth:"150px",maxWidth:"150px",height:"100%"}}>
                                <div style={{height:"50%",minHeight:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                    <img src="/002-insurance.png" height="40px" width = "40px" />
                                </div>
                                <div style={{height:"15%",minHeight:"15%",paddingLeft:10}}>
                                    <div style={{fontSize:"9px",textAlign:"left",fontWeight:400}}>variant/color</div>
                                </div>
                                <div style={{height:"35%",minHeight:"35%"}}>
                                    <div style={{fontSize:"15px",textAlign:"left",paddingLeft:10,fontWeight:600}}>as per availability</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "rental-booking-package-small">
                        <div className = "rental-package-tenure">
                            <div className = "rental-package-tenure-name">tenure</div>
                            <div className = "rental-package-tenure-row">
                                <div className = "rental-package-tenure-row-block">
                                    <div className = "rental-package-tenure-row-inner-block tenureselect" id="1" onClick={handleClickSM}>
                                        <div style={{fontSize:"18px",fontWeight:"700",pointerEvents:"none"}}>6</div>
                                        <div style={{fontSize:"10px",fontWeight:"500",pointerEvents:"none"}}>hrs</div>
                                    </div>
                                </div>
                                <div className = "rental-package-tenure-row-block">
                                    <div className = "rental-package-tenure-row-inner-block" id="2" onClick={handleClickSM}>
                                        <div style={{fontSize:"18px",fontWeight:"700",pointerEvents:"none"}}>12</div>
                                        <div style={{fontSize:"10px",fontWeight:"500",pointerEvents:"none"}}>hrs</div>
                                    </div>
                                </div>
                                <div className = "rental-package-tenure-row-block">
                                    <div className = "rental-package-tenure-row-inner-block" id="3" onClick={handleClickSM}>
                                        <div style={{fontSize:"18px",fontWeight:"700",pointerEvents:"none"}}>18</div>
                                        <div style={{fontSize:"10px",fontWeight:"500",pointerEvents:"none"}}>hrs</div>
                                    </div>
                                </div>
                                <div className = "rental-package-tenure-row-block">
                                    <div className = "rental-package-tenure-row-inner-block" id="4" onClick={handleClickSM}>
                                        <div style={{fontSize:"18px",fontWeight:"700",pointerEvents:"none"}}>24</div>
                                        <div style={{fontSize:"10px",fontWeight:"500",pointerEvents:"none"}}>hrs</div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className ="rental-booking-package-list">
                            <div style={{minWidth:"180px",maxWidth:"50%",display:"flex",paddingLeft:"20px",alignItems:"center",fontSize:"20px",fontWeight:"600px"}}>select package</div>
                            <div className = "rental-booking-package-selectform">
                                <FormControl style={{minWidth:"140px",maxWidth:"140px"}}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name = "packageselect"
                                        value={packages}
                                        onChange={handleClickSM}
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
                        <div className = "rental-booking-pricing-block">
                            <div className = "rental-booking-price-tag">
                                <div style={{minWidth:"50%",maxWidth:"50%",maxHeight:"100%",height:"100%",display:"flex",flexDirection:"row"}}>
                                    <span className="rental-booking-price-tag-block" style={{minWidth:"20px",fontSize:"26px",fontWeight:"400",justifyContent:"center",alignItems:"center"}}>₹ </span>
                                    <span className="rental-booking-price-tag-block" style={{fontSize:"28px",fontWeight:"600",
                                    justifyContent:"center",alignItems:"center"}}>1,000 </span>
                                    <span className="rental-booking-price-tag-block" style={{fontSize:"12px",fontWeight:"400",alignItems:"flex-end",padding:"7px 3px"}}>/12hr </span>
                                </div>
                            
                                <div style={{minHeight:"16px",maxHeight:"16px",fontSize:"12px",textAlign:"left",paddingLeft:"5px",fontWeight:"400"}}>
                                    (Inclusive of taxes)
                                </div>
                            </div>
                            <div style={{minHeight:"24px",maxHeight:"24px",fontSize:"15px",textAlign:"left",paddingLeft:"5px",fontWeight:"500",color:"green"}}>+ 2rs per km</div>
                            <div></div>
                        </div>
                    </div>
                    <div className = "rental-booking-pickup">
                        <div style={{minWidth:"50%",maxWidth:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <FormControlLabel
                            control={<Checkbox checked={pickup} onChange={e => setPickup(e.target.checked)} name="checkedA" />}
                            label="self-pickup"
                        />
                        </div>
                        <div style={{minWidth:"50%",maxWidth:"50%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <div style={{fontSize:"12px",fontWeight:"400"}}>place of delivery</div>
                            <div style={{fontSize:"13px",fontWeight:"500"}}>at your doorstep</div>
                        </div>
                    </div>
                    <div className = {`rental-booking-fareblock-small ${bookingButtonSM}`}>
                        <div style={{minHeight:"40px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                <form autoComplete="off" style={{maxHeight:"30px",paddingLeft:"10px",display:"flex",flexDirection:"row",}} onSubmit={promoCodeSubmit}>

                                    <TextField style={{maxHeight:"100%",backgroundColor:"white",}} id="standard-basic" placeholder="apply promocode" value={promocodeValue} onChange = {e => setPromocodeValue(e.target.value)}  />
                                    <div style={{paddingLeft:"20px"}}>
                                        <button  >apply</button>
                                    </div>

                                </form>
                        </div>
                        <div className = "rental-booking-large-farecalculator">
                                <div className = "rental-booking-fare-breakup-block">
                                    <div className = "rental-booking-fare-breakup-block-left">Base Fare</div>
                                    <div className = "rental-booking-fare-breakup-block-right">Rs. 1200/-</div>
                                </div>
                                <div className = "rental-booking-fare-breakup-block">
                                    <div className = "rental-booking-fare-breakup-block-left">Extra charges</div>
                                    <div className = "rental-booking-fare-breakup-block-right">Rs. 120</div>
                                </div>
                                <div className = "rental-booking-fare-breakup-block" >
                                    
                                </div>
                                <div className = "rental-booking-fare-breakup-block">
                                    <div className = "rental-booking-fare-breakup-block-left">Total Fare</div>
                                    <div className = "rental-booking-fare-breakup-block-right">Rs.1400/-</div>
                                </div>

                        </div>
                    </div>
                    <div className = "rental-booking-vehicle-related">
                        <div style={{minHeight:50,maxHeight:50,display:"flex",alignItems:"center",fontSize:24,fontWeight:700,paddingLeft:15}}>
                            insurance and maintainence
                        </div>
                        <div className="rental-booking-insurance">
                            <div style={{minHeight:40,maxHeight:40,display:"flex",alignItems:"center",fontSize:20,fontWeight:500,paddingLeft:15}}>
                                comphrehensive insurance policy
                            </div>
                            <div className="rental-booking-insurance-block">
                                <div style={{minWidth:"150px",maxWidth:"150px",display:"flex",flexDirection:"column",paddingLeft:15}}>
                                    <div style={{minHeight:"40%",maxHeight:"40%",height:"40%",display:"flex",alignItems:"center"}}>
                                        <img src="/001-car-insurance.png" height="40px" width="40px" />
                                    </div>
                                    <div style={{minHeight:"60%",maxHeight:"60%",height:"60%",display:"flex",alignItems:"center",fontSize:18,fontWeight:400}}>
                                        Limited Liability upto 10,000
                                    </div>
                                    
                                </div>
                                <div style={{minWidth:"150px",maxWidth:"150px",display:"flex",flexDirection:"column",paddingLeft:15}}>
                                    <div style={{minHeight:"40%",maxHeight:"40%",height:"40%",display:"flex",alignItems:"center"}}>
                                        <img src="/002-car.png" height="40px" width="40px" />
                                    </div>
                                    <div style={{minHeight:"60%",maxHeight:"60%",height:"60%",display:"flex",alignItems:"center",fontSize:18,fontWeight:400}}>
                                        24X7 roadside assistance
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="rental-booking-insurance">
                            <div style={{minHeight:40,maxHeight:40,display:"flex",alignItems:"center",fontSize:20,fontWeight:500,paddingLeft:15}}>
                                Routine service and maintainence
                            </div>
                            <div className="rental-booking-insurance-block">
                                <div style={{minWidth:"120px",maxWidth:"120px",display:"flex",flexDirection:"column",paddingLeft:15}}>
                                    <div style={{minHeight:"40%",maxHeight:"40%",height:"40%",display:"flex",alignItems:"center"}}>
                                        <img src="/005-car-service.png" height="40px" width="40px" />
                                    </div>
                                    <div style={{minHeight:"60%",maxHeight:"60%",height:"60%",display:"flex",alignItems:"center",fontSize:16,fontWeight:400}}>
                                        oil topup or replacement
                                    </div>
                                    
                                </div>
                                <div style={{minWidth:"120px",maxWidth:"120px",display:"flex",flexDirection:"column",paddingLeft:15}}>
                                    <div style={{minHeight:"40%",maxHeight:"40%",height:"40%",display:"flex",alignItems:"center"}}>
                                        <img src="/car-battery.png" height="40px" width="40px" />
                                    </div>
                                    <div style={{minHeight:"60%",maxHeight:"60%",height:"60%",display:"flex",alignItems:"center",fontSize:16,fontWeight:400}}>
                                        Bateery replacement
                                    </div>
                                    
                                </div>
                                <div style={{minWidth:"120px",maxWidth:"120px",display:"flex",flexDirection:"column",paddingLeft:15}}>
                                    <div style={{minHeight:"40%",maxHeight:"40%",height:"40%",display:"flex",alignItems:"center"}}>
                                        <img src="/003-car-parts-1.png" height="40px" width="40px" />
                                    </div>
                                    <div style={{minHeight:"60%",maxHeight:"60%",height:"60%",display:"flex",alignItems:"center",fontSize:16,fontWeight:400}}>
                                        suspension parts
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = {`rental-booking-confirm-button-small ${bookingButtonSM}` }>
                        <div className="rental-booking-confirm-button-small-block" onClick={paymentHandler}>confirm booking</div>
                    </div>
                </div>

                <div className = "rental-booking-package-large">
                    <div className = "rental-booking-package-large-block"> 
                        <div className = "rental-package-tenure">
                            <div className = "rental-package-tenure-name">tenure</div>
                            <div className = "rental-package-tenure-row">
                                    <div className = "rental-package-tenure-row-block">
                                        <div className = "rental-package-tenure-row-inner-block" id="XL1" onClick={handleClickXL}>
                                            <div style={{fontSize:"18px",fontWeight:"700",pointerEvents:"none"}}>6</div>
                                            <div style={{fontSize:"10px",fontWeight:"500",pointerEvents:"none"}}>hrs</div>
                                        </div>
                                    </div>
                                    <div className = "rental-package-tenure-row-block">
                                        <div className = "rental-package-tenure-row-inner-block" id="XL2" onClick={handleClickXL}>
                                            <div style={{fontSize:"18px",fontWeight:"700",pointerEvents:"none"}}>12</div>
                                            <div style={{fontSize:"10px",fontWeight:"500",pointerEvents:"none"}}>hrs</div>
                                        </div>
                                    </div>
                                    <div className = "rental-package-tenure-row-block">
                                        <div className = "rental-package-tenure-row-inner-block" id="XL3" onClick={handleClickXL}>
                                            <div style={{fontSize:"18px",fontWeight:"700",pointerEvents:"none"}}>18</div>
                                            <div style={{fontSize:"10px",fontWeight:"500",pointerEvents:"none"}}>hrs</div>
                                        </div>
                                    </div>
                                    <div className = "rental-package-tenure-row-block">
                                        <div className = "rental-package-tenure-row-inner-block" id="XL4" onClick={handleClickXL}>
                                            <div style={{fontSize:"18px",fontWeight:"700",pointerEvents:"none"}}>24</div>
                                            <div style={{fontSize:"10px",fontWeight:"500",pointerEvents:"none"}}>hrs</div>
                                        </div>
                                    </div>
                                
                            </div>
                            
                        </div>
                        <div className ="rental-booking-package-list">
                            <div style={{minWidth:"50%",maxWidth:"50%",display:"flex",paddingLeft:"20px",alignItems:"center",fontSize:"18px",fontWeight:"600px"}}>select package</div>
                            <div className = "rental-booking-package-selectform">
                                <FormControl style={{minWidth:"140px",maxWidth:"140px"}}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        name = "packageselect"
                                        value={packagesXL}
                                        onChange={handleClickXL}
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
                        <div className = "rental-booking-pricing-block">
                            <div className = "rental-booking-price-tag">
                                <div style={{minWidth:"50%",maxWidth:"50%",maxHeight:"100%",height:"100%",display:"flex",flexDirection:"row"}}>
                                    <span className="rental-booking-price-tag-block" style={{minWidth:"20px",fontSize:"26px",fontWeight:"400",justifyContent:"center",alignItems:"center"}}>₹ </span>
                                    <span className="rental-booking-price-tag-block" style={{fontSize:"28px",fontWeight:"600",
                                    justifyContent:"center",alignItems:"center"}}>1,000 </span>
                                    <span className="rental-booking-price-tag-block" style={{fontSize:"12px",fontWeight:"400",alignItems:"flex-end",padding:"7px 3px"}}>/12hr </span>
                                </div>
                            
                                <div style={{minHeight:"16px",maxHeight:"16px",fontSize:"12px",textAlign:"left",paddingLeft:"5px",fontWeight:"400"}}>
                                    (Inclusive of taxes)
                                </div>
                            </div>
                            <div style={{minHeight:"24px",maxHeight:"24px",fontSize:"15px",textAlign:"left",paddingLeft:"5px",fontWeight:"600"}}>+ 2rs per km</div>
                            <div></div>
                        </div>
                        <div style={{minHeight:"40px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <form autoComplete="off" style={{maxHeight:"30px",paddingLeft:"10px",display:"flex",flexDirection:"row"}} onSubmit={promoCodeSubmit}>

                                <TextField style={{maxHeight:"100%",backgroundColor:"white",}} id="standard-basic" placeholder="apply promocode" value={promocodeValue} onChange = {e => setPromocodeValue(e.target.value)}  />
                                <div style={{paddingLeft:"20px"}}>
                                    <button  >apply</button>
                                </div>

                            </form>
                        </div>
                        <div className = "rental-booking-large-farecalculator">
                            <div className = "rental-booking-fare-breakup-block">
                                <div className = "rental-booking-fare-breakup-block-left">Base Fare</div>
                                <div className = "rental-booking-fare-breakup-block-right">Rs. 1200/-</div>
                            </div>
                            <div className = "rental-booking-fare-breakup-block">
                                <div className = "rental-booking-fare-breakup-block-left">Extra charges</div>
                                <div className = "rental-booking-fare-breakup-block-right">Rs. 120</div>
                            </div>
                            <div className = "rental-booking-fare-breakup-block" >
                                
                            </div>
                            <div className = "rental-booking-fare-breakup-block">
                                <div className = "rental-booking-fare-breakup-block-left">Total Fare</div>
                                <div className = "rental-booking-fare-breakup-block-right">Rs.1400/-</div>
                            </div>

                        </div>
                        <div className = {`rental-booking-confirm-button-large show` }>
                            <div className="rental-booking-confirm-button-small-block">confirm booking</div>
                        </div>
                    </div>
                </div>

                <div style={{minHeight:500,backgroundColor:"white",minWidth:"100%"}} ></div>
            </div>
            
        </>
    )
}

export default RentalBooking
