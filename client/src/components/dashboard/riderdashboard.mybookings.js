import React, { useState, useEffect, useRef } from 'react';
import RiderNavbar from './rider.navbar';
import { FormGroup, FormControl, FormControlLabel, Switch, Typography, Grid, Button, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from '@material-ui/core';


function RiderDashboardBookings() {

    const [check,setCheck] = useState(false);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    useEffect(()=>{
        if(check){
            console.log("i am past bookings")
        }
        else{
            console.log("i am active bookings")
        }
    },[check])

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
    };
    const handleFilter = (e) => {
        console.log(e.target.id)
        
    }

    return (
        <>
            <RiderNavbar />
            <div className = "rider-bookings-container ml-lg-5 ml-md-4 ml-sm-3 mr-lg-5 mr-md-4 mr-sm-3">
                <div className = "rider-bookings-data-container">
                    <div className="rider-bookings-data-navbar " >
                        <div>
                            <Button
                                ref={anchorRef}
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={() => setOpen(prevOpen => !prevOpen)}
                            >
                                Filter
                            </Button>
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined}  transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList  id="menu-list-grow" >
                                        <MenuItem id="this month" onClick = {handleFilter}>this month August</MenuItem>
                                        <MenuItem id="last month" onClick = {handleFilter}>last month</MenuItem>
                                        <MenuItem id="all" onClick = {handleFilter}>all</MenuItem>
                                    </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                                </Grow>
                            )}
                            </Popper>
                        </div>
                        <div>
                            <FormGroup>
                                <Typography component="div">
                                    <Grid component="label" container alignItems="center" spacing={1}>
                                    <Grid item>Active</Grid>
                                    <Grid item>
                                        <Switch checked = {check} onChange={e => setCheck(!check)}   name="checkedC" />
                                    </Grid>
                                    <Grid item>Past</Grid>
                                    </Grid>
                                </Typography>
                            </FormGroup>
                        </div>
                    </div>
                    <div className = "rider-bookings-data-container-block">
                        <div id="ride" className = "rider-bookings-data-list">
                            <div className = "rider-profile-date-block">
                                19 Aug 2020, 11:00pm
                            </div>
                            <div className = "rider-bookings-data-block">
                                <div className = "rider-booking-data-list-left">
                                    <div style={{minHeight:"80%",minWidth:"80%",maxHeight:"80%",maxWidth:"80%"}}>
                                        <img src="https://cdn.videoplasty.com/vector/car-icon-vector-4877-1280x720.jpg?1574053690" style={{minHeight:"100%",maxHeight:"100%",minWidth:"100%",maxWidth:"100%"}}  />
                                    </div>
                                </div>
                                <div className = "rider-booking-data-list-middle">
                                    <div className = "rider-booking-middle-top">Duration: 2 hr | Distance: 10km</div>
                                    <div className = "rider-booking-middle-middle"></div>
                                    <div className = "rider-booking-middle-bottom">
                                        <div className = "rider-booking-middle-bottom-left">kukatpally</div>
                                        <div className = "rider-booking-middle-bottom-right" >jntu</div>
                                    </div>
                                </div>
                                <div className = "rider-booking-data-list-right"></div>
                            </div>
                        </div>
                        <div id="rental" className = "rider-bookings-data-list">
                            <div className = "rider-profile-date-block">
                                19 Aug 2020, 11:00pm
                            </div>
                            <div className = "rider-bookings-data-block">
                                <div  className = "rider-booking-data-list-left">
                                    <div style={{minHeight:"80%",minWidth:"80%",maxHeight:"80%",maxWidth:"80%"}}>
                                        <img src="https://cdn.videoplasty.com/vector/car-icon-vector-4877-1280x720.jpg?1574053690" style={{minHeight:"100%",maxHeight:"100%",minWidth:"100%",maxWidth:"100%"}}  />
                                    </div>
                                </div>
                                <div style={{display:"flex",flexDirection:"row",alignItems:"center",minWidth:"60%",width:"60%",height:"100%"}}>
                                    <div style={{minWidth:"70%",width:"70%",minHeight:"100%",height:"100%",fontSize:20,fontWeight:500,display:"flex",flexDirection:"column"}}>
                                        <div style={{minHeight:"50%",minWidth:"100%",display:"flex",alignItems:"center",fontSize:15,fontWeight:500}}>
                                            Maruti suzuki swift
                                        </div>
                                        <div style={{minHeight:"50%",minWidth:"100%",display:"flex",alignItems:"center",fontSize:15,fontWeight:500}}>
                                            1 month package
                                        </div>
                                    </div>
                                    <div style={{minWidth:"30%",width:"30%",height:"100%",minHeight:"100%",display:"flex",flexDirection:"column",}}>
                                        <div style={{minHeight:"30%",minWidth:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:400}}>
                                            km count
                                        </div>
                                        <div style={{minHeight:"70%",minWidth:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,fontWeight:700}}>
                                            500
                                        </div>
                                    </div>
                                </div>
                                <div className = "rider-booking-data-list-right"></div>
                            </div>
                        </div>
                        <div className = "rider-bookings-data-list"></div>
                        <div className = "rider-bookings-data-list"></div>
                        <div className = "rider-bookings-data-list"></div>

                        <div className = "rider-bookings-data-list"></div>
                        <div className = "rider-bookings-data-list"></div>
                        <div className = "rider-bookings-data-list"></div>
                    </div>

                    
                </div>

            </div>
        </>
    )
}

export default RiderDashboardBookings
