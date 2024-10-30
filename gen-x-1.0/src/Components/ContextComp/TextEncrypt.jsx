import React, { createContext, useState }  from "react";

export const TextEncryptContexts = createContext()

export const TextEncryptProvider = ({children}) => {
const [isEncrypt , setIsEncrypt] = useState("encrypt")

const toggleEncrypt = () =>{
    setIsEncrypt((prev) => prev === "encrypt" ? "decrypt" : "encrypt")
}
    return (
       
        <TextEncryptContexts.Provider value={{ isEncrypt , toggleEncrypt }}>
        {children} 
        </TextEncryptContexts.Provider>
        
    
    )
}