import React, { createContext, useState } from "react";

export const LoadingContext = createContext()

export const LoadingProvider = ({children}) =>{
const [isLoading , setIsLoading] = useState(false)

const toggleLoading = () =>{
    setIsLoading((prev)=> prev === true ? false : true )
}
return(
    <LoadingContext.Provider value={{ isLoading , toggleLoading}} >
        {children}
    </LoadingContext.Provider>
)
}
