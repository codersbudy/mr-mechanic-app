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
import ShopList from "./components/Admin/shopList/shopList";
import ShopkeeperList from "./components/Admin/AdminHome/ShopkeeperList/shopkeeper";
import CustomerList from "./components/Admin/AdminHome/customerList/customer";
import MechanicList from "./components/Admin/AdminHome/mechanicList/mechanic";
import ViewShopDetails from "./components/Admin/viewShopDetails/viewShopDetails";
import BookingList from "./components/Admin/AdminHome/BookingList/BookingList";
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
      <Route path="/admin" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
      <Route path="/adminForgotPassword" element={<AdminForgotPassword />} />

      <Route path="/shopList" element={<ProtectedRoute><ShopList /></ProtectedRoute>} />
      <Route path="/shopkeeperList" element={<ProtectedRoute><ShopkeeperList /></ProtectedRoute>} />
      <Route path="/customerList" element={<ProtectedRoute><CustomerList /></ProtectedRoute>} />
      <Route path="/mechanicList" element={<ProtectedRoute><MechanicList /></ProtectedRoute>} />
      <Route path="/viewShopDetails" element={<ProtectedRoute><ViewShopDetails /></ProtectedRoute>} />
      <Route path="/bookingList" element={<BookingList />} />
    </Routes>
  </>

}

export default App;
