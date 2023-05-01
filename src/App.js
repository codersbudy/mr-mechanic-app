import { Route, Routes } from "react-router-dom";
// import ''
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home"
import ForgotPassword from "./components/customer/ForgotPassword/ForgotPassword";
import VerifyPassword from "./components/customer/verifyPassword/VerifyPassword";
import SetPassword from "./components/customer/SetPassword/SetPassword";
import SelectCity from "./components/customer/SelectCity/selectcity";
import ProtectedRoute from "./components/protectedRoute";
import CustomerBookingHistory from "./components/customer/BookingHistory/BookingHistory";
import CustomerNavigation from "./components/customer/Navigation/navigation";
import CustomerHome from "./components/customer/CustomerHome/customerHome";
import ViewBookingHistory from "./components/customer/ViewBookingHistory/viewBookingHistory";
import CustomerProfile from "./components/customer/Profile/profile";
import 'react-toastify/dist/ReactToastify.css'
import ViewShop from "./components/customer/ViewShop/viewShop";
// import CustomerProfileUpdate from "./components/customer/UpdateProfile/updateProfile";
import CustomerUpdateProfile from "./components/customer/UpdateProfile/updateProfile";
function App() {
  return <>
 {/* <CustomerNavigation/> */}
   {/* <CustomerBookingHistory/> */}
{/* export default shopkeeperSignIn; */}
  {/* <shopkeeperSignIn/> */}
  {/* <ViewBookingHistory/> */}
  {/* <CustomerProfile/> */}
  {/* <ViewShop/> */}

  {/* <CustomerNavigation/> */}
  <CustomerUpdateProfile/>
 <Routes>

    {/* <Route path="/" element={<Home/>}/> */}
    <Route path="/forgotPassword" element={<ForgotPassword/>} />
     <Route path="/home" element={<Home/>}/> 
    <Route path="/verifyOtp" element={<ProtectedRoute><VerifyPassword/></ProtectedRoute>} /> 
    <Route path="/setPassword" element={<ProtectedRoute><SetPassword/></ProtectedRoute>}/>
    <Route path="/selectCity" element={<ProtectedRoute> <SelectCity/></ProtectedRoute>}/>
    <Route path="/customerBookingHistory" element={<ProtectedRoute><CustomerBookingHistory/></ProtectedRoute>}/>
    <Route path="/customerHome" element={<ProtectedRoute><CustomerHome/></ProtectedRoute>}/>
    <Route path="/viewBookingHistory" element={<ProtectedRoute><ViewBookingHistory/></ProtectedRoute>}/>
    <Route path="/cusotmerProfile" element={<ProtectedRoute><CustomerProfile/></ProtectedRoute>}/>
   
   
  </Routes> 
  </>
  
}

export default App;
