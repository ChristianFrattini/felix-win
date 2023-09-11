import { createContext, useState } from "react";

export const enableButtonContext=createContext();

const EnableButtonProvider=({children})=>{

    const [buttonEnabled, setButtonEnabled]=useState(true)

    const enableButton=()=>{
        setButtonEnabled(false)
    }

    const disableButton=()=>{
        setButtonEnabled(true)
    }


    return(
        <enableButtonContext.Provider value={{buttonEnabled, enableButton, disableButton}}>{children}</enableButtonContext.Provider>
    )
}
export default EnableButtonProvider