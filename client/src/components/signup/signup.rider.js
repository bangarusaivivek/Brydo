import React, { useContext } from 'react'
import { RiderSignupFormValidator } from '../../validators/signup.form.validator'
import UserStateProvider, { UserState } from '../../contexts/UserState'

function RiderSignup({history}) {
    const val = useContext(UserState);
    console.log(val);
    return (
        <UserStateProvider>
        <div className = "sticky-top"  style={{minHeight:60,backgroundColor:"orange"}}></div>

        <div className="rider-signup-container" >
            <div className="signup-data-container">
                <div className="signup-header"></div>
                <>
                    <RiderSignupFormValidator history={history} />
                </>
            </div>
           
            
        </div>
        </UserStateProvider>
    )
}

export default RiderSignup
