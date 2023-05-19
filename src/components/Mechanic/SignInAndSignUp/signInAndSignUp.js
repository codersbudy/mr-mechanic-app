import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { validContact, validName, validPassword } from "../../Regex/regex";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from "../../../WebApi/api";
import { setCustomer } from "../../../redux-config/customerSlice";

function MechanicSignInAndSignUp() {
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [contErr, setContErr] = useState(false);
    const [passErr, setPassErr] = useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    function contactHendler(e) {
        if (!(validContact.test(e.target.value)))
            setContErr(true);
        else
            setContErr(false)
    }

    function passwordHendler(e) {
        if (!(validPassword.test(e.target.value)))
            setPassErr(true);
        else
            setPassErr(false);
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post(api.SHOPKEEPER_SIGNIN, { contact, password });
            toast.success("Log In successfully...");
            window.alert("api is called...");
            // dispatch(setCustomer(response.data.customer));
         console.log(response.data);
            navigate("/forgotPassword");

        }
        catch (err) {
            if(err.response.status==400)
               toast.error("Invalid Password");
            else   
               toast.error("invalid contact");
        }
    }

    return <>
     <ToastContainer/>
        <div class="modal fade" id="mechanicModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-content modal1"  >
                <div className="container-fluid m-0 p-0 box">
                    <div className="container-fluid m-0 p-0 box-content" id="box-content">

                        <div className="row r1 p-0 m-0 outer1">
                            <div className="col-md-4 col-sm-12 " id="firstside">
                                <div style={{ marginTop: "2vw" }}>
                                    <div className="container-fluid fw-bold text-center " id="h2">
                                        * Login *
                                    </div>
                                </div>
                                <div className="imgDiv">
                                    <img
                                        src="./images/LoginImage.svg"
                                        className="sideImg"
                                        alt="Responsive image"
                                    />
                                </div>
                            </div>
                            <div className="col-md-8 col-sm-12 secondside">
                                <div className="close">
                                    <button type="button" id="closebutoon" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>

                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="" style={{ marginTop: "2vw" }}>
                                        <div style={{ marginLeft: "1.5vw" }}>


                                            <div className="div1">
                                              

                                                <input className="input1" type="text" name="contact" required="" id="input" placeholder="+91" minLength={10} maxLength={10}   onChange={(event) => setContact(event.target.value)} onKeyUp={contactHendler} />
                                                <label className="form-label label1">Enter Mobile Number</label>
                                                {contErr ? <small style={{ color: "red" }} >Invalid contact number</small> : ""}

                                            </div>
                                            <div className="div1 mt-3">
                                              

                                                <input className="input1" type="password" name="password" required="" id="password" placeholder="Enter Password" minLength={8} maxLength={16}   onChange={(event) => setPassword(event.target.value)} onKeyUp={passwordHendler} />
                                                <label className="form-label label1">Enter Password</label>
                                                {passErr ? <small style={{ color: "red" }} >Invalid password</small> : ""}


                                            </div>
                                            <div style={{ marginTop: 15 }}>
                                                <Link to='/shopkeeperForgotPassword' className="link">
                                                    <small className="fp linkHover" data-bs-dismiss="modal">forgot Password?</small>
                                                </Link>
                                            </div>

                                            <div style={{ fontSize: 16, marginTop: "8vw" }}>
                                                <span style={{ marginTop: "2vw" }}>
                                                    <input type="checkbox" id="checkbox" onclick="termcondition()" />
                                                </span>
                                                <span id="checkboxcontaint">I agree to the <a href="" class="linkHover" id="termcondition">Term and condition.</a></span>

                                            </div>
                                            <div style={{ fontSize: 16, marginTop: "1.5vw" }} >
                                                <button type="submit" className="btn p-2" data-bs-dismiss="modal" aria-label="Close" id="signinBtn" > Login </button>

                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                   
                    </div>
                </div>


            </div>

        </div>
      
    </>
}

export default MechanicSignInAndSignUp;

