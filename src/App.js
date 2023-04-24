import { Route, Routes } from "react-router-dom";
import LogIn from "./components/loginpage/logIn";
import Home from "./components/homepage/homepage";

function App() {
  return <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<LogIn/>} />
    <Route path="/forgetPassword" element={<forgetPassword/>}/>
  </Routes>
  </>
  
}

export default App;
