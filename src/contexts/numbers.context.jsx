import { createContext, useState } from "react";


export const numbersContext=createContext();

const NumbersProvider=({children})=>{
    const [numbers, setNumbers]=useState({})

    const updateNumbers=(numbers)=>{
        setNumbers(numbers)
    }
    return(
        <numbersContext.Provider value= {{numbers, updateNumbers}}>
            {children}
        </numbersContext.Provider>
    )
}

export default NumbersProvider