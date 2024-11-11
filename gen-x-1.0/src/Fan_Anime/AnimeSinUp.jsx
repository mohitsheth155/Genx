import { Formik , Form , Field , ErrorMessage} from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup"

const SignUpPage = () =>{
    const [isSignUp , setIsSignUp] = useState([])


    useEffect(()=>{
        // if data is present the fetch from local storage and set in signup process 
        const saveData = JSON.parse(localStorage.getItem("AinmeUserData")) || []
        setIsSignUp(saveData)
    },[])
    useEffect(()=>{
        // if data is not present the store in local storage 
        localStorage.setItem("AinmeUserData" , JSON.stringify(isSignUp))
    }, [isSignUp])
    
    const validation = Yup.object({
        userName : Yup.string().min( 5 , "username atleast should contain 5 char").required("User name cannot be Empty"),
        userPassword : Yup.string().min(5,"passwors should be atleast 5 char").required("Password cannot be empty")
    })



    const handleSubmit =  async (values,{resetForm}) =>{
        console.log("@@@ clickedd");
        
        const date = new Date().toLocaleString()

        const formData = {
            ...values,
            date : date,
            id : new Date().getTime()
        }

        const valueData = {
            ...values,
            date : date,
        }
        const response = await axios.post('http://localhost:5000/api/items/post', valueData);

        setIsSignUp((prevData) => [...prevData , formData])
        resetForm()

    }

    const restFormPage = async() => {
        setIsSignUp([])
        localStorage.removeItem("AinmeUserData")
        const response1 = await axios.delete('http://localhost:5000/api/items/delete');
    }

    return(
        <>
        <h2>Anime Sign Up Page</h2>
        <Formik 
        initialValues={{
            userName:'',
            userPassword:''
        }}
        
        validationSchema={validation}
        onSubmit={handleSubmit}
        > 
        <Form>
            <div>
                <label htmlFor="userName">User Name</label>
                <Field name="userName" type="text"></Field>
                <ErrorMessage name="userName"component="div" style={{
                    color : "red"
                }}></ErrorMessage>
            </div>

            <div>
                <label htmlFor="userPassword">User Password</label>
                <Field name="userPassword" type="text"></Field>
                <ErrorMessage name="userPassword" component='div' style={{color : 'red'}}></ErrorMessage>

            </div>
            <button type="submit">Submit</button>
        </Form>
        </Formik>
            
            <button onClick={restFormPage}>Reset</button>

            <div>
                <h2>User Data</h2>
                {isSignUp.map((data)=>(
                    <div key={data.id} style={{borderBottom : "2px solid black"}}>
                        <p><strong>Username:</strong> {data.userName}</p>
                        <p><strong>UserPassword:</strong> ⁕ ⁕ ⁕ ⁕</p>
                        <p><strong>CurrentDate:</strong> {data.date}</p>

                    </div>
                ))}
            </div>
        </>
    )

}

export default SignUpPage