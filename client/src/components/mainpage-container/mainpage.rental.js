import React, { useState } from 'react'

function MainpageRental() {
    const [signupmove,setSignupmove] = useState("");

    return (
        <div className="mainpage-row">
            
            <div style={{minHeight:"100%",height:"100%",minWidth:"40%",width:"40%",maxWidth:"40%",display:"flex",flexDirection:"column",padding:"10px 20px",position:"relative"}}>
                <div style={{minHeight:150,minWidth:"100%",maxWidth:"100%",fontSize:30,fontWeight:900}}>Rent car at cheaper prices</div>
                <div style={{minHeight:100,minWidth:"100%",maxWidth:"100%"}}>
                    <div style={{minHeight:50,minWidth:"100%",maxWidth:"100%",fontSize:30,fontWeight:900}}>Login then select car from our collections
                    </div>
                </div>
                <div className = "signup-animated-block"
                     onMouseEnter = {()=> setSignupmove("signup-move")} 
                     onMouseLeave={()=> setSignupmove("")} 
                     style={{minHeight:100,width:"90%",maxWidth:"100%",display:"flex",justifyContent:"center",borderBottom:"10px solid black"}}
                >
                        <div style={{minHeight:"100%",width:"100%",display:"flex"}}>
                            <div style={{fontSize:30,fontWeight:500,minWidth:"70%",display:"flex",justifyContent:"center",alignItems:"center",}}>Login Rider</div>
                            <div  className = ""  style={{minWidth:"30%",display:"flex",alignItems:"center",position:"relative"}}>
                                <img className = {signupmove}  src="/001-right-arrow.png" />
                            </div>
                        </div>
                </div>
                    
                
                <div style={{minHeight:100,maxHeight:100,width:"90%",maxWidth:"100%",display:"flex",flexDirection:"column",justifyContent:"center",position:"absolute",bottom:20,fontSize:30,fontWeight:500}}>
                    Not yet Registered ?
                    <div style={{minHeight:50,width:"90%",maxWidth:"100%",display:"flex",justifyContent:"center",bottom:20,fontSize:30,fontWeight:500}}>
                        <button style={{backgroundColor:"yellow"}}>Signup as Rider</button>
                    </div>
                </div>
            </div>
            <div style={{minHeight:"100%",height:"100%",minWidth:"60%",width:"60%"}}>
                
                <img src="/rental1.png" height="100%" width="100%" />
            </div>
        </div>
    )
}

export default MainpageRental;
