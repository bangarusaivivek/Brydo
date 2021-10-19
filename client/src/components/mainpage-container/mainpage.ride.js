import React from 'react'

function MainpageRide() {
    return (
        <>
            <div className="mainpage-row">
                <div className = "mainpage-row-rider">
                    <div style={{minHeight:300,maxHeight:300,maxWidth:500,minWidth:500,color:"white",fontSize:50,fontWeight:800,position:"absolute",top:25,right:25}}>
                        " no one stop in this busy roads, but we will stop for you "
                        
                    </div>
                    <div style={{minHeight:150,maxHeight:150,maxWidth:500,minWidth:500,color:"white",fontSize:30,fontWeight:800,position:"absolute",bottom:25,left:25}}>
                        <div style={{minHeight:50}}>Book a ride with Brydo</div>
                        <div style={{minHeight:50,display:"flex",paddingLeft:50}}>
                            <button style={{backgroundColor:"yellow"}}>Signup as Rider</button>
                        </div>
                        
                    </div>
                </div>
                
                
            </div>
            <div className="mainpage-row">
                <div style={{minHeight:"100%",height:"100%",minWidth:"60%",width:"60%"}}>
                    <img src="/riderhome.png" height="100%" width="100%" />
                </div>
                <div style={{minHeight:"100%",height:"100%",minWidth:"40%",width:"40%",maxWidth:"40%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"10px 20px"}}>
                    <div style={{minHeight:50,minWidth:"100%",maxWidth:"100%",fontSize:50,fontWeight:900}}>Safest journey,</div>
                    <div style={{minHeight:50,minWidth:"100%",maxWidth:"100%",fontSize:50,fontWeight:900}}>relax with music,</div>
                    <div style={{minHeight:50,minWidth:"100%",maxWidth:"100%",fontSize:50,fontWeight:900}}>Low price rides</div>
                </div>
            
            
            </div>
        </>
    )
}

export default MainpageRide
