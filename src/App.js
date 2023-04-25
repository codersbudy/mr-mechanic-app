import { Route, Router, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";
import SelectCity from "./components/customer/selectCity/SelectCity";

function App() {
  return <>
  <Navbar/>
  <SelectCity/>
  <Routes>
    <Route path="/home" element={<Home/>}/>
  </Routes>
 
  </>
}

export default App;
