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
import ShopKeeperSignInAndSignUp from "./components/Shopkeeper/SignInAndSignUp/signInAndSignUp";
import AdminHome from "./components/Admin/AdminHome/adminHome";
import AdminForgotPassword from "./components/Admin/AdminHome/AdminForgot/AdminForgot";
import Shop from "./components/Admin/shopList/shopList";
import Shopkeeper from "./components/Admin/AdminHome/ShopkeeperList/shopkeeper";
import Customer from "./components/Admin/AdminHome/customerList/customer";
import Mechanic from "./components/Admin/AdminHome/mechanicList/mechanic";
function App() {
  return <>

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/home" element={<CustomerHome />} />
      <Route path="/verifyOtp" element={<ProtectedRoute><VerifyPassword /></ProtectedRoute>} />
      <Route path="/setPassword" element={<ProtectedRoute><SetPassword /></ProtectedRoute>} />
      <Route path="/selectCity" element={<ProtectedRoute> <SelectCity /></ProtectedRoute>} />
      <Route path="/customerBookingHistory" element={<ProtectedRoute><CustomerBookingHistory /></ProtectedRoute>} />
      <Route path="/customerHome" element={<ProtectedRoute><CustomerHome /></ProtectedRoute>} />
      <Route path="/viewBookingHistory" element={<ProtectedRoute><ViewBookingHistory /></ProtectedRoute>} />
      <Route path="/customerViewShop" element={<ViewShop />} />

      {/* -----------------------------------------shop keeper functionality---------------- */}
      <Route path="/shopkeeperForgotPassword" element={<ShopkeeperForgotPassword />} />
      <Route path="/shopkeeperHome" element={<ShopkeeperHome />} />
      <Route path="/shopkeeperSigninSignup" element={<ShopKeeperSignInAndSignUp />} />


      {/* ----admin */}
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/adminForgotPassword" element={<AdminForgotPassword />} />

      <Route path="/shopList" element={<Shop />} />
      <Route path="/shopkeeperList" element={<Shopkeeper />} />
      <Route path="/customerList" element={<Customer />} />
      <Route path="/mechanicList" element={<Mechanic />} />

    </Routes>
  </>

}

export default App;
