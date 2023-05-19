import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home"
import ForgotPassword from "./components/customer/ForgotPassword/ForgotPassword";
import VerifyPassword from "./components/customer/verifyPassword/VerifyPassword";
import SetPassword from "./components/customer/SetPassword/SetPassword";
import SelectCity from "./components/customer/SelectCity/selectcity";
import ProtectedRoute from "./components/protectedRoute";
import CustomerBookingHistory from "./components/customer/BookingHistory/BookingHistory";
import CustomerHome from "./components/customer/CustomerHome/customerHome";
import ViewBookingHistory from "./components/customer/ViewBookingHistory/viewBookingHistory";
import 'react-toastify/dist/ReactToastify.css'
import ViewShop from "./components/customer/ViewShop/viewShop";
import CustomerProfileUpdate from "./components/customer/UpdateProfile/updateProfile";
import CustomerUpdateProfile from "./components/customer/UpdateProfile/updateProfile";
import ShopKeeperSignIn from "./components/Shopkeeper/SignInAndSignUp/signInAndSignUp";
import ShopkeeperForgotPassword from "./components/Shopkeeper/ForgotPassword/ForgotPassword";
import ShopkeeperHome from "./components/Shopkeeper/shopkeeperHome/shopkeeperHome";
import  io from "socket.io-client";
import { useEffect, useState } from "react";
import Map from "./components/Shopkeeper/map/Map";

const socket  = io("http://localhost:3000")
function App() {
  const [message, setMessage] = useState('Jagmohan');
  const [messages, setMessages] = useState([]);
  let index = 0;
  useEffect(() => {
    socket.on('chat message', (message) => {
      console.log(messages);
      console.log(message);
      messages.push(message)
      console.log(messages);
    });
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    socket.emit('chat message', message);
    setMessage(message+(index++));
  };

  return <>
  {/* // <center>
  // <button style={{position:"absolute",margin:"50px",zIndex:"1000"}} onClick={handleSendMessage}>Send Connection</button>
  // </center> */}
 <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/forgotPassword" element={<ForgotPassword/>} />
    <Route path="/home" element={<CustomerHome/>}/> 
    <Route path="/verifyOtp" element={<ProtectedRoute><VerifyPassword/></ProtectedRoute>} /> 
    <Route path="/setPassword" element={<ProtectedRoute><SetPassword/></ProtectedRoute>}/>
    <Route path="/selectCity" element={<ProtectedRoute> <SelectCity/></ProtectedRoute>}/>
    <Route path="/customerBookingHistory" element={<ProtectedRoute><CustomerBookingHistory/></ProtectedRoute>}/>
    <Route path="/customerHome" element={<ProtectedRoute><CustomerHome/></ProtectedRoute>}/>
    <Route path="/viewBookingHistory" element={<ProtectedRoute><ViewBookingHistory/></ProtectedRoute>}/>
    <Route path="/customerViewShop" element={<ProtectedRoute><ViewShop/></ProtectedRoute>} />

   {/* -----------------------------------------shop keeper functionality---------------- */}
   <Route path="/shopkeeperForgotPassword" element={<ShopkeeperForgotPassword/>}/>
   <Route path="/shopkeeperHome" element={<ShopkeeperHome/>}/>
   
  </Routes> 
  <Map/>
  </>
  
}

export default App;
