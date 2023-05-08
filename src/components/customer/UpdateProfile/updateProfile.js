import {useNavigate } from 'react-router-dom';
import './updateProfile.css'
import { useState } from 'react';
import { validContact, validEmail } from '../../Regex/regex';
import axios from 'axios'
import api from "../../../WebApi/api";
import { useDispatch } from 'react-redux';
import { setCustomer } from '../../../redux-config/customerSlice';
import { toast } from 'react-toastify';
import Navbar from '../../navbar/Navbar';
function CustomerUpdateProfile() {
const dispatch =useDispatch();
const navigate=useNavigate()
const [contact, setContact] = useState("");
const [contactErr, setContactErr] = useState(false);
function contactHendler(e) {
    if (!(validContact.test(e.target.value)))
    setContactErr(true);
    else
    setContactErr(false)
}

const  handleSubnmit =async (event)=>{
    try{
         event.preventDefault();
         const response=await axios.post(api.CUSTOMER_FORGOT_PASSWORD,{contact});
         dispatch(setCustomer(response.data.customer))
         navigate("/verifyOtp");
    }
    catch(err){
        toast.error("Oops! something went wrong");
    }
}

    return <>
     <Navbar/> 
        <div className='container-fluid'>
            <div className='row outerDiv'>
                <div className='col-2'></div>
                <div className='col-8'>
                    <div className='row innerDiv'>
                        <div className="col-md-4 col-sm-12 " id="firstside">
                            <div style={{ marginTop: "2vw" }}>
                                <div className="container-fluid" id="h1">
                                    Update Profile
                                </div>
                            </div>
                            <div style={{ marginTop: 100 }}>
                                <img
                                    src="./images/LoginImage.svg"
                                    className="img-fluid"
                                    alt="Responsive image"
                                />
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12" style={{ paddingRight: 25 }}>
                            <form onSubmit={handleSubnmit}>
                                <div className="form-group " style={{ marginTop: "5px" }}>
                                    <div className='row'>
                                       <div className='col-4' style={{height:"100px"}}> <img src="../images/default.jpg" style={{height:"100px", width:"200px"}} class="img-fluid image" alt="..." /></div>
                                       <div className='col-4' style={{height:"100px"}}> <input type='file'  alt="..." style={{marginTop:"3vw"}} /></div>
                                    </div>
                                    <div style={{ marginLeft: "1.5vw",marginTop:"3vw" }}>
                                        <div className='row'>
                                         <div className='col-4'><label className="form-label">Enter Name</label></div>   
                                         <div className='col-8'><input type='text' id="input" placeholder='Enter your name'/></div>   
                                        </div>
                                        <div className='row' style={{marginTop:"2vw"}}>
                                        <div className='col-4'><label className="form-label">Enter Contact</label></div>   
                                         <div className='col-8'><input type='text' id="input" placeholder='Enter your name'  minLength={10}
                                                maxLength={10}/></div>   
                                  
                                        </div>
                                        <div className='row' style={{marginTop:"2vw"}}>
                                        <div className='col-4'><label className="form-label">Enter Contact</label></div>   
                                         <div className='col-8'><input type='email' id="input" placeholder='Enter your email'  /></div>   
                                  
                                        </div>
                                        <a href='' id='signin'  data-bs-toggle="modal" data-bs-target="#customerModel">Signin?</a>
                                        <div id='buttonDiv'>
                                            <button type="submit" className="btn" id="signinBtn">
                                                SEND OTP
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    </>
}
export default CustomerUpdateProfile;