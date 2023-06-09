import "./shopkeeperRegistration.css"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { validContact, validName, validPassword } from "../../Regex/regex";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from "../../../WebApi/api";
import { setShopkeeper } from "../../../redux-config/shopkeeperSlice";


function ShopKeeperSignInAndSignUp() {
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [contErr, setContErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [confirmpassErr, setConfirmPassErr] = useState(false);
    // -------------------REGISTREATION STATES-------------------------------
    const [rcontact, setRcontact] = useState("");
    const [rpassword, setRpassword] = useState("");
    const [rname, setRname] = useState("");
    const [shopkeeperDetails,setShopkeeperDetails] = useState({});
    const [shopFlag, setShopFlag] = useState(false);
    //-------------------Shop States---------------------------------------------
    const [shopName,setShopName] = useState(""); 
    const [shopPhoto,setShopPhoto] = useState(""); 
    const [shopAddress,setShopAddress] = useState(""); 
    const [shopLatLong,setShopLatLong] = useState(""); 
    const [shopContact,setShopContact] = useState(""); 

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
        if (!(rpassword == e.target.value))
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
        let element = document.getElementById('box-content-shopkeeper');
        element.style.transform = "rotateY(0deg)";
    }


    var funTurn = () => {

        var outer2 = document.getElementById('outer2');
        outer2.style.overflowY = "auto";
        outer2.style.borderRadius = "17px"
        var ele = document.getElementById('box-content-shopkeeper');
        ele.style.transform = "rotateY(180deg)";
    }

    const signInHandler = async (event) => {

        try {
            event.preventDefault();


            const response = await axios.post(api.SHOPKEEPER_SIGNIN, { contact, password });
            toast.success("Log In successfully...");
            window.alert("api is called...in shopkeeper");
            dispatch(setShopkeeper(response.data));
            console.log(response.data);
            navigate("/shopkeeperHome");
            console.log("chalalalal");

        }
        catch (err) {
            if (err.response.status == 400)
                toast.error("Invalid Contact & Password");
            else if (err.response.status == 500)
                toast.error("Server Error...");


        }
    }


    const SignUpHandler = async (event) => {
        try {
            event.preventDefault();
             setShopkeeperDetails({ contact: rcontact, password: rpassword, shopkeeperName: rname });
            // toast.success("Registration successfully...");
            setShopFlag(true);
            funReturn();

        }
        catch (err) {
            if (err.response.status == 400)
                toast.error("Bad request : 400");
            else if (err.response.status == 500)
                toast.error("Server Error : 500");
        }
    }
    var loginTurn = () => {
        setShopFlag(false);
        funReturn();
    }

    return <>
        <ToastContainer />
        <div class="modal fade" id="shopKeeperModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-content modal1"  >
                <div className="container-fluid m-0 p-0 box">
                    <div className="container-fluid m-0 p-0 box-content" id="box-content-shopkeeper">
                        {/* _______________________Shopkeeper Login________________________________ */}
                        {!shopFlag && <div className="row r1 p-0 m-0 outer1">
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

                                <form onSubmit={signInHandler}>
                                    <div className="" style={{ marginTop: "2vw" }}>
                                        <div style={{ marginLeft: "1.5vw" }}>
                                            <div className="div1">
                                                <input className="input1" type="text" name="contact" required="" id="input" placeholder="+91" minLength={10} maxLength={10} onChange={(event) => setContact(event.target.value)} onKeyUp={contactHendler} />
                                                <label className="form-label label1">Enter Mobile Number</label>
                                                {contErr ? <small style={{ color: "red" }} >Invalid contact number</small> : ""}

                                            </div>
                                            <div className="div1 mt-3">

                                                <input className="input1" type="password" name="password" required="" id="password" placeholder="Enter Password" minLength={8} maxLength={16} onChange={(event) => setPassword(event.target.value)} onKeyUp={passwordHendler} />
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
                                            <div className="signup">Don't have an account? <span><Link className="signuplink linkHover" onClick={funTurn} >Sign up</Link></span></div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>}
                        {/* _______________________ Addshop Details____________________________ */}
                        {shopFlag && <><div className="row r1 p-0 m-0 outer1">
                            <div className="col-md-4 col-sm-12 " id="firstside">

                                <div style={{ marginTop: "2vw" }}>
                                    <div className="container-fluid fw-bold text-center " id="h2">
                                        * Add Shop *
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

                                <form onSubmit={signInHandler}>
                                    <div className="" style={{ marginTop: "2vw" }}>
                                        <div style={{ marginLeft: "1.5vw" }}>
                                            <div className="div1">
                                            {/* onKeyUp={contactHendler}  */}
                                                <input className="input1" type="text" name="shopName" required="" id="input" placeholder="ShopName" minLength={10} maxLength={10} onChange={(event) => setShopName(event.target.value)} />
                                                <label className="form-label label1">Enter Shop Name</label>
                                                {/* {contErr ? <small style={{ color: "red" }} >Invalid contact number</small> : ""} */}

                                            </div>
                                            <div className="div1 mt-3">
                                            {/* onKeyUp={passwordHendler} */}
                                                <input className="input1" type="text" name="shopContact" required="" id="password" placeholder="+91" minLength={8} maxLength={16} onChange={(event) => setShopContact(event.target.value)}  />
                                                <label className="form-label label1">Enter Shop Contact</label>
                                                {/* {passErr ? <small style={{ color: "red" }} >Invalid password</small> : ""} */}

                                            </div>
                                        {/* ___________________________________________MAP + FILE_______________________________________________ */}
                                            <div className="div1 mt-3 row">
                                                 <div className="col-6">
                                                    <p className="label1">Select Your Shop Loaction</p>
                                                    <a className="btn btn-light mapbtn"><i class="fa fa-map-marker" aria-hidden="true"></i> Set Location</a></div>
                                                 <div className="col-6">
                                                 <span className="uploadLabel label1 ">Upload Your Shop Image</span>
                                                   <div className="btn btn-light w-50 px-0 fileBtn"><i class="fa fa-image" aria-hidden="true"></i> Upload <input type="file" className=" shopFile "/></div></div>
                                                
                                            </div>
                                            

                                          {/* ____________________________________________________________________________________________   */}
                                            


                                            {/* <div style={{ fontSize: 16, marginTop: "5vw" }}>
                                                <span style={{ marginTop: "2vw" }}>
                                                    <input type="checkbox" id="checkbox" onclick="termcondition()" />
                                                </span>
                                                <span id="checkboxcontaint">I agree to the <a href="" class="linkHover" id="termcondition">Term and condition.</a></span>

                                            </div> */}
                                            <div style={{ fontSize: 16, marginTop: "1.5vw" }} >
                                                <button type="submit" className="btn p-2" data-bs-dismiss="modal" aria-label="Close" id="signinBtn" > Login </button>

                                            </div>
                                            <div className="signup">Don't have an account? <span><Link className="signuplink linkHover" onClick={funTurn} >Sign up</Link></span></div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div></>}
                        {/* ________________________Shopkeeper Detail___________________________ */}
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
                                <form onSubmit={SignUpHandler} >
                                    <div className="" style={{ marginTop: "2vw" }}>
                                        <div style={{ marginLeft: "1.5vw" }}>
                                            <div className="div1 ">
                                                {/* onChange={(event) => setCustomerName(event.target.value)} onKeyUp={nameHendler} */}
                                                <input className="input1" type="text" name="username" required="" id="password" placeholder="Ex: John" onChange={(event) => setRname(event.target.value)} />
                                                <label className="form-label label1">Shopkeeper Name</label>
                                                {/* {nameErr ? <small style={{ color: "red", fontSize : "10px" }} >Invalid customer name</small> : ""} */}

                                            </div>

                                            <div className="div1 mt-2" >

                                                {/* onChange={(event) => setContact(event.target.value)} onKeyUp={contactHendler} */}
                                                <input className="input1" type="text" name="contact" required="" id="input" placeholder="+91" minLength={10} maxLength={10} onChange={(event) => setRcontact(event.target.value)} />
                                                <label className="form-label label1">Mobile Number</label>
                                                {/* {contErr ? <small style={{ color: "red" }} >Invalid contact number</small> : ""} */}

                                            </div>
                                            <div className="div1 mt-2">
                                                {/* onKeyUp={passwordHendler} onChange={(event) => setPassword(event.target.value)} */}
                                                <input className="input1" type="password" name="password" required="" id="password" placeholder="Enter password" minLength={8} maxLength={16} onChange={(event) => setRpassword(event.target.value)} />
                                                <label className="form-label label1">Password</label>
                                                {/* {passErr ? <small style={{ color: "red" }} >Invalid password</small> : ""} */}

                                            </div>
                                            <div className="div1 mt-2">
                                                {/* onKeyUp={confirmPasswordHendler}  */}

                                                <input className="input1" type="password" name="confirmPassword" required="" id="password" placeholder="Enter Confirm Password" minLength={8} maxLength={16} onKeyUp={confirmPasswordHendler} />
                                                <label className="form-label label1">Confirm Password</label>
                                                {confirmpassErr ? <small style={{ color: "red" }} >Password not match</small> : ""}

                                            </div>

                                            <div style={{ fontSize: 16, marginTop: "4vw" }} >
                                                <button type="submit" className="btn p-2" id="signinBtn"> Add Shop </button>

                                            </div>
                                            <div className="signup">have an account? <span><a className="signuplink linkHover" onClick={loginTurn} >Log in</a></span></div>
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
                            <div className="container-fluid" id="h2" style={{ textAlign: "center" }}>
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
                        {/*  onSubmit={SignUpHandler} */}
                        <form style={{ padding: "3vw" }}>
                            <div className="placeholderdiv">
                                <input
                                    className="place"
                                    type="text"
                                    id="customerName"
                                    placeholder="Enter name"
                                // onChange={(event) => setCustomerName(event.target.value)}
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
                                    id="customerContact"
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
                                    id="customerPassword"
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

export default ShopKeeperSignInAndSignUp;

