import { useEffect } from "react";
import CustomerNavigation from "../Navigation/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchShop } from "../../../redux-config/shopSlice";
import './customerHome.css'
function CustomerHome() {
  const dispatch=useDispatch();
  alert("inner customer home");
   const {shopList}=useSelector(state=>state.shop);
   console.log("inner customer home component"+shopList);
   useEffect(()=>{
      dispatch(fetchShop());  
   },[]);
  return <>
    <CustomerNavigation/>
    {/* <div className="container-fluid">
      <div class="card-group">
        <div class="card" >
          <img src="../images/bydefaultshop.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div> */}

  </>

}

export default CustomerHome;
