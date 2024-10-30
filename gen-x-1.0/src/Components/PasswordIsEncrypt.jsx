import React, { useContext } from "react";
import { TextEncryptContexts } from "./ContextComp/textEncrypt";




const EncryptPage = () => {
    const { isEncrypt , toggleEncrypt } = useContext(TextEncryptContexts)

    if (isEncrypt === "encrypt") {
        console.log("@@@ successfully encrypted");
        
    } else {
        console.log("@@@ successfully decrypted");
    }
    return(
        <>
        <button onClick={toggleEncrypt}> button </button>
        <h2>Test is : {isEncrypt ===  "encrypt"? "encrypt" : "decrypt" }</h2>
        <h3>Result : { isEncrypt ===  "encrypt"? "welcome to the futher" : "* * * * * *"}</h3>
        </>
        
    )
}
 
export default EncryptPage