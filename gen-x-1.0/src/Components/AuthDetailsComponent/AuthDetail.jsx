import { useEffect, useState } from "react";

import {auth} from "../../../src/firebaseConfig"

import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthDetailComp = () =>{
    const [user , setUser] = useState("")

    useEffect(()=>{
        const unscubscribe =  onAuthStateChanged(auth , (currentUser) =>{
            setUser(currentUser)
        })
        return () =>
            unscubscribe() //cleanup sbscription on mount
    }, [])

        const handleSignOut = () =>{
            signOut(auth)
                .then(()=>{
                    alert("signed out successfully")
                })
                .catch((error)=>{
                console.error(error.message)
                    
                })
        }

    return (

        <>
            <div>
                {user ? (
                    <>
                    
                    <h2>Welcome  {user.email} </h2>
                   <button onClick={handleSignOut}>Sign out</button>
                    </>
                ) : (
                    <h3>User is Not Loged In</h3>
                )
            }
            </div>
        </>
    )
}

export default AuthDetailComp;