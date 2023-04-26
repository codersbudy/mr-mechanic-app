
             
import { useState } from "react";
import "./logIn.css"
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { validContact, validName, validPassword } from "../../Regex/regex";
import api from "../../../WebApi/api";
import { setshopkeeper } from "../../../redux-config/shopkeeperSlice";


function ShopkeeperSignin(){

    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [shopkeeperName,setName]=useState("");
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

    function passwordHendler(e) {
        if (!(validPassword.test(e.target.value)))
            setPassErr(true);
        else
            setPassErr(false);
    }

    function nameHendler(e){
        if(validName.test(e.target.value))
          setNameErr(false);
        else
          setNameErr(true);
    }


    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            const response = await axios.post(api.SHOPKEEPER_SIGNIN, { contact, password });
            window.alert(response);
//             dispatch(setshopkeeper(response.data.customer));
            navigate("/home");
            
        }
        catch (err) {
            toast.error("oops something went wrong");
        }
    }

    
     return <>
                 <div class="modal fade" id="shopkeeperModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">


            <div
                className="modal-dialog modal-lg modal-content rounded-0"
                style={{ borderRadius: "100%" }}
            >
                <div className="row">
                    <div className="col-md-4 col-sm-12 " id="firstside">
                        <div style={{ marginTop: "2vw" }}>
                            <div className="container-fluid" id="h2" style={{textAlign:"center"}}>
                                    Signin
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
                            <button type="button" id="closebutoon" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>

                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group" style={{ marginTop: "2vw" }}>
                                <div style={{ marginLeft: "1.5vw" }}>
                                    <label className="form-label">Enter your mobile number</label>
                                    <div style={{ fontSize: 16, marginTop: 15 }}>
                                        <input
                                            type="text"
                                            required=""
                                            id="input"
                                            placeholder={+91}
                                            minLength={10}
                                            maxLength={10}
                                            onChange={(event) => setContact(event.target.value)}
                                            onKeyUp={contactHendler}
                                        />
                                        <div style={{ height: "1vw" }}>
                                        
                                            {contErr ? <small style={{ color: "red" }} >Invalid contact number</small> : ""}
                                        </div>
                                    </div>
                                    <div style={{ fontSize: 16, marginTop: 20 }}>
                                        <label className="form-label">Enter your password</label>
                                    </div>
                                    <div style={{ fontSize: 16, marginTop: 15 }}>
                                        <input
                                            onChange={(event) => setPassword(event.target.value)}
                                            type="password"
                                            style={{ width: "99%" }}
                                            id="input"
                                            placeholder="Enter password"
                                            onKeyUp={passwordHendler}
                                             minLength={8}
                                            maxLength={16}
                                        />
                                        {passErr ? <small style={{ color: "red" }} >Invalid contact number</small> : ""}
                                    </div>
                                    <div style={{ fontSize: 16, marginTop: 15 }}>
                                        <a href="" className="link">
                                            {" "}
                                            <small>forgot Password?</small>
                                            <a className="SignUpLink" data-bs-toggle="modal" data-bs-target="#shopkeeperSignUpModel">Sign Up?</a>
                                        </a>
                                    </div>
                                    <div style={{ fontSize: 16, marginTop: "8vw" }}>
                                        <span style={{ marginTop: "2vw" }}>
                                            {" "}
                                            <input
                                                type="checkbox"
                                                id="checkbox"
                                                onclick="termcondition()"
                                            />
                                        </span>
                                        <span id="checkboxcontaint">I agree to the</span>
                                        <span>
                                            <a href="" id="termcondition">
                                                Term and condition
                                            </a>
                                        </span>
                                    </div>
                                    <div
                                        style={{ fontSize: 16, marginTop: "3vw" }}
                                        aria-disabled="true"
                                    >

                                        <button type="submit" className="btn" id="signinBtn">
                                            CONTINUE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>      
     </>          
}

export default ShopkeeperSignin;