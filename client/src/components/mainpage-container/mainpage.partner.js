import React from 'react'

function MainpagePartner() {
    return (
        <div className="mainpage-row">
            
            <div style={{minHeight:"100%",height:"100%",minWidth:"40%",width:"40%",maxWidth:"40%",display:"flex",flexDirection:"column",padding:"10px 20px",position:"relative"}}>
                <div style={{minHeight:150,minWidth:"100%",maxWidth:"100%",fontSize:40,fontWeight:900}}>No Insurance</div>
                <div style={{minHeight:100,minWidth:"100%",maxWidth:"100%",fontSize:40,fontWeight:900}}>No Maintainence</div>
                <div style={{minHeight:200,minWidth:"100%",maxWidth:"100%"}}>
                    
                    <div style={{minHeight:50,minWidth:"100%",maxWidth:"100%",fontSize:20,fontWeight:900}}>No problem we will take care hand over to us and be relaxed </div>
                </div>
                <div style={{minHeight:50,width:"90%",maxWidth:"100%",display:"flex",flexDirection:"column",justifyContent:"center",position:"absolute",bottom:20,fontSize:30,fontWeight:500}}>
                    to register as partner
                    <div>
                        <button style={{backgroundColor:"yellow"}}>call us at</button>
                    </div>
                    
                </div>
            </div>
            <div style={{minHeight:"100%",height:"100%",minWidth:"60%",width:"60%"}}>
                <img src="/partner1.png" height="100%" width="100%" />
            </div>
            
        </div>
    )
}

export default MainpagePartner
