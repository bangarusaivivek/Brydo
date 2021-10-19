import React,{useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function SignInRiderAuthPage({history}) {
    console.log(history.location.search)
    const query = new URLSearchParams(history.location.search);
    const mobno = query.get('mobile')
    
    const [password,setPassword] = useState("");
    const [mobile,setMobile] = useState(+mobno);
    const [success,setSuccess] = useState();
    const [error,setError] = useState();
    // console.log(typeof mobile)
    function handleClick(e){
        e.preventDefault()
        checkRider();
    }

    const checkRider = async () => {
        try{
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            const obj = {
                mobile,
                password
            }
            const res = await axios.post('http://localhost:5000/signinRiderAuth',obj,config);
            console.log(res.data);
            setSuccess(res.data.success);

        }
        catch(err){
            console.log(err.response.data);
            setSuccess(err.response.data.success);
            setError(err.response.data.error);
        }
        
    }
    useEffect(()=> {
        console.log("effect")
        if(success){
            history.push(`/riderdashboard`);
        }
        else{
            console.log(typeof error)
            if(error === "password"){
                toast.error("password is incorrect", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            else if(error === "server"){
                toast.error("Server error, Please try again", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    },[success,error])
    return (
        <>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <div className = "sticky-top"  style={{minHeight:64,backgroundColor:"orange"}}></div>
        <div className="signin-auth-container ml-lg-5 ml-md-4 ml-sm-3 mr-lg-5 mr-md-4 mr-sm-3">
                <div className="signin-auth-header">
                    <Link to="/">Homepage</Link>
                    <Link to="/riderlogin">Return to Login</Link>
                </div>
                <form className="signin-auth-form-container" onSubmit = {handleClick}>
                    <div className="rider-form-logo">logo</div>
                    <div className="signin-auth-form-block">
                        <input style={{minHeight:"35px"}} type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                        <div className="forgetlink"><Link style={{fontSize:12,fontWeight:500}} to="">forgot password?</Link></div>
                    </div>
                    <div className="" style={{textAlign:"center"}}>
                        <button style={{ width:100}} >Login</button>
                    </div>
                    <div className="signin-auth-form-block">
                        <input style={{minHeight:"35px"}} type="tel" placeholder="otp"></input>
                        <div className="forgetlink"><Link style={{fontSize:12,fontWeight:500}} to="">Resend otp</Link></div>
                    </div>
                    
                </form>
            
        </div>
        </>
    )
}

export default SignInRiderAuthPage
