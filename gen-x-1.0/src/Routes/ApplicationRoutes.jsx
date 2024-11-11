import React from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import InitialMainPage from "../Components/InitialMainPage";

const ApplicationRoutesComp = () =>{

    return(
        <Routes>
            <Route path="/" element={<InitialMainPage/>}/>
        </Routes>
    )
}

export default ApplicationRoutesComp