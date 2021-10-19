import React,{ useState, useEffect, createContext } from 'react';

export const UserState = createContext("hello");

function UserStateProvider(props) {

    return (
        <UserState.Provider value={{name:"hello"}}>
            {props.children}
        </UserState.Provider>
    )
}

export default UserStateProvider
