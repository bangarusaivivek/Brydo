import React,{ useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {faTimesCircle, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function RiderActivate() {
    const history = useHistory();
    // console.log(typeof history.location.pathname); 
    const path = history.location.pathname;
    console.log(path)
    const [message,setMessage] = useState("");
    const [isSuccess,setSuccess] = useState(false);

    const displayMessage = async () => {
        try{
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const res = await axios.post(`http://localhost:5000${path}`);
            
            // console.log("hello1");
            setMessage(res.data.message)
            setSuccess(res.data.success)
        }
        catch(err){
            console.log(err.response.data);
            setMessage(err.response.data.message);
            setSuccess(err.response.data.success);
        }
    }

    // console.log(message)
    useEffect(()=> {
        displayMessage();
    },[])

    return (
        <>
        <div className = "sticky-top"  style={{minHeight:60,backgroundColor:"orange"}}></div>
        <div className = "rider-signup-container" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className = "message-container" >
                <div style={{minHeight:125,display:"flex",justifyContent:"center",alignItems:"center",}}>
                    
                    { isSuccess && <FontAwesomeIcon icon = {faCheckCircle} style={{color:"green"}} size="6x" /> }
                    { !isSuccess && <FontAwesomeIcon icon = {faTimesCircle} style={{color:"red"}} size="6x" /> }
                </div>
                <div style={{minHeight:100,maxHeight:100,display:"flex",justifyContent:"center",alignItems:"center",fontSize:25, 
                    fontWeight:700,padding:10}}>
                        {message}
                </div>
                <div style={{minHeight:100,maxHeight:100,display:"flex",justifyContent:"center",alignItems:"center",fontSize:25, 
                    fontWeight:500,padding:10}}>
                        {isSuccess && "please click below to login"}
                        {!isSuccess && "please click below to signup again"}
                </div>
                <div style={{minHeight:50,maxHeight:50,display:"flex",justifyContent:"center",alignItems:"center",fontSize:20, 
                    fontWeight:500,padding:10}}>
                    {isSuccess && <button onClick = {() => history.push("/ridersignin")}>Login</button>}
                    {!isSuccess && <button onClick = {() => history.push("/ridersignup")}>Signup</button>}
                </div>
                
            </div>
            
        </div>
        </>
    )
}

export default RiderActivate;