import { useState } from "react";

import "./logIn.css";
import ShopKeeperSignInAndSignUp from "../Shopkeeper/SignInAndSignUp/signInAndSignUp";
import CustomerSignInAndSignUp from "../customer/SignInAndSignUp/signInAndSignUp";
import 'react-toastify/dist/ReactToastify.css'

import { Link, useNavigate } from "react-router-dom";
import MechanicSignInAndSignUp from "../Mechanic/SignInAndSignUp/signInAndSignUp";
import { signOut } from "../../redux-config/customerSlice";
import { useDispatch, useSelector } from "react-redux";


function Navbar() {
    const {currentCustomer}=useSelector(state=>state.customer);
    const dispatch=useDispatch();
    {currentCustomer&&dispatch(signOut)}
    return <>
        <CustomerSignInAndSignUp/>
        <ShopKeeperSignInAndSignUp/>
        <MechanicSignInAndSignUp/>
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
                                <Link to="/" className="nav-link navOption" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navOption" href="#">Features </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link navOption" href="#">About</a>
                            </li>
                            {/* <li className="nav-item ">
                                <Link className="nav-link navOption dropdown-toggle" to="/selectCity"> <i className="fa fa-map-marker"
                                    aria-hidden="true"></i> <span id="city">Select City</span></Link>
                            </li> */}


                            <li className="nav-item dropdown ">
                                <a className="nav-link navOption  text-light btn btn-info loginBtn" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="dropdown-toggle ">Login</span>
                                </a>
                                <ul className="dropdown-menu ">
                                        <li><a className="dropdown-item drop" data-bs-toggle="modal" data-bs-target="#customerModel">Customer</a></li>
                                        <li><a className="dropdown-item drop" data-bs-toggle="modal" data-bs-target="#shopKeeperModel" >Shopkeeper</a></li>
                                    <li><a className="dropdown-item drop" data-bs-toggle="modal" data-bs-target="#mechanicModel" href="#">Mechanic</a></li>
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
