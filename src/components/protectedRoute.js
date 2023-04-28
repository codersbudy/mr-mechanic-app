import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({children}){
     const {currentCustomer}=useSelector(state=>state.customer);
     if(!currentCustomer)
        return <Navigate to='/home'/>;
    return children;
}
export default ProtectedRoute;