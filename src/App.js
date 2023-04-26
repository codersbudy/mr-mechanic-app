import { Route, Router, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";
import SelectCity from "./components/selectCity/SelectCity";
import Booking from "./components/shopkeeper/bookingHistory/bookingHistoy";
import ViewHistory from "./components/shopkeeper/viewHistory/viewHistory";
import CustomerSignUP from "./components/customer/CustomerSignUp/customersignup";
import ShopkeeperSignUP from "./components/shopkeeper/shopkeeperSignUp/ShopkeeperSignp";
import ShopkeeperSignin from "./components/shopkeeper/shopkeeperSignIn/ShopkeeperSignIn";

function App() {
  return <>
      <CustomerSignUP/>
      <ShopkeeperSignUP/>
      <ShopkeeperSignin/>
      <Navbar/>
      <SelectCity/> 
      {/* <Booking/> */}
      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
 
  {/* <ViewHistory/> */}
  </>
}

export default App;
