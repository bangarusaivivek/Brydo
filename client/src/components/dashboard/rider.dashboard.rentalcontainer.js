import React from 'react'

function RentalContainer() {

    const rentalStyles ={
        
        backgroundColor: "white",
        border: "1px solid black",
        margin: "10px",
        padding: "5px",
        display: "flex",
        flexDirection: "column"
    }
    const imgContainer ={
        height: "70%",
        backgroundColor: "blue",
        border: "1px solid black",
    }
    const dataContainer ={
        minHeight: "30%",
        backgroundColor: "red",
        border: "1px solid black",
    }

    const handleClick = (e) =>{
        console.log(" i clicked")
    }

    return (
        <>
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
