import React from 'react'
import { DriverSignupFormValidator } from '../../validators/signup.form.validator'

function DriverSignup({history}) {

    return (
        <div>
        <div className = "sticky-top"  style={{minHeight:60,backgroundColor:"orange"}}></div>

        <div className="rider-signup-container">
            <div className="signup-data-container">
                <div className="signup-header"></div>
                <>
                    <DriverSignupFormValidator history={history} />
                </>
            </div>
           
            
        </div>
        </div>
    )
}

export default DriverSignup

