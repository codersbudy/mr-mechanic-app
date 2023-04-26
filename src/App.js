import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home"
import ForgotPassword from "./components/customer/ForgotPassword/ForgotPassword";
import VerifyPassword from "./components/customer/verifyPassword/VerifyPassword";
import SetPassword from "./components/customer/SetPassword/SetPassword";
function App() {
  return <>
  <Navbar/> 
 <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/forgotPassword" element={<ForgotPassword/>} />
     <Route path="/home" element={<Home/>}/> 
    <Route path="/verifyOtp" element={<VerifyPassword/>} /> 
    <Route path="/setPassword" element={<SetPassword/>}/>
   
   
  </Routes> 
  </>
  
}

export default App;
