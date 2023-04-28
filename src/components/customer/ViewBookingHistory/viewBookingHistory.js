import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import "./viewBookingHistory.css"
function ViewBookingHistory(){
   const {customerBookingHistory}=useSelector(state=>state.customer);
   const state =  useLocation()
    // console.log(state.state.id);
    let index=state.state.id;
    let viewMore=customerBookingHistory[index];
    console.log(viewMore);
    
    // window.alert(state);    
    return <>
    <div className="outerDiv">
     <div className="row m-5">
         <div className="col-3 text">
             <p>Shop Name</p>
             <p>Shop Contact Number</p>
             <p>echanic Name</p>
             <p>Status</p>
             <p>Problem</p>
             <p>Vehical Number</p>
             <p>Date</p>
          </div>
         <div className="col-3">
             <p>{viewMore.shopId.shopName}</p>
             <p>9090909090</p>
             <p>{viewMore.mechanicId.mechanicname}</p>
             <p>{viewMore.status}</p>
             <p>{viewMore.problem}</p>
             <p>{viewMore.vehicleNo}</p>
             <p>{viewMore.date}</p>
         </div>
         <div className="col-3 text">
             {/* <p>Shopkeeper Name</p> */}
             <p>Shop Address</p>
             <p>Mechanic contact</p>
             <p>Address</p>
             <p>Vehical Name</p>
             <p>Payment Mode</p>
          </div>
          <div className="col-3">
             {/* <p>Ankit</p> */}
             <p>{viewMore.shopId.address}</p>
             <p>{viewMore.mechanicId.contact}</p>
             <p>{viewMore.location}</p>
             <p>{viewMore.vehicleName}</p>
             <p>cmd</p>
         </div>
      </div> 
      <div>
        <button className="bg-color">Back</button>
      </div>
      </div>  
    </>
}

export default ViewBookingHistory;