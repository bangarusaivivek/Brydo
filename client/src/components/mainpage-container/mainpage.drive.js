import React from 'react'

function MainpageDrive() {
    return (
        <div className="mainpage-row">
            <div style={{minHeight:"100%",height:"100%",minWidth:"60%",width:"60%"}}>
                <img src="/driverhome1.png" height="100%" width="100%" />
            </div>
            <div style={{minHeight:"100%",height:"100%",minWidth:"40%",width:"40%",maxWidth:"40%",display:"flex",flexDirection:"column",padding:"10px 20px",position:"relative"}}>
                <div style={{minHeight:150,minWidth:"100%",maxWidth:"100%",fontSize:40,fontWeight:900}}>Earn money by driving</div>
                <div style={{minHeight:200,minWidth:"100%",maxWidth:"100%"}}>
                    <div style={{minHeight:50,minWidth:"100%",maxWidth:"100%",fontSize:40,fontWeight:900}}>part time driver</div>
                    <div style={{minHeight:50,minWidth:"100%",maxWidth:"100%",fontSize:40,fontWeight:900}}>Full time driver</div>
                </div>
                <div style={{minHeight:50,width:"90%",maxWidth:"100%",display:"flex",justifyContent:"center",position:"absolute",bottom:20,fontSize:30,fontWeight:500}}>
                    <button style={{backgroundColor:"yellow"}}>Signup as Driver</button>
                </div>
            </div>
            
        </div>
    )
}

export default MainpageDrive;
