import { createContext, useEffect, useState, useReducer } from "react";


export const UserDetailsContext=createContext();

const UserDetailsProvider=({children})=>{
    const [userDetails, setUserDetails]=useState({})

    const updateDetails=(details)=>{
        setUserDetails(details)
        console.log(details)
    }
    return(
        <UserDetailsContext.Provider value= {{userDetails, updateDetails}}>
            {children}
        </UserDetailsContext.Provider>
    )
}

export default UserDetailsProvider