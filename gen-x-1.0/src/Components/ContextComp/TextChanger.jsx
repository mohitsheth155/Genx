import React, { createContext, useState } from "react";

export const TextChanger = createContext()

export const TextChangerProvider = ({children}) => {
    const [isTextChange , setIsTextChange] = useState("small")
    const toggleText = () =>{
        setIsTextChange((prev)=> prev === "small" ? "big" : "small")
    }

    return (
        <TextChanger.Provider value={{isTextChange , toggleText}}>
            {children}
        </TextChanger.Provider>
    )
}

    

