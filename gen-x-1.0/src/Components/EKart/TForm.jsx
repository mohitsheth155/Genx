import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TForm = (onSubmit , UserInitialData) =>{
    const [getUserData , setGetUserData] = useState({
        userName : "",
        userPassword : ""
    })

    const navigate = useNavigate()

    useEffect(()=>{
        if (UserInitialData) {
            setGetUserData(UserInitialData)
        }
    }, [UserInitialData])

    const handleChange = (e) => {
        const {name , value} = e.target
        setGetUserData({...getUserData , [name] : value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit(getUserData)
        navigate("/info")
    }    

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name = "userName"
                placeholder="User Name"
                value={getUserData.userName}
                onChange={handleChange}
                required
            />
            <input 
                name = "userPassword"
                placeholder="User Password"
                value={getUserData.userPassword}
                onChange={handleChange}
                required
            />
         <button type="submit">{UserInitialData ? 'Update' : 'Add'} User Details</button>

        </form>
    )

}

export default TForm