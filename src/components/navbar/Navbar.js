import { useState } from "react";

// import "./logIn.css";

// import ".../p"
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { setCustomer } from "../../redux-config/customerSlice";
import { validPassword, validContact, validName } from "../Regex/regex";
import axios from "axios";
import api from "../../WebApi/api";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [contErr, setContErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [confirmpassErr, setConfirmPassErr] = useState(false);


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
    function confirmPasswordHendler(e) {
        if (!(password == e.target.value))
            setConfirmPassErr(true);
        else
            setConfirmPassErr(false);

    }
    function nameHendler(e) {
        if (validName.test(e.target.value))
            setNameErr(false);
        else
            setNameErr(true);
    }

    function funReturn() {
        let element = document.getElementById('box-content');
        element.style.transform = "rotateY(0deg)";
    }
    function funTurn() {
        var outer2 = document.getElementById('outer2');
        outer2.style.overflowY = "auto";
        outer2.style.borderRadius = "17px"
        var ele = document.getElementById('box-content');
        ele.style.transform = "rotateY(180deg)";

    }


    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            const response = await axios.post(api.CUSTOMER_SIGNIN, { contact, password });
            dispatch(setCustomer(response.data.customer));
            navigate("/selectCIty");

        }
        catch (err) {
            window.alert("Correct information");
        }
    }


    const onSignUpHendler = async (event) => {
        try {
            window.alert(response.data.customerData);
            event.preventDefault();
            let response = await axios.post(api.CUSTOMER_SIGNUP, { contact, password, customerName })
            dispatch(setCustomer(response.data.customerData));
            funReturn();

        }
        catch (err) {
            if (err.response.status == 400)
                toast.error("Bad request : 400");
            else if (err.response.status == 500)
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
                                <Link className="nav-link navOption dropdown-toggle" to="/selectCity"> <i className="fa fa-map-marker"
                                    aria-hidden="true"></i> <span id="city">Select City</span></Link>
                            </li>


                            <li className="nav-item dropdown ">
                                <a className="nav-link navOption  text-light btn btn-info loginBtn" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="dropdown-toggle ">Login</span>
                                </a>
                                <ul className="dropdown-menu ">
                                    <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#customerModel">Customer</a></li>
                                    <li><a className="dropdown-item"  >Shopkeeper</a></li>
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

                                                <input className="input1" type="text" name="contact" required="" id="input" placeholder="+91" minLength={10} maxLength={10} onChange={(event) => setContact(event.target.value)} onKeyUp={contactHendler} />
                                                <label className="form-label label1">Enter Mobile Number</label>
                                                {contErr ? <small style={{ color: "red" }} >Invalid contact number</small> : ""}

                                            </div>
                                            <div className="div1 mt-3">

                                                <input className="input1" type="password" name="password" required="" id="password" placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)} onKeyUp={passwordHendler} minLength={8} maxLength={16} />
                                                <label className="form-label label1">Enter Password</label>
                                                {passErr ? <small style={{ color: "red" }} >Invalid password</small> : ""}

                                            </div>
                                            <div style={{ marginTop: 15 }}>
                                                <Link to='/forgotPassword' className="link">
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
                                            <div className="signup">Don't have an account? <span><Link className="signuplink linkHover" onClick={funTurn} >Sign up</Link></span></div>
                                       </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="row r1 p-0 m-0 outer2" id="outer2">
                            <div className="col-md-4 col-sm-12 " id="firstside">
                                <div style={{ marginTop: "2vw" }}>
                                    <div className="container-fluid fw-bold text-center " id="h2">
                                        * Sign up *

                                    </div>
                                </div>
                                <div >
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
                                <form onSubmit={onSignUpHendler}>
                                    <div className="" style={{ marginTop: "2vw" }}>
                                        <div style={{ marginLeft: "1.5vw" }}>
                                            <div className="div1 ">
                                                <input className="input1" type="text" name="username" required="" id="password" placeholder="Ex: John" onChange={(event) => setCustomerName(event.target.value)} onKeyUp={nameHendler}/>
                                                <label className="form-label label1">Customer name</label>
                                                {nameErr ? <small style={{ color: "red" }} >Invalid customer name</small> : ""}


                                            </div>

                                            <div className="div1 mt-2" >

                                                <input className="input1" type="text" name="contact" required="" id="input" placeholder="+91" minLength={10} maxLength={10} onChange={(event) => setContact(event.target.value)}  onKeyUp={contactHendler} />
                                                <label className="form-label label1">Mobile Number</label>
                                                {contErr ? <small style={{ color: "red" }} >Invalid contact number</small> : ""}

                                            </div>
                                            <div className="div1 mt-2">

                                                <input className="input1" type="password" name="password" required="" id="password" placeholder="Enter password" onKeyUp={passwordHendler} onChange={(event) => setPassword(event.target.value)} minLength={8} maxLength={16} />
                                                <label className="form-label label1">Password</label>
                                                {passErr ? <small style={{ color: "red" }} >Invalid password</small> : ""}

                                            </div>
                                            <div className="div1 mt-2">

                                                <input className="input1" type="password" name="confirmPassword" required="" id="password" placeholder="Enter Confirm Password" onKeyUp={confirmPasswordHendler} minLength={8} maxLength={16} />
                                                <label className="form-label label1">Confirm Password</label>
                                                {confirmpassErr ? <small style={{ color: "red" }} >Password not match</small> : ""}

                                            </div>



                                            <div style={{ fontSize: 16, marginTop: "4vw" }} >
                                                <button type="submit" className="btn p-2" id="signinBtn" > Sign Up </button>


                                            </div>
                                            <div  className="signup">have an account? <span><a className="signuplink linkHover" onClick={funReturn} >Log in</a></span></div>
                                     </div>
                                    </div>
                                </form>
                            </div>
                        </div>

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
                                <button type="submit"  className="btn btn" id="signUpBtn">
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