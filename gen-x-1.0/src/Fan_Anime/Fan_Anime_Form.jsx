// import React, { useState } from "react";

// const Form_Anime = () => {
//   const [comments, setComments] = useState([]); // Use an array for storing multiple comments
//   const [currentComment, setCurrentComment] = useState(
//     { 
//         userName: "",
//         animeTitle : "" ,
//         animeComment : "",
//          animeDate : new Date().toLocaleString()
//      }
// );

//   const onChangeVALUE = (e) => {
//     const { name, value } = e.target;
//     setCurrentComment({ ...currentComment, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     setComments([...comments, currentComment]); // Add current comment to comments array
//     setCurrentComment({  
//          userName: "",
//         animeTitle : "" ,
//         animeComment : "" ,
//         animeDate : ""
//     }); // Reset input field after submission
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="userName"
//           value={currentComment.userName}
//           onChange={onChangeVALUE}
//           placeholder="User Name"
//           required
//         />
//         <input
//           name="animeTitle"
//           value={currentComment.animeTitle}
//           onChange={onChangeVALUE}
//           placeholder="Anime Title"
//           required
//         />
//         <input
//           name="animeComment"
//           value={currentComment.animeComment}
//           onChange={onChangeVALUE}
//           placeholder="Anime Comment"
//           required
//         />

       
//         <button type="submit">Submit</button>
//       </form>
      
//       {/* Display all comments */}
//       <h2>Comments:</h2>
//       <ul>
//         {comments.map((comment, index) => (
//             <ul key={index}>
//                 <li >{comment.userName}</li>
//                 <li >{comment.animeTitle}</li>
//                 <li >{comment.animeComment}</li>
//                 <li >{comment.animeDate}</li>
//             </ul>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Form_Anime;

import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import imageCompression from "browser-image-compression";

const Form_Anime = () => {
  const [submittedData, setSubmittedData] = useState([]);
  // const fileInputRef = useRef(null); // Create a ref for the file input

  // Load saved data from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("submittedData")) || [];
    setSubmittedData(savedData);
  }, []);

  // Save data to localStorage whenever submittedData changes
  useEffect(() => {
    localStorage.setItem("submittedData", JSON.stringify(submittedData));
  }, [submittedData]);

  // Convert file to Base64 with compression
  // const handleFileUpload = async (file) => {
  //   const options = {
  //     maxSizeMB: 0.5, // Reduce image size to be under 0.5MB
  //     maxWidthOrHeight: 800,
  //     useWebWorker: true,
  //   };
  //   try {
  //     const compressedFile = await imageCompression(file, options);
  //     const reader = new FileReader();
  //     return new Promise((resolve, reject) => {
  //       reader.onload = () => resolve(reader.result);
  //       reader.onerror = reject;
  //       reader.readAsDataURL(compressedFile);
  //     });
  //   } catch (error) {
  //     console.error("Image compression error:", error);
  //     return null;
  //   }
  // };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().min(3, "Must be at least 3 characters").required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    title: Yup.string().min(5, "Title must be at least 5 characters").required("Title is required"),
  });

  // Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    const currentDate = new Date().toLocaleString();
    // let base64Image = null;

    // if (values.image) {
    //   base64Image = await handleFileUpload(values.image);
    // }

    const formData = {
      ...values,
      // image: base64Image,
      date: currentDate,
      id: new Date().getTime(),
    };

    setSubmittedData((prevData) => [...prevData, formData]); // Add new entry
    resetForm(); // Reset form fields
    // if (fileInputRef.current) {
    //   fileInputRef.current.value = ""; // Clear the file input value
    // }
  };

  // Reset form and storage
  const handleReset = () => {
    setSubmittedData([]); // Clear state
    localStorage.removeItem("submittedData"); // Clear localStorage
    // if (fileInputRef.current) {
    //   fileInputRef.current.value = ""; // Clear the file input value
    // }
  };

  return (
    <div>
      <h2>Signup Form</h2>
      <Formik
        initialValues={{ username: "", email: "", title: "", 
          // image: null
         }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {/* {({ setFieldValue }) => ( */}
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>
            <div>
              <label htmlFor="title">Title</label>
              <Field name="title" type="text" />
              <ErrorMessage name="title" component="div" style={{ color: "red" }} />
            </div>
            {/* <div>
              <label htmlFor="image">Upload Image</label>
              <input
                ref={fileInputRef} // Assign the ref to the file input
                name="image"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  setFieldValue("image", file);
                }}
              />
              <ErrorMessage name="image" component="div" style={{ color: "red" }} />
            </div> */}
            <button type="submit">Submit</button>
          </Form>
        {/* )} */}
      </Formik>

      {/* Reset Button */}
      <button onClick={handleReset} style={{ marginTop: "20px", color: "red" }}>
        Reset All
      </button>

      {/* Display Submitted Data */}
      <div>
        <h3>Submitted Data</h3>
        {submittedData.map((entry) => (
          <div key={entry.id} style={{ borderBottom: "1px solid #ccc", marginTop: "10px", paddingBottom: "10px" }}>
            <p><strong>Username:</strong> {entry.username}</p>
            <p><strong>Email:</strong> {entry.email}</p>
            <p><strong>Title:</strong> {entry.title}</p>
            <p><strong>Date:</strong> {entry.date}</p>
            {/* {entry.image && (
              <div>
                <strong>Uploaded Image:</strong>
                <img src={entry.image} alt="Uploaded" width="200" style={{ marginTop: "10px" }} />
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};



export default Form_Anime;
