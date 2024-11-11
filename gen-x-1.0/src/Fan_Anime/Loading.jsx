import React, { useEffect, useRef, useState } from "react";
import "./LoadingStyle.css"
import loadingSound from "../../public/Loading.mp3"
import AudioPlayer from 'react-audio-player'
import { useNavigate } from "react-router-dom";
import InitialMainPage from "../Components/InitialMainPage";



const Loading = (props) => {    
    const [loading, setLoading] = useState("(^_^)")
    const [changing, setChanging] = useState(false)
    const navigate = useNavigate()
    // const buttonClick = (data) => {

        
    //     if (changing && data) {
    //         setChanging(false)
       
    //     } else {
    //         setChanging(true)
    //     }
    // }
    useEffect(() => {
        const interval = setTimeout(() => {
            setLoading((prevMessage) => (prevMessage === "(^_^)" ? "0 _ 0" : "(^_^)"));
            console.log("@@@ stop" , changing);
            // navigate("/main")
            // setChanging(true)
        }, 6000);
        // const interval = setInterval(() => {
        //     setLoading((prevMessage) => (prevMessage === "(^_^)" ? "0 _ 0" : "(^_^)"));

        // }, 6000);
        
        return () => clearTimeout(interval);
        // return () => clearInterval(interval);
    },[])
    return <>
    {
        // props.isLoading && (
            changing === false ? (
        <div className="mainComponent" >
             {props.isLoading === false ? ""
            //  {changing === false ? <button  onClick={buttonClick}  className="CustomNormalButtonComp">Click Me</button>
                : (
                    <div className="CardComponent">

                        <h5 className="TextStyle1">{loading} </h5>
                        <h5 className="TextStyle1">Loading.... </h5>

                    </div>
                )
            }
            {/* {changing &&
                 <AudioPlayer
                 src={loadingSound}
                 autoPlay={true}
                 loop={true}
                 muted={false}
                 preload="auto"
             />
            } */}
          {/* {  changing === false ? <Welcome /> : ""} */}
        </div>
        ) 
        : (<InitialMainPage/>)
    }
    </>
}

export default Loading