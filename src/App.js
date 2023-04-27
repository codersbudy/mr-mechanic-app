
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";
import SelectCity from "./components/selectCity/SelectCity";
import Booking from "./components/shopkeeper/bookingHistory/bookingHistoy";
import ViewHistory from "./components/shopkeeper/viewHistory/viewHistory";
import CustomerSignUP from "./components/customer/CustomerSignUp/customersignup";
import ShopkeeperSignin from "./components/shopkeeper/shopkeeperSignIn/ShopkeeperSignIn";
import ForgotPassword from "./components/customer/ForgotPassword/ForgotPassword";
import ShopkeeperSignUP from "./components/shopkeeper/shopkeeperSignUp/ShopkeeperSignup";

function App() {
  return <>     
        <CustomerSignUP/>
        <Navbar/>
<ShopkeeperSignUP/>
      <ShopkeeperSignin/>
      
      <SelectCity/>  */
      {/* <Booking/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      </Routes>
 
  {/* <ViewHistory/> */}
</>
}

export default App;
