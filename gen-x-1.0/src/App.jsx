
import React, { useState, useEffect, useContext } from 'react';
import CustNormalButton from './Components/SmallComponents/NormalButtonComp';
import { LoadingContext } from "./Components/ContextComp/isLoadingCreateContext";
import "./App.css"
import Loading from './Fan_Anime/Loading';
import Welcome from './Fan_Anime/WelcomePage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import InitialMainPage from './Components/InitialMainPage';

function App() {
  const [getUserData, setGetUserData] = useState([]);
  const [editingUserDetails, setEditingUserDetails] = useState(null);
  const {isLoading} = useContext(LoadingContext)
  console.log("@@@ isLoading app" , isLoading );
  
  // Load products from localStorage on initial load
  useEffect(() => {
    const savedUserDetails = JSON.parse(localStorage.getItem('getUserData')) || [];
    setGetUserData(savedUserDetails);
  }, []);

  // Save products to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem('getUserData', JSON.stringify(getUserData));
  }, [getUserData]);

  const addOrUpdateProduct = (userDetail) => {
    if (editingUserDetails) {
      // Update existing product
      const updatedProducts = getUserData.map(p => 
        // (p.id === editingProduct.id ? product : p)
        {

          if (p.id === getUserData.id) {
            console.log("@@@ userDetail" , userDetail);
            
            return userDetail
          }
          else{
            console.log("@@@ product with p" , p);
            return p
          }
        }
      );
      setGetUserData(updatedProducts);
    } else {
      // Add new product with a unique ID
      setGetUserData([...getUserData, { ...userDetail, id: Date.now() }]);
    }
    setEditingUserDetails(null);
  };

  const deleteProduct = (id) => {
    const updatedProducts = getUserData.filter(product => product.id !== id);
    setGetUserData(updatedProducts);
  };

  const editProduct = (product) => {
    setEditingUserDetails(product);
  };


  return (
    
    <>

  
      <div className='AppMainCardComp'>

      {
        isLoading === false ?
      ( <>
      < CustNormalButton />
      <Welcome/>
      </>   ) : ( <Loading isLoading={isLoading}/> )
      }
      </div>
      
      {/* <Routes>
      <Route
          path="/main"
          element={
           <InitialMainPage />
          }
        />
         </Routes> */}
    </>
  );
}

export default App;
