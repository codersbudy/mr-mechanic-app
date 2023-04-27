import { useSelector } from "react-redux";

function ProtectedRoute({children}){
     const {currentCustomer}=useSelector(state=>state.customer);
   
}