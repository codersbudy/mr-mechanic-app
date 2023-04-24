<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/loginpage/logIn";
import Home from "./components/homepage/homepage";

function App() {
  return <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<LogIn/>} />
    <Route path="/forgetPassword" element={<forgetPassword/>}/>
=======
import { Route, Router, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";




function App() {
  return <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
>>>>>>> 43381e976b870f8968b01488939978c7415e9367
  </Routes>
  </>
  
}

export default App;
