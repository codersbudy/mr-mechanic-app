import { useEffect } from "react";
import CustomerNavigation from "../Navigation/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchShop } from "../../../redux-config/shopSlice";

function CustomerHome(){
  const dispatch=useDispatch();
  alert("inner customer home");
   const {shopList}=useSelector(state=>state.shop);
   console.log("inner customer home component"+shopList);
   useEffect(()=>{
      dispatch(fetchShop());  
   },[]);
    return <>  
      <CustomerNavigation/>

      
    </> 

}

export default CustomerHome;
