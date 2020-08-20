import React,{ useState } from 'react';
import {useHistory} from 'react-router-dom';

function RentalContainer() {
    const history = useHistory();
    const [select,setSelect] = useState();
    const rentalStyles ={
        
        backgroundColor: "#E67E22",
        border: "1px solid black",
        margin: "10px",
        padding: "5px",
        display: "flex",
        flexDirection: "column",

    }
    const imgContainer ={
        height: "70%",
        backgroundColor: "blue",
        border: "1px solid black",
        pointerEvents: "none"
    }
    const dataContainer ={
        minHeight: "30%",
        backgroundColor: "#D7DBDD",
        border: "1px solid black",
        display: "flex",
        flexDirection: "row",
        pointerEvents: "none"
    }

    const handleClick = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        // if(select)
        //     document.getElementById(select).classList.remove("hello");

        // document.getElementById(e.target.id).classList.add("hello");
        // setSelect(e.target.id);


    }

    return (
        <>
            <div id="1" className= "rider-rental-container-block" style={rentalStyles} onClick={handleClick}>
                <div style={imgContainer}>
                    <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/26742/swift-exterior-right-front-three-quarter-117655.gif" style={{maxWidth:"100%",maxHeight:"100%",minWidth:"100%",minHeight:"100%"}} />
                </div>
                <div style={dataContainer}>
                    <div style={{
                                    height:"100%",
                                    width:"70%",
                                    maxWidth: "70%",
                                    borderRight:"1px solid black",
                                    display: "flex",
                                    flexDirection: "column",

                                }}
                    >
                        <div style={{minHeight:"50%",width:"100%",borderBottom:"1px solid black"}}>
                            Maruti Suzuki Swift
                        </div>
                        <div style={{
                                        minHeight:"50%",
                                        height: "50%",
                                        width:"100%",
                                        display: "flex",
                                        flexDirection: "row",

                                    }}
                        >
                            <div style={{maxWidth:"40%",minWidth:"40%",display:"flex",flexDirection:"row",justifyContent:"center",
                                alignItems:"center",fontSize:"0.8rem",fontWeight:"800"}}>
                                <span style={{padding:"0 2px"}}><img src="/003-medium.png" height="20px" width="20px" /></span>
                                15000km
                            </div>
                            <div style={{maxWidth:"20%",minWidth:"20%",display:"flex",flexDirection:"row",justifyContent:"center",      
                                alignItems:"center",fontSize:"0.8rem",fontWeight:"800"}}>
                                    <span style={{padding:"0 2px"}}><img src="/001-gearshift.png" height="15px" width="15px" /></span>
                                    M
                            </div>
                            <div style={{maxWidth:"30%",minWidth:"30%",display:"flex",flexDirection:"row",justifyContent:"center",      
                                alignItems:"center",fontSize:"0.8rem",fontWeight:"800"}}>
                                    <span style={{padding:"0 2px"}}><img src="/002-petrol.png" height="20px" width="20px" /></span>
                                    22km/l
                            </div>
                        </div>
                    </div>
                    <div className="rider-rental-container-ratecard">
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="2000">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="d-block ratecard">
                                        <div style={{minHeight:"48px",maxHeight:"48px",display:"flex",justifyContent:"center",
                                            alignItems:"center",fontSize:"0.8rem"}}>
                                            Rs.1000/12hr
                                        </div>
                                        <div style={{minHeight:"20px",maxHeight:"20px",display:"flex",justifyContent:"center",
                                            alignItems:"center",fontSize:"0.5rem"}}>
                                                Rs.2 per km
                                        </div>
                                    </div>

                                </div>
                                <div class="carousel-item">
                                <div class="d-block ratecard">
                                    <div style={{minHeight:"48px",maxHeight:"48px",display:"flex",justifyContent:"center",
                                        alignItems:"center",fontSize:"0.8rem"}}>
                                        Rs.1000/12hr
                                    </div>
                                    <div style={{minHeight:"20px",maxHeight:"20px",display:"flex",justifyContent:"center",
                                        alignItems:"center",fontSize:"0.5rem"}}>
                                            Rs.2 per km
                                    </div>
                                </div>
                                </div>
                                <div class="carousel-item">
                                <div class="d-block ratecard" >
                                    <div style={{minHeight:"48px",maxHeight:"48px",display:"flex",justifyContent:"center",
                                            alignItems:"center",fontSize:"0.8rem"}}>
                                            Rs.1000/12hr
                                        </div>
                                        <div style={{minHeight:"20px",maxHeight:"20px",display:"flex",justifyContent:"center",
                                            alignItems:"center",fontSize:"0.5rem"}}>
                                                Rs.2 per km
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div id="2" className= "rider-rental-container-block" style={rentalStyles} onClick={handleClick}>
                <div style={imgContainer}>
                    <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/26742/swift-exterior-right-front-three-quarter-117655.gif" style={{maxWidth:"100%",maxHeight:"100%",minWidth:"100%",minHeight:"100%"}} />
                </div>
                <div style={dataContainer}>
                    <div style={{
                                    height:"100%",
                                    width:"70%",
                                    borderRight:"1px solid black",
                                    display: "flex",
                                    flexDirection: "column",

                                }}
                    >
                        <div style={{minHeight:"50%",width:"100%",borderBottom:"1px solid black"}}>
                            Maruti Suzuki Swift
                        </div>
                        <div style={{
                                        minHeight:"50%",
                                        height: "50%",
                                        width:"100%",
                                        display: "flex",
                                        flexDirection: "row",

                                    }}
                        >
                            <div style={{width:"30%"}}></div>
                            <div style={{width:"30%"}}></div>
                            <div></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className= "rider-rental-container-block" style={rentalStyles} onClick={handleClick}>
                <div style={imgContainer}>
                    <img src="https://imgd.aeplcdn.com/0x0/n/cw/ec/26742/swift-exterior-right-front-three-quarter-117655.gif" style={{maxWidth:"100%",maxHeight:"100%",minWidth:"100%",minHeight:"100%"}} />
                </div>
                <div style={dataContainer}>
                    <div style={{
                                    height:"100%",
                                    width:"70%",
                                    borderRight:"1px solid black",
                                    display: "flex",
                                    flexDirection: "column",

                                }}
                    >
                        <div style={{minHeight:"50%",width:"100%",borderBottom:"1px solid black"}}>
                            Maruti Suzuki Swift
                        </div>
                        <div style={{
                                        minHeight:"50%",
                                        height: "50%",
                                        width:"100%",
                                        display: "flex",
                                        flexDirection: "row",

                                    }}
                        >
                            <div style={{width:"30%"}}></div>
                            <div style={{width:"30%"}}></div>
                            <div></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        
        </>
    )
}

export default RentalContainer
