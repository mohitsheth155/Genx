import React from "react";
import { useNavigate } from 'react-router-dom';


function DigitalCard(){
    const navigate = useNavigate();
     const handleClicktodo = () => {
      navigate('/todo');
    };
    const handleClickHome = () => {
        navigate('/');
      };
    return (
        <>
            <h1>Digi Watch</h1>
            <button onClick={handleClicktodo}>Todo</button>
            <button onClick={handleClickHome}>Home</button>
          </>
    )
}

export default DigitalCard