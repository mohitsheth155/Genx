import React, { useContext } from "react";
import "./CustomNormalButtonCompStyle1.css"
import { LoadingContext } from "../ContextComp/isLoadingCreateContext";
// import { LoadingProvider } from "../ContextComp/isLoadingCreateContext";
import Loading from "../../Fan_Anime/Loading";
// import { LoadingContext } from "../ContextComp/isLoadingCreateContext";
const CustNormalButton = () =>{

    const {isLoading , toggleLoading} = useContext(LoadingContext)

    if (isLoading) {
        console.log("@@@ loaded ");
        
    } else {
        
        console.log("@@@ not loaded ");
    }
    
    return(
    <>
        <button onClick={toggleLoading}  className="CustomNormalButtonComp1">Click Me</button>
    </>
    )

}

export default CustNormalButton