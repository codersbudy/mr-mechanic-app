import { useState } from "react";

import "./logIn.css";
<<<<<<< HEAD
import 'react-toastify/dist/ReactToastify.css';

import { Link} from "react-router-dom";
import ShopKeeperSignInAndSignUp from "../Shopkeeper/SignInAndSignUp/signInAndSignUp";
import CustomerSignInAndSignUp from "../customer/SignInAndSignUp/signInAndSignUp";

function Navbar() {  
=======
import { toast,ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCustomer } from "../../redux-config/customerSlice";
import { validPassword, validContact, validName } from "../Regex/regex";
import axios from "axios";
import api from "../../WebApi/api";
import 'react-toastify/dist/ReactToastify.css'

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
            navigate("/customerHome");

        }
        catch (err) {
            window.alert("Correct information");
        }
    }


    const onSignUpHendler = async (event) => {
        try {
            window.alert("inner fiunctonb")
            window.alert(response.data.customerData);
            event.preventDefault();
            toast.success("dfvdgb");
            let response = await axios.post(api.CUSTOMER_SIGNUP, { contact, password, customerName })
            funReturn();

        }
        catch (err) {
            if (err.response.status == 400)
                toast.error("Bad request : 400");
            else if (err.response.status == 500)
                toast.error("Server Error : 500");
        }
    }
>>>>>>> 20e858f033897438841f278aeecafd8bfefcd429
    return <>
        <CustomerSignInAndSignUp/>
        <ShopKeeperSignInAndSignUp/>
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
                                    <li><a className="dropdown-item drop" data-bs-toggle="modal" data-bs-target="#customerModel">Customer</a></li>
                                    <li><a className="dropdown-item drop" data-bs-toggle="modal" data-bs-target="#shopKeeperModel" >Shopkeeper</a></li>
                                    <li><a className="dropdown-item drop" href="#">Mechanic</a></li>
                                    <li><a className="dropdown-item drop" href="#">Admin</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
}

export default Navbar;
