import React from "react";

function Footer() {
console.log("footer");

    return (
        <>


        <div className="FooterBox" style={{
            display : "flex",
            justifyContent : 'center',
            alignItems : 'center' , 
            alignContent : 'center',
            width : '100vw',
            height : '10vh',
            backgroundColor : 'black',
            color : 'red' 
        }}>

        <h2>Created By Laxus</h2>
        </div>

        </>

)

    
}

export default Footer;