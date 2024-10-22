import { useState } from "react";

import {auth} from "../../../src/firebaseConfig"

import {createUserWithEmailAndPassword } from "firebase/auth"

const SignUp = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [error , setError] = useState(null)

    const handleSignUp = async(e) =>{
        e.preventDefault();
        try {
            await
            createUserWithEmailAndPassword(auth , email , password)// it will create new user takking paramerter as auth , email and password
            alert("user registered successfully")    
        } catch (error) {
            setError(error)
        }

    }

    return (
<>
        <div>
            <h2>Sign-Up</h2>
            <form onSubmit={handleSignUp}  >
            <input type="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
            <button type="submit">Sign Up</button>
            </form>
            {error && <p>{error}</p> }
        </div>

</>

    )


}


export default SignUp;