import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { validContact, validName, validPassword } from "../../Regex/regex";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import api from "../../../WebApi/api";
import { setMechanic,mechanicSignOut,fatchMechanicBookingHistory } from "../../../redux-config/mechanicSlice";
import "./mechanicSign.css";
function MechanicSignIn() {
   
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mechanicName, setMechanicName] = useState("");
    const [contErr, setContErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [confirmpassErr, setConfirmPassErr] = useState(false);
    const [forgotPasswordFlag1, setForgetPasswordFlag1] = useState(false);
    const [verifyPasswordFlag, setVerifyPasswordFlag] = useState(false);
    const [setPasswordFlag, setSetPasswordFlag] = useState(false);
    const [customerRegistration,setCustomerRegistration]=useState("");
    const [varifyOtp,setVerifyOtp]=useState("");
    const { isLoading } = useSelector(state => state.shop);
 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // var verifyPasswordFlag=true;
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
        let element = document.getElementById('box-content10'); 
        element.style.transform = "rotateY(0deg)";
    }
    function funTurn() {
        var outer2 = document.getElementById('outer2');
        outer2.style.overflowY = "auto";
        outer2.style.borderRadius = "17px"
        var ele = document.getElementById('box-content10');
        ele.style.transform = "rotateY(180deg)";
    }


    const handleSubmit = async (event) => {

        try {
            event.preventDefault();
            window.alert("inner handle submit")
            const response = await axios.post(api.MECHANIC_SIGNIN, { contact, password });
            window.alert("api chali")
            toast.success("Log In successfully...");
            dispatch(setMechanic(response.data.mechanic));
            // console.log(response.data.mechanic._id);
             dispatch(fatchMechanicBookingHistory(response.data.mechanic._id));
             navigate("/mechanicHome");
        }
        catch (err) {
            toast.error("please check contact password")
        }
    }

    const onSignUpHendler = async (event) => {
        try {
            event.preventDefault();
            var mechanicData={
                contact:contact,
                mechanicName:mechanicName,
                password:password,
            }
            let response = await axios.post(api.CUSTOMER_VERIFY_REGISTRATION_OTP, {contact})
            setCustomerRegistration(mechanicData);
            console.log(response);
            setVerifyOtp(response.data.otp);
            toast.success("Otp sent success");
            funReturn();
            setVerifyPasswordFlag(true);

        }
        catch (err) {
            if (err.response.status == 450)
                toast.error("Contact already register");
            else if (err.response.status == 500)
                toast.error("Server Error");
                else if (err.response.status == 550)
                toast.error("Otp Not Sent");
        }
    }
    const forgetPasswordHendleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post(api.MECHANIC_FORGOT_PASSWORD, { contact });
            window.alert("forget in api")
            console.log(response)
            dispatch(setMechanic(response.data.mechanic))
            console.log("--------------------------------------")

            console.log(currentMechanic);
            setVerifyPasswordFlag(true);
            setForgetPasswordFlag1(false);
            funReturn();
        }
        catch (err) {
            if (err.response.status == 450)
                toast.error("Please check contact number");
            else if (err.response.status == 500)
                toast.error("Oops! something went wrong");
            else if (err.response.status == 550)
                toast.error("otp not sent")
            else if (err.response.status == 200)
                toast.success("otp sent successfully");
        }
    }

    var forPassFun = () => {
        setForgetPasswordFlag1(true);
        funTurn();
    }
    var signUpFun = () => {
        setForgetPasswordFlag1(false);
        funTurn();
    }

    const signUpModalClose=()=>{
        funTurn();
    }

    // --------------------------------------- verify pass---------------------
    // --------------------------------------- verify pass---------------------
    // const navigate = useNavigate();
    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");
    const [pin5, setPin5] = useState("");
    const [pin6, setPin6] = useState("");
    const [pinErr, setPinErr] = useState(false);
    const { currentCustomer } = useSelector(state => state.customer);
    const {currentMechanic}=useSelector(state=>state.mechanic);
    const { currentShopkeeper } = useSelector(state => state.shopkeeper);
    const verifyHandleSubmit = async (event) => {
        try {

            let tempraryPassword = pin1 + "" + pin2 + "" + pin3 + "" + pin4 + "" + pin5 + "" + pin6;
            event.preventDefault();
            if (currentMechanic) {
                window.alert(tempraryPassword);
                let contact = currentMechanic.contact;
                const response = await axios.post(api.MECHANIC_VERIFY_OTP, { contact, tempraryPassword });
                setSetPasswordFlag(true);
                setVerifyPasswordFlag(false);
                funTurn();
            }
            else{
                if(varifyOtp==tempraryPassword){
                    const response=await axios.post(api.CUSTOMER_SIGNUP,customerRegistration);
                    console.log(response);
                    window.alert("sign up ki api chli ")
                    toast.success("Registration Successs");
                    setVerifyPasswordFlag(false);
                    funReturn();
                

                }
                else{
                    toast.error("Otp not Match")
                }
                
            }
        }
        catch (err) {
            console.log(err);
            toast.error("Oops! wrong otp");
        }
    }
    // -------------------------------------------- set password----------------------------
    const setPasswordHendleSubmit = async (event) => {

        try {
            event.preventDefault();
            if (currentMechanic) {
                let contact = currentMechanic.contact
               window.alert(password);
                let response = await axios.post(api.MECHANIC_SET_PASSWORD, { contact, password });
                toast.success("successfully password set");
                console.log("________________________________________")
                console.log(response);
                setSetPasswordFlag(false);
                dispatch(mechanicSignOut());
                funReturn();
            }
            else {
                let contact = currentShopkeeper.contact;
                let response = await axios.post(api.SHOPKEEPER_SET_PASSWORD, { contact, password });
                toast.success("successfully password set");
                navigate("/home");
            }
        }
        catch (err) {
            console.log(err);
            toast.error("Oops something went wrong");
        }
    }

    const signIn=()=>{
        setForgetPasswordFlag1(false);
        
        funReturn();
    }

    const modalClose=()=>{
        dispatch(mechanicSignOut())
    }
    const forgetCloseModel=()=>{
        setForgetPasswordFlag1(false);
        funReturn();
    }
    return <>
        <ToastContainer />
        <div class="modal fade" id="mechanicModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-content modal1"  >
                <div className="container-fluid m-0 p-0 box">
                    <div className="container-fluid m-0 p-0 box-content10" id="box-content10">
{/* ___------------------------------------------------------login page-------------------------------------------------------------------------------------------------------_____ */}
                        <div className="row r1 p-0 m-0 outer1">
                            {!verifyPasswordFlag && <>
                                <div className="col-md-4 col-sm-12 " id="firstside">
                                    <div style={{ marginTop: "2vw" }}>
                                        <div className="container-fluid fw-bold text-center " id="h2">
                                            *Mechanic Login *
                                        </div>
                                    </div>
                                    <div className="imgDiv">
                                        <img
                                            src="./images/LoginImage.svg"
                                            className="sideImg"
                                            alt="Responsive image"
                                            style={{height:"150px"}}
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

                                                    <input className="input1" type="password" name="password" required="" id="password" placeholder="Enter Password" minLength={8} maxLength={16} onChange={(event) => setPassword(event.target.value)} onKeyUp={passwordHendler} />
                                                    <label className="form-label label1">Enter Password</label>
                                                    {passErr ? <small style={{ color: "red" }} >Invalid password</small> : ""}

                                                </div>
                                                <div style={{ marginTop: 15 }}>
                                                    <span className="link">
                                                        <small className="fp linkHover curser" onClick={forPassFun}>Forgot password?</small>
                                                    </span>
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
                                                <div className="signup">Don't have an account? <span><Link className="signuplink linkHover" onClick={signUpFun} >Sign up</Link></span></div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </>}
                            {verifyPasswordFlag && <>
                                <div className="col-md-4 col-sm-12 " id="firstside">
                                    <div style={{ marginTop: "2vw" }}>
                                        <div className="container-fluid fw-bold text-center " id="h2">
                                            Verify Otp
                                        </div>
                                    </div>
                                    <div className="imgDiv">
                                        <img
                                            style={{ height: "100px" }}
                                            src="./images/LoginImage.svg"
                                            className="sideImg"
                                            alt="Responsive image"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-12 secondside">
                                    <div className="close">
                                        <button type="button" id="closebutoon" onClick={modalClose} class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>

                                    </div>

                                    <form onSubmit={verifyHandleSubmit}>
                                        <div className="form-group" style={{ marginTop: "3vw" }}>
                                            <div style={{ marginLeft: "3vw", textAlign: "center" }}>
                                                <div >
                                                    <label className="form-label label">Enter verification code</label>
                                                </div>
                                                <div style={{ fontSize: 16, marginTop: 15 }}>
                                                    <div class="input-field">
                                                        <input className='input' onChange={(event) => setPin1(event.target.value)} type="text" maxLength={1} />
                                                        <input className='input' onChange={(event) => setPin2(event.target.value)} type="text" maxLength={1} />
                                                        <input className='input' onChange={(event) => setPin3(event.target.value)} type="text" maxLength={1} />
                                                        <input className='input' onChange={(event) => setPin4(event.target.value)} type="text" maxLength={1} />
                                                        <input className='input' onChange={(event) => setPin5(event.target.value)} type="text" maxLength={1} />
                                                        <input className='input' onChange={(event) => setPin6(event.target.value)} type="text" maxLength={1} />

                                                    </div>
                                                    <div>
                                                        <div style={{ height: "1vw" }}>
                                                            {pinErr ? <small style={{ color: "red", textAlign: "left" }} >Invalid Otp</small> : ""}
                                                        </div>
                                                    </div>

                                                </div>
                                                <Link to="/forgotPassword" id='signin'><i class="fa fa-arrow-left icon" aria-hidden="true"></i>Back</Link>
                                                <div id='buttonDiv' style={{ marginTop: "10vw" }} >
                                                    <button type="submit" className="btn" id="signinBtn" >
                                                        VERIFY
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </>}
                        </div>
                        <div className="row r1 p-0 m-0 outer2" id="outer2">
                            {/* --------------------------------signUp page------------------------------------------ */}
                            {!forgotPasswordFlag1 && !setPasswordFlag && <>
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
                                        <button type="button" id="closebutoon" class="btn-close" data-bs-dismiss="modal"  onClick={signUpModalClose}
                                            aria-label="Close"></button>

                                    </div>

                                    <form onSubmit={onSignUpHendler} >
                                        <div className="" style={{ marginTop: "2vw" }}>
                                            <div style={{ marginLeft: "1.5vw" }}>
                                                <div className="div1 ">

                                                    <input className="input1" type="text" name="username" required="" id="password" placeholder="Ex: John" onChange={(event) => setMechanicName(event.target.value)} onKeyUp={nameHendler} />
                                                    <label className="form-label label1">Customer name</label>
                                                    {nameErr ? <small style={{ color: "red" }} >Invalid customer name</small> : ""}


                                                </div>

                                                <div className="div1 mt-2" >

                                                    <input className="input1" type="text" name="contact" required="" id="input" placeholder="+91" minLength={10} maxLength={10} onChange={(event) => setContact(event.target.value)} onKeyUp={contactHendler} />
                                                    <label className="form-label label1">Mobile Number</label>
                                                    {contErr ? <small style={{ color: "red" }} >Invalid contact number</small> : ""}

                                                </div>
                                                <div className="div1 mt-2">

                                                    <input className="input1" type="password" name="password" required="" id="password" placeholder="Enter password" minLength={8} maxLength={16} onKeyUp={passwordHendler} onChange={(event) => setPassword(event.target.value)} />
                                                    <label className="form-label label1">Password</label>
                                                    {passErr ? <small style={{ color: "red" }} >Invalid password</small> : ""}

                                                </div>
                                                <div className="div1 mt-2">


                                                    <input className="input1" type="password" name="confirmPassword" required="" id="password" placeholder="Enter Confirm Password" minLength={8} maxLength={16} onKeyUp={confirmPasswordHendler} />
                                                    <label className="form-label label1">Confirm Password</label>
                                                    {confirmpassErr ? <small style={{ color: "red" }} >Password not match</small> : ""}

                                                </div>



                                                <div style={{ fontSize: 16, marginTop: "4vw" }} >
                                                    <button type="submit" className="btn p-2" id="signinBtn" > Send Otp </button>


                                                </div>
                                                <div className="signup">have an account? <span><a className="signuplink linkHover" onClick={funReturn} >Log in</a></span></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </>}
                            {/* ------------------------------forgetPassword Page---------------------------------- */}
                            {forgotPasswordFlag1 && <>
                                <div className="col-md-4 col-sm-12 " id="firstside">
                                    <div style={{ marginTop: "2vw" }}>
                                        <div className="container-fluid fw-bold text-center " id="h2">
                                        Forgot Password

                                        </div>
                                    </div>
                                    <div >
                                        <img
                                            src="./images/LoginImage.svg"
                                            className="sideImg"
                                            alt="Responsive image"
                                            // style={{ height: "10px" }}
                                            style={{height:"150px"}}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-12 secondside">
                                    <div className="close">
                                        <button type="button" id="closebutoon" class="btn-close" data-bs-dismiss="modal" onClick={forgetCloseModel}
                                            aria-label="Close"></button>

                                    </div>

                                    <form onSubmit={forgetPasswordHendleSubmit} >
                                        <div className="" style={{ marginTop: "2vw" }}>
                                            <div style={{ marginLeft: "1.5vw" }}>
                                                <div className="div1 mt-2" >

                                                    <input className="input1" type="text" name="contact" required="" id="input" placeholder="+91" minLength={10} maxLength={10} onChange={(event) => setContact(event.target.value)} onKeyUp={contactHendler} />
                                                    <label className="form-label label1">Mobile Number</label>
                                                    {contErr ? <small style={{ color: "red" }} >Invalid contact number</small> : ""}

                                                </div>
                                                <a href='' id='signin' onClick={signIn}>Signin?</a>

                                                <button type="submit" className="btn" id="sendOptBtn">
                                                    SEND OTP
                                                </button>    </div>
                                        </div>
                                    </form>
                                </div>
                            </>}
                            {setPasswordFlag && <>

                                <div className="col-md-4 col-sm-12 " id="firstside">
                                    <div style={{ marginTop: "2vw" }}>
                                        <div className="container-fluid fw-bold text-center " id="h2">
                                            Set Password

                                        </div>
                                    </div>
                                    <div >
                                        <img
                                          
                                            src="./images/LoginImage.svg"
                                            className="sideImg"
                                            alt="Responsive image"
                                            style={{ height: "150px" }}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-8 col-sm-12 secondside">
                                    <div className="close">
                                        <button type="button" id="closebutoon" class="btn-close" data-bs-dismiss="modal" onClick={modalClose}
                                            aria-label="Close"></button>

                                    </div>

                                    <form onSubmit={setPasswordHendleSubmit} >
                                        <div className="form-group" style={{ marginTop: "3vw" }}>
                                            <div style={{ marginLeft: "3vw" }}>
                                                <div >
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
                                                    <div style={{ height: "1vw" }}>
                                                        {passErr ? <small style={{ color: "red" }} >Invalid password</small> : ""}
                                                    </div>
                                                </div>

                                                <div style={{ fontSize: 16, marginTop: 25 }}>
                                                    <div >
                                                        <label className="form-label">Enter confirm password</label>
                                                    </div>
                                                    <input
                                                        onChange={(event) => setConfirmPassword(event.target.value)}
                                                        type="password"
                                                        style={{ width: "99%" }}
                                                        id="input"
                                                        placeholder="Enter confirm password"
                                                        onKeyUp={confirmPasswordHendler}
                                                        minLength={8}
                                                        maxLength={16}
                                                    />
                                                    <div style={{ height: "1vw" }}>
                                                        {confirmpassErr ? <small style={{ color: "red" }} >Password Not Match</small> : ""}
                                                    </div>
                                                </div>

                                                <Link to='/verifyOtp' id='signin'><i class="fa fa-arrow-left icon" aria-hidden="true"></i>Back</Link>
                                                <div id='buttonDiv' style={{marginTop:"5vw"}}>
                                                    <button type="submit" className="btn" id="signinBtn">
                                                        SET PASSWORD
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </>}
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
                        <form style={{ padding: "3vw" }}>
                            <div className="placeholderdiv">
                                <input
                                    className="place"
                                    type="text"
                                    id="customerName"
                                />
                                <div style={{ height: "1vw" }}>

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

                                />
                                <div style={{ height: "1vw" }}>

                                </div>
                            </div>

                            <div className="placeholderdiv">
                                <input
                                    className="place"
                                    type="password"
                                    id="customerPassword"
                                    placeholder="Enter password"

                                    minLength={8}
                                    maxLength={16}
                                />
                                <div style={{ height: "1vw" }}>

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

export default MechanicSignIn;