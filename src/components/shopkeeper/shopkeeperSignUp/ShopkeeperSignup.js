import { useState } from "react";
// import "./logIn.css"
// import ".../p"
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setshopkeeper } from "../../../redux-config/shopkeeperSlice";
import { useNavigate } from "react-router-dom";
import api from "../../../WebApi/api";
import { validContact } from "../../Regex/regex";
//  import {  useNavigate } from "react-router-dom";


function ShopkeeperSignUP(){

    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [shopkeeperName,setShopkeeperName]=useState("");
    const [contErr, setContErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [nameErr,setNameErr]=useState(false);
    

   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function contactHendler(e) {
         if (!(validContact.test(e.target.value)))
            setContErr(true);
        else
            setContErr(false)
    }

    const onSignUpHendler=async(event)=>{
        try{
            window.alert(response.data.customerData);
            event.preventDefault();
            let response=await axios.post(api.SHOPKEEPER_SIGNUP,{contact,password,shopkeeperName})
            dispatch(setshopkeeper(response.data.shopkeeperData));
            navigate("/home");
           
        }
        catch(err){
            if(err.response.status == 400)
            toast.error("Bad request : 400");
         else if(err.response.status == 500)
            toast.error("Server Error : 500"); 
        }
    }

      return <>
               <div className="modal fade" id="shopkeeperSignUpModel"
               data-bs-backdrop="static"
               data-bs-keyboard="false"
               tabIndex={-1}
               aria-labelledby="staticBackdropLabel"
               aria-hidden="true"
               >
               <div
                   className="modal-dialog modal-lg modal-content rounded-0"
                   style={{ borderRadius: "100%" }}
               >
                   <div className="row">
                       <div className="col-md-4 col-sm-12 " id="firstside">
                           <div style={{ marginTop: "2vw" }}>
                               <div className="container-fluid" id="h2" style={{textAlign:"center"}}>
                                       Signup
                               </div>
                           </div>
                           <div style={{ marginTop: 200 }}>
                               <img
                                   src="./images/LoginImage.svg"
                                   className="img-fluid"
                                   alt="Responsive image"
                               />
                           </div>
                       </div>
                       <div className="col-md-8 col-sm-12" style={{ paddingRight: 25 }}>
                           <div className="close">
                               <button
                                   type="button"
                                   id="closebutoon"
                                   className="btn-close"
                                   data-bs-dismiss="modal"
                                   aria-label="Close"
                               />
                           </div>
                           <form  style={{ padding: "3vw" }}>
                               <div className="placeholderdiv">
                                   <input
                                       className="place"
                                       type="text"
                                       id="shopkeeperName"
                                       placeholder="Enter name"
                                       // onChange={(event) => setShopkeeperName(event.target.value)}
                                       // onKeyUp={nameHendler}
                                   />
                                   <div style={{ height: "1vw" }}>
                                           
                                           {/* {nameErr ? <small style={{ color: "red" }} >Invalid customer name</small> : ""} */}
                                       </div>
                               </div>
                               <div className="placeholderdiv">
                                           <input
                                               className="place"
                                               type="text"
                                               required=""
                                               id="shopkeeperContact"
                                               placeholder="Enter contact number"
                                               minLength={10}
                                               maxLength={10}
                                               // onChange={(event) => setContact(event.target.value)}
                                               // onKeyUp={contactHendler}
                                           />
                                           <div style={{ height: "1vw" }}>
                                           
                                               {/* {contErr ? <small style={{ color: "red" }} >Invalid contact number</small> : ""} */}
                                           </div>
                                </div>
                             
                               <div className="placeholderdiv">
                                   <input
                                       className="place"
                                       type="password"
                                       id="shopkeeperPassword"
                                       placeholder="Enter password"
                                       // onKeyUp={passwordHendler}
                                       minLength={8}
                                       maxLength={16}
                                       // onChange={(event) => setPassword(event.target.value)}
                                   />
                                   <div style={{ height: "1vw" }}>
                                           
                                           {/* {passErr ? <small style={{ color: "red" }} >Invalid password</small> : ""} */}
                                       </div>
                               </div>
                               <div>
                                   <a href="" className="link">
                                       <a data-bs-toggle="modal" data-bs-target="#customerModel">Already have an account ?</a>
                                   </a>
                               </div>
                               <div>
                                   <button type="submit" className="btn btn" id="signUpBtn" data-bs-toggle="modal" data-bs-target="#customerModel" >
                                       Continue
                                   </button>
                               </div>
                           </form>
                       </div>
                   </div>
               </div>
               </div>
            </>
    };
    export default ShopkeeperSignUP;