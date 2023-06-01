import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const { currentShopkeeper } = useSelector((state) => state.shopkeeper);
    const { currentCustomer } = useSelector(state => state.customer);
    const { currentAdmin } = useSelector(state => state.admin);
    if (currentCustomer || currentShopkeeper || currentAdmin)
        return children
    return <Navigate to="/" />
}
export default ProtectedRoute;