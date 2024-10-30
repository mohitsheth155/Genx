import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPageComponent from "./Components/MainPageComponent/MainPageComponents"
import TodoCard from "./Components/PagesComponents/TodoPage"
import DigitalCard from "./Components/PagesComponents/DigitalWatch"
import Navbar from "./Components/NavigationComponent/NavBar"
import LoadingSpinner from "./Components/LoadingComponent/LoadingSpinner"
import {  useEffect, useState } from "react"

import { isEnable } from "../src/Components/GlobalComponents"
import Footer from "./Components/Footer"
import store from './Components/Redux/Store.jsx'
import { Provider } from "react-redux"
import Counter from "./Components/Redux/Counter.jsx"
import { ThemeProvider } from "./Components/ContextComp/ThemeContext.jsx"
import Home from "./Components/Home.jsx"
import { TextChangerProvider } from "./Components/ContextComp/TextChanger.jsx"
import IsTextStyleChanged from "./Components/IsTextChange.jsx"
import EncryptPage from "./Components/PasswordIsEncrypt.jsx"
import { TextEncryptProvider } from "./Components/ContextComp/textEncrypt.jsx"

// import SignUp from "./Components/SignUpComponents/SignUp"

// import LoginCom from "./Components/LoginComponent/Login"

// import AuthDetailComp from "./Components/AuthDetailsComponent/AuthDetail"



function App() {
  // const globalDataRead = isEnable()

  // const [isLoading , setIsloading] = useState(true)
  //   useEffect(() => {
      
  //  setTimeout(() => {
  //   console.log("after 2 seconds");
    
  //   setIsloading(false)
  // }, 2000);
  // } ,[]);
  return (
    <>
    {/* <h1>Firebase Authentication </h1> */}
    {/* <SignUp/> */}
    {/* <LoginCom/> */}
    {/* <AuthDetailComp/> */}
      {/* <MainPageComponent/> */}
      
      {/* <LoadingSpinner/> */}
     
      {/* <Navbar />
      
      <BrowserRouter>
     <Routes>
        <Route path="/" element={<MainPageComponent name={"hello"}/>} />
        <Route path="/todo" element={<TodoCard />} />
        <Route path="/digi" element={<DigitalCard />} />
     </Routes>
     </BrowserRouter> */}
     {/* {globalDataRead.footer ? ( <Footer /> ) : "" } */}

  
     {/* {isLoading ? console.log("loading started") : `loading completed ${globalDataRead.loading } , ${globalDataRead.dark}`} */}
<TextEncryptProvider>
  <EncryptPage/>
</TextEncryptProvider>
    </>
  )
}

export default App
