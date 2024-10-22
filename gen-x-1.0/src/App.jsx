import MainPageComponent from "./Components/MainPageComponent/MainPageComponents"

import SignUp from "./Components/SignUpComponents/SignUp"

import LoginCom from "./Components/LoginComponent/Login"

import AuthDetailComp from "./Components/AuthDetailsComponent/AuthDetail"

function App() {


  return (
    <>
    <h1>Firebase Authentication </h1>
    <SignUp/>
    <LoginCom/>
    <AuthDetailComp/>
      {/* <MainPageComponent/> */}
    </>
  )
}

export default App
