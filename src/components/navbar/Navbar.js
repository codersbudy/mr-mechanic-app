import { useState } from "react";
import "./logIn.css";
function Navbar() {


    return <>
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
                                <a className="nav-link navOption dropdown-toggle" href="#"> <i className="fa fa-map-marker"
                                    aria-hidden="true"></i> <span id="city">Select City</span></a>
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
            <div
                className="modal-dialog modal-lg modal-content modal1"
            >
                <div className="row r1 p-0">
                    <div className="col-md-4 col-sm-12 " id="firstside">
                        <div style={{ marginTop: "2vw" }}>
                            <div className="container-fluid fw-bold text-center " id="h2">
                               * Login *
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
                    <div className="col-md-8 col-sm-12 secondside">
                        <div className="close">
                            <button type="button" id="closebutoon" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="" style={{ marginTop: "2vw" }}>
                            <div style={{ marginLeft: "1.5vw" }}>

                                <div className="div1">

                                    <input className="input1" type="text" required="" id="input" placeholder="+91" minLength={10} maxLength={10} />
                                    <label className="form-label label1">Enter your mobile number</label>
                                    <small id="invalidNum" style={{ color: "red" }} />

                                </div>
                                <div className="div1 mt-3">

                                    <input className="input1" type="text" required="" id="password" placeholder="Enter Password" minLength={10} maxLength={10} />
                                    <label className="form-label label1">Enter your mobile number</label>
                                    <small id="invalidPass" style={{ color: "red" }} />

                                </div>
                                <div style={{  marginTop: 15 }}>
                                    <a href="" className="link">
                                        <small className="fp linkHover">forgot Password?</small>
                                    </a>
                                </div>

                                <div style={{ fontSize: 16, marginTop: "8vw" }}>
                                    <span style={{ marginTop: "2vw" }}>
                                        <input type="checkbox" id="checkbox" onclick="termcondition()" />
                                    </span>
                                    <span id="checkboxcontaint">I agree to the <a href=""  class="linkHover" id="termcondition">Term and condition.</a></span>

                                </div>
                                <div style={{ fontSize: 16, marginTop: "1.5vw" }} aria-disabled="true" >
                                    <button className="btn p-2" id="signinBtn"> Login </button>
                                </div>
                                <div class="signup">Don't have an account? <span><a  className="signuplink linkHover" href="">Sign up</a></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>
}

export default Navbar;