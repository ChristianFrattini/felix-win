import { createContext, useState } from "react";

export const enableButtonContext=createContext();

const EnableButtonProvider=({children})=>{

    const [buttonEnabled, setButtonEnabled]=useState(true)

    const enableButton=()=>{
        setButtonEnabled(false)
    }


    return(
        <enableButtonContext.Provider value={{buttonEnabled, enableButton}}>{children}</enableButtonContext.Provider>
    )
}
export default EnableButtonProvider