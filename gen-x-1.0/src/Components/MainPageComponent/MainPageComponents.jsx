import React from "react";
import LoadingSpinner from "../LoadingComponent/LoadingSpinner";
import Navbar from "../NavigationComponent/NavBar";
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import TodoCard from "../PagesComponents/TodoPage";
// import DigitalCard from "../PagesComponents/DigitalWatch";



function MainPageComponent(props) {
    const navigate = useNavigate();
    console.log("check data" , props.name)
    const handleClicktodo = () => {
      navigate('/todo');
    };
    const handleClickdigi = () => {
      navigate('/digi');
    };
    return  <>
     {/* <LoadingSpinner/> */}
     {/* <Navbar /> */}


     <h1>Home Page</h1>
     <button onClick={handleClicktodo}>Todo</button>
      <button onClick={handleClickdigi}>Digi</button>
    </>
} 

export default MainPageComponent