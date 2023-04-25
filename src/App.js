import { Route, Router, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/home";




function App() {
  return <>
  <Navbar/>
  <Routes>
    <Route path="/home" element={<Home/>}/>
  </Routes>
  </>
  
}

export default App;
