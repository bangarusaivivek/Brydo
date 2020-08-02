import React from 'react'
import { RiderSignupFormValidator } from '../../validators/signup.form.validator'

function RiderSignup({history}) {
    return (
        <div>
        <div className = "sticky-top"  style={{minHeight:60,backgroundColor:"orange"}}></div>

        <div className="rider-signup-container">
            <div className="signup-data-container">
                <div className="signup-header"></div>
                <>
                    <RiderSignupFormValidator history={history} />
                </>
            </div>
           
            
        </div>
        </div>
    )
}

export default RiderSignup
