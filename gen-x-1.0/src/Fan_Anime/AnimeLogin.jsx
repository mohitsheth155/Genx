

import { Formik , Form ,Field , ErrorMessage, validateYupSchema} from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup"
import axios from 'axios';

const AnimeLoginPage = () =>{

    const [isLogin , setIsLogin] = useState([])

   
  

    useEffect(()=>{
        const getUserData = JSON.parse(localStorage.getItem("AinmeUserData"))
      

        setIsLogin(getUserData)
    },[])

    const validation = Yup.object({
        userName: Yup.string().min(5 , " atleast 5 char").required("user name cannot be empty"),
        userPassword: Yup.string().min(5 , " atleast 5 char").required("user name cannot be empty"),
       
    })

    const handleSubmit = async (value , {resetForm}) =>{
        const formData = {
            ...value,
            id : new Date().getDate()
        }
        const response = await axios.get('http://localhost:5000/api/items/get');
        console.log("@@@ response.data" , response.data);
        
        const response1 = await axios.post('http://localhost:5000/api/items/post', value);

        setIsLogin((prev)=>[...prev , formData])
        resetForm()
    }


    return(
        <>
            <h2>Anime Login Page</h2>
            <Formik 
            initialValues={{
                userName : "",
                userPassword : ""
            }}
            validationSchema={validation}
            onSubmit={handleSubmit}
            >
                <Form>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <Field name="userName" type="text"></Field>
                    <ErrorMessage name="userName" component="div" style={{color : "red"}}>

                    </ErrorMessage>
                </div>
                <div>
                    <label htmlFor="userPassword">User Password</label>
                    <Field name="userPassword" type="text"></Field>
                    <ErrorMessage name="userPassword" component="div" style={{color : "red"}}>

                    </ErrorMessage>
                </div>
            <button type="submit">Verify</button>
                </Form>

            </Formik>
        </>
    )
}
  
export default AnimeLoginPage
