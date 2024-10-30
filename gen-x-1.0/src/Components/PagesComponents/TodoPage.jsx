import React from "react";
import { useNavigate } from 'react-router-dom';

function TodoCard(){
    const navigate = useNavigate();

    const handleClickdigi = () => {
      navigate('/digi');
    };
    const handleClickHome = () => {
      navigate('/');
    };
    return (
        <>
           <h1>Todo page</h1> 
           <button onClick={handleClickdigi}>Digi</button>
           <button onClick={handleClickHome}>Home</button>
        </>
    )
}

export default TodoCard