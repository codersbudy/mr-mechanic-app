import { useState } from "react";
// import "./logIn.css"
// import ".../p"
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { setCustomer } from "../../redux-config/customerSlice";
import { validPassword, validContact,validName } from "../Regex/regex";
import axios from "axios";
import api from "../../WebApi/api";
import {  useNavigate } from "react-router-dom";
function Navbar() {
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [customerName,setCustomerName]=useState("");
    const [contErr, setContErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [nameErr,setNameErr]=useState(false);
    
    //    createPortal
   
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
            const response = await axios.post(api.CUSTOMER_SIGNIN, { contact, password });
            dispatch(setCustomer(response.data.customer));
            navigate("/home");

        }
        catch (err) {
            toast.error("oops something went wrong");
        }
    }

    const onSignUpHendler=async(event)=>{
        try{
            window.alert(response.data.customerData);
            event.preventDefault();
            let response=await axios.post(api.CUSTOMER_SIGNUP,{contact,password,customerName})
            dispatch(setCustomer(response.data.customerData));
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
        <ToastContainer />
        <div className="container-fluid border-bottom">
            <nav className="navbar navbar-expand-lg nav ">
                <div className="container-fluid a">
                    <img className="navbar-brand logo" src="./images/logo.png"></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navRight" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link navOption" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navOption" href="#">Features </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navOption" href="#">About</a>
                            </li>
                            <li className="nav-item ">
                                <a  data-bs-toggle="modal"
                                    href="#exampleModalToggle"
                                    role="button" className="nav-link navOption dropdown-toggle" > <i className="fa fa-map-marker"
                                    aria-hidden="true"></i> <span id="city">Select City</span></a>
                            </li>


                            <li className="nav-item dropdown ">
                                <a className="nav-link navOption  text-light btn btn-info loginBtn" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="dropdown-toggle ">Login</span>
                                </a>
                                <ul className="dropdown-menu ">
                                    <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#customerModel">Customer</a></li>
                                    <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#shopkeeperModel">Shopkeeper</a></li>
                                    <li><a className="dropdown-item" href="#">Mechanic</a></li>
                                    <li><a className="dropdown-item" href="#">Admin</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="modal fade" id="customerModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div
                className="modal-dialog modal-lg modal-content rounded-0"
                style={{ borderRadius: "100%" }}
            >
                <div className="row">
                    <div className="col-md-4 col-sm-12 " id="firstside">
                        <div style={{ marginTop: "2vw" }}>
                            <div className="container-fluid" id="h2">
                                Login/Signup
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
                                            <a className="SignUpLink" data-bs-toggle="modal" data-bs-target="#customerSignUpModel">Sign Up?</a>
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

                                        <button type="submit" className="btn" data-bs-dismiss="modal"
                                aria-label="Close" id="signinBtn">
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
        <div className="modal fade" id="customerSignUpModel"
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
                        <form onSubmit={onSignUpHendler} style={{ padding: "3vw" }}>
                            <div className="placeholderdiv">
                                <input
                                    className="place"
                                    type="text"
                                    id="customerName"
                                    placeholder="Enter name"
                                    onChange={(event) => setCustomerName(event.target.value)}
                                    onKeyUp={nameHendler}
                                />
                                <div style={{ height: "1vw" }}>
                                        
                                        {nameErr ? <small style={{ color: "red" }} >Invalid customer name</small> : ""}
                                    </div>
                            </div>
                            <div className="placeholderdiv">
                                        <input
                                            className="place"
                                            type="text"
                                            required=""
                                            id="customerContact"
                                            placeholder="Enter contact number"
                                            minLength={10}
                                            maxLength={10}
                                            onChange={(event) => setContact(event.target.value)}
                                            // onChange={(event) => setContact(event.target.value)}
                                            onKeyUp={contactHendler}
                                        />
                                        <div style={{ height: "1vw" }}>
                                        
                                            {contErr ? <small style={{ color: "red" }} >Invalid contact number</small> : ""}
                                        </div>
                             </div>                          
                            <div className="placeholderdiv">
                                <input
                                    className="place"
                                    type="password"
                                    id="customerPassword"
                                    placeholder="Enter password"
                                    onKeyUp={passwordHendler}
                                    minLength={8}
                                    maxLength={16}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <div style={{ height: "1vw" }}>
                                        
                                        {passErr ? <small style={{ color: "red" }} >Invalid password</small> : ""}
                                    </div>
                            </div>
                            <div>
                                <a href="" className="link">
                                    <a data-bs-toggle="modal" data-bs-target="#customerModel">Already have an account ?</a>
                                </a>
                            </div>
                            <div>
                                <button type="submit" className="btn btn" id="signUpBtn">
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Navbar;


