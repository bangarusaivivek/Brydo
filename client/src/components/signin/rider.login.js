import React,{useState} from 'react'

function RiderLogin() {
    const height = window.offsetHeight;
    // console.log(height)
    const [number,setNumber] = useState("");
    function handleClick(e){
        e.preventDefault()
        console.log(typeof number)
        setNumber("")
        return
    }

    return (
        <div className="rider-login-page"  >
            <div className="rider-login-form-container">
                <div className="rider-login-form-header">
                    <div>Homepage</div>
                    <div>Login as Driver</div>
                </div>
                <div className= "rider-login-form-body">
                    <div className="rider-login-form-bodyContainer">

                        <div className="rider-form-logo">logo</div>
                        <form className="rider-form-data" onSubmit={handleClick}>
                        
                            <div style={{height: 100}}>Enter your phone number</div>
                            <div className="rider-login-number">
                            
                                <div className="country-code">+91</div>
                                <input className="rider-phonenumber" type="tel" placeholder="Phone number" value= {number}  onChange={e => setNumber(e.target.value)} />
                                    
                            </div>
                            <button style={{width:100}}>Next</button>
                        
                        </form>
                    </div>
                </div>
            </div>
            <div className="rider-login-container"></div>
        </div>
    )
}

export default RiderLogin
